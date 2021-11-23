import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import RealButton from '../../components/Button/';
import Question from '../../components/QuestionContainer'
import {
  Content,
  ButtonsContainer,
  QuestionsContainer,
  FullPageContainer
} from './styles'


export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [correctIds, setCorrectIds] = useState([]);
  const [incorrectIds, setIncorrectIds] = useState([]);
  const [canSendAnswers, setCanSendAnswers] = useState(false);
  const history = useHistory();
  const numberOfQuestions = localStorage.getItem('@numQuestions');

  useEffect(() => {
    console.log('correctIds', correctIds.length, 'incorrectIds', incorrectIds.length);
    if ((correctIds.length + incorrectIds.length) === parseInt(numberOfQuestions)) {
      setCanSendAnswers(true);
    } else {
      setCanSendAnswers(false);
  }
  }, [correctIds, incorrectIds, numberOfQuestions]);


  useEffect( () => {
    axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}`).then(response => {
        const questions = response.data.results;
        setQuestions(() => {
          return questions.map((question, index) => {
            return {
              ...question,
              id: index + 1,
              answers: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5)
            }
          })
        });
        console.log('numero de questões', questions.length)

        return questions;
      });
  }, [numberOfQuestions]);

  const handleAnswer = (id, correct) => {
    if (correct === true) {
      if (incorrectIds.includes(id)) {
        const newIncorrectIds = [...incorrectIds];
        newIncorrectIds.splice(incorrectIds.indexOf(id), 1);
        setIncorrectIds(newIncorrectIds);
      }
      if (!correctIds.includes(id)) {
        setCorrectIds([...correctIds, id]);
      }
    } else {
      if (correctIds.includes(id)) {
        const newCorrectIds = [...correctIds];
        newCorrectIds.splice(correctIds.indexOf(id), 1);
        setCorrectIds(newCorrectIds);
      }
      if (!incorrectIds.includes(id)) {
        setIncorrectIds([...incorrectIds, id]);
      }
    }

  //   if ((correctIds.length + incorrectIds.length) === questions.length) {
  //     setCanSendAnswers(true);
  //   } else {
  //     setCanSendAnswers(false);
  // }
}
  const sendAnswers = () => { 
    
    localStorage.setItem('@correctAnswers', correctIds.length);
    localStorage.setItem('@incorrectAnswers', incorrectIds.length);
    localStorage.setItem('@totalAnswers', correctIds.length + incorrectIds.length);
    localStorage.setItem('@report', true);
    history.push('/reports');
  }

  return (
    <Content>
      <FullPageContainer>
          <QuestionsContainer>
            {questions.map(question => (
              <Question item={question} handleAnswer={handleAnswer}/>
            ))}
          <ButtonsContainer>
            <RealButton color="primary" text="Send Answers" onClick={sendAnswers} disabled={!canSendAnswers} />
          </ButtonsContainer>
          </QuestionsContainer>
          
      </FullPageContainer>
    </Content>
  )
}

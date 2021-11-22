import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import RealButton from '../../components/Button/';
import Question from '../../components/QuestionContainer'
import {
  Container,
  Content,
  ButtonsContainer,
  QuestionsContainer,
} from './styles'


export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [correctIds, setCorrectIds] = useState([]);
  const [incorrectIds, setIncorrectIds] = useState([]);

  const numberOfQuestions = localStorage.getItem('@numQuestions');
  const history = useHistory();

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
        return questions;
      });
  }, [numberOfQuestions]);

  const handleAnswer = (id, correct) => {
    if (correct) {
      setCorrectIds(() => {
        if (incorrectIds.includes(id)){
          const newIncorrectIds = [...incorrectIds];
          newIncorrectIds.splice(incorrectIds.indexOf(id), 1);
          setIncorrectIds(newIncorrectIds);
        } 
        if(!correctIds.includes(id)){
          return [...correctIds, id];
        } 
        return correctIds;
      });
    } else {
      setIncorrectIds(() => {
        if (correctIds.includes(id)) {
          const newCorrectIds = [...correctIds];
          correctIds.splice(correctIds.indexOf(id), 1);
          setCorrectIds(newCorrectIds);
        }
        if(!incorrectIds.includes(id)){
          return [...incorrectIds, id];
        }
        return incorrectIds;
      });
    }
  }

  const sendAnswers = () => { 
    localStorage.setItem('@correctAnswers', correctIds.length);
    localStorage.setItem('@incorrectAnswers', incorrectIds.length);
    localStorage.setItem('@totalAnswers', correctIds.length + incorrectIds.length);
    localStorage.setItem('@report', true);
    history.push('/reports');
  }

  return (
    <Container>
      <Content>
        <QuestionsContainer>
          {questions.map(question => (
            <Question item={question} handleAnswer={handleAnswer}/>
          ))}
        </QuestionsContainer>
        <ButtonsContainer>
          <RealButton color="primary" text="Send Answers" onClick={sendAnswers}/>
        </ButtonsContainer>
      </Content>
    </Container>
  )
}

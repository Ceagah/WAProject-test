import React, {useState, useEffect} from 'react'
import axios from 'axios';
import RealButton from '../../components/Button/';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {
  Container,
  Content,
  Title,
  Header,
  ButtonsContainer,
  QuestionsContainer,
  QuestionCategory,
  QuestionDifficulty,
  QuestionText,
  AnswerContainer
} from './styles'


export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [isMultiple, setIsMultiple] = useState();
  const [isBoolean, setIsBoolean] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState();

  
  useEffect(() => {
    const numberOfQuestions = localStorage.getItem('@numQuestions');
    axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}`).then(response => {
      const questions = response.data.results;
      setQuestions(questions);
      return questions;
    });
  }, []);

  const RenderQuestion = (key, item) => {
    console.log('item Render question', item);
    return (
      <>
        <QuestionCategory>{item.category}</QuestionCategory>
        <QuestionDifficulty>{item.difficulty}</QuestionDifficulty>
        <QuestionText>{item.question}</QuestionText>
        {item.type === 'multiple' ? (
          <> 
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </>
        ) : (
          <>
            <RadioGroup aria-label="Answers" name="Answers" value={isCorrect} onChange={(e) => setIsCorrect(e.target.value)} />
            <FormControlLabel control={<Radio />} label="Label" />
              <RadioGroup aria-label="Answers" name="Answers" value={isIncorrect} onChange={(e) => setIsIncorrect(e.target.value)} />
              <FormControlLabel control={<Radio />} label="Label" />
          </>
        )}
      </>
    )
  }

  const RenderQuestions = () => {
    return(
      <>
      {questions.map((item, index) => {
        console.log('item dentro do map', item);
        console.log('tipo da questão', item.type);
        const incorrect = item.find(item => item.incorrect_answers);
        const correct = item.find(item => item.correct_answer);
        const questionObj = {
          ...Object.values(correct),
          ...Object.values(incorrect)
        };
        console.log('questionObj', questionObj);
        return RenderQuestion(index, questionObj);
      })}
      </>
    )
  }


  const sendRequest = () => { 
    console.log(questions);
  }
  return (
    <Container>
      <Content>
        <Header>
          <Title></Title>
        </Header>
        <QuestionsContainer>
          {RenderQuestions()}
        </QuestionsContainer>

        <ButtonsContainer>
          <RealButton color="primary" text="Send Answers" onClick={() => sendRequest()}/>
        </ButtonsContainer>
      </Content>
    </Container>
  )
}

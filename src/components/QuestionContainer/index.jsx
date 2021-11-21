import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Container,
  Questions,
  QuestionCategory,
  QuestionDifficulty,
  QuestionText,
  AnswerContainer
} from './styles';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


// Para o laço for, utulizar como parametro de comparação, o numero que está guardado no local Storage. 

export default function QuestionContainer() {
  const numberOfQuestions = localStorage.getItem('@numQuestions');
  const [questions, setQuestions] = useState([]);
  const [isMultiple, setIsMultiple] = useState();
  const [isBoolean, setIsBoolean] = useState();
  // const [isCorrect, setIsCorrect] = useState();
  // const [isIncorrect, setIsIncorrect] = useState();


  useEffect(() => {
    console.log(numberOfQuestions)
    axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}`).then(response => {
      const questions = response.data.results;
      const questionValues = Object.values(questions);
      const questionKeys = Object.keys(questions);
      console.log(questions);
      return (questionValues, questionKeys);
    });
  }, []);


  return (
    <Container>
      <FormGroup>
      {questions.map(question => (
        <Questions key={question.question}>
          <QuestionCategory>{question.category}</QuestionCategory>
          <QuestionDifficulty>{question.difficulty}</QuestionDifficulty>
          <QuestionText>{question.question}</QuestionText>
          <AnswerContainer>
            {isMultiple === true (
              <>
              {question.incorrect_answers.map(answer => (
                <FormControlLabel control={<Checkbox defaultChecked />} label={answer.incorrect_answer} value={answer.incorrect_answer} />
              ))}
              </>
            )}
            {isBoolean === true (
              <RadioGroup
                aria-label="Answers"
                name="radio-buttons-group"
              >
              {questions.map(answer => (
                <>
                <FormControlLabel value={answer.correct_answer} control={<Radio />} label={answer.correct_answer} />
                <FormControlLabel value={answer.incorrect_answer} control={<Radio />} label={answer.incorrect_answer} />
                </>
              ))}
              </RadioGroup>
            )}

          </AnswerContainer>
        </Questions>
      ))}
        
      </FormGroup>
    </Container>

  )
};

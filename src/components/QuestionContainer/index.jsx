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
  const [questions, setQuestions] = useState([]);





  const RenderIncorrectAnswer = (key, item) => {
    console.log('item Render question', item);
    return (
      <FormControlLabel 
      control={<Checkbox defaultChecked />} 
      label={item.question}
      value={item.question}
      onChange={(e) => setIsIncorrect(e.target.value)}
      />
    )
  }

  const RenderCorrectAnswer = (key, item) => {
    console.log('item Render question', item);
    return (
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={item.question}
        value={item.question}
        onChange={(e) => setIsCorrect(e.target.value)}
      />
    )
  }

  const RenderIncorrectAnswers = (item,index ) => {
    return(
      <>
      {questions.map((item, key) => {
        console.log(item);
        const values = questions.find(item => item.incorrect_answers);
        const questionObj = {
          ...Object.values(values[0]),
        };
          return RenderIncorrectAnswer((key = index), questionObj);
      })}
      </>
    )
  }


  const RenderCorrectAnswers = (item, index) => {
    return (
      <>
        {questions.map((item, key) => {
          console.log(item);
          const values = questions.find(item => item.incorrect_answers);
          const questionObj = {
            ...Object.values(values[0]),
          };
          return RenderCorrectAnswer((key = index), questionObj);
        })}
      </>
    )
  }


  return (
    <Container>
      <FormGroup>
        <RenderCorrectAnswers />
        <RenderIncorrectAnswers />
      </FormGroup>
    </Container>

  )
};

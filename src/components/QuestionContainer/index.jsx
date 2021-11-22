import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {
  QuestionCategory,
  QuestionDifficulty,
  QuestionText,
  AnswerContainer
} from './styles';

export default function Question({ item, handleAnswer} ) {
  return (
    <Box sx={{ maxWidth: '100%', minWidth: '100%', marginTop: 1,}}>
      <Card variant="outlined">
      <CardContent>
          <QuestionCategory>{item.category}</QuestionCategory>
          <QuestionDifficulty>{item.difficulty}</QuestionDifficulty>
          <QuestionText>{item.question}</QuestionText>
          <CardActions>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="answers"
                  defaultValue={item.answers[0]}
                  name="radio-buttons-group"
                  onChange={(e) => handleAnswer(item.id, e.target.value === item.correct_answer)}
                  required
                >
                      {item.answers.map((answer, index) => {
                        return (
                        <FormControlLabel
                          value={answer}
                          control={<Radio />}
                          label={answer} />
                      );
                    })}
                  </RadioGroup>
              </FormControl>
          </CardActions>
    </CardContent>
    </Card>
    </Box>
  )
};

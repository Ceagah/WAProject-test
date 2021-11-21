import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField'; 
import RealButton from '../../components/Button'
import {Container, Content, Header, Title, Text, Form} from './styles';

export default function Main() {
  const [isQuestion, setIsQuestion] = useState('');
  const history = useHistory();

  const CheckQuestion = () => {
    if(isQuestion < 1){
      alert('Please, choose a number grater than zero, to start');
    }
    else{
      console.log('TENTANDO NAVEGAR PARA QUESTIONS')
      history.push('/confirmation',{ // push to the next page
        question: isQuestion
      });
    }
  }
  return (
    <Container>
      <Content>
        <Header>
          <Title>Hello Tester !</Title>
          <Text>
            You are about to start your questions! <br />
            Please, select how many questions you want to answer on the Text input below. <br />
            After that, you will be redirected to the confirmation page.
            Please, choose a number grater than zero, to start.
          </Text>
        </Header>
        <Form>
          <TextField
            id="outlined-number"
            label="Number of questions"
            type="number"
            value={isQuestion}
            onChange={(e) => setIsQuestion(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <RealButton onClick={CheckQuestion} text="Start" />
        </Form> 
      </Content>
    </Container>
  )
}

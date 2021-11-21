import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content, Header, Title, Text, ButtonsContainer } from './styles';
import RealButton from '../../components/Button';

export default function Confirmation() {
  const numberOfQuestions = localStorage.getItem('@numQuestions');
  const history = useHistory();
  console.log(numberOfQuestions);

  const startQuiz = () => {
    history.push('/questions', { question: numberOfQuestions });
  }
  const cancelQuiz = () => {
    localStorage.removeItem('@numQuestions');
    history.push('/');
  }
  return (
    <Container>
      <Content>
        <Header>
        <Title>
          Welcome to the Quiz!
        </Title>
          <Text>
            You're about to answer {numberOfQuestions} questions.<br />
            Are you sure you want to continue?<br />
            If you're sure, click on the start button below. If not, click on the cancel button.
          </Text>
        </Header>
        <ButtonsContainer>
          <RealButton onClick={() => cancelQuiz()} text="Cancel" color="error"/>
          <RealButton onClick={() => startQuiz()} text="Start" color="primary"/>
        </ButtonsContainer>
      </Content>
    </Container>
  )
}

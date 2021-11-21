import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import RealButton from '../../components/Button/';
import {
  Container,
  Content,
  Header,
  Title,
  Text,
  ImageContainer,
  ButtonsContainer,
  Correct,
  Incorrect,
} from './styles';

export default function Reports() {
  const [isCorrect, setIsCorrect] = useState('');
  const [isIncorrect, setIsIncorrect] = useState('');
  const history = useHistory();

  useEffect(() => {
    setIsCorrect(2);
    setIsIncorrect(1);
  }, []);
  return (
    <Container>
    <Content>
      <Header>
        <Title>Reports</Title>
      </Header>
        <ImageContainer />
      <Text>
          You have answered <Correct>{isCorrect} questions correctly</Correct>  and <Incorrect> {isIncorrect} questions incorrectly </Incorrect>        You can answer again anytime you want.<br />
        Starting a new quiz, will reset your progress and save another in local storage.
      </Text>
      <ButtonsContainer>
        <RealButton text="Return" onClick={() => history.push('/')}/>
      </ButtonsContainer>
    </Content>
    </Container>
  )
}

import styled from 'styled-components';
import colors from '../../styles/themes'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;

`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
  width: 80%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;

  @media (max-width: 720px) {
    width: 70%;
    align-self: center;
  }
`;

export const Title = styled.h1`
    font-size: 2.1rem;
    margin-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

  @media (max-width: 720px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y:auto
`;
export const QuestionCategory = styled.h1``;
export const QuestionDifficulty = styled.h2``;
export const QuestionText = styled.p``;
export const AnswerContainer = styled.div``;
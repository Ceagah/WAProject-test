import styled from 'styled-components';
import themes from '../../styles/themes'
import Container from '@mui/material/Container';

export const Content = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${themes.colors.white};
`;

export const FullPageContainer = styled(Container)`
  && {
    height: 100% !important;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
    font-family: ${themes.fonts.title};
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
  height: 100%;
  overflow-y:auto;
`;
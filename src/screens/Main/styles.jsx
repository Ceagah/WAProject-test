import styled from 'styled-components';
import themes from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${themes.colors.white};
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
  width: 80%;
  height: 90%;
  border-radius: 10px;
  box-shadow: -6px 6px 6px -1px rgba(0,0,0,0.37);
  background: #FFF;

@media (max-width: 720px) {
    justify-content: center;
  }

  @media (max-width: 350px) {
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;

@media (max-width: 930px) {
    width: 70%;
    align-self: center;
  }


  @media (max-width: 720px) {
    width: 70%;
    align-self: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 350px) {
    width: 60%;
    align-self: center;
    margin-bottom: 2rem;
  }
`;
export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;

  @media (max-width: 720px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
    @media (max-width: 350px) {
    font-size: 1.rem;
  }
`;
export const Text = styled.p`
  font-size: 1rem;
  text-align: center;
  
  @media (max-width: 720px) {
    font-size: .9rem;
  }
  @media (max-width: 350px) {
    font-size: .7rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
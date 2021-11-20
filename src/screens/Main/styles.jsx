import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
  width: 80%;
  height: 90%;
  border-radius: 10px;
  border: 1px solid #000;
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
    font-size: 2rem;
    margin-bottom: 1.5rem;

  @media (max-width: 720px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
export const Text = styled.p`
  font-size: 1rem;
  
  @media (max-width: 720px) {
    font-size: .8rem;
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
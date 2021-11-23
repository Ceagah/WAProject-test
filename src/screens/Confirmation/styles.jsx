import styled from 'styled-components';
import themes from '../../styles/themes'

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
    font-family: ${themes.fonts.title};
    font-weight: 700;

  @media (max-width: 720px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  width: 75%;
  height: 20%;
  justify-content: space-around;
  text-align: center;
  font-size: 1rem;
  font-family: ${themes.fonts.title};
  line-height: 1.5rem;
  
  @media (max-width: 720px) {
    font-size: .8rem;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
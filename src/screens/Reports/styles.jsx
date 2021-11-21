import styled from 'styled-components';
import themes from '../../styles/themes';
import ReportImg from '../../assets/report.png'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #000;
`;

export const Content = styled.main`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  
  border-radius: 10px;
  border: 1px solid #000;
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
  justify-content: space-around;
  width: 100%;

@media (max-width: 930px) {
    width: 70%;
    align-self: center;
  }


  @media (max-width: 720px) {
    width: 70%;
    align-self: center;
  }

  @media (max-width: 350px) {
    width: 60%;
    align-self: center;
  }
`;
export const Title = styled.h1`
    font-size: 2rem;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
    @media (max-width: 350px) {
  }
`;
export const Text = styled.p`
  font-size: 1rem;
  width: 90%;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 720px) {
    font-size: .9rem;
  }
  @media (max-width: 350px) {
    font-size: .7rem;
  }
`;

export const Correct = styled.p`
  font-family: 'Roboto', sans-serif; 
  font-size: 1rem;
  font-weight: bold;
  color: ${themes.green};
  margin: 0;
  padding: 0;

    @media (max-width: 720px) {
    font-size: .9rem;
  }
  @media (max-width: 350px) {
    font-size: .7rem;
  }
`;
export const Incorrect = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: ${themes.red};
  margin: 0;
  padding: 0;

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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  background: url(${ReportImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: - 20px;
  margin-bottom: 0;

  @media (max-width: 930px) {
    width: 50%;
    height: 50%;
  }

`;
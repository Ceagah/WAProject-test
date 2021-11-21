import React, {useState} from 'react'
import {Container , Content, Title, Header, ButtonsContainer} from './styles'
import QuestionContainer from '../../components/QuestionContainer'
import RealButton from '../../components/Button/';


export default function Questions() {
  const sendRequest = () => { 
    console.log('sendRequest');
  }
  return (
    <Container>
      <Content>
        <Header>
          <Title></Title>
        </Header>
        <QuestionContainer />
        <ButtonsContainer>
          <RealButton color="primary" text="Send Answers" onClick={() => sendRequest()}/>
        </ButtonsContainer>
      </Content>
    </Container>
  )
}

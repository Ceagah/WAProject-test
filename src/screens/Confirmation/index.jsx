import React from 'react'

export default function Confirmation(props) {
  const numberOfQuestions = props.location.state.question;
  console.log('questões vindo de Main', numberOfQuestions);
  return (
    <div>
      <h1> Confirmation Screen</h1>
    </div>
  )
}

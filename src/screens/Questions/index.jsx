import React from 'react'

export default function Questions(props) {
  const numberOfQuestions = props.location.state.question;;
  console.log(numberOfQuestions);
  
  return (
    <div>
      <h1> Questions Screen</h1>
    </div>
  )
}

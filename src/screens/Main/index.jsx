import React from 'react'
import RealButton from '../../components/Button'

export default function Main() {
  return (
    <div>
      <h1>Main screen</h1>
      <RealButton  text="Testando" onClick={() => alert("Alooo")}/>
    </div>
  )
}

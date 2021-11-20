import React from 'react'
import Button from '@material-ui/core/Button';

export default function RealButton(props) {
  return (
    <Button variant="contained" color="primary" onClick={props.onClick}>
      {props.text}
    </Button>
  )
}

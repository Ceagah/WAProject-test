import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function RealAlert(props) {
  return (
      <Alert severity={props.severity}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
  )
}

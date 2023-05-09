import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {

  const {numId} = useParams()
  console.log(numId)

  let message
  if (!isNaN(numId)) {
    message = `the number is: ${numId}`
  } else {
    message = `the word is: ${numId}`
  }

  return (
    <h1>{message}</h1>
  )
}

export default Number
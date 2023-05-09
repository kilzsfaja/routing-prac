import React from 'react'
import { useParams } from 'react-router-dom'

const ColoredHello = (props) => {

  const {text} = useParams()
  console.log(text)
  const {textColor} = useParams()
  console.log(textColor)
  const {bgColor} = useParams()
  console.log(bgColor)


  return (
    <h1 style={{backgroundColor: bgColor, color: textColor}}>{text}</h1>
  )
}

export default ColoredHello
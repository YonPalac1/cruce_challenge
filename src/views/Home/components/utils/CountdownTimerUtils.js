import React from 'react'

const CountdownTimerUtils = ({ value }) => {
    const formattedValue = value < 10 ? `0${value}`: value.toString();
    
  return (
    <p>{formattedValue}</p>
  )
}

export default CountdownTimerUtils
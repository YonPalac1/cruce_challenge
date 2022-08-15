import React from 'react'
import { useSelector } from 'react-redux'

const KeywordSearch = () => {
    const keywords = useSelector(state => state.data.keywords);
    console.log(keywords)
  return (
    <div className='text-secondary justify-center'>Resultados de la busqueda: <h2 className='text-primary'>{keywords}</h2></div>
  )
}

export default KeywordSearch
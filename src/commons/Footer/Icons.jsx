import React from 'react'

import { icons } from '../../data'

const Icons = () => {
  return (
    <div  className='grid grid-cols-3 gap-4'>
      {
        icons.map(item => {
          return (<div key={item.id}> 
            <img className='w-[50px]' src={item.image}></img>
          </div>)
        })
      }
    </div>
  )
}

export default Icons
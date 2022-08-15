import React from 'react'

// Import MostWanted
import { mostWanted } from '../../../data'
import Lol from './Lol'

const Offer = () => {
  return (
    <div className='py-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-4'>
        <div>
            <h2 className='text-secondary lg:text-[27px]'>Termina en:</h2>
            <h1 className='text-red'>23:03:04</h1>
        </div>
        {
            mostWanted.map(item => {
                return <Lol item={item} key={item.id} />
            })
        }
    </div>
  )
}

export default Offer
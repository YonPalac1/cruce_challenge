import React from 'react'
import SendEmail from './SendEmail'

const Contact = () => {
  return (
    <div className='flex items-center lg:hidden'>
        <div className='mx-auto'>
            <h2 className="text-orange text-[27px]">Contacto</h2>
            <span className='text-secondary text-[16px]'>Mayorista</span>
        </div>
        <SendEmail />
    </div>
  )
}

export default Contact
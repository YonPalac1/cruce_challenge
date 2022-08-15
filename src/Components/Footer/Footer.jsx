import React from 'react'
import Contact from './Contact'
import GoTop from './GoTop'
import Icons from './Icons'
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='md:max-w-[800px] mx-auto'>
        <GoTop />
        <Contact />
        <Socials />
        <div className="section lg:hidden">
          <Icons />
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <div className='w-full flex justify-between bg-yellow-400 fixed bottom-0 w-full p-1'>
      <p>Created by: Jose B</p>{' '}
      <div className='flex justify-around  2xsm:w-5/12  xsm:w-3/12 sm:w-3/12 md:w-3/12 lg:w-2/12'>
        <a
          href={'https://www.linkedin.com/in/jose-bautista-a323b6217/'}
          className={
            'flex justify-center transition duration-500 text-white hover:text-blue-600 xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'
          }
        >
          {<SiLinkedin></SiLinkedin>}
        </a>
        <a
          href={'https://github.com/Josebautista10'}
          className={
            'flex justify-center text-white hover:text-yellow-200 transition duration-500 xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'
          }
        >
          {<SiGithub></SiGithub>}
        </a>
        <a
          href={'mailto:cooldj1020@gmail.com'}
          className={
            'flex justify-center text-white hover:text-red-300 transition duration-500 xs:text-lg  sm:text-xl  md:text-2xl lg:text-3xl'
          }
        >
          {<MdEmail />}
        </a>
      </div>
    </div>
  )
}

export default Footer

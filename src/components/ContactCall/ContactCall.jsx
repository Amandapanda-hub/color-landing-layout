import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactCall() {
  return (
    <div className='flex flex-col justify-center items-center h-auto sm:h-[22rem] bg-[#F9FBE7] px-4 py-8 sm:px-0 sm:py-0'>
        <div className='text-center w-full sm:w-2/3 lg:w-1/3 space-y-4 sm:space-y-10'>
            <h2 className='text-2xl sm:text-4xl mb-4 sm:mb-8 leading-6 sm:leading-[5rem]'>
            Let's Talk!
            </h2>
            <p className='mb-4 sm:mb-8'>Your first consultation is free.</p>
            <button className='w-full sm:w-auto px-4 sm:px-20 py-3 sm:py-6 text-sm sm:text-base bg-[#C38F4B] text-white shadow-lg hover:bg-[#A27943]'>
              <Link to='/contact'>
                Schedule a Consultation
                </Link>
            </button>
        </div>
    </div>
  )
}

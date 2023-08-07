import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <div className='flex justify-center items-center h-[42rem] bg-[#F9FBE7]'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[4rem] md:leading-[5rem] lg:leading-[6rem]' style={{ whiteSpace: 'pre-line' }}>
            Gear Up to Reign Over{'\n'}
            Your Health Journey.
          </h1>
          <Link
            className='text-black hover:text-[#A27943] text-xl underline'
            style={{ textUnderlineOffset: '0.2em' }}
            to='/contact' 
          >
            Reserve Your Wellness Assessment Today.
          </Link>
        </div>
      </div>
    </>
  );
}

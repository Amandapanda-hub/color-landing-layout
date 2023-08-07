import React from 'react'

export default function AboutImg() {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='w-full md:w-3/4 lg:w-2/3 xl:w-1/2'>
            <iframe 
                title="Giphy Embed" 
                src="https://giphy.com/embed/4bjIKBOWUnVPICCzJc"
                frameBorder="0" 
                allowFullScreen
                className='w-full h-[10rem] md:h-[20rem] lg:h-[20rem] xl:h-[30rem]'
            ></iframe>
        </div>
    </div>
  )
}

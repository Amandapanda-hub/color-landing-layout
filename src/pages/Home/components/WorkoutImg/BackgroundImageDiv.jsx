import React from 'react'

export default function BackgroundImageDiv({children, imageUrl}) {
  return (
    <div 
      className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] bg-center bg-cover flex items-center justify-center" 
      style={{backgroundImage: `url('${imageUrl}')`}}
    >
      {children}
    </div>
  )
}

// md:h-[20rem] lg:h-[30rem]
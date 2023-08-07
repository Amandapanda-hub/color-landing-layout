import React from 'react'
import { ServicesData } from '../../../../components/Data/ServicesData/ServicesData'

export default function OurServices() {
  return (
    <div className='flex flex-col justify-center items-center h-auto bg-[#F9FBE7] py-20'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl pb-20'>Our Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 px-4 md:px-20'>
        {ServicesData.map((service) => (
          <div key={service.id} className='flex flex-col justify-center items-center p-4 rounded text-center w-full md:w-auto h-40'>
            <h2 className='text-xl mb-5'>{service.title}</h2>
            <p className=''>{service.description}</p>
          </div>
        ))}
      </div>
      <button className='mt-20 px-10 py-6 bg-[#C38F4B] text-white shadow-lg hover:bg-[#A27943]'>
        <a href='/services'>
        Learn More
        </a>
      </button>
    </div>
  )
}

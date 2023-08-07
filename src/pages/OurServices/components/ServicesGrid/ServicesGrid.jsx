import React from 'react';
import  { ServicesData }  from '../../../../components/Data/ServicesData/ServicesData';

export default function ServicesGrid() {
  return (
    <div className="flex flex-wrap justify-center mx-auto w-full space-y-20 my-[10rem]">
      {ServicesData.map((service, index) => (
        <div key={service.id} className="flex flex-col sm:flex-row w-full sm:w-1/2 mb-4 justify-center mx-10">
          <div className="w-full p-4">
            <div className="h-full overflow-hidden text-left">
              <h1 className="text-2xl font-medium">{service.title}</h1>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="h-full overflow-hidden text-left">
              <p className="text-lg">{`${service.description} ${service.description2}`}</p>
              <p className='text-lg'>{`${service.description3}`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import './TestimonyStyles.css'
import { TestimoniesData } from '../../../../components/Data/TestimonyData/TestimoniesData';

export default function Testimony() {
  const [currentTestimony, setCurrentTestimony] = useState(TestimoniesData[0]);
  const [counter, setCounter] = useState(0);
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade('fade-out');
      setCounter(oldCounter => (oldCounter + 1) % TestimoniesData.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fade === 'fade-out') {
      setTimeout(() => {
        setCurrentTestimony(TestimoniesData[counter]);
        setFade('fade-in');
      }, 500); // adjust as needed
    }
  }, [fade, counter]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className={`relative ${fade}`}>
        <img src={currentTestimony.img} alt="description" className="w-3/4 h-[30rem] object-cover mx-auto md:w-full md:h-[50rem] lg:w-full lg:h-[50rem] xl:w-full xl:h-[50rem]"/>
        <div className="absolute bottom-0 left-0 flex flex-col justify-center items-start bg-[#F9FBE7] text-black p-4 w-[20rem] h-[10rem] -mb-10 ml-1 space-y-4 text-left md:top-0 md:left-0 md:p-8 md:w-[25rem] md:h-52 md:-mt-6 md:-ml-20 lg:top-0 lg:left-0 lg:p-8 lg:w-[30rem] lg:h-60 lg:-mt-10 lg:-ml-[15rem] xl:top-0 xl:left-0 xl:p-8 xl:w-[30rem] xl:h-60 xl:-mt-10 xl:-ml-[15rem]">
          <h3 className="text-md lg:text-2xl">{currentTestimony.title}</h3>
          <p>{currentTestimony.description}</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import Hero from './components/Hero/Hero'
import WordBreak from './components/WordBreak/WordBreak'
import WorkoutImg from './components/WorkoutImg/WorkoutImg'
import OurServices from './components/OurServices/OurServices'
import Testimony from './components/Testimony/Testimony'
// import ContactCall from '../../components/ContactCall/ContactCall'

export default function Home() {
  return (
   <>
   <Hero/>
   <WordBreak/>
   <WorkoutImg/>
   <OurServices/>
   <Testimony/>
   {/* <ContactCall/> */}
   </>
  )
}

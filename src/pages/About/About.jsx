import React from 'react'
import AboutHero from './components/AboutHero/AboutHero'
import AboutDescribe from './components/AboutDescribe/AboutDescribe'
// import ContactCall from '../../components/ContactCall/ContactCall'
import AboutImg from './components/AboutImg/AboutImg'

export default function About() {
    return (
      <>
        <AboutHero/>
        <AboutDescribe/>
        <AboutImg/>
        {/* <ContactCall/> */}
    </>
    )
  }
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import About from '../pages/About/About';
import OurServices from '../pages/OurServices/OurServices';
import Blog from '../pages/Blog/Blog';
import ContactCall from '../components/ContactCall/ContactCall';
import BlogPost from '../pages/BlogPost/components/Post/Post';
import Contact from '../pages/Contact/Contact';



export default function RouteManager() {
  return (
   <Router>
    <NavBar/>
        <Routes>
            <Route path='/' element={
               <Home/>
            } />
            <Route path='/about' element={
            <About/>
            } />
            <Route path='/services' element={
            <OurServices/>
            } />
            <Route path='/blog' element={
            <Blog/>
            } />
             <Route path='/blog/:id' element={
            <BlogPost/>
            } />
            <Route path='/contact' element={
            <Contact/>
            } />
             <Route path='/blog' element={
            <ContactCall/>
            } />
        </Routes>
        <ContactCall/>
       <Footer/> 
   </Router>
  )
}

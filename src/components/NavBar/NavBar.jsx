import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBarStyles.css'

export default function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      setIsVisible(currentScrollPosition < scrollPosition || currentScrollPosition < 200);
      setScrollPosition(currentScrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <nav
      className={`font-roboto-slab font-regular flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 lg:px-10 text-black fixed w-full transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ opacity: Math.max(1 - scrollPosition / 300, 0) }}
    >
      <div className="text-2xl font-bold cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}>
        <Link to='/'>WellVibe</Link>
      </div>

      <div className={`fixed top-0 left-0 h-full w-full bg-white transition-all duration-300 flex flex-col justify-between ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:static md:bg-transparent md:max-h-full md:flex md:items-center md:space-x-6 lg:space-x-10 md:overflow-visible`}> 
    <div className="h-full w-full flex flex-col items-center justify-center space-y-16 text-black md:flex-row md:space-x-6 lg:space-x-10 md:space-y-0 md:text-black"> 
      <a href="/about" className="hover:text-[#A27943] text-3xl md:xl lg:text-lg">About Us</a>
      <a href="/services" className="hover:text-[#A27943] text-3xl md:xl lg:text-lg">Our Services</a>
      <a href="/blog" className="hover:text-[#A27943] text-3xl md:xl lg:text-lg">Blog</a>
    </div>
    <div className="w-full flex justify-center mb-10 md:hidden">
        <Link to='/contact'>
            <button className='w-full px-10 py-6 bg-[#C38F4B] text-white shadow-lg hover:bg-[#A27943] text-center'>Contact Us</button>
        </Link>
    </div>
</div>

      <div className="flex space-x-6 lg:space-x-10 items-center">
        <div className="relative md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-black" style={{ fontSize: '1.5em' }} /> : <FaBars className="text-black" style={{ fontSize: '1.5em' }} />}
        </div>
        <div className="relative hidden md:block">
          <Link to='/contact'>
            <button className=' px-8 py-2 bg-[#C38F4B] text-white shadow-lg hover:bg-[#A27943]'>Contact Us</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

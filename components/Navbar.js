import { useState } from 'react';

import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from "react-icons/bs";

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <div className="fixed inset-x-0 top-0 py-8 px-16 w-screen text-white flex justify-center md:justify-end items-center backdrop-blur-sm z-10 ">
      <a href="#" className="font-semibold mr-8 transition hover:text-deepPurple">About</a>
      <a href="#" className="font-semibold mr-8 transition hover:text-deepPurple">Work</a>
      <a href="#" className="font-semibold mr-8 transition hover:text-deepPurple">Contact</a>

      <BsMoonFill onClick={toggleDarkMode} className={`w-6 h-6 fill-white cursor-pointer shrink-0 hover:fill-deepPurple ${darkMode ? '' : 'hidden'}`}/>
      <BsFillSunFill onClick={toggleDarkMode} className={`w-6 h-6 fill-white cursor-pointer shrink-0 hover:fill-deepPurple ${darkMode ? 'hidden' : ''}`}/>
    </div>
  );
}

export default Navbar;

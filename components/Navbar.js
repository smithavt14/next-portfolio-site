import { useState } from 'react';

import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from "react-icons/bs";

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <div className="fixed inset-x-0 top-0 py-8 px-12 w-screen text-white flex justify-center md:justify-end items-center z-50 ">
      <a href="#" className="font-semibold mr-8 transition hover:text-deepPurple">About</a>
      <a href="#" className="font-semibold mr-8 transition hover:text-deepPurple">Work</a>
      <a href="#" className="font-semibold mr-8 transition hover:text-deepPurple">Contact</a>

      <div onClick={toggleDarkMode} className="
      group
      px-6 py-2 mr-8
      cursor-pointer border-2 rounded-full border-deepPurple dark:border-white dark:hover:border-deepPurple
      bg-deepPurple dark:bg-transparent
      flex items-center
      transition-all duration-500">
        <BsMoonFill className="transition-all duration-500 fill-white/20 group-hover:fill-white/80 dark:fill-white dark:focus:fill-white shrink-0 w-5 h-5"/>
        <BsFillSunFill className="transition-all duration-500 ml-6 w-5 h-5 fill-white shrink-0 dark:fill-white/20 dark:group-hover:fill-white/80"/>
      </div>
    </div>
  );
}

export default Navbar;

import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from "react-icons/bs";

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <div className="transition-all duration-200 fixed inset-x-0 top-0 py-8 px-12 w-screen text-midnight dark:text-white flex justify-center md:justify-end items-center z-50">
      <a href="#" className="mr-8 duration-200 hover:text-slate-400">About</a>
      <a href="#" className="mr-8 duration-200 hover:text-slate-400">Work</a>
      <a href="#" className="mr-8 duration-200 hover:text-slate-400">Contact</a>

      <div onClick={toggleDarkMode} className="
      group min-h-7 py-2 px-4 cursor-pointer border-2 rounded-full flex items-center transition-all duration-200
      border-midnight dark:border-white relative">
        <div className="transition-all duration-200 h-7 w-7 rounded-full absolute
        bg-midnight right-2
        dark:bg-white dark:right-14 dark:mr-1"></div>
        <BsMoonFill className="transition-all duration-200 fill-midnight shrink-0 w-5 h-5"/>
        <BsFillSunFill className="transition-all duration-500 ml-6 w-5 h-5 fill-white shrink-0"/>
      </div>
    </div>
  );
}

export default Navbar;

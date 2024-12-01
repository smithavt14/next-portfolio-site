import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <div onClick={toggleDarkMode} className="group min-h-7 py-2 px-4 cursor-pointer border-2 rounded-full flex items-center transition-all duration-200 border-midnight dark:border-white relative">
      <div className="transition-all duration-200 h-7 w-7 rounded-full absolute bg-midnight right-2 dark:bg-white dark:right-14 dark:mr-1" />
      <BsMoonFill className="transition-all duration-200 fill-midnight shrink-0 w-5 h-5" />
      <BsFillSunFill className="transition-all duration-500 ml-6 w-5 h-5 fill-white shrink-0" />
    </div>
  );
};

export default DarkModeToggle; 
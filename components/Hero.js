/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import BigDarkBackground from '../public/images/bg-bgd.svg'
import BigLightBackground from '../public/images/lt-bg-bgd.svg'
import SmallDarkBackground from '../public/images/sm-bgd.svg'
import SmallLightBackground from '../public/images/lt-sm-bgd.svg'

import { FaArrowDown } from 'react-icons/fa';

const Hero = ({darkMode}) => {
  return (
    <section className={`snap-center flex flex-col justify-center min-h-screen box-border bg-gradient-to-tr text-black dark:text-white  ${darkMode ? "from-midnight to-deepnight" : "from-sky-100 to-sky-300"}`}>
      <div className="w-full mb-80 z-10 mx-auto px-6 max-w-screen-xl sm:mb-40 md:px-12 lg:px-24 xl:p48">
        <p className="my-5 text-base">Hi, my name is </p>

        <h2 className="mt-5 mb-1 font-extrabold text-responsive">Alex Smith.</h2>
        <h2 className="mb-5 mt-1 font-extrabold dark:text-slate-400 text-deepPurple bg-clip-text text-responsive">I build experiences.</h2>

        <p className="w-full my-5 text-base dark:text-slate-400 text-black lg:w-8/12">I&apos;m a product guy, endurance athlete, and content creator who specializes in building awesome experiences for users.</p>

        <a href='#about' className="
        invisible group w-fit mt-8 p-4 rounded flex items-center justify-center
        text-white dark:text-white dark:group-hover:text-deepPurple
        bg-deepPurple dark:bg-transparent
        border-2 border-deepPurple dark:border-white dark:group-hover:border-deepPurple
        md:visible">
          <p>Check out more</p>
          <FaArrowDown className="transition-all fill-white w-0 group-hover:w-4 group-hover:animate-bounce group-hover:ml-4 "/>
        </a>
      </div>

      {/* Background Images */}
      <Image src={BigDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`invisible z-0 ${darkMode ? "sm:visible" : "" }`}/>
      <Image src={BigLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`invisible z-0 ${darkMode ? "" : "sm:visible" }`}/>
      <Image src={SmallDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "visible" : "invisible" }`}/>
      <Image src={SmallLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "invisible" : "visible" }`}/>
    </section>
  );
}

export default Hero;

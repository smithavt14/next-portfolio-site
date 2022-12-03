/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import BigDarkBackground from '../public/images/bg-bgd.svg'
import BigDarkMoonBackground from '../public/images/bg-moon.svg'

import BigLightBackground from '../public/images/lt-bg-bgd.svg'
import BigLightCloud1 from '../public/images/lt-bg-bgd-cloud-1.svg'
import BigLightCloud2 from '../public/images/lt-bg-bgd-cloud-2.svg'

import SmallDarkBackground from '../public/images/sm-bgd.svg'
import SmallLightBackground from '../public/images/lt-sm-bgd.svg'

import { FaArrowDown } from 'react-icons/fa';

const Hero = ({darkMode}) => {
  return (
    <section className={`overflow-hidden flex flex-col justify-center min-h-screen box-border bg-gradient-to-tr text-midnight dark:text-white  ${darkMode ? "from-midnight to-deepnight" : "from-sky-100 to-sky-300"}`}>
      <div className="w-full mb-80 z-20 mx-auto px-6 max-w-screen-xl sm:mb-40 md:px-12 lg:px-24 xl:p48">
        <p className="my-5 text-base">Hi, my name is </p>

        <h2 className="mt-5 mb-1 font-extrabold text-responsive">Alex Smith.</h2>
        <h2 className="mb-5 mt-1 font-extrabold text-slate-400 bg-clip-text text-responsive">I build experiences.</h2>

        <p className="w-full my-5 text-base dark:text-slate-400 text-black lg:w-8/12">I&apos;m a product guy, endurance athlete, and content creator who specializes in building awesome experiences for users.</p>

        <a href='#about' className="
        invisible md:visible group rounded w-fit mt-8 p-4 flex items-center justify-center
        dark:text-white dark:group-hover:text-deepPurple dark:bg-transparent
        border-2 border-midnight
        dark:border-white dark:group-hover:border-deepPurple">
          <p>Check out more</p>
          <FaArrowDown className="transition-all fill-midnight dark:fill-white w-0 group-hover:w-4 group-hover:animate-bounce group-hover:ml-4 "/>
        </a>
      </div>

      {/* Dark Background + Moon */}
      <Image src={BigDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`invisible z-10 ${darkMode ? "sm:visible" : "" }`}/>
      <div className="absolute h-full w-1/2 right-0">
        <Image src={BigDarkMoonBackground} layout='fill' objectFit='cover' objectPosition="10vh 0" className={`animate-spin invisible z-0 ${darkMode ? "sm:visible" : "" }`}/>
      </div>

      {/* Light Background + Clouds */}
      <Image src={BigLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`invisible z-0 ${darkMode ? "" : "sm:visible" }`}/>
      <Image src={BigLightCloud1} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`animate-shiftRightFast invisible z-0 ${darkMode ? "" : "sm:visible" }`}/>
      <Image src={BigLightCloud2} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`animate-shiftRightSlow invisible z-0 ${darkMode ? "" : "sm:visible" }`}/>

      {/* Mobile Backgrounds */}
      <Image src={SmallDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "visible" : "invisible" }`}/>
      <Image src={SmallLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "invisible" : "visible" }`}/>
    </section>
  );
}

export default Hero;

/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import BigBackground from '../public/images/bg-bgd.svg'
import SmallBackground from '../public/images/sm-bgd.svg'

import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen relative box-border px-4 sm:px-16">
      <div className="w-full mb-80 mx-auto z-10 sm:mb-40 lg:w-9/12 lg:max-w-5xl">
        <p className="my-5 text-base">Hi, my name is </p>

        <h2 className="mt-5 mb-1 font-extrabold text-responsive">Alex Smith.</h2>
        <h2 className="mb-5 mt-1 font-extrabold text-slate-400 bg-clip-text text-responsive">I build experiences.</h2>

        <p className="w-full my-5 text-base text-slate-400 lg:w-8/12">I&apos;m a product guy, endurance athlete, and content creator who specializes in building awesome experiences for users.</p>

        <a href='#' className="invisible group transition-all hover:text-violet-400 hover:border-violet-400 w-fit mt-8 p-4 border-2 border-slate-400 rounded flex items-center justify-center text-slate-400 md:visible">
          <p className="">Check out more</p>
          <FaArrowDown className="transition-all fill-violet-400 w-0 group-hover:w-4 group-hover:animate-bounce group-hover:ml-4 "/>
        </a>

      </div>

      <Image src={BigBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className="invisible sm:visible z-0"/>
      <Image src={SmallBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className="visible sm:invisible z-0"/>

    </div>
  );
}

export default Hero;

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/legacy/image"
import IconLink from './IconLink';

import BigDarkBackground from '../public/images/bg-bgd.svg'
import BigDarkMoonBackground from '../public/images/bg-moon.svg'

import BigLightBackground from '../public/images/lt-bg-bgd.svg'
import BigLightCloud1 from '../public/images/lt-bg-bgd-cloud-1.svg'
import BigLightCloud2 from '../public/images/lt-bg-bgd-cloud-2.svg'

import SmallDarkBackground from '../public/images/sm-bgd.svg'
import SmallLightBackground from '../public/images/lt-sm-bgd.svg'

import LinkedInIcon from './svgs/LinkedInIcon'
import GitHubIcon from './svgs/GitHubIcon'
import EmailIcon from './svgs/EmailIcon'
import BlogIcon from './svgs/BlogIcon'

const Hero = ({ darkMode }) => {

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  return (
    <section id="hero" onAnimationEnd={(event) => endAnimation(event)} className="relative overflow-hidden flex flex-col justify-center h-screen box-border bg-gradient-to-tr text-midnight from-sky-100 to-sky-300
      dark:text-white dark:from-midnight dark:to-deepnight
      px-6 md:px-12 lg:px-24 xl:p48">

      {/* Hero Content */}
      <div className="w-full z-20 mb-32">
        <p className="my-5 text-base opacity-0 animate-fadeUp text-midnight dark:text-white" style={{ animationDelay: '1s' }}>Hi, my name is </p>

        <h2 className="mt-5 mb-1 font-extrabold text-responsive opacity-0 animate-fadeUp text-midnight dark:text-white" style={{ animationDelay: '1.2s' }}>Alex Smith.</h2>
        <h2 className="mb-5 mt-1 font-extrabold text-slate-400 dark:text-slate-400 bg-clip-text text-responsive opacity-0 animate-fadeUp" style={{ animationDelay: '1.4s' }}>I build experiences.</h2>

        <p className="w-full my-5 text-base dark:text-slate-400 text-slate-500 lg:w-8/12 opacity-0 animate-fadeUp" style={{ animationDelay: '1.6s' }}>I&apos;m an endurance athlete and product guy who specializes in building awesome experiences for users.</p>

        <div className="my-8 flex justify-start items-center">
          <IconLink href="https://www.linkedin.com/in/smithavt14/" target="_blank" rel="noreferrer" Icon={LinkedInIcon} style={{ animationDelay: '1.8s' }} />
          <IconLink href="https://github.com/smithavt14" target="_blank" rel="noreferrer" Icon={GitHubIcon} style={{ animationDelay: '1.8s' }} />
          <IconLink href="mailto:hello@alex.cn.com" Icon={EmailIcon} style={{ animationDelay: '1.8s' }} />
          <IconLink href="/blog" Icon={BlogIcon} style={{ animationDelay: '1.8s' }} />
        </div>
      </div>

      <div id="hero-background" className="overflow-hidden w-full h-screen absolute z-10 inset-x-0 top-0">
        {/* Dark Background + Moon */}
        <Image src={BigDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`z-10 invisible ${darkMode ? "sm:visible" : "invisible"}`} />
        <div className="absolute h-full w-1/2 right-0">
          <Image src={BigDarkMoonBackground} layout='fill' objectFit='cover' objectPosition="10vh 0" className={`animate-spin z-0 ${darkMode ? "sm:visible" : "invisible"}`} />
        </div>

        {/* Light Background + Clouds */}
        <Image src={BigLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`z-0 ${darkMode ? "invisible" : "sm:visible"}`} />
        <Image src={BigLightCloud1} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`animate-shiftRightFast z-0 ${darkMode ? "invisible" : "sm:visible"}`} />
        <Image src={BigLightCloud2} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`animate-shiftRightSlow z-0 ${darkMode ? "invisible" : "sm:visible"}`} />

        {/* Mobile Backgrounds */}
        <Image src={SmallDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "" : "invisible"}`} />
        <Image src={SmallLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "invisible" : ""}`} />
      </div>
    </section>
  );
}

export default Hero;

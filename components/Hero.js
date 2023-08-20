/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

import BigDarkBackground from '../public/images/bg-bgd.svg'
import BigDarkMoonBackground from '../public/images/bg-moon.svg'

import BigLightBackground from '../public/images/lt-bg-bgd.svg'
import BigLightCloud1 from '../public/images/lt-bg-bgd-cloud-1.svg'
import BigLightCloud2 from '../public/images/lt-bg-bgd-cloud-2.svg'

import SmallDarkBackground from '../public/images/sm-bgd.svg'
import SmallLightBackground from '../public/images/lt-sm-bgd.svg'

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

        <div className="flex justify-start items-center">
          <a className="mr-4 cursor-pointer" href="https://www.linkedin.com/in/smithavt14/" target="_blank" rel="noreferrer">
            <svg className="opacity-0 animate-fadeUp fill-midnight dark:fill-white hover:fill-slate-400 dark:hover:fill-slate-400 transition" style={{ animationDelay: '1.8s' }} viewBox="0 0 448 512" width="2rem" height="2rem">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </a>
          <a className="cursor-pointer mr-4" href="https://github.com/smithavt14" target="_blank" rel="noreferrer">
            <svg className="opacity-0 animate-fadeUp fill-midnight dark:fill-white hover:fill-slate-400 dark:hover:fill-slate-400 transition" style={{ animationDelay: '1.8s' }} viewBox="0 0 496 512" width="2rem" height="2rem">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a className="cursor-pointer" href="mailto:hello@alex.cn.com">
            <svg className="opacity-0 animate-fadeUp fill-midnight dark:fill-white hover:fill-slate-400 dark:hover:fill-slate-400 transition" style={{ animationDelay: '1.8s' }} viewBox="0 0 512 512" width="2rem" height="2rem">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>

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

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { FaArrowDown } from 'react-icons/fa';

const Headline = ({toggleAboutContent}) => {
  return (
    <div onClick={toggleAboutContent} className="group transition p-14 cursor-pointer">
      <h3 className="
      transition-all text-4xl font-bold relative text-slate-400 text-center bottom-0
      group-hover:bottom-1  group-hover:text-black dark:group-hover:text-white">About Me</h3>
    </div>
  )
}

const Content = () => {

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  return (
    <div className="lg:flex justify-between relative" onAnimationEnd={(event) => endAnimation(event)}>
      <div className="mx-4 w-100 lg:w-7/12 shrink-0">
        <div className="flex items-center justify-between opacity-0 animate-fadeUp" style={{animationDelay: '0s'}}>
          <h3 className="text-4xl font-bold text-black dark:text-white relative">About Me</h3>
          <div className="mx-8 grow h-px  bg-black dark:bg-white"></div>
        </div>
        <div className="mt-4 text-black dark:text-slate-400 opacity-0 animate-fadeUp" style={{animationDelay: '200ms'}}>
          <p className="mb-2">Why hello there! I&apos;m Alex and I enjoy creating meaningful experiences for people both on/offline.</p>
          <p className="mb-2">Over the last eight years, I&apos; ve worked in China, helping build digital experiences for <strong className=" dark:text-white">multi-national companies, startups, individuals, and of course - myself.</strong></p>
          <p className="mb-2">Most recently, I&apos; ve been teaching others how to pursue careers in Web & Data by operating <a className=" dark:text-white font-bold" href="https://www.lewagon.com/shanghai" target="_blank" rel="noreferrer">the World&apos;s #1 Ranked Coding Bootcamp</a> in the heart of Shanghai, China.</p>
          <p className="mb-2">Apart from my interests in coding, design, and digital strategy, I spend an enormous amount of time on fitness, creating content, and hanging with my dog - Heizi. </p>
          <a href="#work" className="group flex mt-10">
            <p className=" dark:text-white font-bold">You can see more about my projects and experiences below.</p>
            <FaArrowDown className="
            transition-all fill-midnight dark:fill-white opacity-0 ml-4 bottom-0
            group-hover:opacity-100 group-hover:animate-bounce"/>
          </a>
        </div>
      </div>
      <div className="mx-4 h-full flex grow-0 justify-center items-center opacity-0 animate-fadeUp" style={{animationDelay: '400ms'}}>
        <img className="object-cover rounded-2xl h-full" src="images/headshot.png" alt="Profile Pic" />
      </div>
    </div>
  )
}

const About = ({aboutContent, toggleAboutContent}) => {
  return (
    <section id="about" className="snap-start z-100 h-screen flex items-center overflow-hidden py-40">
      <div className="mx-auto max-w-screen-xl justify-between relative lg:flex md:px-12 lg:px-24 xl:px-48">
      { !aboutContent && <Headline toggleAboutContent={toggleAboutContent} />}
      { aboutContent && <Content />}
      </div>
    </section>
   );
}

export default About;

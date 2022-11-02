/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Headshot from '../public/images/headshot.png'
import AboutSVG from './AboutSVG'

const About = () => {
  return (
    <section id="about" className="snap-center min-h-screen flex items-center overflow-hidden py-40">
      <div className="mx-auto max-w-screen-xl justify-between relative lg:flex md:px-12 lg:px-24 xl:p48">
        <div className="mx-4 w-100 lg:w-1/2">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-bold text-black dark:text-white">About Me</h3>
            <div className="mx-8 grow h-px  bg-black dark:bg-white"></div>
          </div>
          <div className="mt-4 text-black dark:text-slate-400">
            <p className="mb-2">Why hello there! I&apos;m Alex and I enjoy creating meaningful experiences for people both on/offline.</p>

            <p className="mb-2">Over the last eight years, I&apos;ve worked in China, helping build digital experiences for <strong className="text-deepPurple dark:text-white">multi-national companies, startups, individuals, and of course - myself.</strong></p>

            <p className="mb-2">Most recently, I&apos;ve been teaching others how to pursue careers in Web & Data by operating <a className="text-deepPurple dark:text-white font-bold" href="https://www.lewagon.com/shanghai">the World&apos;s #1 Ranked Coding Bootcamp</a> in the heart of Shanghai, China.</p>

            <p className="mb-2">Apart from my interests in coding, design, and digital strategy, I spend an enormous amount of time on fitness, creating content, and hanging with my dog - Heizi. You can see more about my projects and experiences below.</p>
          </div>
        </div>
        <div className="mx-4 mt-20 flex justify-center items-center lg:mt-10 lg:w-1/2">
          <div className="w-10/12 h-96 relative z-10">
            <Image src={Headshot} layout="fill" objectFit="contain" />
          </div>
        </div>
        <AboutSVG />
      </div>
    </section>
   );
}

export default About;

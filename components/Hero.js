/* eslint-disable jsx-a11y/alt-text */
import { FaLinkedin, FaGithub, FaEnvelope, FaBrain } from "react-icons/fa";
import IconLink from './IconLink';

const Hero = ({ darkMode }) => {

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0');
    event.target.classList.add('opacity-100');
  };

  return (
    <section id='hero' onAnimationEnd={(event) => endAnimation(event)} className="relative overflow-hidden flex flex-col justify-center h-screen box-border">
      {/* Hero Content */}
      <div className="relative z-20 mb-32 px-6 md:px-12 lg:px-24 xl:px-48">
        <p className="my-5 text-base opacity-0 animate-fadeUp text-midnight dark:text-white" style={{ animationDelay: '1s' }}>Hi, my name is </p>
        
        <h2 className="mt-5 mb-1 font-extrabold text-responsive opacity-0 animate-fadeUp text-midnight dark:text-white" style={{ animationDelay: '1.2s' }}>Alex Smith.</h2>
        <h2 className="mb-5 mt-1 font-extrabold text-slate-400 dark:text-slate-400 bg-clip-text text-responsive opacity-0 animate-fadeUp" style={{ animationDelay: '1.4s' }}>I build experiences.</h2>

        <p className="w-full my-5 text-base dark:text-slate-400 text-slate-500 lg:w-8/12 opacity-0 animate-fadeUp" style={{ animationDelay: '1.6s' }}>I&apos;m an endurance athlete and product guy who specializes in building awesome experiences for users.</p>

        <div className="my-8 flex justify-start items-center">
          <IconLink href="https://www.linkedin.com/in/smithavt14/" target="_blank" rel="noreferrer" Icon={FaLinkedin} style={{ animationDelay: '1.8s' }} />
          <IconLink href="https://github.com/smithavt14" target="_blank" rel="noreferrer" Icon={FaGithub} style={{ animationDelay: '1.8s' }} />
          <IconLink href="mailto:hello@alex.cn.com" Icon={FaEnvelope} style={{ animationDelay: '1.8s' }} />
          <IconLink href="/blog" Icon={FaBrain} style={{ animationDelay: '1.8s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
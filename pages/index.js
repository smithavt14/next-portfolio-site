import IconLink from '@components/IconLink';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const endAnimation = (event) => {
  event.target.classList.remove('opacity-0');
  event.target.classList.add('opacity-100');
};

export default function Home() {
  return (
    <section
      onAnimationEnd={(event) => endAnimation(event)}
      className="relative flex flex-col justify-center box-border z-20 space-y-6">
      <p className="opacity-0 animate-fadeUp text-base text-midnight dark:text-white" style={{ animationDelay: '1s' }}>Hi, my name is </p>
      <div>
        <h2 className="font-extrabold text-responsive opacity-0 animate-fadeUp text-midnight dark:text-white" style={{ animationDelay: '1.2s' }}>Alex Smith.</h2>
        <h2 className="font-extrabold text-slate-400 dark:text-slate-400 bg-clip-text text-responsive opacity-0 animate-fadeUp" style={{ animationDelay: '1.4s' }}>I build experiences.</h2>
      </div>
      <p className="w-full text-base text-midnight dark:text-white lg:w-8/12 opacity-0 animate-fadeUp" style={{ animationDelay: '1.6s' }}>I&apos;m an endurance athlete and product guy who specializes in building digital experiences.</p>
      <div className="flex justify-start items-center">
        <IconLink href="https://www.linkedin.com/in/smithavt14/" target="_blank" rel="noreferrer" Icon={FaLinkedin} style={{ animationDelay: '1.8s' }} />
        <IconLink href="https://github.com/smithavt14" target="_blank" rel="noreferrer" Icon={FaGithub} style={{ animationDelay: '1.8s' }} />
        <IconLink href="mailto:hello@alex.cn.com" Icon={FaEnvelope} style={{ animationDelay: '1.8s' }} />
      </div>
    </section>
  );
}
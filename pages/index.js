import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import IconLink from '@components/IconLink';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    // Get main section children and the icon container's children
    const iconContainer = section.querySelector('#icon-links');
    const elements = [...section.children, ...(iconContainer ? iconContainer.children : [])];

    console.log(elements);

    gsap.set(elements, {
      opacity: 0,
      y: 20
    });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      delay: 1,
      duration: 0.3,
      stagger: 0.3,
      ease: "power1.out"
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-full flex flex-col box-border z-20 space-y-5 xl:pt-10">
      <p className="text-base text-midnight dark:text-white">
        Hi, my name is
      </p>
      <div className="font-extrabold text-responsive">
        <h2 className="text-midnight dark:text-white">
          Alex Smith.
        </h2>
        <h2 className="text-slate-400 dark:text-slate-400">
          I build experiences.
        </h2>
      </div>
      <p className="w-full text-base text-midnight dark:text-white lg:w-8/12">
        I&apos;m an endurance athlete and product guy who specializes in building digital experiences.
      </p>
      <div id="icon-links" className="flex justify-start items-center">
        <IconLink href="https://www.linkedin.com/in/smithavt14/" target="_blank" rel="noreferrer" Icon={FaLinkedin} />
        <IconLink href="https://github.com/smithavt14" target="_blank" rel="noreferrer" Icon={FaGithub} />
        <IconLink href="mailto:hello@alex.cn.com" Icon={FaEnvelope} />
      </div>
    </section>
  );
}
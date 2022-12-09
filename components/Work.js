import { AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';
import experience from '/data/experience.js';

const Headline = ({toggleAboutContent}) => {
  return (
    <div onClick={toggleAboutContent} className="group p-14 cursor-pointer transition-all text-slate-400 text-center duration-300 hover:drop-shadow-white hover:text-black dark:hover:text-white">
      <h3 className="
      text-4xl font-bold relative drop-shadow-2xl">Where I&apos;ve Worked</h3>
      <p className="text-center ">Expand</p>
    </div>
  )
}

const Content = () => {

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  const [activeWork, toggle] = useState('leWagon');
  const toggleActiveWork = (event) => {
    let key = event.target.dataset.key;
    if (key) toggle(key);
  };

  return (
    <div className="dark:text-white text-black">
      {/* Headline of Work */}
      <div className="flex justify-between items-center relative w-100">
        <h3 className="text-4xl font-bold text-black dark:text-white relative">Where I've Worked</h3>
        <div className="mx-8 grow h-px bg-black dark:bg-white"></div>
      </div>

      {/* Content of Work */}
      <div className="flex mt-10">
        <div className="w-40 shrink-0 text-slate-400 transition-all h-96" onClick={toggleActiveWork}>
          <p className={`font-semibold cursor-pointer hover:text-white transition-all ${activeWork === 'leWagon' ? 'text-white border-l-4 pl-4' : ''}`} data-key="leWagon">Le Wagon</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-white transition-all ${activeWork === 'zimaDigital' ? 'text-white border-l-4 pl-4' : ''}`} data-key="zimaDigital">Zima Digital</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-white transition-all ${activeWork === 'moveSH' ? 'text-white border-l-4 pl-4' : ''}`} data-key="moveSH">MoveSH</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-white transition-all ${activeWork === 'wiredcraft' ? 'text-white border-l-4 pl-4' : ''}`} data-key="wiredcraft">Wiredcraft</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-white transition-all ${activeWork === 'cli' ? 'text-white border-l-4 pl-4' : ''}`} data-key="cli">CLI</p>
        </div>
        <div>
          <p className="font-semibold mb-2">{experience[activeWork]['title']}</p>
          <p className="text-slate-400 mb-2">{experience[activeWork]['date']}</p>
          <p className="text-black dark:text-white">{experience[activeWork]['summary']}</p>
          {experience[activeWork]['bullets'].map((bullet, index) => (
              <div key={`${experience[activeWork].title} - ${index}`} className="flex mt-4">
                <AiFillCaretRight className="dark:fill-white fill-black shrink-0 mt-1 mr-4" />
                <p className="dark:text-white text-black">{bullet}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <section id="work" className="snap-start z-20 h-screen flex items-center overflow-hidden py-40">
      <div className="mx-auto max-w-screen-xl justify-between relative lg:flex md:px-12 lg:px-24 xl:px-48">
      { true && <Content />}
      </div>
    </section>
   );
}

export default Work;

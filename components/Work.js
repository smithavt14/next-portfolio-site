import { AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';
import experience from '/data/experience.js';

const Headline = ({toggleWorkContent}) => {
  return (
    <div onClick={toggleWorkContent} className="mx-auto group p-14 cursor-pointer transition-all text-slate-400 text-center duration-300 hover:text-black dark:hover:text-white">
      <h3 className="
      text-4xl font-bold relative drop-shadow-2xl">Where I&apos;ve Worked</h3>
      <p className="text-center animate-pulse ">Expand</p>
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
    <div className="dark:text-white text-black" onAnimationEnd={endAnimation}>
      {/* Headline of Work */}
      <div className="opacity-0 flex justify-between items-center relative w-100 animate-fadeUp">
        <h3 className="text-4xl font-bold text-black dark:text-white relative">Where I&apos;ve Worked</h3>
        <div className="mx-8 grow h-px bg-black dark:bg-white"></div>
      </div>

      {/* Content of Work */}
      <div className="flex mt-10">
        <div className="opacity-0 animate-fadeUp w-40 shrink-0 text-slate-400 transition-all h-96" onClick={toggleActiveWork} style={{animationDelay: '200ms'}}>
          <p className={`font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-all ${activeWork === 'klarna' ? 'text-black dark:text-white border-black dark:border-white border-l-4 pl-4' : ''}`} data-key="klarna">Klarna</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-all ${activeWork === 'leWagon' ? 'text-black dark:text-white border-black dark:border-white border-l-4 pl-4' : ''}`} data-key="leWagon">Le Wagon</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-all ${activeWork === 'zimaDigital' ? 'text-black dark:text-white border-black dark:border-white  border-l-4 pl-4' : ''}`} data-key="zimaDigital">Zima Digital</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-all ${activeWork === 'moveSH' ? 'text-black dark:text-white border-black dark:border-white  border-l-4 pl-4' : ''}`} data-key="moveSH">MoveSH</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-all ${activeWork === 'wiredcraft' ? 'text-black dark:text-white border-black dark:border-white  border-l-4 pl-4' : ''}`} data-key="wiredcraft">Wiredcraft</p>
          <p className={`mt-6 font-semibold cursor-pointer hover:text-black dark:hover:text-white transition-all ${activeWork === 'cli' ? 'text-black dark:text-white border-black dark:border-white  border-l-4 pl-4' : ''}`} data-key="cli">CLI</p>
        </div>
        <div className="opacity-0 animate-fadeUp" style={{animationDelay: '400ms'}}>
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
    <section id="work" className="relative overflow-hidden flex flex-col justify-center h-screen box-border bg-gradient-to-tr text-midnight from-sky-100 to-sky-300 dark:text-white dark:from-midnight dark:to-deepnight px-6 md:px-24 lg:px-32 xl:px-48">
      <div className="max-w-screen-xl mx-auto justify-between relative lg:flex">
      <Content />
      </div>
    </section>
   );
}

export default Work;

import { AiFillCaretRight } from 'react-icons/ai';


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

  const workExperience = {
    active: "leWagon",
    experience: {
      'leWagon': {
        title: "General Manager @Le Wagon China",
        summary: "Le Wagon is a global education company specialized in immersive tech training in Web Development and Data Science. I've been acting General Manager of Le Wagon China for the last two years, helping to guide the business through a time of covid-zero policy in China.",
        bullets: [
          "Recruited and led a team of 12 full-time employees and 64 part-time instructors across two office locations to deliver our educational products to 393 students.",
          "Increased total student enrollment 130% YoY ('21 - '22) by leading the strategy, design, and launch of a new data-focused, online, and flexible product offering called 'Short Courses'.",
          "Maintained student enrollment numbers in our core products during the pandemic by managing the launch of new online and part-time options."
        ],
        date: "August 2019 - Present"
      },
      "zimaDigital": {
        title: "Digital Consultant & Developer",
        summary: "Zima Digital Technology Solutions is a WeChat focused digital agency based in Shanghai, China. We help our partners to make sense of the WeChat digital ecosystem through Digital Strategy, Mini Program Development, Social CRM Implementation, and Technical Recruitment.",
        date: "May 2019 - October 2020",
        bullets: [
        ]
      }
    }

  }

  const toggleWorkExperience = (event) => {
    console.log(event.target.dataset.key)
    workExperience.active = event.target.dataset.key
    console.log(workExperience)
  }

  return (
    <div className="dark:text-white text-black">
      {/* Headline of Work */}
      <div className="flex justify-between items-center relative w-100">
        <h3 className="text-4xl font-bold text-black dark:text-white relative">Where I've Worked</h3>
        <div className="mx-8 grow h-px bg-black dark:bg-white"></div>
      </div>

      {/* Content of Work */}
      <div className="flex mt-10">
        <div className="shrink-0 mr-10 text-slate-400 transition-all" onClick={toggleWorkExperience}>
          <p className="font-semibold cursor-pointer hover:text-white transition-all" data-key="leWagon">Le Wagon</p>
          <p className="mt-6 font-semibold cursor-pointer hover:text-white transition-all" data-key="zimaDigital">Zima Digital</p>
          <p className="mt-6 font-semibold cursor-pointer hover:text-white transition-all" data-key="moveSH">MoveSH</p>
          <p className="mt-6 font-semibold cursor-pointer hover:text-white transition-all" data-key="wiredcraft">Wiredcraft</p>
          <p className="mt-6 font-semibold cursor-pointer hover:text-white transition-all" data-key="chineseLanguageInstitute">Chinese Language Institute</p>
        </div>
        <div>
          <p className="font-semibold mb-2">{workExperience.experience[workExperience.active]['title']}</p>
          <p className="text-slate-400 mb-2">{workExperience.experience[workExperience.active]['date']}</p>
          <p className="text-black dark:text-white">{workExperience.experience[workExperience.active]['summary']}</p>
          {workExperience.experience[workExperience.active]['bullets'].map(bullet => {
            return (
              <div className="flex mt-4">
                <AiFillCaretRight className="dark:fill-white fill-black shrink-0 mt-1 mr-4" />
                <p className="dark:text-white text-black">{bullet}</p>
              </div>
            )
          })}
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

/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import Headshot from '../public/images/headshot.png'
import HeadshotBg from '../public/images/headshot-bg.svg'

const About = () => {
  return (
    <section id="about" className="snap-center min-h-screen flex items-center px-6 md:px-12 lg:px-24 xl:p48">
      <div className="mx-auto max-w-4xl flex justify-between">
        <div className="w-1/2 mx-4">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-bold text-deepPurple dark:text-white">About Me</h3>
            <div className="ml-4 grow-1 h-px  w-6/12 bg-deepPurple dark:bg-white"></div>
          </div>
          <div className="mt-4 text-black dark:text-slate-400">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum a ratione tempora labore? Quisquam suscipit quo impedit, dolores tenetur delectus. Officia eum natus tenetur qui temporibus molestias repellat</p>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure harum a ratione tempora labore? Quisquam suscipit quo impedit, dolores tenetur delectus. Officia eum natus tenetur qui temporibus molestias repellat a.</p>
          </div>
        </div>
        <div className="relative w-1/2 mx-4 flex justify-center items-center">
          <div className="relative h-5/6 w-8/12 z-10">
            <Image className="rounded-3xl" src={Headshot} layout="fill" objectFit="cover" />
          </div>
          <Image className="z-0 dark:fill-orange-400" src={HeadshotBg} layout="fill" objectFit="contain" objectPosition="center" />
        </div>
      </div>
    </section>
   );
}

export default About;

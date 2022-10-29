/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import BigBackground from '../public/images/bg-bgd.svg'
import SmallBackground from '../public/images/sm-bgd.svg'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="text-white relative bg-gradient-to-tr from-midnight to-deepnight">
      <Head>
        <title>Alex&apos;s Portfolio</title>
        <meta name="description" content="A portfolio app, created by Alex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -- Navbar Component -- */}
      <Navbar/>

      {/* -- Hero Section -- */}
      <div className="antialiased flex flex-col justify-center min-h-screen relative box-border px-4 sm:px-16">
        <div className="w-full mb-80 z-10 sm:mb-40 lg:w-9/12">
          <p className="my-5 text-base">Hi, my name is </p>
          <h1 className="mt-5 font-extrabold text-4xl sm:text-5xl">Alex Smith.</h1>
          <h1 className="mb-5 font-extrabold text-slate-400 bg-clip-text text-4xl sm:text-5xl">I build experiences.</h1>
          <p className="w-full my-5 text-base text-slate-400 lg:w-8/12">I&apos;m a product guy, endurance athlete, and content creator who specializes in building awesome experiences for users.</p>
        </div>
        <Image src={BigBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className="invisible sm:visible z-0"/>
        <Image src={SmallBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className="visible sm:invisible z-0"/>
      </div>
    </div>
  )
}

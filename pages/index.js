/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import mainBackground from '../public/background.svg'
import styles from '../styles/Home.module.css'
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-midnight text-white relative">
      <Head>
        <title>Alex&apos;s Portfolio</title>
        <meta name="description" content="A portfolio app, created by Alex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -- Navbar Component -- */}
      <Navbar/>

      {/* -- Hero Section -- */}
      <div className="antialiased flex flex-col justify-center min-h-screen relative box-border px-16">
        <div className="w-8/12 mb-40 z-10">
          <p className="my-5 text-base">Hi, my name is </p>
          <h1 className="my-5 text-5xl font-extrabold">Alex Smith.</h1>
          <h1 className="my-5 text-5xl font-extrabold text-slate-400">I build digital experiences.</h1>
          <p className="my-5 text-base text-slate-400">I&apos;m a product strategist who specializes in creating awesome experiences for users. Currently, I&apos;m based in Shanghai and focused on building applications for the China market.</p>
        </div>
        <Image src={mainBackground} layout='fill' objectFit='contain' objectPosition='bottom 0px left 0px' className="z-0 bg-midnight"/>
      </div>
    </div>
  )
}

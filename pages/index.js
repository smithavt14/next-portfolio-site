import Head from 'next/head'
import Image from 'next/image'
import mainBackground from '../public/background.svg'
import styles from '../styles/Home.module.css'
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex&apos;s Portfolio</title>
        <meta name="description" content="A portfolio app, created by Alex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="w-8/12 ml-24 mb-40 z-10">
          <p className="my-5 text-base antialiased">Hi, my name is </p>
          <h1 className="my-5 text-5xl antialiased font-extrabold">Alex Smith.</h1>
          <h1 className="my-5 text-5xl antialiased font-extrabold text-slate-400">I build digital experiences.</h1>
          <p className="my-5 w-10/12 text-base antialiased text-slate-400">I&apos;m a product strategist who specializes in creating awesome experiences for users. Currently, I&apos;m based in Shanghai and focused on building applications for the China market.</p>
        </div>
        <Image src={mainBackground} layout='fill' objectPosition='bottom -100px left 0px' className="w-screen	absolute bottom-0 left-0 z-0"/>
      </main>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
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
        <div className="w-7/12">
          <p className="my-5 text-base antialiased">Hi, my name is </p>
          <h1 className="my-5 text-6xl antialiased font-extrabold">Alex Smith.</h1>
          <h1 className="my-5 text-6xl antialiased font-extrabold text-slate-400">I build digital experiences.</h1>
          <p className="my-5 w-9/12 text-base antialiased text-slate-400">I&apos;m a product strategist who specializes in creating exceptional digital experiences. Currently, I&apos;m based in Shanghai and focused on building applications for the China market.</p>
        </div>
      </main>
    </div>
  )
}

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
        <h1 className={styles.title}>
          Welcome to my <span className="text-indigo-500 font-extrabold">Portfolio!</span>
        </h1>

        <p className={styles.description}>
          Coming Soon
        </p>
        <div className="flex ">
          <a href="https://www.linkedin.com/in/smithavt14/" rel="noreferrer" target="_blank">
            <RiLinkedinFill className="h-10 w-10 mx-5 fill-indigo-500 hover:fill-indigo-100 duration-200	"/>
          </a>

          <a href='https://github.com/smithavt14' rel="noreferrer" target="_blank">
            <RiGithubFill className="h-10 w-10 mx-5 fill-indigo-500 hover:fill-indigo-100 duration-200	"/>
          </a>
        </div>
      </main>
    </div>
  )
}

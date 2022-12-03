import { useState } from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageHead from '../components/Head';
import About from '../components/About';
import Work from '../components/Work';

export default function Home() {

  const [darkMode, darkToggle] = useState(true);
  const toggleDarkMode = () => { darkToggle(!darkMode) };

  const [aboutContent, aboutToggle] = useState(false);
  const toggleAboutContent = () => { aboutToggle(!aboutContent) };

  return (
    <div className={`scroll-smooth select-none ${darkMode ? 'dark bg-midnight' : 'bg-sky-100'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} aboutContent={aboutContent} toggleAboutContent={toggleAboutContent}/>
      <Work darkMode={darkMode} />
    </div>
  )
}

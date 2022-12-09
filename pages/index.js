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

  const [workContent, workToggle] = useState(false);
  const toggleWorkContent = () => { workToggle(!workContent) };

  return (
    <div className={`select-none ${darkMode ? 'dark bg-midnight' : 'bg:'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About aboutContent={aboutContent} toggleAboutContent={toggleAboutContent}/>
      <Work workContent={workContent} toggleWorkContent={toggleWorkContent}/>
    </div>
  )
}

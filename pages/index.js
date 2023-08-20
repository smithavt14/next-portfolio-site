import { useState } from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageHead from '../components/Head';
import About from '../components/About';
import Work from '../components/Work';
import Footer from '../components/Footer';

export default function Home() {

  const [darkMode, darkToggle] = useState(true);
  const toggleDarkMode = () => { darkToggle(!darkMode) };

  const [workContent, workToggle] = useState(false);
  const toggleWorkContent = () => { workToggle(!workContent) };

  return (
    <div className={`select-none ${darkMode ? 'dark bg-midnight' : 'bg:'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  )
}

import { useState } from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageHead from '../components/Head';
import Blog from '../components/Blog';

export default function Home() {

  const [darkMode, darkToggle] = useState(true);
  const toggleDarkMode = () => { darkToggle(!darkMode) };

  return (
    <div className={`select-none ${darkMode ? 'dark bg-midnight' : 'bg:'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      {/* <Blog darkMode={darkMode} /> */}
    </div>
  )
}

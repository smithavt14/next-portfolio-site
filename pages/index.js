import { useState } from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageHead from '../components/Head';
import About from '../components/About';

export default function Home() {

  const [darkMode, toggle] = useState(true);
  const toggleDarkMode = () => { toggle(!darkMode) };

  return (
    <div className={`scroll-smooth ${darkMode ? 'dark bg-midnight' : 'bg-sky-100'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode}/>
    </div>
  )
}

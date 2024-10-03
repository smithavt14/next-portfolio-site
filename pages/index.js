import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageHead from '../components/Head';
import useDarkMode from '../hooks/useDarkMode';

export default function Home() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`select-none ${darkMode ? 'dark bg-midnight' : 'bg:'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
    </div>
  );
}
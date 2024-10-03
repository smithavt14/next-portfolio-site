import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import PageHead from '../components/Head';
import useDarkMode from '../hooks/useDarkMode';

export default function BlogPage() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`select-none ${darkMode ? 'dark bg-midnight' : 'bg:'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Blog darkMode={darkMode} />
    </div>
  );
}
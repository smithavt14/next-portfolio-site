import PageHead from '@components/Head';
import Navbar from '@components/Navbar';
import useDarkMode from '@hooks/useDarkMode';

const Layout = ({ children }) => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className={`min-h-screen flex flex-col justify-center select-none ${darkMode ? 'dark bg-midnight' : 'bg-sky-100'}`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {typeof children === 'function' ? children({ darkMode }) : children}
      </main>
    </div>
  );
};

export default Layout

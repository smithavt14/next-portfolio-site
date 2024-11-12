import PageHead from '@components/Head';
import Navbar from '@components/Navbar';
import useDarkMode from '@hooks/useDarkMode';

const Layout = ({ children }) => {
  const [darkMode, toggleDarkMode, isInitialized] = useDarkMode();

  if (!isInitialized) {
    return null; // or return a loading spinner if you prefer
  }

  return (
    <div className={`min-h-screen flex flex-col justify-center select-none bg-gradient-to-tr dark:from-midnight dark:to-deepnight from-sky-100 to-sky-300`}>
      <PageHead />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {typeof children === 'function' ? children({ darkMode }) : children}
      </main>
    </div>
  );
};

export default Layout
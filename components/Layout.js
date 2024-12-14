import PageHead from '@components/Head';
import Navbar from '@components/Navbar';
import { useBackground } from '@hooks/useBackground';

const Layout = ({ children }) => {
  const { gradient, isDark } = useBackground();

  return (
    <main className={`min-h-screen select-none flex flex-col items-center ${gradient} ${isDark ? 'dark' : ''}`}>
      <PageHead />
      <div className="relative px-6 md:px-12 w-full max-w-screen-xl">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;

import PageHead from '@components/Head';
import Navbar from '@components/Navbar';
import { useBackground } from '@hooks/useBackground';

const Layout = ({ children }) => {
  const { gradient, isDark } = useBackground();

  return (
    <div className={`min-h-screen flex flex-col justify-center select-none -z-10 ${gradient} ${isDark ? 'dark' : ''}`}>
      <PageHead />
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
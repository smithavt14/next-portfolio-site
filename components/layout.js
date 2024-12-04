import PageHead from '@components/Head';
import Navbar from '@components/Navbar';
import Background from '@components/Background';
import { useBackground } from '@hooks/useBackground';

const Layout = ({ children }) => {
  const { gradient, isDark } = useBackground();

  return (
    <main className={`min-h-screen select-none -z-10 px-6 py-24 md:py-36 md:px-12 lg:px-24 xl:px-40 lg:py-36 ${gradient} ${isDark ? 'dark' : ''}`}>
      <PageHead />
      <Navbar />
      <Background />
      {children}
    </main>
  );
};

export default Layout;
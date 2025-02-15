import PageHead from '@components/Head';
import Navbar from '@components/Navbar';
import { useBackground } from '@hooks/useBackground';
import { LayoutProps } from 'types';

const Layout = ({ children }: LayoutProps) => {
  const { gradient, isDark } = useBackground();

  return (
    <main className={`fixed inset-0 overflow-hidden select-none flex flex-col items-center justify-center ${gradient} ${isDark ? 'dark' : ''}`}>
      <PageHead />
      <div className="relative h-full px-6 md:px-12 w-full max-w-screen-xl">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout; 
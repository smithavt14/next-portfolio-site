import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { BackgroundPicker } from '@components/Background';

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const justifyContent = pathname === '/blog' || pathname === '/blog/[slug]' ? 'space-between' : 'flex-end';

  const renderBackButton = () => {
    if (pathname !== '/') {
      return (
        <button
          className="text-midnight dark:text-white flex items-center"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="mr-2" />
        </button>
      );
    }
    return null;
  };

  return (
    <nav
      style={{ justifyContent }}
      className="duration-200 w-full max-w-screen-xl py-6 md:py-12 text-midnight dark:text-white flex items-center z-50 transition-all">
      {renderBackButton()}
      <BackgroundPicker/>
    </nav>
  );
}

export default Navbar;

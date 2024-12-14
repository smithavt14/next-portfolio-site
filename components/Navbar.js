import { useRouter } from 'next/router';
import { FaArrowLeft, FaRainbow } from 'react-icons/fa';
import BackgroundPicker from '@components/BackgroundPicker';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

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
    } return (
      <Link href="/plasmic" className="font-extrabold text-base text-midnight dark:text-white transition-opacity opacity-50 hover:opacity-100">
        Plasmic Demo
      </Link>
    )
  };

  return (
    <nav
      className="duration-200 w-full max-w-screen-xl py-6 md:py-12 text-midnight dark:text-white flex items-center justify-between z-50 transition-all">
      {renderBackButton()}
      <BackgroundPicker />
    </nav>
  );
}

export default Navbar;

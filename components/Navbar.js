import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import BackgroundPicker from '@components/BackgroundPicker';

const Navbar = ({ animationDelay }) => {
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

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  return (
    <nav
      onAnimationEnd={(event) => endAnimation(event)}
      style={{ justifyContent, animationDelay }}
      className="duration-200 w-full max-w-screen-xl p-6 md:p-12  text-midnight dark:text-white flex items-center z-50 opacity-0 animate-fadeUp transition-all">
      {renderBackButton()}
      <BackgroundPicker />
    </nav>
  );
}

export default Navbar;

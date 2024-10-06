import Hero from '@components/Hero';
import HeroBackground from '@components/HeroBackground';

export default function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <HeroBackground darkMode={darkMode} />
    </>
  );
}
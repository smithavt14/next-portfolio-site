import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PageHead from '../components/Head';
import About from '../components/About';

export default function Home() {
  return (
    <div className="text-white antialiased relative bg-gradient-to-tr from-midnight to-deepnight">
      <PageHead />
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

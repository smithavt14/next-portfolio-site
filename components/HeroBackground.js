/* eslint-disable jsx-a11y/alt-text */
import Image from "next/legacy/image";

import BigDarkBackground from '../public/images/bg-bgd.svg';
import BigDarkMoonBackground from '../public/images/bg-moon.svg';
import BigLightBackground from '../public/images/lt-bg-bgd.svg';
import BigLightCloud1 from '../public/images/lt-bg-bgd-cloud-1.svg';
import BigLightCloud2 from '../public/images/lt-bg-bgd-cloud-2.svg';
import SmallDarkBackground from '../public/images/sm-bgd.svg';
import SmallLightBackground from '../public/images/lt-sm-bgd.svg';

const HeroBackground = ({ darkMode }) => {

    return (
        <section id="hero-background" className="absolute inset-0 w-full h-full z-10">
        {/* Dark Background + Moon */}
        <Image src={BigDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`z-10 ${darkMode ? "sm:visible" : "invisible"}`} />
        <div className="absolute h-full w-1/2 right-0">
            <Image src={BigDarkMoonBackground} layout='fill' objectFit='cover' objectPosition="10vh 0" className={`animate-spin z-0 ${darkMode ? "sm:visible" : "invisible"}`} />
        </div>

        {/* Light Background + Clouds */}
        <Image src={BigLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`z-0 ${darkMode ? "invisible" : "sm:visible"}`} />
        <Image src={BigLightCloud1} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`animate-shiftRightFast z-0 ${darkMode ? "invisible" : "sm:visible"}`} />
        <Image src={BigLightCloud2} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`animate-shiftRightSlow z-0 ${darkMode ? "invisible" : "sm:visible"}`} />

        {/* Mobile Backgrounds */}
        <Image src={SmallDarkBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "" : "invisible"}`} />
        <Image src={SmallLightBackground} layout='fill' objectFit='cover' objectPosition='bottom 0px left 0px' className={`sm:invisible z-0 ${darkMode ? "invisible" : ""}`} />
        </section>
    );
};

export default HeroBackground;
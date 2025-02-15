import { useBackground } from '@hooks/useBackground';
import Stars from './graphics/animated/Stars';
// Import desktop components
import TreeDesktop from './graphics/desktop/Tree';
import SunDesktop from './graphics/desktop/Sun';
import MoonDesktop from './graphics/desktop/Moon';
import MountainDesktop from './graphics/desktop/Mountain';
import DudesDesktop from './graphics/desktop/Dudes';
// Import mobile components
import TreeMobile from './graphics/mobile/Tree';
import SunMobile from './graphics/mobile/Sun';
import MoonMobile from './graphics/mobile/Moon';
import MountainMobile from './graphics/mobile/Mountain';
import DudesMobile from './graphics/mobile/Dudes';

const ResponsiveComponent = ({ MobileComponent, DesktopComponent }) => (
    <>
        <div className="md:hidden"><MobileComponent /></div>
        <div className="hidden md:block"><DesktopComponent /></div>
    </>
);

const Background = () => {
    const { activeBackground } = useBackground();

    const backgrounds = {
        sun: {
            base: <ResponsiveComponent MobileComponent={SunMobile} DesktopComponent={SunDesktop} />,
        },
        moon: {
            base: <ResponsiveComponent MobileComponent={MoonMobile} DesktopComponent={MoonDesktop} />,
            extraElements: <Stars />
        },
        tree: {
            base: <ResponsiveComponent MobileComponent={TreeMobile} DesktopComponent={TreeDesktop} />,
        },
        mountain: {
            base: <ResponsiveComponent MobileComponent={MountainMobile} DesktopComponent={MountainDesktop} />,
            extraElements: <Stars />
        }
    };

    const activeBackgroundConfig = backgrounds[activeBackground];

    return (
        <div id="background-container" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Only render the active background */}
            <div className="absolute inset-0">
                {activeBackgroundConfig?.extraElements}
                <div id="background" className="z-0 w-full h-auto absolute bottom-0 right-0">
                    {activeBackgroundConfig?.base}
                </div>
            </div>

            {/* Fixed Dudes in Foreground */}
            <div id="little-dudes" className="absolute bottom-0 w-full h-auto z-30">
                <ResponsiveComponent
                    MobileComponent={DudesMobile}
                    DesktopComponent={DudesDesktop}
                />
            </div>
        </div>
    );
};

export default Background;
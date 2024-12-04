import { useBackground } from '@hooks/useBackground';
import Stars from './backgrounds/animated/Stars';
import TreeBackgroundSvg from './backgrounds/base/Tree';
import SunBackgroundSvg from './backgrounds/base/Sun';
import MoonBackgroundSvg from './backgrounds/base/Moon';
import MountainBackgroundSvg from './backgrounds/base/Mountain';
import Dudes from './backgrounds/base/Dudes';

const Background = () => {
    const { activeBackground } = useBackground();

    const backgrounds = {
        sun: {
            base: <SunBackgroundSvg />,
        },
        moon: {
            base: <MoonBackgroundSvg />,
            extraElements: <Stars />
        },
        tree: {
            base: <TreeBackgroundSvg />,
        },
        mountain: {
            base: <MountainBackgroundSvg />,
            extraElements: <Stars />
        }
    };

    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {Object.keys(backgrounds).map((bgKey) => (
                <div
                    key={bgKey}
                    className={`absolute inset-0 ${activeBackground === bgKey ? 'block' : 'hidden'}`}
                >
                    {backgrounds[bgKey].extraElements}
                    <div className="z-0 w-full h-auto absolute bottom-0 right-0">
                        {backgrounds[bgKey].base}
                    </div>
                </div>
            ))}

            {/* Fixed Dudes in Foreground */}
            <div className="absolute bottom-0 w-full h-auto z-30">
                <Dudes />
            </div>
        </div>
    );
};

export default Background;
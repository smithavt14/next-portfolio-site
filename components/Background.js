import { useBackground } from '@hooks/useBackground';
import Stars from './backgrounds/animated/Stars';
import Smoke from './backgrounds/animated/Smoke';
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
            animated: []
        },
        moon: {
            base: <MoonBackgroundSvg />,
            animated: [],
            extraElements: <Stars />
        },
        tree: {
            base: <TreeBackgroundSvg />,
            animated: [],
        },
        mountain: {
            base: <MountainBackgroundSvg />,
            animated: [],
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
                    {backgrounds[bgKey].animated.map((layer, index) => (
                        <div key={`${bgKey}-layer-${index}`}>
                            {layer.component}
                        </div>
                    ))}
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
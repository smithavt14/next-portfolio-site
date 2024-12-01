import Image from 'next/image';
import { useBackground } from '@hooks/useBackground';
import Stars from './Stars';
import Smoke from './Smoke';

const Background = () => {
    const { activeBackground } = useBackground();

    const backgrounds = {
        sun: {
            base: '/images/sun-bg-lg.svg',
            animated: [
                {
                    src: '/images/sun-bg-lg-clouds.svg',
                    animationClass: 'animate-shiftRightFast',
                    divClasses: '',
                    imageClasses: 'z-20',
                }, 
                {
                    src: '/images/sun-bg-lg-clouds-2.svg',
                    animationClass: 'animate-shiftRightSlow',
                    divClasses: '',
                    imageClasses: 'z-10',
                }
            ]
        },
        moon: {
            base: '/images/moon-bg-lg.svg',
            animated: [
                {
                    src: '/images/moon-bg-lg-moon.svg',
                    animationClass: 'animate-spin',
                    divClasses: 'absolute h-full w-6/12 right-0',
                    imageClasses: 'object-none z-10 object-right',
                }
            ],
            extraElements: <Stars />
        },
        tree: {
            base: null,
            animated: [],
            extraElements: (
                <>
                    <Smoke />
                    <object 
                        data="/images/tree-bg-lg.svg" 
                        type="image/svg+xml"
                        className="absolute bottom-0 w-full object-bottom z-10"
                        aria-label="Tree background"
                    />
                </>
            )
        },
        mountain: {
            base: '/images/mountain-bg-lg.svg',
            animated: [{
                src: '/images/mountain-bg-lg-sun.svg',
                animationClass: 'animate-shiftDownSlow',
                customClasses: '',
                zIndex: 10
            }],
            extraElements: <Stars />
        }
    };

    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {Object.keys(backgrounds).map((bgKey) => (
                <div
                    key={bgKey}
                    className={`absolute inset-0 
                        ${activeBackground === bgKey ? 'block' : 'hidden'}
                    `}
                >
                    {/* Extra Elements (like Stars) */}
                    {backgrounds[bgKey].extraElements}

                    {/* Animated Layers */}
                    {backgrounds[bgKey].animated.map((layer, index) => (
                        <div key={`${bgKey}-layer-${index}`} className={`${layer.divClasses}`}>
                            <Image
                                src={layer.src}
                                alt={`${bgKey} animated elements ${index + 1}`}
                                fill
                                className={`object-contain object-bottom ${layer.animationClass} ${layer.imageClasses}`}
                                quality={100}
                            />
                        </div>
                    ))}

                    {/* Base Background Layer */}
                    {backgrounds[bgKey].base && (
                        <div className="absolute inset-0 z-10">
                            <Image
                                src={backgrounds[bgKey].base}
                                alt={`${bgKey} background`}
                                fill
                                priority='true'
                                className="object-contain object-bottom"
                                quality={100}
                            />
                        </div>
                    )}
                </div>
            ))}
            
            {/* Fixed Dudes in Foreground */}
            <div className="absolute bottom-[2%] left-[32%] h-72 w-72 z-30">
                <Image
                    src="/images/dudes.svg"
                    alt="Little dudes"
                    fill
                    priority
                    className="object-contain"
                    quality={100}
                />
            </div>
        </div>
    );
};

export default Background;
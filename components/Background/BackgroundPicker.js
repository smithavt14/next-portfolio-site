import { FaMoon, FaTree, FaSun, FaMountain } from "react-icons/fa";
import { useBackground } from '@hooks/useBackground';

const BackgroundPicker = () => {
    const { activeBackground, setActiveBackground } = useBackground();

    const getIconClasses = (iconName) => {
        const baseClasses = "transition-all duration-200 fill-midnight dark:fill-white";
        return activeBackground === iconName
            ? `${baseClasses} w-6 h-6`
            : `${baseClasses} w-5 h-5 opacity-50 hover:opacity-80`;
    };

    return (
        <div className="flex flex-col items-center gap-2">
            {/* Icons Container */}
            <div className="flex items-end h-8">
                <button
                    onClick={() => setActiveBackground('moon')}
                    className="w-8 transition-all duration-200 flex items-center justify-center"
                >
                    <FaMoon className={getIconClasses('moon')} />
                </button>
                <button
                    onClick={() => setActiveBackground('sun')}
                    className="w-8 transition-all duration-200 flex items-center justify-center"
                >
                    <FaSun className={getIconClasses('sun')} />
                </button>
                <button
                    onClick={() => setActiveBackground('tree')}
                    className="w-8 transition-all duration-200 flex items-center justify-center"
                >
                    <FaTree className={getIconClasses('tree')} />
                </button>
                <button
                    onClick={() => setActiveBackground('mountain')}
                    className="w-8 transition-all duration-200 flex items-center justify-center"
                >
                    <FaMountain className={getIconClasses('mountain')} />
                </button>
            </div>

            {/* Dot Indicator */}
            <div className="relative w-32 h-1"> {/* width matches total of 4 buttons (4 * w-8 = w-32) */}
                <div 
                    className="absolute w-1 h-1 rounded-full bg-midnight dark:bg-white transition-all duration-200 ease-in-out"
                    style={{ 
                        left: `${activeBackground === 'moon' ? '16px' : 
                               activeBackground === 'sun' ? '48px' : 
                               activeBackground === 'tree' ? '80px' : '112px'}`,
                        transform: 'translateX(-50%)'
                    }}
                />
            </div>
        </div>
    );
}

export default BackgroundPicker;
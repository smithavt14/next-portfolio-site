'use client';
import { useState, useEffect } from 'react';
import { useBackground } from '@hooks/useBackground';

const Smoke = () => {
    const { activeBackground } = useBackground();
    const [smokeElements, setSmokeElements] = useState([]);
    const [position, setPosition] = useState({ left: '85.05%', bottom: '64.02%' });

    useEffect(() => {
        // Generate smoke elements
        const elements = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            maxScale: 1 + (i * 0.2),
            delay: i * -2,
            gradient: `linear-gradient(to right, 
                ${i % 2 === 0 ? '#E7B3C6' : '#D4A5B9'}, 
                ${i % 2 === 0 ? '#817493' : '#725E89'}
            )`,
            duration: 5 + (i * 0.3),
            xTravel: Math.random() * 200 - 100,
            yTravel: -(150 + Math.random() * 100)
        }));
        setSmokeElements(elements);

        // Only calculate position when tree background is active
        if (activeBackground === 'tree') {
            setTimeout(() => {
                const smokeStart = document.getElementById('smoke-start');
                if (smokeStart) {
                    const rect = smokeStart.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    const viewportWidth = window.innerWidth;
                    
                    setPosition({
                        left: `${(rect.left / viewportWidth) * 100}%`,
                        bottom: `${((viewportHeight - rect.bottom) / viewportHeight) * 100}%`
                    });
                }
            }, 100); // Small delay to ensure SVG is rendered
        }
    }, [activeBackground]); // Re-run when background changes

    if (smokeElements.length === 0) return null;

    return (
        <div 
            className="absolute"
            style={{
                left: position.left,
                bottom: position.bottom,
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px'
            }}
        >
            {smokeElements.map(smoke => (
                <div
                    key={smoke.id}
                    className="absolute rounded-full"
                    style={{
                        width: '24px',
                        height: '24px',
                        background: smoke.gradient,
                        animation: `smokeFloat-${smoke.id} ${smoke.duration}s infinite`,
                        animationDelay: `${smoke.delay}s`,
                        '--max-scale': smoke.maxScale,
                        left: '-16px',
                        bottom: '-16px'
                    }}
                />
            ))}

            <style jsx>{`
                ${smokeElements.map(smoke => `
                    @keyframes smokeFloat-${smoke.id} {
                        0% {
                            transform: translateY(0) translateX(0) scale(1);
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.75;
                        }
                        100% {
                            transform: translateY(${smoke.yTravel}px) 
                                     translateX(${smoke.xTravel}px) 
                                     scale(var(--max-scale));
                            opacity: 0;
                        }
                    }
                `).join('\n')}
            `}</style>
        </div>
    );
};

export default Smoke; 
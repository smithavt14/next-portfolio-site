'use client';
import { useState, useEffect, useCallback } from 'react';

const Smoke = () => {
    const [position, setPosition] = useState({ left: '85.05%', bottom: '64.02%' });
    const [smokeElements, setSmokeElements] = useState([]);

    const updatePosition = useCallback(() => {
        console.log('updatePosition called');
        const svg = document.querySelector('#tree-bg-lg');
        if (!svg) {
            console.log('tree-bg-lg SVG not found in DOM');
            return;
        }
        console.log('Found tree-bg-lg SVG:', svg);

        // Create a mutation observer to watch for changes in the SVG
        const observer = new MutationObserver((mutations, obs) => {
            console.log('Mutation observed:', mutations);
            const smokeStart = svg.querySelector('#smoke-start');
            if (smokeStart) {
                console.log('Found smoke-start:', smokeStart);
                const svgRect = svg.getBoundingClientRect();
                const smokeRect = smokeStart.getBoundingClientRect();

                // Calculate percentages based on current SVG dimensions
                const left = (smokeRect.left - svgRect.left) / svgRect.width * 100;
                const bottom = (svgRect.bottom - smokeRect.bottom) / svgRect.height * 100;

                setPosition({ left: `${left}%`, bottom: `${bottom}%` });
                console.log('Position updated:', { left, bottom });
                
                obs.disconnect();
                console.log('Observer disconnected');
            } else {
                console.log('smoke-start still not found');
            }
        });

        console.log('Observer created, starting observation');
        observer.observe(svg, {
            childList: true,
            subtree: true
        });

        // Initial check
        const smokeStart = svg.querySelector('#smoke-start');
        if (smokeStart) {
            console.log('Found smoke-start on initial check');
            const svgRect = svg.getBoundingClientRect();
            const smokeRect = smokeStart.getBoundingClientRect();
            const left = (smokeRect.left - svgRect.left) / svgRect.width * 100;
            const bottom = (svgRect.bottom - smokeRect.bottom) / svgRect.height * 100;
            setPosition({ left: `${left}%`, bottom: `${bottom}%` });
        } else {
            console.log('Initial check: smoke-start not found');
        }
    }, []);

    useEffect(() => {
        // Generate smoke elements on client side
        const elements = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            maxScale: 1 + (i * 0.4),
            delay: i * -1,
            gradient: `linear-gradient(to right, 
                ${i % 2 === 0 ? '#E7B3C6' : '#D4A5B9'}, 
                ${i % 2 === 0 ? '#817493' : '#725E89'}
            )`,
            duration: 4 + (i * 0.3),
            xTravel: Math.random() * 200 - 100,
            yTravel: -(150 + Math.random() * 100)
        }));
        setSmokeElements(elements);

        // Initial position update
        updatePosition();

        // Update position on window resize
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, [updatePosition]);

    if (smokeElements.length === 0) {
        return null; // Don't render anything during SSR
    }

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
                        width: '32px',
                        height: '32px',
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
                        80% {
                            opacity: 1;
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
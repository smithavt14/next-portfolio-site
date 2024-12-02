'use client';
import { useState, useEffect } from 'react';

const Stars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate stars only on client-side
        const generatedStars = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            top: `${Math.random() * 70}%`,
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            delay: Math.random() * 2
        }));
        setStars(generatedStars);
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="absolute w-full h-full inset-0 overflow-hidden -z-10">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute h-1 w-1 bg-white rounded-full animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        transform: `scale(${star.scale})`,
                        animationDelay: `${star.delay}s`,
                        zIndex: 0
                    }}
                />
            ))}
        </div>
    );
};

export default Stars; 
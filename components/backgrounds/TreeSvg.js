import { useEffect } from 'react';
import gsap from 'gsap';

const TreeSvg = () => {
    useEffect(() => {
        // Animate trees swaying
        gsap.to('.tree-group', {
            rotation: 2,
            duration: 2,
            repeat: -1,
            yoyo: true,
            transformOrigin: 'bottom',
            ease: 'power1.inOut'
        });

        // Animate volcano glowing
        gsap.to('.volcano', {
            filter: 'brightness(1.2)',
            duration: 1,
            repeat: -1,
            yoyo: true
        });
    }, []);

    return (
        <svg>
            {/* SVG content with classes for GSAP */}
            <g className="tree-group">
                {/* Tree paths */}
            </g>
            <path className="volcano" />
        </svg>
    );
};

export default TreeSvg; 
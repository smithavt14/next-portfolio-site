'use client';

import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

const BACKGROUNDS = {
  moon: { isDark: true, gradient: 'bg-gradient-to-tr from-[#1C0C32] to-[#0A0412]' },
  sun: { isDark: false, gradient: 'bg-gradient-to-tr from-[#E0F2FE] to-[#7DD3FC]' },
  mountain: { isDark: true, gradient: 'bg-gradient-to-t from-[#F1D197] to-[#66267A]' },
  tree: { isDark: false, gradient: 'bg-gradient-to-tr from-[#FFFFFF] to-[#B5FFBC]' }
};

export function BackgroundProvider({ children }) {
    const [activeBackground, setActiveBackground] = useState('moon');

    const value = {
        activeBackground,
        setActiveBackground,
        isDark: BACKGROUNDS[activeBackground].isDark,
        gradient: BACKGROUNDS[activeBackground].gradient
    };

    return (
        <BackgroundContext.Provider value={value}>
            {children}
        </BackgroundContext.Provider>
    );
}

export function useBackground() {
    const context = useContext(BackgroundContext);
    if (context === undefined) {
        throw new Error('useBackground must be used within a BackgroundProvider');
    }
    return context;
} 
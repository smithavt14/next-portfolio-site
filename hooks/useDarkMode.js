import { useEffect, useState, useCallback } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Get initial value from localStorage or system preference
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    setIsInitialized(true);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('darkMode', String(newValue));
      
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newValue;
    });
  }, []);

  return [darkMode, toggleDarkMode, isInitialized];
};

export default useDarkMode;

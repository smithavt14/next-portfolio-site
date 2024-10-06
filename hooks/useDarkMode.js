import { useEffect, useState } from 'react';

const useDarkMode = () => {
  // Start with a default dark mode state
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Effect to add/remove the dark class based on state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;

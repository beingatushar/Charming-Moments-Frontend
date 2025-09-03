import React, { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeStore } from '../../stores/useThemeStore.ts';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-brand-dark-secondary hover:bg-pink-100 dark:hover:bg-brand-dark transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default ThemeToggle;

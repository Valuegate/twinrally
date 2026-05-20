/**
 * ThemeSwitcher.jsx - Dark/Light Mode Toggle Component
 *
 * Provides theme switching functionality for TwinRally platform.
 * Uses localStorage for persistence and CSS custom properties for theming.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = ({ className = "" }) => {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('twinrally-theme');
    return savedTheme || 'dark';
  });

  // Apply theme to document and CSS variables
  useEffect(() => {
    const root = document.documentElement;

    // Add transition class for smooth theme changes
    root.classList.add('theme-transition');

    // Keep only dark theme - remove light theme switching
    root.style.setProperty('--bg', 'var(--bg)');
    root.style.setProperty('--pink', 'var(--pink)');
    root.style.setProperty('--blue', 'var(--blue)');
    root.style.setProperty('--card-bg', 'var(--card-bg)');
    root.style.setProperty('--card-border', 'var(--card-border)');
    root.classList.remove('light');
    root.classList.add('dark');

    // Save to localStorage
    localStorage.setItem('twinrally-theme', theme);

    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 300);

    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-lg
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-white/20 hover:border-white/30
        transition-all duration-300 ease-in-out
        group
        ${className}
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon for light mode */}
        <Sun
          className={`
            absolute inset-0 w-6 h-6 text-yellow-400
            transition-all duration-300 ease-in-out
            ${theme === 'dark'
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
            }
          `}
        />

        {/* Moon icon for dark mode */}
        <Moon
          className={`
            absolute inset-0 w-6 h-6 text-blue-300
            transition-all duration-300 ease-in-out
            ${theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
            }
          `}
        />
      </div>

      {/* Subtle glow effect */}
      <div
        className={`
          absolute inset-0 rounded-lg opacity-0
          bg-gradient-to-r from-pink-500/20 to-blue-500/20
          group-hover:opacity-100 transition-opacity duration-300
          pointer-events-none
        `}
      />
    </button>
  );
};

export default ThemeSwitcher;
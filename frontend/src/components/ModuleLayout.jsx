// ✅ File: src/components/ModuleLayout.jsx
'use client';
import { useState } from 'react';
import NavBar from './NavBar';

export default function ModuleLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        {children}
      </div>
    </main>
  );
}
// This component serves as a layout for modules, providing a navigation bar and dark mode toggle functionality.
// It uses React's useState hook to manage the dark mode state.
// The NavBar component is passed the current dark mode state and a function to toggle it.
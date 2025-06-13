'use client';
import { useState } from 'react';
import NavBar from './NavBar';

export default function ModuleLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="flex-1">{children}</div>
    </main>
  );
}
// This is the main layout component for the module, which includes a navigation bar and a dark mode toggle.
// It uses React's useState hook to manage the dark mode state.
// The NavBar component is passed the darkMode state and a function to toggle it.
// The main content of the module is rendered within a div that takes up the remaining space in the layout.
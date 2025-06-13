'use client';

// ✅ File: src/components/ModuleLayout.jsx
import { useState } from 'react';
import NavBar from './NavBar';
import ChartsRow from './ChartsRow';

export default function ModuleLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? 'dark' : ''}>
      <NavBar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
        {/* Charts row at the top */}
        <ChartsRow />

        {/* Module content */}
        <section className="mt-6">
          {children}
        </section>
      </div>
    </main>
  );
}
// This component serves as a layout for individual modules, including a navigation bar and a row of charts.
// It uses Tailwind CSS for styling and supports dark mode toggling.
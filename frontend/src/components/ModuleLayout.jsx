'use client';

// ✅ File: src/components/ModuleLayout.jsx
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
//   </aside>
//         {/* Main Content */}
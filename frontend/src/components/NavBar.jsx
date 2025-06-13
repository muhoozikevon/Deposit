'use client';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import UserBadge from './UserBadge';
import LogoutButton from './LogoutButton';
import Dashboard from './Dashboard'; // at the top of file

const modules = [
  'Dashboard', // ← Add this first
  'Publisher Management',
  'Submission',
  'Validation',
  'Cataloging',
  'Storage & Preservation',
  'Access & Discovery',
  'Compliance & Enforcement',
  'Reporting & Analytics',
  'Digitization',
  'Interlibrary Loan',
  'Disaster Recovery',
];

export default function NavBar({ onToggleDarkMode, darkMode }) {
  const [open, setOpen] = useState(true);
  const { token } = useAuth();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`bg-white/30 dark:bg-black/30 backdrop-blur-lg transition-all border-r border-white/20 dark:border-white/10 ${open ? 'w-64' : 'w-16'} flex flex-col justify-between`}>
        <div>
          {/* Toggle Button */}
          <div className="p-4">
            <button
              onClick={() => setOpen(!open)}
              className="text-xl text-gray-900 dark:text-white"
            >
              {open ? '←' : '☰'}
            </button>
          </div>

          {/* Logo */}
          {open && (
            <div className="px-4 font-bold text-gray-800 dark:text-white text-lg">
              📚 Legal Deposit
            </div>
          )}

          {/* Navigation Links */}
          <nav className="mt-4 px-4 space-y-2">
            {modules.map((mod, index) => (
              <a
                key={index}
                href={`#${mod.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-sm text-gray-800 dark:text-gray-300 hover:underline block"
              >
                {open ? mod : mod[0]}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 space-y-2">
          <UserBadge />
          <button
            onClick={onToggleDarkMode}
            className="w-full px-3 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <LogoutButton />
        </div>
      </aside>

      {/* Page content placeholder */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 className="text-2xl font-bold">Welcome to Legal Deposit</h1>
  <p className="text-sm mt-2">Select a module from the sidebar.</p>
              {/* Dashboard First */}
  <section id="dashboard" className="mt-10">
    <Dashboard />
  </section>

        {modules.map(mod => (
  <section key={mod} id={mod.replace(/\s+/g, '-').toLowerCase()} className="mt-10">
    <h2 className="text-lg font-semibold">{mod}</h2>
    <p className="text-sm text-gray-600 dark:text-gray-400">Placeholder for {mod}</p>
  </section>
))}
{/* Placeholders for other modules */}
  {modules.slice(1).map(mod => (
    <section key={mod} id={mod.replace(/\s+/g, '-').toLowerCase()} className="mt-10">
      <h2 className="text-lg font-semibold">{mod}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">Placeholder for {mod}</p>
    </section>
  ))}
      </main>
    </div>
  );
}

// ✅ File: src/components/NavBar.jsx
import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import UserBadge from './UserBadge';
import LogoutButton from './LogoutButton';
import Dashboard from './Dashboard';

const modules = [
  { name: 'Dashboard', icon: '📊' },
  { name: 'Publisher Management', icon: '🏢' },
  { name: 'Submission', icon: '📥' },
  { name: 'Validation', icon: '✅' },
  { name: 'Cataloging', icon: '📚' },
  { name: 'Storage & Preservation', icon: '🗄️' },
  { name: 'Access & Discovery', icon: '🔎' },
  { name: 'Compliance & Enforcement', icon: '⚖️' },
  { name: 'Reporting & Analytics', icon: '📈' },
  { name: 'Digitization', icon: '🖨️' },
  { name: 'Interlibrary Loan', icon: '🔁' },
  { name: 'Disaster Recovery', icon: '🧯' },
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
            {modules.map(({ name, icon }, index) => {
              const path = '/' + name.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={index} href={path}>
                  <span className="text-sm text-gray-800 dark:text-gray-300 hover:underline block">
                    {open ? `${icon} ${name}` : icon}
                  </span>
                </Link>
              );
            })}
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
        <section id="dashboard" className="mt-10">
          <Dashboard />
        </section>
      </main>
    </div>
  );
}
// This component serves as the navigation bar for the application.
// It includes a sidebar with links to various modules, a toggle for dark mode, and user-related actions.
// The sidebar can be expanded or collapsed, and it displays module names with icons.
// The `NavBar` component is designed to be responsive and user-friendly, providing quick access to different sections of the application.
// The `darkMode` state is used to toggle between light and dark themes, enhancing user experience.
// The `UserBadge` and `LogoutButton` components are included for user management functionalities.
// The `Dashboard` component is rendered in the main content area, providing an overview of the application.
// The sidebar is styled with a backdrop blur effect and responsive design, ensuring it looks good in both light and dark modes.
// The navigation links are dynamically generated from the `modules` array, making it easy to add or remove modules in the future.
// The sidebar's width adjusts based on whether it is open or closed, providing a clean and minimal interface when collapsed.
// The `Link` component from Next.js is used for client-side navigation, ensuring smooth transitions between pages.
// The `useAuth` hook is used to access authentication-related data, such as the user's token.
// The `onToggleDarkMode` function is passed as a prop to allow toggling the dark mode state from the parent component.
// The `darkMode` prop is used to apply the appropriate styles for dark mode, enhancing accessibility and user comfort.
// The sidebar's background is semi-transparent, providing a modern look while maintaining readability.
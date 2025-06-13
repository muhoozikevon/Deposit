'use client';

import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import LogoutButton from '../components/LogoutButton';
import SubmissionForm from '../components/SubmissionForm';
import PublisherForm from '../components/PublisherForm';
import PasswordResetForm from '../components/PasswordResetForm';
import SubmissionsTable from '../components/SubmissionsTable';
import UserBadge from '../components/UserBadge';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { token } = useAuth();

  return (
    <main className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 space-y-8">

        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300">Legal Deposit System</h1>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>

        {/* Auth Info */}
        <div className="flex justify-between items-center">
          <UserBadge />
          <LogoutButton />
        </div>

        {/* Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LoginForm />
          <PublisherForm />
        </div>

        {/* Password Reset + Submission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PasswordResetForm />
          <SubmissionForm />
        </div>

        {/* Submissions Table */}
        <SubmissionsTable />
      </div>
    </main>
  );
}
// This is the main page of the application.
// It includes the header, dark mode toggle, user badge, logout button, forms for login, publisher registration, password reset, and submission,
// and a table to display submissions.
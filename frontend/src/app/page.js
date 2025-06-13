'use client';

import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SubmissionForm from '../components/SubmissionForm';
import PublisherForm from '../components/PublisherForm';
import PasswordResetForm from '../components/PasswordResetForm';
import SubmissionsTable from '../components/SubmissionsTable';
import NavBar from '../components/NavBar';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? 'dark' : ''}>
      <NavBar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
    </main>
  );
}

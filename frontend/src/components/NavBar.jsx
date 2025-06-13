'use client';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import UserBadge from './UserBadge';
import LogoutButton from './LogoutButton';

export default function NavBar({ onToggleDarkMode, darkMode }) {
  return (
    <nav className="backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-white/10 shadow-md sticky top-0 z-50 px-6 py-3 flex justify-between items-center transition-all">
      <div className="text-xl font-bold text-gray-900 dark:text-gray-100">📚 Legal Deposit</div>

      <div className="flex items-center gap-4">
        <UserBadge />
        <button
          onClick={onToggleDarkMode}
          className="px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <LogoutButton />
      </div>
    </nav>
  );
}

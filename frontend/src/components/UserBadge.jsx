'use client';
import { useAuth } from '../context/AuthContext';
import decodeToken from '../utils/decodeToken';

export default function UserBadge() {
  const { token } = useAuth();

  if (!token) return null;

  const user = decodeToken(token);

  return (
    <div className="text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded shadow">
      👋 Logged in as: <strong>{user?.username || user?.email}</strong>
    </div>
  );
}

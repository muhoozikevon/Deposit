'use client';
import { useAuth } from '../context/AuthContext';

export default function LogoutButton() {
  const { logout, token } = useAuth();

  if (!token) return null;

  return (
    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
}
// This button will only render if the user is logged in (i.e., token exists).
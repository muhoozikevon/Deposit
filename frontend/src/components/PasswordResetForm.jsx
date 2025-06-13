'use client';
import { useState } from 'react';
import axios from 'axios';

export default function PasswordResetForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/password_reset/', { email });
      setMessage('✅ Reset link sent.');
    } catch {
      setMessage('❌ Failed to send reset link.');
    }
  };

  return (
    <form onSubmit={handleReset} className="bg-white p-4 shadow rounded space-y-3">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">Send Reset Link</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
// This component allows users to reset their password by entering their email.
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
      setMessage('✅ Reset link sent to your email.');
    } catch {
      setMessage('❌ Failed to send reset link.');
    }
  };

  return (
    <form onSubmit={handleReset} className="max-w-md p-4 bg-white rounded shadow space-y-3">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="bg-yellow-600 text-white px-4 py-2 rounded" type="submit">
        Send Reset Link
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}

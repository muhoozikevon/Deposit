'use client';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login, token } = useAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: form.email,
        password: form.password,
      });
      login(res.data.access);
      setMessage('✅ Logged in!');
    } catch {
      setMessage('❌ Login failed.');
    }
  };

  if (token) return null;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-3">
      <h2 className="text-xl font-bold">Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}

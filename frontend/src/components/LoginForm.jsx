'use client';
import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: form.email,  // assumes email is also username
        password: form.password
      });
      setToken(res.data.access);
      setMessage('✅ Logged in!');
      localStorage.setItem('authToken', res.data.access);
    } catch {
      setMessage('❌ Login failed. Check credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 bg-white rounded shadow space-y-3">
      <h2 className="text-xl font-bold">Login</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded" required />
      <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">Login</button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}

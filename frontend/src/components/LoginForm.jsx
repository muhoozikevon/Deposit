'use client';

import { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [token, setToken] = useState('');

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/token/', form);
      setToken(res.data.access);
    } catch {
      alert('Login failed.');
    }
  };

  return (
    <div className="max-w-md p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Publisher Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input name="email" onChange={handleChange} className="w-full border p-2" placeholder="Email" />
        <input name="password" type="password" onChange={handleChange} className="w-full border p-2" placeholder="Password" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
      {token && <p className="text-green-600 text-sm mt-2">Token: {token.slice(0, 20)}...</p>}
    </div>
  );
}

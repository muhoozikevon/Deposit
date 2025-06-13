'use client';
import { useState } from 'react';
import axios from 'axios';

export default function PublisherForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    organization: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/publishers/register/', form);
      setMessage('✅ Registration successful. Check email for password.');
    } catch (err) {
      setMessage('❌ Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-3">
      <h2 className="text-xl font-bold">Register Publisher</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization"
        value={form.organization}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}

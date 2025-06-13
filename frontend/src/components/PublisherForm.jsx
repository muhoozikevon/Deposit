'use client';

import { useState } from 'react';
import axios from 'axios';

export default function PublisherForm() {
  const [form, setForm] = useState({ name: '', email: '', organization: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/publishers/register/', form);
      setMessage('✅ Publisher registered successfully!');
      setForm({ name: '', email: '', organization: '' });
    } catch (err) {
      setMessage('❌ Registration failed. Check your input.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 max-w-md">
      <h2 className="text-2xl font-bold text-blue-800">Register Publisher</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border p-2 rounded" required />
      <input name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" className="w-full border p-2 rounded" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {message && <p className="text-sm text-gray-700">{message}</p>}
    </form>
  );
}
// This component allows publishers to register by filling out a form.
// It uses Axios to send a POST request to the backend API.
// The form includes fields for name, email, and organization.
localStorage.setItem('authToken', res.data.access);
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import decodeToken from '../utils/decodeToken';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { login, token } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: form.email,
        password: form.password
      });
      login(res.data.access);
      setMessage('✅ Logged in!');
    } catch {
      setMessage('❌ Login failed.');
    }
  };

  if (token) return <p className="text-green-600">✅ You’re already logged in.</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-4 bg-white rounded shadow space-y-3">
      <h2 className="text-xl font-bold">Login</h2>
      <input name="email" value={form.email} onChange={handleChange} className="w-full p-2 border" placeholder="Email" required />
      <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full p-2 border" placeholder="Password" required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
// This component is a simple login form that allows users to log in using their email and password.
export default function UserBadge() {
  const { token } = useAuth();
  if (!token) return null;

  const decoded = decodeToken(token);
  return (
    <div className="text-sm text-gray-700 bg-white p-2 rounded shadow">
      Logged in as: <strong>{decoded?.username || decoded?.email}</strong>
    </div>
  );
}

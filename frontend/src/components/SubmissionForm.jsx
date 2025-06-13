'use client';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function SubmissionForm() {
  const [form, setForm] = useState({
    publisher: '', title: '', isbn: '', authors: '', publication_date: '', format: 'PDF'
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const { token } = useAuth();

  if (!token) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append('file', file);

    try {
      await axios.post('http://127.0.0.1:8000/api/submissions/', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      });
      setMessage('✅ Submission uploaded!');
    } catch {
      setMessage('❌ Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-3">
      <h2 className="text-xl font-bold">Upload Submission</h2>
      <input name="publisher" placeholder="Publisher ID" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="isbn" placeholder="ISBN" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="authors" placeholder="Authors" onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="date" name="publication_date" onChange={handleChange} className="w-full p-2 border rounded" />
      <select name="format" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="PDF">PDF</option>
        <option value="EPUB">EPUB</option>
      </select>
      <input type="file" onChange={handleFile} className="w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Upload</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}

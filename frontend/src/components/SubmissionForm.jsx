'use client';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

// This component allows publishers to upload submissions.
// It includes fields for publisher ID, title, ISBN, authors, publication date, format, and file upload.

export default function SubmissionForm() {
  const [form, setForm] = useState({
    publisher: '',
    title: '',
    isbn: '',
    authors: '',
    publication_date: '',
    format: 'PDF'
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in form) {
      data.append(key, form[key]);
    }
    if (file) data.append('file', file);

    try {
      await axios.post('http://127.0.0.1:8000/api/submissions/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('✅ Submission uploaded!');
    } catch (err) {
      setMessage('❌ Upload failed. Check fields.');
    }
  };
  const { token } = useAuth();
  if (!token) {
    return <p className="text-red-600">❌ You must be logged in to upload submissions.</p>;
  }
  if (token && !token.startsWith('Publisher')) {
    return <p className="text-red-600">❌ Only publishers can upload submissions.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 max-w-md">
      <h2 className="text-2xl font-bold text-green-800">Upload Submission</h2>
      <input name="publisher" value={form.publisher} onChange={handleChange} placeholder="Publisher ID" className="w-full border p-2 rounded" required />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" required />
      <input name="isbn" value={form.isbn} onChange={handleChange} placeholder="ISBN" className="w-full border p-2 rounded" required />
      <input name="authors" value={form.authors} onChange={handleChange} placeholder="Authors" className="w-full border p-2 rounded" required />
      <input type="date" name="publication_date" value={form.publication_date} onChange={handleChange} className="w-full border p-2 rounded" required />
      <select name="format" value={form.format} onChange={handleChange} className="w-full border p-2 rounded">
        <option value="PDF">PDF</option>
        <option value="EPUB">EPUB</option>
      </select>
      <input type="file" onChange={handleFile} className="w-full border p-2" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Upload</button>
      {message && <p className="text-sm text-gray-700">{message}</p>}
    </form>
  );
}
// This component allows publishers to upload submissions.
// It includes fields for publisher ID, title, ISBN, authors, publication date, format, and file upload.
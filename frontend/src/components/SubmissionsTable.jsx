'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SubmissionsTable() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/submissions/all/')
      .then(res => setSubmissions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="overflow-x-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">All Submissions</h2>
      <table className="table-auto w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-2 py-1 border">Title</th>
            <th className="px-2 py-1 border">ISBN</th>
            <th className="px-2 py-1 border">Format</th>
            <th className="px-2 py-1 border">Author(s)</th>
            <th className="px-2 py-1 border">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((item, idx) => (
            <tr key={idx} className="text-center border-t">
              <td className="px-2 py-1 border">{item.title}</td>
              <td className="px-2 py-1 border">{item.isbn}</td>
              <td className="px-2 py-1 border">{item.format}</td>
              <td className="px-2 py-1 border">{item.authors}</td>
              <td className="px-2 py-1 border">{item.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// Note: Ensure that the API endpoint 'http://
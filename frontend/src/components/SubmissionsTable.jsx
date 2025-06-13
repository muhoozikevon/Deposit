import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import decodeToken from '../utils/decodeToken';


export default function SubmissionsTable() {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const isAdmin = token && decodeToken(token)?.is_admin;

  useEffect(() => {
    if (isAdmin) {
      axios.get('http://127.0.0.1:8000/api/submissions/all/')
        .then(res => setData(res.data))
        .catch(() => setData([]));
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return <p className="text-center text-red-500">🔒 Admins only.</p>;
  }

  return (
    <div className="overflow-x-auto mt-10 bg-white shadow p-4 rounded">
      <h2 className="text-xl font-bold mb-2">All Submissions (Admin View)</h2>
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th>Title</th><th>ISBN</th><th>Format</th><th>Authors</th><th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t text-center">
              <td>{item.title}</td>
              <td>{item.isbn}</td>
              <td>{item.format}</td>
              <td>{item.authors}</td>
              <td>{item.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

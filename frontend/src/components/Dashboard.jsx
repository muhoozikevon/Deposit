'use client';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2'];

export default function Dashboard() {
  return (
    <div className="mt-6 space-y-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">📊 Dashboard Overview</h2>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 rounded p-4 shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Resource Distribution</h3>
        
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 rounded p-4 shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Monthly Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="submissions" fill="#8884d8" />
            <Bar dataKey="validations" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

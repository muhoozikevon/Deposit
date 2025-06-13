'use client';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2'];

const pieData = [
  { name: 'Publishers', value: 40 },
  { name: 'Submissions', value: 60 },
  { name: 'Cataloged', value: 25 },
  { name: 'Preserved', value: 15 },
];

const barData = [
  { name: 'January', submissions: 30, validations: 10 },
  { name: 'February', submissions: 50, validations: 25 },
  { name: 'March', submissions: 70, validations: 50 },
];

export default function Dashboard() {
  return (
    <div className="mt-6 space-y-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">📊 Dashboard Overview</h2>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 rounded p-4 shadow">
        <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Resource Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              isAnimationActive={true}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
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

'use client';

import React from 'react';

// Assuming you have PieChart and BarChart components already
import PieChart from './PieChart';
import BarChart from './BarChart';

export default function ChartsRow() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-4 mb-6 px-4">
      <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Pie Chart</h2>
        <PieChart />
      </div>
      <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Bar Chart</h2>
        <BarChart />
      </div>
    </section>
  );
}
// This component renders a row of charts, including a PieChart and a BarChart.
// It uses Tailwind CSS for styling and is designed to be responsive.
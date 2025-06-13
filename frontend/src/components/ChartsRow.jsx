'use client';

import React from 'react';

// Replace these imports with your actual chart components
import PieChart from './PieChart';
import BarChart from './BarChart';

export default function ChartsRow() {
  return (
    <section
      aria-label="Dashboard charts"
      className="w-full flex flex-col md:flex-row gap-6 px-4"
    >
      {/* Pie Chart Container */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Pie Chart
        </h2>
        <PieChart />
      </div>

      {/* Bar Chart Container */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Bar Chart
        </h2>
        <BarChart />
      </div>
    </section>
  );
}
// This component renders a row of charts (PieChart and BarChart) with appropriate styling.
'use client';
'use client';

import React from 'react';
import ChartsRow from './ChartsRow';
import ModuleLayout from './ModuleLayout';

export default function Dashboard() {
  const stats = [
    { name: 'Publishers', value: 120 },
    { name: 'Submissions', value: 350 },
    { name: 'Validations', value: 275 },
    { name: 'Cataloged Items', value: 210 },
    { name: 'Preserved Copies', value: 190 },
  ];

  return (
    <ModuleLayout>
      {/* Charts at the top */}
      <ChartsRow />

      {/* Stats overview cards below the charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"
          >
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {item.name}
            </h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </ModuleLayout>
  );
}
// This component renders the main dashboard layout with charts and stats overview.

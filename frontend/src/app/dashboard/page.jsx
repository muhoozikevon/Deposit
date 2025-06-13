// ✅ File: src/app/dashboard/page.jsx
'use client';
import ModuleLayout from '../../components/ModuleLayout';

export default function DashboardPage() {
  return (
    <ModuleLayout>
      <h1 className="text-2xl font-bold">📊 Dashboard</h1>
      <p className="text-sm mt-2">Welcome to the dashboard overview.</p>
    </ModuleLayout>
  );
}
// This page serves as the dashboard overview, using the ModuleLayout component to provide a consistent layout.
// It includes a title and a brief welcome message, styled with Tailwind CSS classes for consistency with the rest of the application.
// The 'use client' directive indicates that this component is a client-side component in a Next.js application.
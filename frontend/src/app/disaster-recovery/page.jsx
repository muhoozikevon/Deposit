// ✅ File: src/app/disaster-recovery/page.jsx
'use client';
import ModuleLayout from '../../components/ModuleLayout';

export default function DisasterRecoveryPage() {
  return (
    <ModuleLayout>
      <h1 className="text-2xl font-bold">🧯 Disaster Recovery</h1>
      <p className="text-sm mt-2">Manage backup and recovery plans for stored data.</p>
    </ModuleLayout>
  );
}
// This page provides a module layout for the Disaster Recovery section of the application.
// It includes a title and a brief description of the module's purpose.
// The `ModuleLayout` component is used to maintain consistent styling and structure across the application.
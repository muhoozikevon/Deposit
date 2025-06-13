// ✅ File: src/app/submission/page.jsx
'use client';
import ModuleLayout from '../../components/ModuleLayout';

export default function SubmissionPage() {
  return (
    <ModuleLayout>
      <h1 className="text-2xl font-bold">📥 Submission</h1>
      <p className="text-sm mt-2">Upload and manage deposited resources.</p>
    </ModuleLayout>
  );
}
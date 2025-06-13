import LoginForm from '../components/LoginForm';
import LogoutButton from '../components/LogoutButton';
import SubmissionForm from '../components/SubmissionForm';
import PublisherForm from '../components/PublisherForm';
import PasswordResetForm from '../components/PasswordResetForm';
import SubmissionsTable from '../components/SubmissionsTable';
import UserBadge from '../components/UserBadge';
import { useAuth } from '../context/AuthContext';

export default function LogoutButton() {
  const { logout, token } = useAuth();

  if (!token) return null;

  return (
    <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
}

export default function Home() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-900">Legal Deposit System</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <LoginForm />
        <PublisherForm />
        <SubmissionForm />
      </div>
      <SubmissionsTable />
    </main>
  );
}
// This is the main page of the application.
// It imports the PublisherForm, SubmissionForm, and SubmissionsTable components.
// Inside the JSX
<SubmissionsTable />

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 flex flex-col md:flex-row items-start justify-center gap-10">
      <PublisherForm />
      <SubmissionForm />
    </main>
  );
}
// This is the main page of the application.
// It imports the PublisherForm and SubmissionForm components and renders them side by side.
// The layout is responsive, adjusting to different screen sizes using Tailwind CSS classes.
// The main container has a light gray background and padding for better spacing.
// The PublisherForm component allows publishers to register by filling out a form.
// The SubmissionForm component allows publishers to upload submissions with various details and a file.
// Both forms are styled using Tailwind CSS for a clean and modern look.
// The main page serves as the entry point for publishers to interact with the application.
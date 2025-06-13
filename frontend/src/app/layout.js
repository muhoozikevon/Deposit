import './globals.css';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Legal Deposit System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
// This is the root layout for the application, which includes global styles and the authentication context provider.
// It uses the Inter font from Google Fonts and sets the document language to English.
// The metadata object sets the title of the application to "Legal Deposit System".
// The AuthProvider wraps the children components, providing authentication context throughout the app.
// The layout is structured to ensure that all pages have consistent styling and access to authentication features.
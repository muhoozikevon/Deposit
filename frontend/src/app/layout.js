import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Legal Deposit',
  description: 'Deposit system',
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
// This is the root layout of the application.
// It imports the Inter font from Google Fonts and applies it globally. 
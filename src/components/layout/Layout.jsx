import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-100 via-teal-50 to-blue-100 text-slate-800">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
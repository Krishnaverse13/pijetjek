
import React from 'react';
import AdminSidebar from '../Admin/AdminSidebar';
import { APP_NAME } from '../../constants';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-neutral-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-neutral-200">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-xl font-semibold text-neutral-800">{APP_NAME} - Admin Panel</h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-100 p-6">
          {children}
        </main>
         <footer className="bg-white border-t border-neutral-200 py-4 text-center text-sm text-neutral-500">
            <p>2025 Pijat-jek hak cipta di lindungi oleh kopral jono </p>
            <p className="text-xs text-neutral-400 mt-1">slapped together by krishnaverse</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
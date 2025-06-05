
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import TherapistListPage from './pages/TherapistListPage';
import TherapistDetailPage from './pages/TherapistDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { APP_ROUTES, APP_ADMIN_ROUTES } from './constants';

// Admin components
import AdminLayout from './components/Layout/AdminLayout';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import AdminTherapistManagementPage from './pages/Admin/AdminTherapistManagementPage';
import AdminUserManagementPage from './pages/Admin/AdminUserManagementPage';
import AdminBookingManagementPage from './pages/Admin/AdminBookingManagementPage'; // Ensured relative path

// AI Chat Components
import AIChatWidget from './components/AIChatWidget';


const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <AdminLayout>
        <Routes>
          <Route path={APP_ADMIN_ROUTES.DASHBOARD} element={<AdminDashboardPage />} />
          <Route path={APP_ADMIN_ROUTES.THERAPISTS} element={<AdminTherapistManagementPage />} />
          <Route path={APP_ADMIN_ROUTES.USERS} element={<AdminUserManagementPage />} />
          <Route path={APP_ADMIN_ROUTES.BOOKINGS} element={<AdminBookingManagementPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Or a specific Admin NotFound */}
        </Routes>
      </AdminLayout>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.THERAPISTS} element={<TherapistListPage />} />
          <Route path={APP_ROUTES.THERAPIST_DETAIL_PARAM} element={<TherapistDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      {!isAdminRoute && <AIChatWidget />} {/* Tambahkan AI Chat Widget di sini */}
    </div>
  );
};

export default App;

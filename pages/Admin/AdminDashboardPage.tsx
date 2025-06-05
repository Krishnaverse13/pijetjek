import React from 'react';
import StatCard from '../../components/Admin/StatCard';
import { MOCK_THERAPISTS, MOCK_ADMIN_USERS, MOCK_ADMIN_BOOKINGS, APP_ADMIN_ROUTES } from '../../constants'; // Added APP_ADMIN_ROUTES
import { BriefcaseIcon, UserGroupIcon, ClipboardDocumentListIcon, CurrencyDollarIcon } from '../../components/icons/HeroIcons';

const AdminDashboardPage: React.FC = () => {
  const totalTherapists = MOCK_THERAPISTS.length;
  const totalUsers = MOCK_ADMIN_USERS.length;
  const totalBookings = MOCK_ADMIN_BOOKINGS.length;
  const totalRevenue = MOCK_ADMIN_BOOKINGS.reduce((sum, booking) => {
    return booking.status === 'Selesai' ? sum + booking.price : sum; // Updated to Indonesian status
  }, 0);

  // Format revenue to Indonesian Rupiah
  const formattedRevenue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(totalRevenue);


  return (
    <div>
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Ringkasan Dasbor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Terapis" 
          value={totalTherapists} 
          icon={<BriefcaseIcon className="w-6 h-6" />} 
          colorClass="bg-cyan-500"
        />
        <StatCard 
          title="Total Pengguna" 
          value={totalUsers} 
          icon={<UserGroupIcon className="w-6 h-6" />}
          colorClass="bg-amber-500"
        />
        <StatCard 
          title="Total Pemesanan" 
          value={totalBookings} 
          icon={<ClipboardDocumentListIcon className="w-6 h-6" />}
          colorClass="bg-green-500"
        />
        <StatCard 
          title="Total Pendapatan (Selesai)" 
          value={formattedRevenue} 
          icon={<CurrencyDollarIcon className="w-6 h-6" />}
          colorClass="bg-purple-500"
          description="Dari pemesanan yang selesai"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">Aktivitas Terkini (Placeholder)</h3>
          <ul className="space-y-3">
            <li className="text-sm text-neutral-600">Terapis baru "Joko P." mendaftar - menunggu tinjauan.</li>
            <li className="text-sm text-neutral-600">Pemesanan #B007 dikonfirmasi untuk "Siti Aminah".</li>
            <li className="text-sm text-neutral-600">Pengguna "Maria L." menyelesaikan pemesanan ke-3 nya.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">Tautan Cepat (Placeholder)</h3>
           <div className="space-y-2">
            <a href={`#${APP_ADMIN_ROUTES.THERAPISTS}`} className="block text-primary hover:underline">Kelola Terapis</a>
            <a href={`#${APP_ADMIN_ROUTES.USERS}`} className="block text-primary hover:underline">Lihat Pengguna</a>
            <a href="#" className="block text-primary hover:underline">Pengaturan Platform</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
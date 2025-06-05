import React, { useState } from 'react';
import { MOCK_ADMIN_BOOKINGS } from '../../constants';
import { AdminBooking, AdminBookingStatus } from '../../types';
import { MagnifyingGlassIcon, CalendarDaysIcon } from '../../components/icons/HeroIcons';

const AdminBookingManagementPage: React.FC = () => {
  const [bookings, setBookings] = useState<AdminBooking[]>(MOCK_ADMIN_BOOKINGS);
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: AdminBookingStatus) => {
    switch (status) {
      case 'Selesai': return 'text-green-700 bg-green-100';
      case 'Dikonfirmasi': return 'text-blue-700 bg-blue-100';
      case 'Diajukan': return 'text-yellow-700 bg-yellow-100';
      case 'Dibatalkan': return 'text-red-700 bg-red-100';
      case 'Menunggu Pembayaran': return 'text-purple-700 bg-purple-100';
      default: return 'text-neutral-700 bg-neutral-100';
    }
  };

  const handleStatusChange = (bookingId: string, newStatus: AdminBookingStatus) => {
    // Mock update
    setBookings(prevBookings =>
      prevBookings.map(b => 
        b.id === bookingId ? { ...b, status: newStatus } : b
      )
    );
    console.log(`Booking ${bookingId} status changed to ${newStatus} (mock)`);
  };

  const filteredBookings = bookings.filter(booking => 
    booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.therapistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const availableStatuses: AdminBookingStatus[] = ['Diajukan', 'Dikonfirmasi', 'Selesai', 'Dibatalkan', 'Menunggu Pembayaran'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Manajemen Pemesanan</h2>

      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari pemesanan berdasarkan ID, klien, terapis, atau layanan..."
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">ID Pemesanan</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Klien</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Terapis</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Layanan</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Tanggal</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Harga (IDR)</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{booking.clientName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{booking.therapistName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{booking.serviceName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{new Date(booking.bookingDate).toLocaleDateString('id-ID')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{booking.price.toLocaleString('id-ID')}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                    <CalendarDaysIcon className="w-3 h-3 mr-1 mt-0.5" />
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   <select 
                    value={booking.status} 
                    onChange={(e) => handleStatusChange(booking.id, e.target.value as AdminBookingStatus)}
                    className="text-xs border-neutral-300 rounded-md focus:ring-primary focus:border-primary p-1"
                  >
                    {availableStatuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <a href="#" className="text-primary hover:text-secondary ml-2 text-xs">Lihat Detail</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredBookings.length === 0 && (
          <p className="text-center text-neutral-500 py-8">Tidak ada pemesanan yang cocok dengan pencarian Anda.</p>
        )}
      </div>
    </div>
  );
};

export default AdminBookingManagementPage;
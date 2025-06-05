import React, { useState } from 'react';
import { MOCK_ADMIN_USERS } from '../../constants';
import { AdminUser, AdminUserStatus } from '../../types'; // Ensure AdminUserStatus is imported
import { MagnifyingGlassIcon, UserCircleIcon } from '../../components/icons/HeroIcons';

const AdminUserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>(MOCK_ADMIN_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: AdminUser['status']) => {
    return status === 'Aktif' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  };

  const handleStatusToggle = (userId: string) => {
    // Mock update
    setUsers(prevUsers => 
      prevUsers.map(u => 
        u.id === userId ? { ...u, status: u.status === 'Aktif' ? 'Ditangguhkan' : 'Aktif' } : u
      )
    );
    console.log(`User ${userId} status toggled (mock)`);
  };
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-neutral-800">Manajemen Pengguna (Klien)</h2>
        {/* <button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
          Tambah Pengguna Baru
        </button> */}
      </div>

       <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari pengguna berdasarkan nama atau email..."
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Pengguna</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Tanggal Bergabung</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Pemesanan</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <UserCircleIcon className="w-10 h-10 text-neutral-400" /> {/* Generic icon */}
                    <div className="ml-4">
                      <div className="text-sm font-medium text-neutral-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{new Date(user.joinDate).toLocaleDateString('id-ID')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 text-center">{user.totalBookings}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleStatusToggle(user.id)}
                    className={`text-xs py-1 px-2 rounded-md ${user.status === 'Aktif' ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                  >
                    {user.status === 'Aktif' ? 'Tangguhkan' : 'Aktifkan'}
                  </button>
                  <a href="#" className="text-primary hover:text-secondary ml-2 text-xs">Lihat Detail</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredUsers.length === 0 && (
          <p className="text-center text-neutral-500 py-8">Tidak ada pengguna yang cocok dengan pencarian Anda.</p>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagementPage;
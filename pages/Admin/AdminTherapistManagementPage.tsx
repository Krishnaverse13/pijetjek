import React, { useState } from 'react';
import { MOCK_THERAPISTS } from '../../constants';
import { Therapist, TherapistAdminStatus } from '../../types';
import { ShieldCheckIcon, MagnifyingGlassIcon } from '../../components/icons/HeroIcons';

const AdminTherapistManagementPage: React.FC = () => {
  const [therapists, setTherapists] = useState<Therapist[]>(MOCK_THERAPISTS);
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status?: TherapistAdminStatus) => {
    switch (status) {
      case 'Disetujui': return 'text-green-600 bg-green-100';
      case 'Menunggu Tinjauan': return 'text-amber-600 bg-amber-100';
      case 'Ditolak': return 'text-red-600 bg-red-100';
      default: return 'text-neutral-500 bg-neutral-100';
    }
  };

  const handleStatusChange = (therapistId: string, newStatus: TherapistAdminStatus) => {
    // This is a mock update. In a real app, this would be an API call.
    setTherapists(prevTherapists => 
      prevTherapists.map(t => 
        t.id === therapistId ? { ...t, adminStatus: newStatus } : t
      )
    );
    console.log(`Therapist ${therapistId} status changed to ${newStatus} (mock)`);
  };

  const filteredTherapists = therapists.filter(therapist => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      therapist.name.toLowerCase().includes(lowerSearchTerm) ||
      (therapist.email && therapist.email.toLowerCase().includes(lowerSearchTerm)) ||
      therapist.location.toLowerCase().includes(lowerSearchTerm)
    );
  });
  
  const availableAdminStatuses: TherapistAdminStatus[] = ['Disetujui', 'Menunggu Tinjauan', 'Ditolak'];


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-neutral-800">Manajemen Terapis</h2>
        <button className="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
          Tambah Terapis Baru
        </button>
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
            placeholder="Cari terapis berdasarkan nama, email, atau lokasi..."
            className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead className="bg-neutral-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Nama</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Lokasi</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Spesialisasi</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Rating</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {filteredTherapists.map((therapist) => (
              <tr key={therapist.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full object-cover" src={therapist.imageUrl} alt={therapist.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-neutral-900">{therapist.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{therapist.email || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{therapist.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                  {therapist.specialties.slice(0,2).join(', ')}
                  {therapist.specialties.length > 2 ? '...' : ''}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">{therapist.rating.toFixed(1)} ({therapist.reviewCount})</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(therapist.adminStatus)}`}>
                    <ShieldCheckIcon className="w-3 h-3 mr-1 mt-0.5" />
                    {therapist.adminStatus || 'N/A'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <select 
                    value={therapist.adminStatus || ''} 
                    onChange={(e) => handleStatusChange(therapist.id, e.target.value as TherapistAdminStatus)}
                    className="text-xs border-neutral-300 rounded-md focus:ring-primary focus:border-primary p-1"
                  >
                    {availableAdminStatuses.map(status => (
                       <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                  <a href="#" className="text-primary hover:text-secondary ml-2 text-xs">Edit</a>
                  <a href="#" className="text-red-600 hover:text-red-800 ml-2 text-xs">Hapus</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTherapists.length === 0 && (
          <p className="text-center text-neutral-500 py-8">Tidak ada terapis yang cocok dengan pencarian Anda.</p>
        )}
      </div>
    </div>
  );
};

export default AdminTherapistManagementPage;
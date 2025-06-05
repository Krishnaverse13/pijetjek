import React, { useState, useEffect } from 'react';
import TherapistCard from '../components/TherapistCard';
import { Therapist } from '../types';
import { fetchTherapists } from '../services/therapistService';
import LoadingSpinner from '../components/LoadingSpinner';
import { MagnifyingGlassIcon } from '../components/icons/HeroIcons';
import MapDisplay from '../components/MapDisplay'; // Import the new map component

const TherapistListPage: React.FC = () => {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  useEffect(() => {
    const loadTherapists = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTherapists();
        setTherapists(data);
      } catch (error) {
        console.error("Failed to fetch therapists:", error);
        // Handle error state in UI if necessary
      }
      setIsLoading(false);
    };
    loadTherapists();
  }, []);

  const allSpecialties = React.useMemo(() => {
    const specialties = new Set<string>();
    therapists.forEach(t => t.specialties.forEach(s => specialties.add(s)));
    return Array.from(specialties).sort();
  }, [therapists]);

  const filteredTherapists = therapists.filter(therapist => {
    const nameMatch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const specialtyMatch = selectedSpecialty === '' || therapist.specialties.includes(selectedSpecialty);
    const bioMatch = therapist.bio.toLowerCase().includes(searchTerm.toLowerCase());
    // Location match can be added if needed, e.g., therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
    return (nameMatch || bioMatch) && specialtyMatch;
  });

  if (isLoading && therapists.length === 0) { // Show main spinner only on initial load
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-neutral-800 mb-8 text-center">Temukan Terapis Anda</h1>
      
      {/* Map Display Area */}
      {!isLoading && <MapDisplay therapists={filteredTherapists} />}
      {isLoading && therapists.length > 0 && <div className="h-[400px] w-full rounded-lg shadow-md overflow-hidden mb-8 bg-neutral-200 flex justify-center items-center"><LoadingSpinner/></div>}


      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-1">
              Cari berdasarkan Nama atau Kata Kunci
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="cth: Budi, pijat olahraga"
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                aria-label="Cari terapis berdasarkan nama atau kata kunci"
              />
            </div>
          </div>
          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-neutral-700 mb-1">
              Filter berdasarkan Spesialisasi
            </label>
            <select
              id="specialty"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="block w-full py-2 px-3 border border-neutral-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              aria-label="Filter terapis berdasarkan spesialisasi"
            >
              <option value="">Semua Spesialisasi</option>
              {allSpecialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {isLoading && therapists.length === 0 ? ( // This case is handled by the top-level spinner
        null
      ) : filteredTherapists.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTherapists.map(therapist => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-600 text-lg py-10">
          Tidak ada terapis yang cocok dengan kriteria Anda. Coba sesuaikan pencarian atau filter Anda.
        </p>
      )}
    </div>
  );
};

export default TherapistListPage;
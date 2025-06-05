
import React from 'react';
import { Link } from 'react-router-dom';
import { Therapist } from '../../types';
import { APP_ROUTES } from '../../constants';
import StarRating from './StarRating';
import { MapPinIcon, SparklesIcon } from './icons/HeroIcons';

interface TherapistCardProps {
  therapist: Therapist;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  const availabilityColor = therapist.availability === 'Tersedia Sekarang' ? 'bg-green-500' : 
                            therapist.availability === 'Segera Tersedia' ? 'bg-yellow-500' : 'bg-gray-500';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
      <img src={therapist.imageUrl} alt={therapist.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-1">{therapist.name}</h3>
        <div className="flex items-center mb-2">
          <StarRating rating={therapist.rating} />
          <span className="ml-2 text-sm text-neutral-600">({therapist.reviewCount} ulasan)</span>
        </div>
        <div className="mb-3">
          {therapist.specialties.slice(0, 2).map(specialty => (
            <span key={specialty} className="inline-block bg-primary/10 text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              {specialty}
            </span>
          ))}
          {therapist.specialties.length > 2 && (
            <span className="inline-block bg-neutral-200 text-neutral-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              +{therapist.specialties.length - 2} lainnya
            </span>
          )}
        </div>
        
        <div className="flex items-center text-sm text-neutral-600 mb-1">
          <MapPinIcon className="w-4 h-4 mr-1 text-primary" />
          <span>{therapist.location}</span>
        </div>

        <div className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full text-white ${availabilityColor} mb-4`}>
          <SparklesIcon className="w-3 h-3 mr-1" />
          {therapist.availability}
        </div>

        <p className="text-neutral-600 text-sm mb-4 h-16 overflow-hidden text-ellipsis">
          {therapist.bio.substring(0, 100)}{therapist.bio.length > 100 ? '...' : ''}
        </p>
        <Link
          to={APP_ROUTES.THERAPIST_DETAIL(therapist.id)}
          className="block w-full text-center bg-secondary hover:bg-primary text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Lihat Profil & Pesan
        </Link>
      </div>
    </div>
  );
};

export default TherapistCard;
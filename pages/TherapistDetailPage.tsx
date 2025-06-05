
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Therapist, Service } from '../types';
import { fetchTherapistById } from '../services/therapistService';
import { APP_ROUTES } from '../constants';
import StarRating from '../components/StarRating';
import ServiceItem from '../components/ServiceItem';
import BookingModal from '../components/BookingModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { ArrowLeftIcon, MapPinIcon, SparklesIcon, CheckCircleIcon } from '../components/icons/HeroIcons';

const TherapistDetailPage: React.FC = () => {
  const { therapistId } = useParams<{ therapistId: string }>();
  const navigate = useNavigate();
  const [therapist, setTherapist] = useState<Therapist | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  useEffect(() => {
    if (!therapistId) {
      navigate(APP_ROUTES.NOT_FOUND); 
      return;
    }
    const loadTherapist = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTherapistById(therapistId);
        if (data) {
          setTherapist(data);
        } else {
          navigate(APP_ROUTES.NOT_FOUND);
        }
      } catch (error) {
        console.error("Failed to fetch therapist details:", error);
        navigate(APP_ROUTES.NOT_FOUND);
      }
      setIsLoading(false);
    };
    loadTherapist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [therapistId, navigate]);

  const handleSelectService = (service: Service) => {
    setSelectedService(service.id === selectedService?.id ? null : service);
  };

  const handleOpenBookingModal = () => {
    if (selectedService) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmBooking = () => {
    // Simulate booking confirmation
    console.log('Booking confirmed for:', selectedService, 'with therapist:', therapist?.name);
    setIsModalOpen(false);
    setIsBookingConfirmed(true);
    // Reset selection after a delay to show confirmation message
    setTimeout(() => {
        setIsBookingConfirmed(false);
        setSelectedService(null);
    }, 5000);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!therapist) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-neutral-700">Terapis tidak ditemukan.</h2>
        <Link to={APP_ROUTES.THERAPISTS} className="text-primary hover:underline mt-4 inline-block">
          Kembali ke Daftar Therapist
        </Link>
      </div>
    );
  }
  
  const availabilityColor = therapist.availability === 'Tersedia Sekarang' ? 'text-green-600' : 
                            therapist.availability === 'Segera Tersedia' ? 'text-yellow-600' : 'text-gray-600';


  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(APP_ROUTES.THERAPISTS)}
        className="mb-6 inline-flex items-center text-primary hover:text-secondary transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Kembali ke Daftar Therapist
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-64 w-full object-cover md:w-64" src={therapist.imageUrl} alt={therapist.name} />
          </div>
          <div className="p-8 flex-grow">
            <h1 className="text-3xl font-bold text-neutral-800 mb-2">{therapist.name}</h1>
            <div className="flex items-center mb-3">
              <StarRating rating={therapist.rating} />
              <span className="ml-2 text-sm text-neutral-600">({therapist.reviewCount} ulasan)</span>
            </div>
            <div className="mb-3">
              {therapist.specialties.map(specialty => (
                <span key={specialty} className="inline-block bg-primary/10 text-primary text-xs font-semibold mr-2 mb-1 px-2.5 py-0.5 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
             <div className={`flex items-center text-sm font-medium ${availabilityColor} mb-1`}>
                <SparklesIcon className="w-4 h-4 mr-1" />
                {therapist.availability}
            </div>
            <div className="flex items-center text-sm text-neutral-600 mb-4">
                <MapPinIcon className="w-4 h-4 mr-1 text-primary" />
                <span>{therapist.location}</span>
            </div>
            <p className="text-neutral-700 leading-relaxed">{therapist.bio}</p>
          </div>
        </div>

        <div className="p-8 border-t border-neutral-200">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Layanan yang Ditawarkan</h2>
          {isBookingConfirmed && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center">
              <CheckCircleIcon className="w-6 h-6 mr-3" />
              <div>
                <h3 className="font-semibold">Pemesanan Diajukan!</h3>
                <p className="text-sm">Permintaan Anda untuk "{selectedService?.name}" telah terkirim. Terapis akan segera menghubungi Anda untuk konfirmasi.</p>
              </div>
            </div>
          )}
          {!isBookingConfirmed && therapist.services.length > 0 ? (
            <div className="space-y-4 mb-6">
              {therapist.services.map(service => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  onSelect={handleSelectService}
                  isSelected={selectedService?.id === service.id}
                />
              ))}
            </div>
          ) : !isBookingConfirmed ? (
            <p className="text-neutral-600">Belum ada layanan yang terdaftar untuk terapis ini.</p>
          ) : null}
          
          {!isBookingConfirmed && selectedService && (
            <button
              onClick={handleOpenBookingModal}
              className="w-full md:w-auto bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
              disabled={!selectedService}
            >
              Pesan "{selectedService.name}"
            </button>
          )}
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        therapist={therapist}
        selectedService={selectedService}
        onConfirmBooking={handleConfirmBooking}
      />
    </div>
  );
};

export default TherapistDetailPage;
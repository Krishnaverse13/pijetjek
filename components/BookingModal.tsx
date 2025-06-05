
import React from 'react';
import { Service, Therapist } from '../../types';
import { XMarkIcon, CalendarDaysIcon, CheckCircleIcon } from './icons/HeroIcons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  therapist: Therapist;
  selectedService: Service | null;
  onConfirmBooking: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, therapist, selectedService, onConfirmBooking }) => {
  if (!isOpen || !selectedService) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-neutral-800">Konfirmasi Pemesanan</h2>
          <button onClick={onClose} className="text-neutral-500 hover:text-neutral-700">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-neutral-700"><strong className="font-medium">Terapis:</strong> {therapist.name}</p>
          <p className="text-neutral-700"><strong className="font-medium">Layanan:</strong> {selectedService.name}</p>
          <p className="text-neutral-700"><strong className="font-medium">Durasi:</strong> {selectedService.durationMinutes} menit</p>
          <p className="text-neutral-700"><strong className="font-medium">Harga:</strong> {selectedService.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</p>
        </div>

        <div className="mb-6 p-3 bg-primary/10 rounded-md">
            <div className="flex items-center text-primary">
                <CalendarDaysIcon className="w-5 h-5 mr-2"/>
                <p className="text-sm">
                    Terapis akan segera menghubungi Anda untuk mengkonfirmasi waktu dan detail pastinya.
                </p>
            </div>
        </div>


        <button
          onClick={onConfirmBooking}
          className="w-full bg-secondary hover:bg-primary text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <CheckCircleIcon className="w-5 h-5 mr-2" />
          Ajukan Pemesanan
        </button>
        <button
            onClick={onClose}
            className="w-full mt-2 text-center text-neutral-600 hover:text-neutral-800 py-2 px-4 rounded-lg transition-colors"
        >
            Batal
        </button>
      </div>
    </div>
  );
};

export default BookingModal;

import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../constants';
import { ExclamationTriangleIcon } from '../components/icons/HeroIcons';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <ExclamationTriangleIcon className="w-24 h-24 text-amber-500 mb-6" />
      <h1 className="text-5xl font-bold text-neutral-800 mb-4">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-xl text-neutral-600 mb-8">
        Oops! Halaman yang Anda cari sepertinya tidak ada.
      </p>
      <Link
        to={APP_ROUTES.HOME}
        className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
      >
        Ke Beranda
      </Link>
    </div>
  );
};

export default NotFoundPage;
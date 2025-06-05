
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../constants';
import { MagnifyingGlassIcon, UserGroupIcon, CalendarDaysIcon } from '../components/icons/HeroIcons';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-xl">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Temukan Terapis Pijat Ideal Anda</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Rasakan terapi pijat profesional dalam kenyamanan rumah Anda. Terhubung dengan terapis terampil, siap memberikan relaksasi dan kelegaan.
          </p>
          <Link
            to={APP_ROUTES.THERAPISTS}
            className="bg-white text-secondary hover:bg-neutral-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md inline-flex items-center"
          >
            <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
            Cari Terapis Sekarang
          </Link>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-neutral-800 mb-12">Cara Kerjanya</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">1. Jelajahi Terapis</h3>
            <p className="text-neutral-600">Jelajahi profil, spesialisasi, dan ulasan terapis bersertifikat.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <CalendarDaysIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">2. Pilih Layanan & Ajukan</h3>
            <p className="text-neutral-600">Pilih dari berbagai layanan pijat dan ajukan pemesanan.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            {/* A placeholder icon or image can go here */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary mx-auto mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.426 2.003-1.135A2.25 2.25 0 0110.5 8.25c.806 0 1.533.426 2.003 1.135A2.25 2.25 0 0014.503 10.25h.006c.806 0 1.533-.426 2.003-1.135A2.25 2.25 0 0118.503 8.25c.806 0 1.533.426 2.003 1.135A2.25 2.25 0 0022.5 10.5c0 .806-.426 1.533-1.135 2.003a2.25 2.25 0 01-1.115 2.003A2.25 2.25 0 0018.503 16.5h-.006a2.25 2.25 0 01-2.003 1.135A2.25 2.25 0 0014.5 18.5c-.806 0-1.533-.426-2.003-1.135a2.25 2.25 0 01-1.115-2.003A2.25 2.25 0 009.5 14.5h-.006a2.25 2.25 0 01-2.003-1.135A2.25 2.25 0 005.5 12.5c0-.806.426-1.533 1.135-2.003A2.25 2.25 0 017.75 8.5c-.135.208-.25.425-.35.653A2.991 2.991 0 006.633 10.25zm13.5 1.5a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5zm-3.75 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            </svg>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">3. Santai & Nikmati</h3>
            <p className="text-neutral-600">Terapis pilihan Anda akan datang ke tempat Anda. Nikmati pijat profesional.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-200/70 rounded-lg">
        <h2 className="text-3xl font-semibold text-neutral-800 mb-6">Siap untuk Bersantai?</h2>
        <p className="text-lg text-neutral-700 mb-8 max-w-xl mx-auto">
          Ambil langkah pertama menuju relaksasi dan kesejahteraan. Platform kami memudahkan Anda menemukan dan memesan terapi pijat yang Anda butuhkan.
        </p>
        <Link
            to={APP_ROUTES.THERAPISTS}
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md inline-flex items-center"
          >
            Lihat Terapis Tersedia
          </Link>
      </section>
    </div>
  );
};

export default HomePage;
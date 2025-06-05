
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, APP_ROUTES } from '../../constants';
import { MenuIcon, UserCircleIcon } from '../icons/HeroIcons'; // Placeholder for menu/user icons

const Header: React.FC = () => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={APP_ROUTES.HOME} className="text-2xl font-bold text-white hover:text-neutral-100 transition-colors">
          {APP_NAME}
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to={APP_ROUTES.HOME} className="text-white hover:text-neutral-200 transition-colors">
            Beranda
          </Link>
          <Link to={APP_ROUTES.THERAPISTS} className="text-white hover:text-neutral-200 transition-colors">
            Cari Therapist
          </Link>
          {/* Placeholder for future auth/user profile */}
          <button className="text-white hover:text-neutral-200 transition-colors">
            <UserCircleIcon className="w-7 h-7" />
          </button>
          {/* Placeholder for mobile menu */}
          {/* <button className="md:hidden text-white">
            <MenuIcon className="w-6 h-6" />
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
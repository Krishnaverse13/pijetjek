
import React from 'react';
import { NavLink } from 'react-router-dom';
import { APP_ADMIN_ROUTES, APP_NAME } from '../../constants';
import { HomeIcon, BriefcaseIcon, UserGroupIcon, ClipboardDocumentListIcon, CogIcon } from '../icons/HeroIcons';

const AdminSidebar: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-3 text-neutral-100 hover:bg-neutral-700 transition-colors rounded-md ${
      isActive ? 'bg-neutral-700 font-semibold' : ''
    }`;

  return (
    <div className="w-64 bg-neutral-800 text-white flex flex-col p-4 space-y-2 shadow-lg">
      <div className="text-2xl font-bold text-center py-4 mb-4 border-b border-neutral-700">
        {APP_NAME}
      </div>
      <nav className="flex-grow">
        <NavLink to={APP_ADMIN_ROUTES.DASHBOARD} className={navLinkClass}>
          <HomeIcon className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink to={APP_ADMIN_ROUTES.THERAPISTS} className={navLinkClass}>
          <BriefcaseIcon className="w-5 h-5 mr-3" />
          Therapists
        </NavLink>
        <NavLink to={APP_ADMIN_ROUTES.USERS} className={navLinkClass}>
          <UserGroupIcon className="w-5 h-5 mr-3" />
          Users
        </NavLink>
        <NavLink to={APP_ADMIN_ROUTES.BOOKINGS} className={navLinkClass}>
          <ClipboardDocumentListIcon className="w-5 h-5 mr-3" />
          Bookings
        </NavLink>
        {/* Placeholder for settings or other admin links */}
        {/* <NavLink to="/admin/settings" className={navLinkClass}>
          <CogIcon className="w-5 h-5 mr-3" />
          Settings
        </NavLink> */}
      </nav>
      <div className="mt-auto pt-4 border-t border-neutral-700">
         <p className="text-xs text-neutral-400 text-center">2025 Pijat-jek hak cipta di lindungi oleh kopral jono </p>
      </div>
    </div>
  );
};

export default AdminSidebar;
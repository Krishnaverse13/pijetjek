// Using HeroIcons (MIT License) - https://heroicons.com
// For simplicity, including SVG content directly. In a larger app, consider @heroicons/react.
import React from 'react';

interface IconProps {
  className?: string;
}

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const UserCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => ( // Solid Star
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.502 2.825c-.995.608-2.23-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
  </svg>
);

export const CurrencyDollarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M14.615 1.585a.75.75 0 01.081.034l5.462 2.185a.75.75 0 01.258 1.159l-4.45 6.675a.75.75 0 01-1.13.258l-1.119-.746a11.25 11.25 0 00-4.423 0l-1.12 0.746a.75.75 0 01-1.13-.258L2.5 5.004a.75.75 0 01.258-1.159L8.22.414a.75.75 0 01.082-.034c.44-.176.932-.176 1.372 0L12 1.23l2.385-1.008c.44-.176.932-.176 1.372 0zM12 3.289l-1.848.739a.75.75 0 01-.535-.036L5.72 2.055l2.488 3.732a.75.75 0 01.09.442A12.744 12.744 0 0012 7.5c.851 0 1.673-.106 2.453-.306a.75.75 0 01.09-.442l2.488-3.732-3.897 1.948a.75.75 0 01-.535.036L12 3.289zm0 16.411c1.119 0 2.19-.151 3.2-.428V11.92a6.75 6.75 0 00-1.144-3.945l-.001-.002-1.414-.942a3 3 0 00-3.282 0L8.358 7.977a6.75 6.75 0 00-1.144 3.945v7.364c1.01.277 2.081.428 3.2.428z" clipRule="evenodd" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const CalendarDaysIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a8.906 8.906 0 00-1.264-4.556 8.906 8.906 0 00-2.901-2.902A8.906 8.906 0 0012.72 10.5H12a2.25 2.25 0 00-2.25 2.25v.806M15 10.062A7.498 7.498 0 0012.001 9h-.002A7.498 7.498 0 009 10.062M15 10.062c0-2.638-2.087-4.75-4.688-4.75S5.625 7.424 5.625 10.062m9.375 0A6.725 6.725 0 0118 11.25v.806c0 .837-.28 1.612-.778 2.25M15 10.062V10.5m0 0v.438M11.25 10.5H12m-7.5 0h.75M12 18.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zM15 18.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zM18 18.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zM19.5 18.75a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.502 2.825c-.995.608-2.23-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

// --- Icons for Admin Dashboard ---
export const HomeIcon: React.FC<IconProps> = ({ className }) => ( // Outline Home for dashboard
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => ( // For Therapists / Services
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.155l-8.205-4.894a1.875 1.875 0 00-2.09 0L1.75 14.155M2.25 15.33V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-2.67m-19.5 0V9A2.25 2.25 0 014.5 6.75h15A2.25 2.25 0 0121.75 9v6.33m-12.451-4.868a1.875 1.875 0 100-3.323 1.875 1.875 0 000 3.323z" />
  </svg>
);

export const ClipboardDocumentListIcon: React.FC<IconProps> = ({ className }) => ( // For Bookings
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM10.5 15H12m1.5 0H15m-4.5-3H12m1.5 0H15" />
  </svg>
);

export const CogIcon: React.FC<IconProps> = ({ className }) => ( // Settings Icon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m1.5 0H21m-1.5 0H12m0 0V2.25M12 5.25v1.5m0 0v1.5m0 0v1.5m0 0V12m6.75-6.75h-1.5M18 3.75h-1.5m-1.5 0h-1.5m0 0H12m0 0H9.75M7.5 3.75h1.5M6 5.25h1.5m0 0H9m0 0H7.5m1.5 0H6m9 0h1.5m0 0h1.5m0 0h1.5M12 12v9.75m0-1.5V18m0-1.5v-1.5m0-1.5V12M3.25 6.75l1.5 1.5M4.75 8.25l1.5 1.5M6.25 9.75l1.5 1.5M7.75 11.25l1.5 1.5M16.25 6.75l-1.5 1.5M14.75 8.25l-1.5 1.5M13.25 9.75l-1.5 1.5M11.75 11.25l-1.5 1.5M12 12H2.25m9.75 0h9.75" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => ( // For status/approval
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
);

// --- Icons for AI Chat ---
export const ChatBubbleOvalLeftEllipsisIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.696-3.091c-.34-.284-.75-.463-1.196-.534a6.622 6.622 0 01-2.103-.061 7.404 7.404 0 01-2.91-1.42C5.242 14.93 4.5 13.657 4.5 12.399V8.113c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072l3.696 3.091c.34.284.75.463 1.196.534a6.622 6.622 0 012.103.061c.954.17 1.823.626 2.547 1.275M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 0H10.5V3.75m0 2.25V3.75m0 2.25V3.75M7.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3 1.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
  </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);


// Add more icons as needed

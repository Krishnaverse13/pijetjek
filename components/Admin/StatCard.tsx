import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  colorClass?: string; // e.g., 'bg-blue-500', 'text-green-500'
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, description, colorClass = 'bg-primary' }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
      <div className={`p-3 rounded-full text-white ${colorClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-neutral-500 font-medium">{title}</p>
        <p className="text-3xl font-bold text-neutral-800">{value}</p>
        {description && <p className="text-xs text-neutral-400 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default StatCard;
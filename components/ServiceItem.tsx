
import React from 'react';
import { Service } from '../../types';
import { ClockIcon, CurrencyDollarIcon } from './icons/HeroIcons';

interface ServiceItemProps {
  service: Service;
  onSelect: (service: Service) => void;
  isSelected: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, onSelect, isSelected }) => {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected ? 'bg-primary/10 border-primary ring-2 ring-primary' : 'bg-white hover:shadow-md border-neutral-200'
      }`}
      onClick={() => onSelect(service)}
    >
      <h4 className="text-lg font-semibold text-neutral-800">{service.name}</h4>
      <p className="text-sm text-neutral-600 mt-1 mb-2">{service.description}</p>
      <div className="flex justify-between items-center text-sm text-neutral-700">
        <div className="flex items-center">
          <ClockIcon className="w-4 h-4 mr-1 text-primary" />
          <span>{service.durationMinutes} menit</span>
        </div>
        <div className="flex items-center font-semibold text-primary">
          {/* CurrencyDollarIcon is generic, kept for now */}
          {/* <CurrencyDollarIcon className="w-4 h-4 mr-0.5" /> */}
          <span>{service.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
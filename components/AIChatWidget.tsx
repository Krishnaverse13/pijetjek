// components/AIChatWidget.tsx
import React, { useState } from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from './icons/HeroIcons';
import AIChatModal from './AIChatModal';

const AIChatWidget: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-xl transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary z-40"
        aria-label="Buka Asisten AI"
        style={{ display: isModalOpen ? 'none' : 'flex' }} // Sembunyikan FAB saat modal terbuka
      >
        <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7" />
      </button>
      <AIChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AIChatWidget;

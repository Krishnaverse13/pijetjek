// components/AIChatModal.tsx
import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, PaperAirplaneIcon, UserCircleIcon } from './icons/HeroIcons'; // Menggunakan UserCircleIcon untuk AI Avatar
import { generateTextFromGemini } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner'; // Impor spinner yang sudah ada

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const systemInstruction = "Anda adalah Asisten AI Pijat-Jek yang ramah dan membantu. Jawab pertanyaan pengguna terkait layanan pijat, manfaat pijat, cara menggunakan platform Pijat-Jek, atau pertanyaan umum seputar kesehatan dan relaksasi dalam Bahasa Indonesia. Jaga agar jawaban tetap relevan dengan konteks pijat dan kesehatan. Jika pertanyaan di luar topik ini, arahkan pengguna kembali dengan sopan atau katakan Anda tidak bisa membantu dengan topik tersebut.";

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Pesan sambutan awal dari AI
      setMessages([
        { id: 'welcome-' + Date.now(), text: 'Halo! Saya Asisten AI Pijat-Jek. Ada yang bisa saya bantu terkait layanan pijat atau platform kami?', sender: 'ai' }
      ]);
    }
  }, [isOpen]);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (userInput.trim() === '' || isLoading) return;

    const userMessage: Message = { id: 'user-' + Date.now(), text: userInput, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await generateTextFromGemini(userInput, systemInstruction);
      const aiMessage: Message = { id: 'ai-' + Date.now(), text: aiResponseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = { id: 'error-' + Date.now(), text: "Maaf, saya sedang mengalami kendala. Coba beberapa saat lagi.", sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center p-0 sm:p-4 z-50">
      <div className="bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-lg h-[85vh] sm:h-[75vh] flex flex-col transform transition-all">
        {/* Header Modal */}
        <div className="flex justify-between items-center p-4 border-b border-neutral-200 bg-primary text-white rounded-t-lg">
          <h2 className="text-xl font-semibold">Asisten AI Pijat-Jek</h2>
          <button onClick={onClose} className="text-white hover:text-neutral-300">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Area Pesan */}
        <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-neutral-50">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] p-3 rounded-lg shadow ${
                msg.sender === 'user' 
                ? 'bg-secondary text-white rounded-br-none' 
                : 'bg-neutral-200 text-neutral-800 rounded-bl-none flex items-start'
              }`}>
                {msg.sender === 'ai' && <UserCircleIcon className="w-6 h-6 mr-2 text-primary flex-shrink-0" />}
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
                <div className="max-w-[75%] p-3 rounded-lg shadow bg-neutral-200 text-neutral-800 rounded-bl-none flex items-center">
                    <UserCircleIcon className="w-6 h-6 mr-2 text-primary flex-shrink-0" />
                    <div className="animate-pulse flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Pesan */}
        <div className="p-4 border-t border-neutral-200 bg-white">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              placeholder="Ketik pertanyaan Anda..."
              className="flex-grow p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || userInput.trim() === ''}
              className="bg-primary hover:bg-secondary text-white p-2.5 rounded-lg disabled:opacity-50 transition-colors"
              aria-label="Kirim pesan"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatModal;

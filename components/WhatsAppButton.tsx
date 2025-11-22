import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/233591465273" 
      target="_blank"
      rel="noopener noreferrer"
      // Authentic WhatsApp Green and Icon Style
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center border-2 border-white"
      aria-label="Chat on WhatsApp"
    >
      {/* Filled style simulation with Lucide */}
      <MessageCircle className="h-8 w-8 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
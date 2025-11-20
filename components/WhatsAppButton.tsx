import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/233241234567" 
      target="_blank"
      rel="noopener noreferrer"
      // Moved to bottom-left (left-6) to avoid overlapping with the ChatWidget which is on the right
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:bg-[#1ebc57] transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
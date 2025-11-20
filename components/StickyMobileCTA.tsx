import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#FFD700] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 z-40 animate-fade-in-up">
      <a 
        href="#contact"
        className="agombia-btn w-full flex items-center justify-center py-3 rounded-lg font-agombia text-lg uppercase tracking-wider shadow-md"
      >
        <ShoppingBag className="h-5 w-5 mr-2" />
        Order Now
      </a>
    </div>
  );
};

export default StickyMobileCTA;
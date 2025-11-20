import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShoppingCart, Truck, Clock, AlertCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // LOGISTICS TICKER DATA
  const tickerMessages = [
    "LIVE: Dispatch truck leaving Kumasi Depot...",
    "ALERT: Low stock warning in Greater Accra Region...",
    "UPDATE: 142 orders processed in the last hour...",
    "PROMO: Free delivery on 3+ packs ends today..."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const tickerInterval = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % tickerMessages.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(tickerInterval);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Product', href: '#product' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed w-full z-50 top-0 transition-all duration-300">
      
      {/* 1. THE LOGISTICS TICKER (Urgency Bar) */}
      <div className="bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 overflow-hidden relative border-b border-[#C8102E]">
         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center text-[#FFD700]">
               <div className="w-2 h-2 bg-[#C8102E] rounded-full animate-pulse mr-2"></div>
               <span className="hidden md:inline mr-1">System Status:</span> ONLINE
            </div>
            
            {/* Animated Message */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md text-center transition-opacity duration-500 ease-in-out flex justify-center items-center">
               <Truck className="w-3 h-3 mr-2 text-gray-400" />
               {tickerMessages[tickerIndex]}
            </div>

            <div className="hidden md:flex items-center text-gray-400">
               <Clock className="w-3 h-3 mr-1" />
               Express Dispatch: Active
            </div>
         </div>
      </div>

      {/* 2. THE COMMAND DECK (Nav Bar) */}
      <header 
        className={`transition-all duration-500 border-b-4 border-[#D4AF37] ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-2' 
            : 'bg-agombia-texture py-4 shadow-xl'
        }`}
        style={{borderImage: 'linear-gradient(to right, #D4AF37, #FFD700, #D4AF37) 1'}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className={`p-2 rounded-full mr-3 shadow-lg border-2 border-[#FFD700] group-hover:scale-110 transition-transform duration-300 ${scrolled ? 'bg-[#C8102E]' : 'bg-white'}`}>
                <Leaf className={`h-6 w-6 ${scrolled ? 'text-white' : 'text-[#C8102E]'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`font-agombia text-2xl tracking-wider drop-shadow-md transition-colors ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>AGOMBIA</span>
                <span className="text-[#FFD700] text-[10px] font-bold uppercase tracking-[0.2em] -mt-1">Capsules</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-bold text-xs uppercase tracking-widest hover:text-[#FFD700] transition-colors duration-300 relative group py-2 cursor-pointer ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Heartbeat Order Button */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative overflow-hidden group bg-[#FFD700] text-[#3E2723] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
                <span className="relative z-10">Order Now</span>
                <ShoppingCart className="ml-2 h-4 w-4 animate-pulse relative z-10" />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${scrolled ? 'text-[#1A1A1A]' : 'text-white'} hover:text-[#FFD700] p-2 focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#A00D24] border-t border-[#FFD700] shadow-inner absolute w-full left-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:bg-[#C8102E] hover:text-[#FFD700] block px-3 py-4 rounded-md text-sm font-bold uppercase tracking-wider border-b border-white/10 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center bg-[#FFD700] text-[#3E2723] block px-3 py-4 rounded-md text-sm font-bold uppercase tracking-wider mt-4 shadow-lg cursor-pointer"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
import React from 'react';
import { Leaf, ArrowUp, Smartphone, CreditCard, ShieldCheck, Globe, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-white relative pt-20 overflow-hidden">
       {/* 1. THE ROOTS TEXTURE (Background) */}
       <div className="absolute bottom-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <pattern id="roots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 100 C 20 80 80 20 50 0" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M0 50 C 20 20 80 80 100 50" stroke="white" strokeWidth="2" fill="none"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#roots)" />
          </svg>
       </div>

       {/* Gold Top Border */}
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] via-[#FFD700] to-[#C8102E]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION 1: THE REGULATORY SEALS --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 border-b border-gray-800 pb-12">
           
           {/* FDA SEAL */}
           <div className="group flex items-center bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-[#FFD700] transition-colors duration-300">
              <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                 <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-20 animate-pulse"></div>
                 <div className="absolute inset-0 flex items-center justify-center border-2 border-[#FFD700] rounded-full">
                    <ShieldCheck className="w-6 h-6 text-[#FFD700]" />
                 </div>
              </div>
              <div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Regulator</div>
                 <div className="text-white font-agombia text-lg">FDA Certified</div>
                 <div className="text-[9px] text-[#C8102E]">FDA/HD.23-1234</div>
              </div>
           </div>

           {/* GMP SEAL */}
           <div className="group flex items-center bg-[#111] p-4 rounded-xl border border-gray-800 hover:border-[#FFD700] transition-colors duration-300">
              <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                 <div className="absolute inset-0 flex items-center justify-center border-2 border-gray-600 rounded-full group-hover:border-[#FFD700] transition-colors">
                    <Leaf className="w-6 h-6 text-green-500" />
                 </div>
              </div>
              <div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Quality</div>
                 <div className="text-white font-agombia text-lg">GMP Standards</div>
                 <div className="text-[9px] text-green-500">100% Organic</div>
              </div>
           </div>

           {/* PAYMENT TRUST STRIP */}
           <div className="col-span-1 md:col-span-2 bg-[#111] p-4 rounded-xl border border-gray-800 flex flex-col justify-center">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Secure Payment Ecosystem</div>
              <div className="flex space-x-4 items-center">
                 {/* MoMo Badge */}
                 <div className="flex items-center space-x-1 bg-[#FFCC00] text-[#1D2D5B] px-2 py-1 rounded text-xs font-bold">
                    <Smartphone className="w-3 h-3" /> <span>MTN MoMo</span>
                 </div>
                 {/* Voda Badge */}
                 <div className="flex items-center space-x-1 bg-[#E60000] text-white px-2 py-1 rounded text-xs font-bold">
                    <Smartphone className="w-3 h-3" /> <span>Telecel</span>
                 </div>
                 {/* Visa Badge */}
                 <div className="flex items-center space-x-1 bg-[#1A1F71] text-white px-2 py-1 rounded text-xs font-bold">
                    <CreditCard className="w-3 h-3" /> <span>VISA</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (4 cols) */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-[#C8102E] to-[#8B0000] p-2 rounded-lg mr-3 border border-[#FFD700]">
                   <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-agombia text-white tracking-wide">Agombia</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              The gold standard in Ghanaian herbal medicine. Available at all leading Pharmacy, Chemical & Herbal Shops nationwide.
            </p>
            <div className="flex items-center text-xs font-bold text-[#FFD700] uppercase tracking-widest">
               <Globe className="w-4 h-4 mr-2" />
               Proudly Made in Ghana
            </div>
          </div>

          {/* Sitemap (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-b-2 border-[#C8102E] inline-block pb-1">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center"><span className="w-1 h-1 bg-[#C8102E] rounded-full mr-2"></span>Home</a></li>
              <li><a href="#benefits" onClick={(e) => handleScroll(e, '#benefits')} className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center"><span className="w-1 h-1 bg-[#C8102E] rounded-full mr-2"></span>Benefits</a></li>
              <li><a href="#ingredients" onClick={(e) => handleScroll(e, '#ingredients')} className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center"><span className="w-1 h-1 bg-[#C8102E] rounded-full mr-2"></span>Ingredients</a></li>
              <li><a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')} className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center"><span className="w-1 h-1 bg-[#C8102E] rounded-full mr-2"></span>Gallery</a></li>
            </ul>
          </div>

          {/* Support (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-b-2 border-[#C8102E] inline-block pb-1">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="text-gray-400 hover:text-[#FFD700] transition-colors">Knowledge Base</a></li>
              <li><a href="#dosage" onClick={(e) => handleScroll(e, '#dosage')} className="text-gray-400 hover:text-[#FFD700] transition-colors">Dosage Guide</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="text-gray-400 hover:text-[#FFD700] transition-colors">Track Order</a></li>
              <li><a href="mailto:Bamfotex19@gmail.com" className="text-gray-400 hover:text-[#FFD700] transition-colors">Email Us</a></li>
            </ul>
          </div>

          {/* Location (4 cols) */}
          <div className="md:col-span-4">
             <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest border-b-2 border-[#C8102E] inline-block pb-1">Office Techiman</h3>
             <div className="bg-[#111] p-4 rounded-xl border border-gray-800">
                <p className="text-gray-300 text-sm font-bold mb-1">Agombia Herbal Centre</p>
                <div className="flex items-center mt-2 text-gray-500 text-xs">
                   <MapPin className="w-4 h-4 mr-2 text-[#C8102E]" />
                   Office Techiman - Ghana
                </div>
                <div className="flex items-center mt-2 text-gray-500 text-xs">
                   <Mail className="w-4 h-4 mr-2 text-[#C8102E]" />
                   Bamfotex19@gmail.com
                </div>
                <div className="mt-4">
                   <a href="tel:0244946525" className="text-[#FFD700] text-xs font-bold uppercase tracking-wide hover:underline">
                      Call 024 494 6525
                   </a>
                </div>
             </div>
          </div>
        </div>
        
        {/* MANDATORY DISCLAIMER */}
        <div className="bg-[#C8102E]/10 border border-[#C8102E]/30 p-6 rounded-xl text-center relative mb-12">
           <p className="font-agombia text-[#C8102E] text-lg tracking-widest uppercase mb-2">Medical Disclaimer</p>
           <p className="text-gray-400 text-xs max-w-3xl mx-auto leading-relaxed">
             Agombia Capsules are a herbal food supplement. They are not intended to diagnose, treat, cure, or prevent any disease. 
             Not recommended for pregnant women, lactating mothers, or children below 18 years old.
             Keep out of reach of children. Store in a cool, dry place.
           </p>
        </div>

        {/* COPYRIGHT & BACK TO TOP */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
           <p className="text-gray-600 text-xs uppercase tracking-wider mb-4 md:mb-0">
             &copy; {new Date().getFullYear()} Agombia Herbal Centre. All Rights Reserved.
           </p>
           
           {/* THE TOTEM BUTTON */}
           <button 
             onClick={(e) => handleScroll(e, '#home')}
             className="group flex items-center space-x-2 text-[#FFD700] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
           >
              <span>Back to Top</span>
              <div className="bg-[#FFD700] p-2 rounded-full text-black group-hover:bg-white transition-colors">
                 <ArrowUp className="w-4 h-4" />
              </div>
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
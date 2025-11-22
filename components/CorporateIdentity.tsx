
import React, { useState } from 'react';
import { ShieldCheck, MapPin, Award, Building2, CheckCircle, Search, X, ZoomIn, Maximize2 } from 'lucide-react';

const CorporateIdentity: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string>('');

  const openLightbox = (image: string, caption: string) => {
    setSelectedImage(image);
    setSelectedCaption(caption);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedCaption('');
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-24 bg-white relative border-t border-gray-100">
      {/* Subtle Corporate Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
      </div>

      {/* EXECUTIVE LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in-up">
           <button 
             onClick={closeLightbox}
             className="absolute top-6 right-6 text-white hover:text-[#FFD700] transition-colors"
           >
             <X className="w-10 h-10" />
           </button>
           
           <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
              <img 
                src={selectedImage} 
                alt={selectedCaption} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-gray-800"
              />
              <p className="mt-6 text-white font-agombia text-2xl uppercase tracking-widest text-center">
                {selectedCaption}
              </p>
           </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] text-white px-4 py-1.5 rounded-full mb-4 shadow-lg">
             <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
             <span className="text-xs font-bold uppercase tracking-widest">Corporate Verification</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-agombia text-[#1A1A1A] uppercase tracking-wide">
            Identity & <span className="text-[#C8102E]">Compliance</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#C8102E] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest">Tap any document to inspect details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT COLUMN: THE FLAGSHIP (Product) --- */}
          <div className="lg:col-span-5">
             <div 
               onClick={() => openLightbox("https://i.postimg.cc/8zzmXYDD/Gemini-Generated-Image-6tx5j66tx5j66tx5.jpg", "Agombia Capsules - Premium Packaging")}
               className="bg-gradient-to-b from-[#F9F9F9] to-white rounded-3xl p-8 border border-gray-100 shadow-2xl relative group overflow-hidden cursor-pointer hover:border-[#FFD700] transition-colors duration-300"
             >
                
                {/* Gold Frame Effect */}
                <div className="absolute inset-0 border-4 border-[#FFD700]/20 rounded-3xl pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-[#FFD700]"></div>
                
                <div className="relative z-10">
                   <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                         <div className="w-3 h-3 bg-[#C8102E] rounded-full animate-pulse"></div>
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Flagship Product</span>
                      </div>
                      <Maximize2 className="w-5 h-5 text-gray-400 group-hover:text-[#FFD700]" />
                   </div>

                   {/* Image Container - Adjusted to prevent cropping */}
                   <div className="aspect-[4/5] relative rounded-xl overflow-hidden bg-white shadow-inner mb-6 flex items-center justify-center p-2">
                      <img 
                        src="https://i.postimg.cc/8zzmXYDD/Gemini-Generated-Image-6tx5j66tx5j66tx5.jpg" 
                        alt="Agombia Capsules Premium Packaging" 
                        className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                      />
                   </div>

                   <div className="text-center">
                      <h3 className="font-agombia text-3xl text-[#1A1A1A] uppercase">Agombia Capsules</h3>
                      <p className="text-[#C8102E] text-sm font-bold uppercase tracking-wide mt-1">The Original Formula</p>
                   </div>
                </div>
             </div>
          </div>

          {/* --- RIGHT COLUMN: THE VERIFICATION MATRIX --- */}
          <div className="lg:col-span-7 space-y-8">
             
             {/* 1. FDA CERTIFICATION (Hero Document) */}
             <div 
                onClick={() => openLightbox("https://i.postimg.cc/BnnB7zst/Gemini-Generated-Image-mfb58tmfb58tmfb5.png", "Official FDA Certification")}
                className="bg-white rounded-2xl border-l-4 border-[#C8102E] shadow-lg p-6 relative hover:shadow-xl transition-all duration-300 cursor-pointer group/cert"
             >
                <div className="absolute top-4 right-4">
                   <div className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded border border-green-200 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" /> ACTIVE
                   </div>
                </div>
                <h4 className="font-agombia text-xl text-[#1A1A1A] uppercase mb-1 flex items-center">
                   <ShieldCheck className="w-5 h-5 mr-2 text-[#C8102E]" /> Official FDA Certification
                </h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-6 ml-7">Regulatory Compliance • Public Health Safety</p>
                
                <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 flex justify-center items-center h-72">
                   <img 
                     src="https://i.postimg.cc/BnnB7zst/Gemini-Generated-Image-mfb58tmfb58tmfb5.png" 
                     alt="FDA Certificate" 
                     className="w-full h-full object-contain" // Changed to contain so full doc is visible
                   />
                   <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="bg-white text-[#1A1A1A] px-5 py-3 rounded-full text-xs font-bold uppercase shadow-2xl transform scale-90 opacity-0 group-hover/cert:opacity-100 group-hover/cert:scale-100 transition-all duration-300 flex items-center border border-gray-200">
                         <ZoomIn className="w-4 h-4 mr-2 text-[#C8102E]" /> Tap to Inspect
                      </div>
                   </div>
                </div>
             </div>

             {/* 2. SPLIT ROW: CORPORATE & LOCATION */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Parent Company */}
                <div 
                   onClick={() => openLightbox("https://i.postimg.cc/GmmxgfRW/Whats-App-Image-2025-11-20-at-13-00-21-8e325c34.jpg", "U-LIFE Official Corporate Identity")}
                   className="bg-[#1A1A1A] rounded-2xl p-6 relative overflow-hidden border-t-4 border-[#FFD700] group cursor-pointer hover:bg-[#222] transition-colors"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Building2 className="w-16 h-16 text-white" />
                   </div>
                   <div className="relative z-10">
                      <div className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest mb-4 flex justify-between">
                          <span>Parent Company</span>
                          <Maximize2 className="w-4 h-4 text-gray-500 group-hover:text-[#FFD700]" />
                      </div>
                      
                      <div className="w-full h-32 bg-white rounded-lg p-4 mb-4 flex items-center justify-center overflow-hidden shadow-inner">
                         <img 
                           src="https://i.postimg.cc/GmmxgfRW/Whats-App-Image-2025-11-20-at-13-00-21-8e325c34.jpg" 
                           alt="U-LIFE Logo" 
                           className="w-full h-full object-contain"
                         />
                      </div>
                      <h4 className="text-white font-agombia text-xl uppercase">U-Life</h4>
                      <p className="text-gray-500 text-xs">Official Manufacturer</p>
                   </div>
                </div>

                {/* Physical Location */}
                <div 
                   onClick={() => openLightbox("https://i.postimg.cc/QddJYzsZ/Whats-App-Image-2025-11-20-at-13-01-59-1faa4def.jpg", "Agombia Physical HQ - Techiman")}
                   className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md group relative overflow-hidden cursor-pointer h-full min-h-[250px]"
                >
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                   <img 
                     src="https://i.postimg.cc/QddJYzsZ/Whats-App-Image-2025-11-20-at-13-01-59-1faa4def.jpg" 
                     alt="Agombia Office" 
                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   
                   <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-white" />
                   </div>

                   <div className="relative z-20 h-full flex flex-col justify-end">
                      <div className="flex items-center space-x-2 mb-1">
                         <MapPin className="w-4 h-4 text-[#FFD700]" />
                         <span className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest">Physical HQ</span>
                      </div>
                      <h4 className="text-white font-agombia text-lg uppercase leading-none">Office Techiman</h4>
                      <p className="text-gray-300 text-xs mt-1">Brong-Ahafo Region, Ghana</p>
                   </div>
                </div>

             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateIdentity;

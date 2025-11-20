import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const GalleryStrip: React.FC = () => {
  const images = [
    "https://i.postimg.cc/fk4fZXgP/Gemini-Generated-Image-dcvc9mdcvc9mdcvc-(1).jpg",
    "https://i.postimg.cc/5jcS1vkL/Gemini-Generated-Image-fcx5b3fcx5b3fcx5.jpg",
    "https://i.postimg.cc/Sj0fq8t3/Gemini-Generated-Image-x4bg2ux4bg2ux4bg.jpg",
    "https://i.postimg.cc/vTxtpXXh/Gemini-Generated-Image-lhk5cclhk5cclhk5.jpg",
    "https://i.postimg.cc/Jtw5mJdg/Gemini-Generated-Image-78cecl78cecl78ce-(1).jpg",
    "https://i.postimg.cc/rz6NcWY5/Gemini-Generated-Image-ci4zn7ci4zn7ci4z.jpg"
  ];

  // Duplicate images for infinite scroll effect
  const marqueeImages = [...images, ...images];

  return (
    <section id="gallery" className="bg-black py-16 border-b-4 border-[#D4AF37] overflow-hidden relative group/section">
      
      {/* SECTION HEADER OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none flex flex-col justify-center items-center opacity-0 group-hover/section:opacity-100 transition-opacity duration-700">
         <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
            <h3 className="text-3xl font-agombia text-white uppercase tracking-widest">The Agombia <span className="text-[#C8102E]">Lifestyle</span></h3>
            <p className="text-[#FFD700] text-xs font-bold uppercase tracking-[0.3em] mt-1">Join the Movement</p>
         </div>
      </div>

      <div className="relative w-full flex">
         <div className="flex animate-[scroll_40s_linear_infinite] group-hover/section:[animation-play-state:paused]">
            {marqueeImages.map((src, index) => (
               <div key={index} className="relative w-[300px] h-[400px] flex-shrink-0 mx-2 rounded-xl overflow-hidden group/card cursor-pointer border border-gray-800 hover:border-[#FFD700] transition-all duration-300">
                  
                  {/* Image */}
                  <img 
                     src={src} 
                     alt={`Agombia Lifestyle`} 
                     className="w-full h-full object-cover filter grayscale group-hover/card:grayscale-0 transition-all duration-700 transform group-hover/card:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-300"></div>

                  {/* SHOP THE LOOK HOTSPOT (Center) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 z-30">
                     <div className="bg-white/10 backdrop-blur-md border border-white/50 p-3 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:bg-[#C8102E] hover:border-[#C8102E] transition-colors">
                        <ShoppingBag className="w-6 h-6 text-white" />
                     </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 z-30 transform translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                     <div className="text-[10px] text-[#FFD700] font-bold uppercase tracking-widest mb-1">Featured</div>
                     <div className="text-white font-agombia text-xl uppercase">Agombia</div>
                  </div>
               </div>
            ))}
         </div>
      </div>
      
      {/* Global Styles for Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default GalleryStrip;
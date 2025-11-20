import React from 'react';

const ImageGrid: React.FC = () => {
  const images = [
    "https://i.postimg.cc/Jtw5mJdg/Gemini-Generated-Image-78cecl78cecl78ce-(1).jpg", // Hero Model
    "https://i.postimg.cc/fk4fZXgP/Gemini-Generated-Image-dcvc9mdcvc9mdcvc-(1).jpg", // Lifestyle
    "https://i.postimg.cc/rz6NcWY5/Gemini-Generated-Image-ci4zn7ci4zn7ci4z.jpg", // Product Box
    "https://i.postimg.cc/5jcS1vkL/Gemini-Generated-Image-fcx5b3fcx5b3fcx5.jpg", // Lifestyle
    "https://i.postimg.cc/Sj0fq8t3/Gemini-Generated-Image-x4bg2ux4bg2ux4bg.jpg", // Lifestyle
    "https://i.postimg.cc/vTxtpXXh/Gemini-Generated-Image-lhk5cclhk5cclhk5.jpg"  // Lifestyle
  ];

  return (
    <section className="py-24 bg-white relative">
       {/* Decorative texture background */}
       <div className="absolute inset-0 opacity-5 pointer-events-none bg-agombia-texture"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-agombia text-[#1A1A1A] uppercase tracking-wide mb-4">
                Agombia <span className="text-agombia-gold-foil">Moments</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#C8102E] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              See how Agombia fits naturally into the lives of everyday Ghanaians.
            </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={src} 
                alt={`Agombia Experience ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8102E] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Text Reveal on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-agombia text-xl tracking-widest uppercase border-l-4 border-[#FFD700] pl-3 block">
                  Natural Vitality
                </span>
              </div>

              {/* Decorative Gold Border on Hover */}
              <div className="absolute inset-0 border-[6px] border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none scale-95 group-hover:scale-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
import React from 'react';
import { CheckCircle, ShieldCheck, Package, Info, AlertCircle } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="product" className="py-20 bg-[#0F0F0F] text-white relative overflow-hidden">
      
      {/* 1. HEAVENLY SPOTLIGHT (CSS Gradient) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFD700]/20 via-[#1A1A1A]/50 to-[#0F0F0F] pointer-events-none"></div>
      
      {/* Floating Gold Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#FFD700] rounded-full animate-float-1 opacity-60"></div>
         <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-[#FFD700] rounded-full animate-float-2 opacity-40"></div>
         <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-float-3 opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* === LEFT: THE SHRINE (Product Image) === */}
        <div className="lg:w-1/2 mb-16 lg:mb-0 relative flex justify-center">
            
            {/* The Pedestal Glow */}
            <div className="absolute bottom-10 w-64 h-12 bg-[#FFD700] blur-[50px] opacity-40 rounded-[100%]"></div>

            <div className="relative group">
                {/* BOTTLE IMAGE */}
                <img 
                    src="https://i.postimg.cc/rz6NcWY5/Gemini-Generated-Image-ci4zn7ci4zn7ci4z.jpg"
                    alt="Agombia Capsule Bottle" 
                    className="relative z-10 mx-auto w-auto h-[500px] object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* --- INTERACTIVE HOTSPOTS --- */}
                
                {/* Hotspot 1: Top (Seal) */}
                <div className="absolute top-[15%] left-[60%] z-20 group/spot">
                   <div className="relative">
                      <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-ping absolute opacity-75"></div>
                      <div className="w-4 h-4 bg-[#FFD700] rounded-full border-2 border-white shadow-lg cursor-pointer relative z-10 flex items-center justify-center">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-40 bg-white/90 backdrop-blur text-[#1A1A1A] p-3 rounded-lg text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-x-2 group-hover/spot:translate-x-0">
                        <p className="font-bold uppercase mb-1 text-[#C8102E]">Tamper Proof</p>
                        Gold foil seal guarantees freshness.
                      </div>
                   </div>
                </div>

                {/* Hotspot 2: Middle (Logo) */}
                <div className="absolute top-[45%] left-[30%] z-20 group/spot">
                   <div className="relative">
                      <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-ping absolute opacity-75 animation-delay-1000"></div>
                      <div className="w-4 h-4 bg-[#FFD700] rounded-full border-2 border-white shadow-lg cursor-pointer relative z-10 flex items-center justify-center">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-40 bg-white/90 backdrop-blur text-[#1A1A1A] p-3 rounded-lg text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300 pointer-events-none transform -translate-x-2 group-hover/spot:translate-x-0 text-right">
                        <p className="font-bold uppercase mb-1 text-[#C8102E]">Authentic U-Life</p>
                        Holographic verified branding.
                      </div>
                   </div>
                </div>

                 {/* Hotspot 3: Bottom (Count) */}
                 <div className="absolute bottom-[20%] left-[65%] z-20 group/spot">
                   <div className="relative">
                      <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-ping absolute opacity-75 animation-delay-2000"></div>
                      <div className="w-4 h-4 bg-[#FFD700] rounded-full border-2 border-white shadow-lg cursor-pointer relative z-10 flex items-center justify-center">
                         <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-40 bg-white/90 backdrop-blur text-[#1A1A1A] p-3 rounded-lg text-xs shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-x-2 group-hover/spot:translate-x-0">
                        <p className="font-bold uppercase mb-1 text-[#C8102E]">30 Day Supply</p>
                        Full monthly course in one box.
                      </div>
                   </div>
                </div>
            </div>
        </div>

        {/* === RIGHT: THE PITCH & VALUE STACK === */}
        <div className="lg:w-1/2 lg:pl-16 relative z-10">
          
          {/* Urgency Banner */}
          <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/30 rounded px-3 py-1 mb-6 animate-pulse">
             <AlertCircle className="w-4 h-4 text-red-500" />
             <span className="text-xs text-red-400 font-mono uppercase tracking-widest">High Demand: Low Stock in Kumasi</span>
          </div>

          <h2 className="text-5xl font-agombia text-white sm:text-6xl mb-2 leading-none">
            Pure. Potent. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFF0B4] to-[#B8860B] drop-shadow-sm">Proven.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 font-light border-l-4 border-[#FFD700] pl-4">
            The complete restoration kit. No fillers, no synthetics, just the raw power of the Ghanaian rainforest in a 750mg capsule.
          </p>
          
          {/* The Value Stack Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
             <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-start hover:border-[#FFD700] transition-colors group">
                <ShieldCheck className="w-6 h-6 text-[#FFD700] mr-3 group-hover:scale-110 transition-transform" />
                <div>
                   <h4 className="text-white font-bold text-sm uppercase">Safety First</h4>
                   <p className="text-gray-500 text-xs mt-1">GMP Certified Production</p>
                </div>
             </div>
             <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-start hover:border-[#FFD700] transition-colors group">
                <Package className="w-6 h-6 text-[#FFD700] mr-3 group-hover:scale-110 transition-transform" />
                <div>
                   <h4 className="text-white font-bold text-sm uppercase">Discreet</h4>
                   <p className="text-gray-500 text-xs mt-1">Plain packaging delivery</p>
                </div>
             </div>
             <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-start hover:border-[#FFD700] transition-colors group">
                <CheckCircle className="w-6 h-6 text-[#FFD700] mr-3 group-hover:scale-110 transition-transform" />
                <div>
                   <h4 className="text-white font-bold text-sm uppercase">Fast Acting</h4>
                   <p className="text-gray-500 text-xs mt-1">Absorbs in 45 minutes</p>
                </div>
             </div>
             <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-start hover:border-[#FFD700] transition-colors group">
                <Info className="w-6 h-6 text-[#FFD700] mr-3 group-hover:scale-110 transition-transform" />
                <div>
                   <h4 className="text-white font-bold text-sm uppercase">Support</h4>
                   <p className="text-gray-500 text-xs mt-1">24/7 Herbalist Access</p>
                </div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
             <a
                href="#contact"
                className="agombia-btn w-full sm:w-auto px-10 py-4 text-lg font-bold rounded-full font-agombia tracking-wide shadow-[0_0_30px_rgba(255,215,0,0.2)] text-center"
              >
                Claim Your Bottle
              </a>
              <span className="text-gray-500 text-sm">Free delivery on 2+ packs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
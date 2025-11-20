import React, { useState } from 'react';
import { Sun, Moon, Droplet, Utensils, AlertTriangle, CheckCircle2, Info, Clock } from 'lucide-react';

const DosageGuide: React.FC = () => {
  const [activeTip, setActiveTip] = useState<number | null>(null);

  const proTips = [
    {
      title: "Hydration is Critical",
      text: "Agombia consists of fibrous roots. Water is the vehicle that transports these nutrients into your bloodstream. Drink at least 500ml (one sachet) with each dose."
    },
    {
      title: "Avoid Alcohol",
      text: "Alcohol dehydrates the system and competes with the liver, reducing the efficacy of the herbs by up to 40%. Avoid alcohol for at least 2 hours after dosing."
    },
    {
      title: "Missed a Dose?",
      text: "Do not double up to compensate. Simply skip the missed dose and continue with your regular schedule to avoid over-stimulating your system."
    }
  ];

  return (
    <section className="py-24 bg-[#F0F0F0] relative overflow-hidden border-t border-gray-200">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] text-[#FFD700] px-4 py-1.5 rounded-full mb-4 border border-[#FFD700]">
             <Clock className="w-4 h-4 animate-spin-slow" style={{animationDuration: '10s'}} />
             <span className="text-xs font-bold uppercase tracking-widest">24-Hour Protocol</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-agombia text-[#1A1A1A] uppercase tracking-wide">
             The Circadian <span className="text-[#C8102E]">Ritual</span>
           </h2>
           <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
             Agombia is synchronized with your body's natural rhythm. Follow the cycle for maximum absorption.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
           
           {/* === MORNING CARD (SOLAR) === */}
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFF0B4] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-t-4 border-[#FFD700] overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Sun className="w-32 h-32 text-[#FFD700]" />
                 </div>
                 
                 <div className="flex items-center mb-6 relative z-10">
                    <div className="bg-[#FFF8E1] p-3 rounded-full mr-4 border border-[#FFD700]">
                       <Sun className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div>
                       <h3 className="font-agombia text-2xl text-[#1A1A1A] uppercase">Ignition</h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">07:00 AM - 09:00 AM</p>
                    </div>
                 </div>

                 {/* 3D CSS CAPSULES */}
                 <div className="flex space-x-4 mb-8 justify-center py-4 bg-gray-50 rounded-xl border border-gray-100">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-8 h-20 rounded-full bg-gradient-to-b from-[#C8102E] to-[#8B0000] relative shadow-lg transform rotate-12 border border-white/20">
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/10"></div>
                          {/* Highlight */}
                          <div className="absolute top-2 right-2 w-2 h-6 bg-white opacity-30 rounded-full filter blur-[1px]"></div>
                       </div>
                    ))}
                 </div>

                 <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                       <CheckCircle2 className="w-5 h-5 text-[#FFD700] mr-3" />
                       <span>Take <strong>2 Capsules</strong></span>
                    </div>
                    <div className="flex items-center">
                       <Utensils className="w-5 h-5 text-gray-400 mr-3" />
                       <span>After a full breakfast</span>
                    </div>
                 </div>

                 <div className="bg-[#FFF8E1] rounded-lg p-3 text-center">
                    <span className="text-[#D4AF37] font-agombia uppercase text-sm tracking-wide">Goal: Metabolic Activation</span>
                 </div>
              </div>
           </div>

           {/* === CENTER: THE ABSORPTION MULTIPLIER === */}
           <div className="relative flex flex-col items-center justify-center py-10 lg:py-0">
              
              {/* The Living Clock Visual */}
              <div className="relative w-64 h-64 rounded-full border-4 border-gray-200 flex items-center justify-center bg-white shadow-inner mb-10">
                 {/* Rotating Gradient Ring */}
                 <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#C8102E] border-r-[#FFD700] animate-spin" style={{animationDuration: '8s'}}></div>
                 
                 {/* Inner Content */}
                 <div className="text-center z-10">
                    <div className="text-5xl font-agombia text-[#1A1A1A]">2x</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Daily</div>
                 </div>

                 {/* Orbiting Nodes */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFF] p-2 rounded-full shadow-md border border-[#FFD700]">
                    <Sun className="w-6 h-6 text-[#FFD700]" />
                 </div>
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1A1A1A] p-2 rounded-full shadow-md border border-[#C8102E]">
                    <Moon className="w-6 h-6 text-white" />
                 </div>
              </div>

              {/* Absorption Accelerators */}
              <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                 <h4 className="text-center font-agombia text-[#1A1A1A] uppercase tracking-wide mb-4">Absorption Boosters</h4>
                 
                 {/* Water Meter */}
                 <div className="mb-4">
                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500 mb-1">
                       <span className="flex items-center"><Droplet className="w-3 h-3 mr-1 text-blue-500" /> Water</span>
                       <span>500ml Required</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-blue-500 h-full w-4/5 animate-pulse"></div>
                    </div>
                 </div>

                 {/* Food Meter */}
                 <div>
                    <div className="flex justify-between text-xs font-bold uppercase text-gray-500 mb-1">
                       <span className="flex items-center"><Utensils className="w-3 h-3 mr-1 text-orange-500" /> Food Base</span>
                       <span>Heavy Meal</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-orange-500 h-full w-full"></div>
                    </div>
                 </div>
              </div>
           </div>

           {/* === EVENING CARD (LUNAR) === */}
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#1A1A1A] to-[#2C3E50] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A1A1A] rounded-3xl p-8 shadow-xl border-t-4 border-[#C8102E] overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Moon className="w-32 h-32 text-white" />
                 </div>
                 
                 <div className="flex items-center mb-6 relative z-10">
                    <div className="bg-[#333] p-3 rounded-full mr-4 border border-[#C8102E]">
                       <Moon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                       <h3 className="font-agombia text-2xl text-white uppercase">Restoration</h3>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">07:00 PM - 09:00 PM</p>
                    </div>
                 </div>

                 {/* 3D CSS CAPSULES (Dark Mode) */}
                 <div className="flex space-x-4 mb-8 justify-center py-4 bg-[#222] rounded-xl border border-[#333]">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-8 h-20 rounded-full bg-gradient-to-b from-[#C8102E] to-[#8B0000] relative shadow-lg transform -rotate-12 border border-white/10">
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/30"></div>
                          {/* Highlight */}
                          <div className="absolute top-2 right-2 w-2 h-6 bg-white opacity-20 rounded-full filter blur-[1px]"></div>
                       </div>
                    ))}
                 </div>

                 <div className="space-y-3 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                       <CheckCircle2 className="w-5 h-5 text-[#C8102E] mr-3" />
                       <span className="text-white">Take <strong>2 Capsules</strong></span>
                    </div>
                    <div className="flex items-center">
                       <Utensils className="w-5 h-5 text-gray-600 mr-3" />
                       <span>After a full dinner</span>
                    </div>
                 </div>

                 <div className="bg-[#2A1A1A] rounded-lg p-3 text-center border border-[#C8102E]/30">
                    <span className="text-[#C8102E] font-agombia uppercase text-sm tracking-wide">Goal: Cellular Repair</span>
                 </div>
              </div>
           </div>

        </div>

        {/* === PRO TIPS DRAWERS === */}
        <div className="mt-16 max-w-4xl mx-auto">
           <h3 className="text-center font-agombia text-2xl text-[#1A1A1A] uppercase mb-8 flex items-center justify-center">
              <Info className="w-5 h-5 mr-2 text-[#C8102E]" /> Expert Guidelines
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {proTips.map((tip, index) => (
                 <div 
                    key={index}
                    onClick={() => setActiveTip(activeTip === index ? null : index)}
                    className={`cursor-pointer rounded-xl p-6 border transition-all duration-300 ${
                       activeTip === index 
                       ? 'bg-white border-[#FFD700] shadow-lg scale-105' 
                       : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                 >
                    <div className="flex items-center justify-between mb-2">
                       <h4 className={`font-bold text-sm uppercase tracking-wider ${activeTip === index ? 'text-[#C8102E]' : 'text-gray-700'}`}>
                          {tip.title}
                       </h4>
                       {activeTip === index ? <CheckCircle2 className="w-4 h-4 text-[#FFD700]" /> : <AlertTriangle className="w-4 h-4 text-gray-300" />}
                    </div>
                    <div className={`text-xs text-gray-500 leading-relaxed transition-all duration-500 overflow-hidden ${
                       activeTip === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                       {tip.text}
                    </div>
                    {activeTip !== index && <div className="text-[10px] text-gray-400 mt-2">Tap to read more</div>}
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default DosageGuide;
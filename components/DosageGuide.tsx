import React, { useState } from 'react';
import { Sun, Moon, Droplet, Utensils, AlertTriangle, CheckCircle2, Info, Clock, CloudSun, RefreshCw } from 'lucide-react';

const DosageGuide: React.FC = () => {
  const [activeTip, setActiveTip] = useState<number | null>(null);

  const proTips = [
    {
      title: "Hydration is Critical",
      text: "Agombia consists of fibrous roots. Water is the vehicle that transports these nutrients into your bloodstream. Drink at least 500ml (one sachet) with each dose."
    },
    {
      title: "Avoid Alcohol",
      text: "Alcohol dehydrates the system and competes with the liver, reducing the efficacy of the herbs. Avoid alcohol for at least 2 hours after dosing."
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
        
        <div className="text-center mb-12">
           <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] text-[#FFD700] px-4 py-1.5 rounded-full mb-4 border border-[#FFD700]">
             <Clock className="w-4 h-4 animate-spin-slow" style={{animationDuration: '10s'}} />
             <span className="text-xs font-bold uppercase tracking-widest">Daily Protocol: 6 Capsules</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-agombia text-[#1A1A1A] uppercase tracking-wide">
             The Circadian <span className="text-[#C8102E]">Ritual</span>
           </h2>
           <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
             For maximum potency, take Agombia three times daily. Always after meals.
           </p>
        </div>

        {/* --- THE LIVING BIO-CLOCK ANIMATION (Restored) --- */}
        <div className="relative w-64 h-64 mx-auto mb-16 hidden md:block">
           {/* Outer Orbit Ring */}
           <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-gray-300 animate-spin-slow" style={{animationDuration: '60s'}}></div>
           
           {/* Active Cycle Ring */}
           <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-[#FFD700] border-r-[#FFA500] border-b-[#C8102E] animate-spin-slow" style={{animationDuration: '20s'}}></div>
           
           {/* Center Hub */}
           <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="text-5xl font-agombia text-[#1A1A1A] font-bold">6</div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Capsules / Day</div>
              <div className="mt-2 bg-[#C8102E] text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">ACTIVE CYCLE</div>
           </div>

           {/* Orbiting Icons */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-[#FFD700]">
              <Sun className="w-6 h-6 text-[#FFD700]" />
           </div>
           <div className="absolute bottom-4 right-0 bg-white p-2 rounded-full shadow-md border border-[#C8102E]">
              <Moon className="w-6 h-6 text-[#C8102E]" />
           </div>
           <div className="absolute bottom-4 left-0 bg-white p-2 rounded-full shadow-md border border-orange-400">
              <CloudSun className="w-6 h-6 text-orange-400" />
           </div>
        </div>
           
        {/* WARNING BANNER */}
        <div className="mb-12 bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-lg max-w-3xl mx-auto flex items-start text-left">
            <AlertTriangle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
            <div>
                <p className="font-bold uppercase text-sm mb-1">Safety Warning</p>
                <p className="text-sm">Not recommended for pregnant women, lactating mothers, or children below 18 years old. Consult a physician if you have existing medical conditions.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
           
           {/* === MORNING CARD (SOLAR) === */}
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFF0B4] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-t-4 border-[#FFD700] overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Sun className="w-32 h-32 text-[#FFD700]" />
                 </div>
                 
                 <div className="flex items-center mb-6 relative z-10">
                    <div className="bg-[#FFF8E1] p-3 rounded-full mr-4 border border-[#FFD700]">
                       <Sun className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div>
                       <h3 className="font-agombia text-2xl text-[#1A1A1A] uppercase">Morning</h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">After Breakfast</p>
                    </div>
                 </div>

                 {/* 3D CSS CAPSULES */}
                 <div className="flex space-x-4 mb-8 justify-center py-4 bg-gray-50 rounded-xl border border-gray-100">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-8 h-20 rounded-full bg-gradient-to-b from-[#C8102E] to-[#8B0000] relative shadow-lg transform rotate-12 border border-white/20">
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/10"></div>
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
                       <span>After a full meal</span>
                    </div>
                 </div>

                 <div className="bg-[#FFF8E1] rounded-lg p-3 text-center">
                    <span className="text-[#D4AF37] font-agombia uppercase text-sm tracking-wide">Activation</span>
                 </div>
              </div>
           </div>

           {/* === AFTERNOON CARD (NEW) === */}
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-200 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-t-4 border-orange-400 overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <CloudSun className="w-32 h-32 text-orange-400" />
                 </div>
                 
                 <div className="flex items-center mb-6 relative z-10">
                    <div className="bg-orange-50 p-3 rounded-full mr-4 border border-orange-300">
                       <CloudSun className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                       <h3 className="font-agombia text-2xl text-[#1A1A1A] uppercase">Afternoon</h3>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">After Lunch</p>
                    </div>
                 </div>

                 {/* 3D CSS CAPSULES */}
                 <div className="flex space-x-4 mb-8 justify-center py-4 bg-gray-50 rounded-xl border border-gray-100">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-8 h-20 rounded-full bg-gradient-to-b from-[#C8102E] to-[#8B0000] relative shadow-lg transform rotate-12 border border-white/20">
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/10"></div>
                          <div className="absolute top-2 right-2 w-2 h-6 bg-white opacity-30 rounded-full filter blur-[1px]"></div>
                       </div>
                    ))}
                 </div>

                 <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                       <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" />
                       <span>Take <strong>2 Capsules</strong></span>
                    </div>
                    <div className="flex items-center">
                       <Utensils className="w-5 h-5 text-gray-400 mr-3" />
                       <span>After a full meal</span>
                    </div>
                 </div>

                 <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <span className="text-orange-600 font-agombia uppercase text-sm tracking-wide">Sustain</span>
                 </div>
              </div>
           </div>

           {/* === EVENING CARD (LUNAR) === */}
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#1A1A1A] to-[#2C3E50] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A1A1A] rounded-3xl p-8 shadow-xl border-t-4 border-[#C8102E] overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Moon className="w-32 h-32 text-white" />
                 </div>
                 
                 <div className="flex items-center mb-6 relative z-10">
                    <div className="bg-[#333] p-3 rounded-full mr-4 border border-[#C8102E]">
                       <Moon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                       <h3 className="font-agombia text-2xl text-white uppercase">Evening</h3>
                       <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">After Dinner</p>
                    </div>
                 </div>

                 {/* 3D CSS CAPSULES (Dark Mode) */}
                 <div className="flex space-x-4 mb-8 justify-center py-4 bg-[#222] rounded-xl border border-[#333]">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-8 h-20 rounded-full bg-gradient-to-b from-[#C8102E] to-[#8B0000] relative shadow-lg transform -rotate-12 border border-white/10">
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/30"></div>
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
                       <span>After a full meal</span>
                    </div>
                 </div>

                 <div className="bg-[#2A1A1A] rounded-lg p-3 text-center border border-[#C8102E]/30">
                    <span className="text-[#C8102E] font-agombia uppercase text-sm tracking-wide">Repair</span>
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
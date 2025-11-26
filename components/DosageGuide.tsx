import React, { useState } from 'react';
import { Sun, Moon, Droplet, Utensils, AlertTriangle, CheckCircle2, Info, Clock, CloudSun, Zap, BatteryCharging, Sparkles } from 'lucide-react';

const DosageGuide: React.FC = () => {
  const [activeTip, setActiveTip] = useState<number | null>(null);

  const proTips = [
    {
      title: "Hydration is Critical",
      text: "Agombia consists of fibrous roots. Water is the vehicle that transports these nutrients into your bloodstream. Drink at least 500ml (one sachet) with each dose."
    },
    {
      title: "Alcohol Compatible",
      text: "Great news: Agombia is safe to consume with alcohol. It does not negatively interact with your drink, so you can maintain your lifestyle."
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

        {/* --- THE LIVING BIO-CLOCK ANIMATION --- */}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
           
           {/* === MORNING CARD (Sunrise / Clarity) === */}
           <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 to-transparent rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-b from-[#FFFDE7] to-white rounded-3xl p-8 shadow-xl border-t-8 border-yellow-400 overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                 
                 {/* Sunrise Graphic */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
                 
                 <div className="flex justify-between items-start mb-6">
                    <div className="bg-yellow-100 p-3 rounded-2xl border border-yellow-300">
                       <Sun className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200 text-[10px] font-bold uppercase tracking-widest text-yellow-700">
                        7:00 AM - 9:00 AM
                    </div>
                 </div>

                 <h3 className="font-agombia text-3xl text-[#1A1A1A] uppercase mb-1">Morning</h3>
                 <p className="text-sm font-medium text-yellow-700 uppercase tracking-widest mb-6">System Activation</p>

                 {/* 3D Capsules - Yellow/Brown */}
                 <div className="flex space-x-3 mb-8 justify-center py-6 bg-white rounded-2xl border border-yellow-100 shadow-inner">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-6 h-16 rounded-full bg-[#8B4513] relative shadow-md transform rotate-6 border border-white/40 overflow-hidden">
                          {/* Top Half: Yellow */}
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/10"></div>
                          {/* Bottom Half: Brown */}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#D2691E] to-[#8B4513] rounded-b-full"></div>
                          {/* Highlight */}
                          <div className="absolute top-2 right-1.5 w-1.5 h-4 bg-white opacity-40 rounded-full filter blur-[1px] z-10"></div>
                       </div>
                    ))}
                 </div>

                 <div className="mt-auto space-y-4">
                    <div className="flex items-center bg-white p-3 rounded-xl border border-yellow-100 shadow-sm">
                       <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                       <span className="text-sm text-gray-700">Take <strong>2 Capsules</strong></span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-xl border border-yellow-100 shadow-sm">
                       <Utensils className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                       <span className="text-sm text-gray-600">After Breakfast</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* === AFTERNOON CARD (Solar Peak / Sustain) === */}
           <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-transparent rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-b from-[#FFF3E0] to-white rounded-3xl p-8 shadow-xl border-t-8 border-orange-500 overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                 
                 {/* High Noon Graphic */}
                 <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-400 rounded-full opacity-10 blur-2xl"></div>
                 
                 <div className="flex justify-between items-start mb-6">
                    <div className="bg-orange-100 p-3 rounded-2xl border border-orange-300">
                       <Zap className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="bg-orange-50 px-3 py-1 rounded-full border border-orange-200 text-[10px] font-bold uppercase tracking-widest text-orange-700">
                        12:00 PM - 2:00 PM
                    </div>
                 </div>

                 <h3 className="font-agombia text-3xl text-[#1A1A1A] uppercase mb-1">Afternoon</h3>
                 <p className="text-sm font-medium text-orange-700 uppercase tracking-widest mb-6">Peak Sustain</p>

                 {/* 3D Capsules - Yellow/Brown */}
                 <div className="flex space-x-3 mb-8 justify-center py-6 bg-white rounded-2xl border border-orange-100 shadow-inner">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-6 h-16 rounded-full bg-[#8B4513] relative shadow-md transform -rotate-6 border border-white/40 overflow-hidden">
                          {/* Top Half: Yellow */}
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/10"></div>
                          {/* Bottom Half: Brown */}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#D2691E] to-[#8B4513] rounded-b-full"></div>
                          {/* Highlight */}
                          <div className="absolute top-2 right-1.5 w-1.5 h-4 bg-white opacity-40 rounded-full filter blur-[1px] z-10"></div>
                       </div>
                    ))}
                 </div>

                 <div className="mt-auto space-y-4">
                    <div className="flex items-center bg-white p-3 rounded-xl border border-orange-100 shadow-sm">
                       <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                       <span className="text-sm text-gray-700">Take <strong>2 Capsules</strong></span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-xl border border-orange-100 shadow-sm">
                       <Utensils className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                       <span className="text-sm text-gray-600">After Lunch</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* === EVENING CARD (Lunar / Restoration) === */}
           <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-transparent rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative bg-[#0F172A] rounded-3xl p-8 shadow-2xl border-t-8 border-[#C8102E] overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col ring-1 ring-white/10">
                 
                 {/* Starry Night Graphic */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                 <div className="absolute top-0 right-0 p-6 opacity-20">
                    <Moon className="w-24 h-24 text-white" />
                 </div>
                 
                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="bg-white/10 p-3 rounded-2xl border border-white/20 backdrop-blur-md">
                       <Moon className="w-8 h-8 text-[#FFD700]" />
                    </div>
                    <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                        6:00 PM - 8:00 PM
                    </div>
                 </div>

                 <h3 className="font-agombia text-3xl text-white uppercase mb-1 relative z-10">Evening</h3>
                 <p className="text-sm font-medium text-[#C8102E] uppercase tracking-widest mb-6 relative z-10">Deep Repair</p>

                 {/* 3D Capsules - Yellow/Brown (Dark Mode) */}
                 <div className="flex space-x-3 mb-8 justify-center py-6 bg-[#1E293B] rounded-2xl border border-white/10 shadow-inner relative z-10">
                    {[1, 2].map((i) => (
                       <div key={i} className="w-6 h-16 rounded-full bg-[#8B4513] relative shadow-[0_0_15px_rgba(200,16,46,0.4)] transform rotate-0 border border-white/20 overflow-hidden">
                          {/* Top Half: Yellow */}
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#FFD700] to-[#D4AF37] rounded-t-full border-b border-black/30"></div>
                          {/* Bottom Half: Brown */}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#D2691E] to-[#8B4513] rounded-b-full"></div>
                          {/* Highlight */}
                          <div className="absolute top-2 right-1.5 w-1.5 h-4 bg-white opacity-30 rounded-full filter blur-[1px] z-10"></div>
                       </div>
                    ))}
                 </div>

                 <div className="mt-auto space-y-4 relative z-10">
                    <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/10">
                       <CheckCircle2 className="w-5 h-5 text-[#C8102E] mr-3 flex-shrink-0" />
                       <span className="text-sm text-gray-300">Take <strong>2 Capsules</strong></span>
                    </div>
                    <div className="flex items-center bg-white/5 p-3 rounded-xl border border-white/10">
                       <Utensils className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                       <span className="text-sm text-gray-400">After Dinner</span>
                    </div>
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

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, Clock, Send, CheckCircle, Truck, Shield, AlertTriangle, Box, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [stockLevel, setStockLevel] = useState(87);

  // Simulate stock dropping slightly to create urgency
  useEffect(() => {
    const interval = setInterval(() => {
      setStockLevel(prev => Math.max(12, prev - 1));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t-4 border-[#FFD700]">
      
      {/* 1. IMMERSIVE LOGISTICS BACKGROUND */}
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10 filter invert"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
      
      {/* Pulsing Dispatch Nodes on Map */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-[#C8102E] rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-[#C8102E] rounded-full animate-pulse opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
           <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] border border-[#FFD700] px-4 py-1 rounded-full mb-6 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <Globe className="w-4 h-4 text-[#FFD700] animate-spin-slow" />
              <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">Global Logistics Network</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-agombia text-white uppercase tracking-tight">
              Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFF] to-[#D4AF37]">Order Terminal</span>
           </h2>
           <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest font-mono">
              Encrypted Transmission • Priority Dispatch • Accra & Kumasi Hubs Online
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
           
           {/* --- LEFT: THE COMMAND STATUS (4 cols) --- */}
           <div className="lg:col-span-4 space-y-6">
              
              {/* LIVE AGENT CARD */}
              <a href="https://wa.me/233241234567" className="block group relative bg-[#111] border border-gray-800 hover:border-[#25D366] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                 <div className="absolute top-0 right-0 bg-[#25D366] px-3 py-1 rounded-bl-xl text-[10px] font-bold text-white uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span> Online
                 </div>
                 <div className="flex items-center mb-4">
                    <div className="relative">
                       <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-[#25D366] flex items-center justify-center overflow-hidden">
                          <MessageCircle className="w-8 h-8 text-[#25D366]" />
                       </div>
                       <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#25D366] border-2 border-[#111] rounded-full"></div>
                    </div>
                    <div className="ml-4">
                       <h4 className="text-white font-agombia text-xl uppercase">Herbalist Desk</h4>
                       <p className="text-gray-500 text-xs">Avg. Reply: <strong>Instant</strong></p>
                    </div>
                 </div>
                 <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">Start WhatsApp Chat</span>
                    <Send className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
                 </div>
              </a>

              {/* PHONE SUPPORT */}
              <a href="tel:+233241234567" className="block group bg-[#111] border border-gray-800 hover:border-[#FFD700] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                 <div className="flex items-center">
                    <div className="bg-[#1A1A1A] p-3 rounded-full mr-4 group-hover:bg-[#FFD700] group-hover:text-black transition-colors text-white">
                       <Phone className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-white font-bold uppercase">Voice Hotline</h4>
                       <p className="text-gray-500 text-xs font-mono">+233 24 123 4567</p>
                    </div>
                 </div>
              </a>

              {/* REAL-TIME OPERATIONS STATS */}
              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
                 <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">Hub Status</h4>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>Kumasi HQ</span>
                       <span className="text-green-500 font-mono text-xs">OPERATIONAL</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>Accra Depot</span>
                       <span className="text-green-500 font-mono text-xs">DISPATCHING</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-gray-300 flex items-center"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>Tamale Hub</span>
                       <span className="text-yellow-500 font-mono text-xs">HIGH TRAFFIC</span>
                    </div>
                 </div>
              </div>

           </div>

           {/* --- RIGHT: THE GOLD VAULT FORM (8 cols) --- */}
           <div className="lg:col-span-8 relative">
              
              {/* Decorative 'Hinges' for the Vault Look */}
              <div className="absolute -left-2 top-10 w-4 h-12 bg-[#333] rounded-l border-l border-gray-600"></div>
              <div className="absolute -left-2 bottom-10 w-4 h-12 bg-[#333] rounded-l border-l border-gray-600"></div>
              <div className="absolute -right-2 top-10 w-4 h-12 bg-[#333] rounded-r border-r border-gray-600"></div>
              <div className="absolute -right-2 bottom-10 w-4 h-12 bg-[#333] rounded-r border-r border-gray-600"></div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1A1A1A] relative">
                 
                 {/* TOP BAR: URGENCY & SECURITY */}
                 <div className="bg-[#1A1A1A] text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-b-4 border-[#C8102E]">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                       <Shield className="w-5 h-5 text-[#FFD700]" />
                       <span className="text-xs font-bold uppercase tracking-widest">SSL Encrypted Transaction</span>
                    </div>
                    <div className="flex items-center bg-[#C8102E] px-3 py-1 rounded text-xs font-bold uppercase tracking-wide animate-pulse">
                       <AlertTriangle className="w-4 h-4 mr-1" /> High Demand Today
                    </div>
                 </div>

                 {/* INVENTORY PRESSURE BAR */}
                 <div className="px-8 pt-8">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-xs font-bold text-[#C8102E] uppercase flex items-center">
                          <Box className="w-4 h-4 mr-1" /> Daily Stock Level
                       </span>
                       <span className="text-xs font-mono font-bold text-gray-400">{stockLevel}% Remaining</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                       <div 
                          className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-[#C8102E] transition-all duration-1000"
                          style={{ width: `${stockLevel}%` }}
                       ></div>
                    </div>
                 </div>

                 {/* THE FORM */}
                 <form className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                          <input type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-[#1A1A1A] focus:border-[#FFD700] focus:bg-white focus:outline-none transition-all" placeholder="e.g. Kwame Osei" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                          <input type="tel" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-[#1A1A1A] focus:border-[#FFD700] focus:bg-white focus:outline-none transition-all" placeholder="e.g. 024 123 4567" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Select Package</label>
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="border-2 border-gray-200 rounded-xl p-3 hover:border-[#FFD700] cursor-pointer hover:bg-[#FFF8E1] transition-all">
                             <div className="text-xs font-bold text-gray-500 uppercase">Starter</div>
                             <div className="font-agombia text-xl text-[#1A1A1A]">1 Pack</div>
                          </div>
                          <div className="border-2 border-[#FFD700] bg-[#FFF8E1] rounded-xl p-3 cursor-pointer relative overflow-hidden shadow-md">
                             <div className="absolute top-0 right-0 bg-[#C8102E] text-white text-[8px] font-bold px-2 py-0.5 rounded-bl">BEST SELLER</div>
                             <div className="text-xs font-bold text-[#C8102E] uppercase">Recommended</div>
                             <div className="font-agombia text-xl text-[#1A1A1A]">2 Packs</div>
                          </div>
                          <div className="border-2 border-gray-200 rounded-xl p-3 hover:border-[#FFD700] cursor-pointer hover:bg-[#FFF8E1] transition-all">
                             <div className="text-xs font-bold text-gray-500 uppercase">Complete</div>
                             <div className="font-agombia text-xl text-[#1A1A1A]">3 Packs</div>
                             <div className="text-[9px] text-green-600 font-bold">+ Free Delivery</div>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Delivery Location</label>
                       <textarea rows={2} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-[#1A1A1A] focus:border-[#FFD700] focus:bg-white focus:outline-none transition-all resize-none" placeholder="Region, City, Landmark..."></textarea>
                    </div>

                    <div className="pt-4">
                       <button type="button" className="group w-full relative bg-gradient-to-r from-[#1A1A1A] to-[#000] text-[#FFD700] font-agombia text-xl uppercase tracking-widest py-5 rounded-xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          <span className="relative z-10 flex items-center justify-center">
                             <Truck className="w-6 h-6 mr-3 text-[#C8102E]" />
                             Confirm Priority Dispatch
                          </span>
                       </button>
                       <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          Payment on Delivery available for most regions
                       </p>
                    </div>
                 </form>
              </div>

              {/* Trust Seal Below Form */}
              <div className="mt-6 flex justify-center opacity-50">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Ghana.svg" alt="Ghana" className="h-4 w-auto grayscale mr-4" />
                 <span className="text-[10px] text-gray-500 uppercase tracking-widest">Official Ghanaian Product • Est. 2010</span>
              </div>

           </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

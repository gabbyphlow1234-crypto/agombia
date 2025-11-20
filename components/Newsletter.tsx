import React, { useState, useEffect } from 'react';
import { Crown, Lock, Zap, ChevronRight, CreditCard, Gift, Users } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [memberCount, setMemberCount] = useState(23491);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t-4 border-[#FFD700]">
      {/* LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#C8102E] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* === LEFT: THE PITCH & FORM === */}
           <div>
              <div className="inline-flex items-center space-x-2 bg-[#1A1A1A] border border-[#FFD700] rounded-full px-4 py-1.5 mb-6 animate-pulse">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 <span className="text-xs font-bold text-[#FFD700] uppercase tracking-widest">Live: {memberCount.toLocaleString()} Members</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-agombia text-white uppercase leading-none mb-6">
                 Agombia <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFF0B4] to-[#D4AF37]">Vitality Club</span>
              </h2>
              
              <p className="text-gray-400 text-lg font-light mb-10 border-l-2 border-[#C8102E] pl-6 max-w-lg">
                 This isn't just a newsletter. It's an exclusive inner circle. Unlock priority access to herbalist consultations, secret flash sales, and wellness guides.
              </p>

              {/* THE GOLDEN GATE FORM */}
              <form className="relative max-w-md">
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#C8102E] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-black ring-1 ring-gray-900 rounded-xl flex items-center p-2">
                       <input 
                         type="email" 
                         placeholder="ENTER YOUR EMAIL" 
                         className="w-full bg-transparent text-[#FFD700] placeholder-gray-600 text-sm font-bold uppercase tracking-widest px-4 focus:outline-none"
                       />
                       <button 
                         type="button"
                         className="bg-[#FFD700] text-black font-agombia text-sm uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-[#C8102E] hover:text-white transition-colors shadow-lg flex items-center"
                       >
                         Claim Access <ChevronRight className="w-4 h-4 ml-1" />
                       </button>
                    </div>
                 </div>
                 <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-3 text-center">
                    <Lock className="w-3 h-3 inline-block mr-1" /> 100% Secure & Private
                 </p>
              </form>
           </div>

           {/* === RIGHT: THE VIP EXPERIENCE VISUAL === */}
           <div className="relative flex flex-col items-center lg:items-end">
              
              {/* THE 3D BLACK CARD */}
              <div className="relative w-[340px] h-[210px] bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl p-6 border border-[#333] shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-700 z-20 group overflow-hidden cursor-default">
                 
                 {/* Holographic Sheen */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-holo-shine pointer-events-none"></div>
                 <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFD700] blur-[60px] opacity-20"></div>

                 <div className="flex justify-between items-start mb-8">
                    <Crown className="w-8 h-8 text-[#FFD700]" />
                    <span className="font-agombia text-[#333] text-4xl opacity-10 select-none">VIP</span>
                 </div>

                 <div className="mb-2">
                    <div className="text-[#FFD700] font-agombia text-2xl tracking-widest drop-shadow-md">AGOMBIA</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">Vitality Club Member</div>
                 </div>

                 <div className="flex justify-between items-end mt-6">
                    <div className="font-mono text-gray-400 text-sm tracking-widest">**** 9021</div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR" className="w-10 h-10 opacity-50 filter invert" />
                 </div>
              </div>

              {/* VALUE UNLOCK GRID */}
              <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-md">
                 <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-center hover:border-[#FFD700] transition-colors">
                    <div className="bg-[#333] p-2 rounded-full mr-3 text-[#FFD700]">
                       <Zap className="w-4 h-4" />
                    </div>
                    <div>
                       <div className="text-white text-xs font-bold uppercase">Flash Sales</div>
                       <div className="text-gray-500 text-[10px]">24h Early Access</div>
                    </div>
                 </div>
                 <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-center hover:border-[#FFD700] transition-colors">
                    <div className="bg-[#333] p-2 rounded-full mr-3 text-[#FFD700]">
                       <Gift className="w-4 h-4" />
                    </div>
                    <div>
                       <div className="text-white text-xs font-bold uppercase">Free Gifts</div>
                       <div className="text-gray-500 text-[10px]">On Orders 3+</div>
                    </div>
                 </div>
                 <div className="bg-[#1A1A1A] border border-gray-800 p-4 rounded-xl flex items-center hover:border-[#FFD700] transition-colors col-span-2">
                    <div className="bg-[#333] p-2 rounded-full mr-3 text-[#FFD700]">
                       <Users className="w-4 h-4" />
                    </div>
                    <div>
                       <div className="text-white text-xs font-bold uppercase">Herbalist Direct</div>
                       <div className="text-gray-500 text-[10px]">Priority WhatsApp Support Line</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
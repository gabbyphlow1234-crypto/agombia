import React from 'react';
import { Shield, Activity, Zap, Heart, Move, Sparkles, CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      
      {/* CENTRAL SPINE (Energy Line) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent hidden lg:block z-20 transform -translate-x-1/2 shadow-[0_0_15px_rgba(255,215,0,0.6)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20 relative z-30">
          <div className="inline-block bg-black text-[#FFD700] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-4 border border-[#FFD700]">
            System Diagnostics
          </div>
          <h2 className="text-5xl md:text-7xl font-agombia text-[#1A1A1A] uppercase tracking-tighter leading-none">
            Bio-Restoration <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#D30000]">Dashboard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24">
          
          {/* ================= MENS ZONE (Technical/Geometric) ================= */}
          <div className="relative group">
            {/* Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl border border-gray-200 z-0"></div>
            
            <div className="relative z-10 p-4 md:p-8">
                <div className="flex items-center mb-8 border-b-2 border-[#C8102E] pb-4">
                   <div className="bg-[#C8102E] p-2 rounded-md mr-4 shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                   </div>
                   <div>
                       <h3 className="text-3xl font-agombia text-[#1A1A1A] uppercase tracking-wide">Agombia Man</h3>
                       <p className="text-xs text-[#C8102E] font-mono uppercase tracking-widest">System: <span className="animate-pulse">RESTORING POWER</span></p>
                   </div>
                </div>
                
                <p className="text-gray-600 mb-10 font-light italic border-l-4 border-[#C8102E] pl-4">
                  "Engineered from Ghana’s most potent natural roots, it targets the core of masculine health. This is the gold standard of natural masculine care."
                </p>

                <div className="space-y-6">
                  {/* MENS CARD 1 */}
                  <div className="bg-white rounded-r-xl rounded-bl-xl border-l-4 border-[#C8102E] shadow-lg p-5 relative overflow-hidden hover:shadow-2xl transition-all duration-300 group/card">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute right-0"></div>
                    </div>
                    <div className="flex items-start">
                       <Zap className="h-6 w-6 text-[#C8102E] mr-3 mt-1" />
                       <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] font-agombia uppercase">Erectile Vitality</h4>
                          <p className="text-gray-500 text-sm mt-1">Focuses on deep cellular stamina and strength.</p>
                       </div>
                    </div>
                  </div>

                  {/* MENS CARD 2 */}
                  <div className="bg-white rounded-r-xl rounded-bl-xl border-l-4 border-[#C8102E] shadow-lg p-5 relative overflow-hidden hover:shadow-2xl transition-all duration-300 group/card">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute right-0"></div>
                    </div>
                    <div className="flex items-start">
                       <Shield className="h-6 w-6 text-[#C8102E] mr-3 mt-1" />
                       <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] font-agombia uppercase">Prostate Defense</h4>
                          <p className="text-gray-500 text-sm mt-1">Safeguards future health & reduces inflammation.</p>
                       </div>
                    </div>
                  </div>

                  {/* MENS CARD 3 */}
                  <div className="bg-white rounded-r-xl rounded-bl-xl border-l-4 border-[#C8102E] shadow-lg p-5 relative overflow-hidden hover:shadow-2xl transition-all duration-300 group/card">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute right-0"></div>
                    </div>
                    <div className="flex items-start">
                       <Move className="h-6 w-6 text-[#C8102E] mr-3 mt-1" />
                       <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] font-agombia uppercase">Waist Relief</h4>
                          <p className="text-gray-500 text-sm mt-1">Dissolves deep-seated tension in the lower back.</p>
                       </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* ================= WOMENS ZONE (Organic/Flowing) ================= */}
          <div className="relative mt-16 lg:mt-0">
             {/* VISUAL ANCHOR IMAGE - ABSOLUTE POSITIONED */}
             <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border-4 border-[#FFD700] shadow-2xl overflow-hidden z-20 hidden md:block">
                <img 
                  src="https://i.postimg.cc/Sj0fq8t3/Gemini-Generated-Image-x4bg2ux4bg2ux4bg.jpg" 
                  alt="Agombia Woman" 
                  className="w-full h-full object-cover"
                />
             </div>

             {/* Organic Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E1] to-white rounded-3xl border border-[#FFD700]/30 z-0"></div>
             
             <div className="relative z-10 p-4 md:p-8">
                <div className="flex items-center mb-8 border-b-2 border-[#FFD700] pb-4">
                   <div className="bg-[#FFD700] p-2 rounded-md mr-4 shadow-lg">
                      <Sparkles className="h-6 w-6 text-[#1A1A1A]" />
                   </div>
                   <div>
                       <h3 className="text-3xl font-agombia text-[#1A1A1A] uppercase tracking-wide">Agombia Woman</h3>
                       <p className="text-xs text-[#D4AF37] font-mono uppercase tracking-widest">System: <span className="animate-pulse">BALANCING RADIANCE</span></p>
                   </div>
                </div>

                <p className="text-gray-600 mb-10 font-light italic border-l-4 border-[#FFD700] pl-4 pr-20">
                  "Agombia unlocks the natural rhythm of the female body. It acts as a powerful harmonizer, correcting imbalances."
                </p>

                <div className="space-y-6">
                  {/* WOMENS CARD 1 */}
                  <div className="bg-white/80 backdrop-blur-md rounded-l-xl rounded-br-xl border-t-4 border-[#FFD700] shadow-lg p-5 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute right-0"></div>
                    </div>
                    <div className="flex items-start">
                       <Activity className="h-6 w-6 text-[#D4AF37] mr-3 mt-1" />
                       <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] font-agombia uppercase">Cycle Harmony</h4>
                          <p className="text-gray-500 text-sm mt-1">Regulates your cycle for a smoother experience.</p>
                       </div>
                    </div>
                  </div>

                  {/* WOMENS CARD 2 */}
                  <div className="bg-white/80 backdrop-blur-md rounded-l-xl rounded-br-xl border-t-4 border-[#FFD700] shadow-lg p-5 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute right-0"></div>
                    </div>
                    <div className="flex items-start">
                       <Heart className="h-6 w-6 text-[#D4AF37] mr-3 mt-1" />
                       <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] font-agombia uppercase">Libido Boost</h4>
                          <p className="text-gray-500 text-sm mt-1">Reignites natural desire and confidence.</p>
                       </div>
                    </div>
                  </div>

                  {/* WOMENS CARD 3 */}
                  <div className="bg-white/80 backdrop-blur-md rounded-l-xl rounded-br-xl border-t-4 border-[#FFD700] shadow-lg p-5 relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute right-0"></div>
                    </div>
                    <div className="flex items-start">
                       <Move className="h-6 w-6 text-[#D4AF37] mr-3 mt-1" />
                       <div>
                          <h4 className="text-lg font-bold text-[#1A1A1A] font-agombia uppercase">Waist Comfort</h4>
                          <p className="text-gray-500 text-sm mt-1">Soothing relief for a vibrant lifestyle.</p>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
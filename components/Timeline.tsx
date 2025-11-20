import React from 'react';
import { Droplet, Battery, Crown, CheckCircle2, TrendingUp, Activity } from 'lucide-react';

const Timeline: React.FC = () => {
  const steps = [
    {
      phase: "Phase 01",
      day: "Day 1-3",
      title: "The Awakening",
      subtitle: "Rapid Absorption",
      desc: "The bio-active flavonoids enter the bloodstream. Inflammation markers in the lower back begin to drop. You will notice improved digestion and a 'lighter' feeling in the body.",
      benchmark: "System Uptake: 95%",
      icon: Droplet,
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Phase 02",
      day: "Day 7-14",
      title: "The Restoration",
      subtitle: "Deep Repair",
      desc: "Cumulative herbal compounds target joint stiffness and waist pain. Morning grogginess vanishes, replaced by sustained, non-jittery natural energy.",
      benchmark: "Pain Reduction: Visible",
      icon: Battery,
      color: "from-orange-500 to-red-500"
    },
    {
      phase: "Phase 03",
      day: "Day 30+",
      title: "The Optimization",
      subtitle: "Peak Vitality",
      desc: "Hormonal balance is stabilized. Libido, stamina, and immune defense operate at maximum capacity. The body moves fluidly without the 'creaks' of age.",
      benchmark: "Vitality: Optimized",
      icon: Crown,
      color: "from-[#FFD700] to-[#B8860B]"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background DNA Pattern (CSS Gradient simulation) */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C8102E_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
             <Activity className="w-4 h-4 text-[#C8102E]" />
             <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Clinical Progression</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-agombia text-[#1A1A1A] uppercase tracking-tighter">
            The Vitality <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8102E] to-[#FFD700]">Roadmap</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Agombia doesn't just mask symptoms. It rebuilds your health foundation in three distinct phases.
          </p>
        </div>

        <div className="relative">
          {/* THE GOLD VEIN (Central Line) */}
          {/* Desktop Vein */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-3 bg-gray-200 rounded-full overflow-hidden z-0">
             {/* Liquid Gold Flow Animation */}
             <div className="w-full h-1/2 bg-gradient-to-b from-[#FFD700] via-[#D4AF37] to-transparent animate-pulse opacity-80"></div>
          </div>
          
          {/* Mobile Vein */}
          <div className="md:hidden absolute left-8 top-0 h-full w-1 bg-gray-200 z-0"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between relative group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* THE CARD (Holographic Glass) */}
                <div className="w-full md:w-5/12 pl-20 md:pl-0 relative z-10">
                  <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/50 hover:border-[#FFD700] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                     
                     {/* Giant Watermark Number */}
                     <div className="absolute -right-4 -bottom-10 text-[150px] font-agombia text-gray-100 z-0 pointer-events-none select-none leading-none">
                       0{index + 1}
                     </div>

                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                           <div className="inline-block px-3 py-1 bg-[#1A1A1A] text-[#FFD700] text-[10px] font-bold uppercase tracking-widest rounded">
                             {step.phase}
                           </div>
                           <div className="text-[#C8102E] font-bold font-agombia text-xl">
                             {step.day}
                           </div>
                        </div>
                        
                        <h3 className="text-3xl font-agombia text-[#1A1A1A] uppercase mb-1">{step.title}</h3>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">{step.subtitle}</div>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 border-l-2 border-[#FFD700] pl-3">
                          {step.desc}
                        </p>

                        {/* Clinical Benchmark Strip */}
                        <div className="bg-gray-50 rounded-lg p-3 flex items-center border border-gray-100">
                           <TrendingUp className="w-4 h-4 text-[#C8102E] mr-3" />
                           <div>
                              <span className="text-[10px] text-gray-400 uppercase font-bold block">Clinical Benchmark</span>
                              <span className="text-sm font-bold text-[#1A1A1A]">{step.benchmark}</span>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* THE PULSE NODE (Center Connection) */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 z-20 flex items-center justify-center">
                  {/* Outer Ripple */}
                  <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-20 animate-ping"></div>
                  {/* Inner Circle */}
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-[#FFD700] shadow-lg flex items-center justify-center relative z-10">
                     <step.icon className="w-5 h-5 text-[#C8102E]" />
                  </div>
                </div>

                {/* Empty Spacer for Desktop Grid Balance */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Connector */}
        <div className="text-center mt-20">
           <div className="inline-flex flex-col items-center">
              <div className="h-16 w-0.5 bg-gradient-to-b from-gray-200 to-transparent mb-4"></div>
              <p className="text-gray-400 font-agombia text-lg uppercase tracking-widest">Result: Total Restoration</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
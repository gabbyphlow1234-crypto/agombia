
import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Star, Play, Sun, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white overflow-hidden min-h-[100vh] flex items-center pt-24 lg:pt-0">
      
      {/* --- 1. THE ATMOSPHERE (Daylight Studio) --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FFF8E1_0%,_#FFFFFF_60%,_#FDF5E6_100%)] z-0"></div>
      
      {/* Golden Dust Rising (Darker Gold for visibility) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         {[...Array(30)].map((_, i) => (
           <div 
             key={i}
             className="absolute rounded-full bg-[#B8860B] animate-rise blur-[1px]"
             style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: Math.random() * 0.3 + 0.1
             }}
           ></div>
        ))}
      </div>

      {/* The Giant Mandala (Subtle Gold Watermark) */}
      <div className="absolute top-1/2 right-0 lg:right-[10%] transform -translate-y-1/2 translate-x-1/3 lg:translate-x-0 w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px] opacity-10 pointer-events-none animate-mandala z-0">
         <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-[#D4AF37] stroke-[0.3]">
            <circle cx="50" cy="50" r="48" />
            <circle cx="50" cy="50" r="40" />
            <path d="M50 2 L50 98 M2 50 L98 50 M15 15 L85 85 M15 85 L85 15" />
            <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
            <rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center h-full">
          
          {/* --- LEFT COLUMN: THE THRONE ROOM COPY --- */}
          <div className="lg:col-span-6 text-center lg:text-left relative z-30 mb-16 lg:mb-0 pt-10 lg:pt-0">
            
            {/* Golden Pill Badge (Light Mode Variant) */}
            <div className="inline-flex items-center space-x-3 bg-white border-2 border-[#FFD700] rounded-full px-5 py-2 mb-8 shadow-xl animate-fade-in-up">
               <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8102E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C8102E]"></span>
               </div>
               <span className="text-[#C8102E] text-xs font-agombia tracking-[0.2em] uppercase font-bold">
                  The #1 Herbal Formula
               </span>
            </div>
            
            {/* ULTRA BOLD BRAND NAME HEADLINE */}
            <div className="relative mb-8">
               <div className="flex items-center justify-center lg:justify-start text-[#FFD700] mb-2 animate-fade-in-up">
                  <Crown className="w-8 h-8 mr-2 fill-current" />
                  <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-[0.4em]">The Sovereign Choice</span>
               </div>

               <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] font-agombia leading-[0.85] tracking-tighter filter drop-shadow-sm">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#B8860B] animate-liquid-metal font-black drop-shadow-sm pb-2" style={{animationDelay: '0.2s', backgroundSize: '200% auto'}}>
                     AGOMBIA
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-black mt-2 animate-fade-in-up tracking-[0.05em] border-t-4 border-[#C8102E] pt-2 inline-block" style={{animationDelay: '0.3s'}}>
                     CAPSULES
                  </span>
               </h1>
            </div>

            <p className="mt-6 text-lg text-gray-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-[#FFD700] pl-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              The undisputed masterpiece of Ghanaian herbalism. Engineered not just to restore, but to crown you with <span className="text-[#C8102E] font-bold">unshakable dominance</span> and health.
            </p>
            
            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
               <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="agombia-btn animate-shine-sweep inline-flex items-center justify-center px-10 py-5 text-lg font-black rounded-full shadow-[0_10px_20px_rgba(200,16,46,0.2)] font-agombia tracking-widest uppercase cursor-pointer min-w-[240px] hover:scale-105 transition-transform border-2 border-[#FFD700]"
                >
                  Order The Original
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                   href="#testimonials"
                   onClick={(e) => handleScroll(e, '#testimonials')}
                   className="flex items-center justify-center sm:justify-start space-x-3 cursor-pointer group"
                >
                   <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
                      <Play className="w-4 h-4 text-[#1A1A1A] group-hover:text-[#FFD700] fill-current ml-1" />
                   </div>
                   <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-widest group-hover:text-[#C8102E] transition-colors">See The Proof</span>
                </a>
            </div>

            {/* Trust Badges - FDA REMOVED */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 animate-fade-in-up opacity-80" style={{animationDelay: '0.8s'}}>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png" alt="Ghana" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 transition-all" />
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE GOLDEN STARGATE (6 cols) --- */}
          <div className="lg:col-span-6 relative h-[600px] lg:h-[850px] flex items-end justify-center perspective-[1000px]">
             
             {/* 1. THE ARCHWAY (Portal Frame) */}
             <div className="relative w-full max-w-md mx-auto h-[90%] z-20 group">
                
                {/* The Glowing Border */}
                <div className="absolute -inset-2 bg-gradient-to-b from-[#FFD700] via-[#C8102E] to-[#FFF] rounded-t-[12rem] blur-md opacity-50"></div>
                
                {/* The Main Container */}
                <div className="relative h-full w-full bg-[#050505] rounded-t-[12rem] border-[4px] border-[#FFD700] overflow-hidden shadow-2xl">
                   
                   {/* Inner Shadow Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                   
                   {/* THE MODEL IMAGE */}
                   <img 
                      src="https://i.postimg.cc/L6QK096r/Gemini_Generated_Image_xkfddcxkfddcxkfd.png" 
                      alt="Agombia Royal" 
                      className="w-full h-full object-cover object-top transform scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                   />

                   {/* Floating Info Card (Glassmorphism) */}
                   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-2xl z-30 flex items-center justify-between shadow-2xl">
                      <div>
                         <div className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest">Potency</div>
                         <div className="text-white font-agombia text-xl font-bold">100% ORGANIC</div>
                      </div>
                      <div className="h-10 w-10 bg-[#C8102E] rounded-full flex items-center justify-center shadow-lg border border-white/20">
                         <Leaf className="w-5 h-5 text-white" />
                      </div>
                   </div>
                </div>

                {/* 2. ORBITING ELEMENTS (Breaking the Frame) */}
                
                {/* The "Best Seller" Sun (Top Right) */}
                <div className="absolute -top-4 -right-8 z-40 animate-float-2">
                   <div className="relative w-24 h-24">
                      <div className="absolute inset-0 bg-[#FFD700] rounded-full animate-spin-slow flex items-center justify-center opacity-20">
                         <Sun className="w-20 h-20 text-[#FFD700]" />
                      </div>
                      <div className="absolute inset-2 bg-white rounded-full border-4 border-[#FFD700] flex flex-col items-center justify-center shadow-xl">
                         <div className="text-[#1A1A1A] font-black text-2xl font-agombia leading-none">#1</div>
                         <div className="text-[#C8102E] text-[6px] font-bold uppercase tracking-widest">Trusted</div>
                      </div>
                   </div>
                </div>

                {/* The Bottle (Floating Left) */}
                <div className="absolute bottom-32 -left-12 z-40 animate-float-3 hidden sm:block">
                   <div className="bg-white backdrop-blur-md p-2 rounded-2xl border-2 border-[#F5F5F5] shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                      <img 
                         src="https://i.postimg.cc/rz6NcWY5/Gemini-Generated-Image-ci4zn7ci4zn7ci4z.jpg" 
                         alt="Bottle" 
                         className="w-20 h-auto drop-shadow-lg"
                      />
                   </div>
                </div>

             </div>

             {/* 3. GOD RAYS (Behind Portal) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] z-0 pointer-events-none">
                <div className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_#FFD700_20deg,_transparent_40deg,_#FFF8E1_60deg,_transparent_80deg)] opacity-30 animate-spin-slow rounded-full blur-3xl"></div>
             </div>

          </div>

        </div>
        
        {/* SCROLL JEWEL (Light Mode) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30 cursor-pointer hover:scale-110 transition-transform" onClick={(e) => handleScroll(e as any, '#benefits')}>
           <div className="w-6 h-10 border-2 border-[#1A1A1A] rounded-full flex justify-center p-1">
              <div className="w-1.5 h-3 bg-[#C8102E] rounded-full animate-bounce"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

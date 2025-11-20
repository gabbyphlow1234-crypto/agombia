import React, { useEffect, useState } from 'react';
import { Users, Star, CheckCircle, Trophy, Zap, MapPin } from 'lucide-react';

const StatsBanner: React.FC = () => {
  const [count, setCount] = useState(0);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  // REAL-TIME ORDERS SIMULATOR
  const orderNotifications = [
    "Kwame from Accra ordered 2 packs",
    "Abena from Kumasi ordered 1 pack",
    "John from Tamale ordered the Full Course",
    "New 5-Star Review received from Takoradi",
    "Stock Alert: High Demand in Ashanti Region"
  ];

  useEffect(() => {
    // Counter Animation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 15402) {
          clearInterval(interval);
          return 15402;
        }
        return prev + 121;
      });
    }, 20);

    // Notification Rotator
    const notifInterval = setInterval(() => {
      setActiveNotification(orderNotifications[Math.floor(Math.random() * orderNotifications.length)]);
      setTimeout(() => setActiveNotification(null), 4000); // Hide after 4s
    }, 8000); // New one every 8s

    return () => {
      clearInterval(interval);
      clearInterval(notifInterval);
    };
  }, []);

  const stats = [
    { icon: Users, label: "Active Users", value: "15,400+" },
    { icon: Star, label: "Satisfaction", value: "4.9/5" },
    { icon: CheckCircle, label: "Re-Order Rate", value: "98%" },
    { icon: Trophy, label: "Certifications", value: "FDA/GMP" },
  ];

  return (
    <section className="bg-[#0A0A0A] border-b-4 border-[#FFD700] py-16 relative overflow-hidden">
      
      {/* 1. RADAR SCAN BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#C8102E]/30 rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C8102E]/30 rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#C8102E]/30 rounded-full"></div>
         {/* Radar Sweep */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-transparent to-[#C8102E]/20 rounded-full animate-[spin_4s_linear_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center w-full lg:w-3/4 mb-10 lg:mb-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                {/* Glowing Dot */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                
                <div className="bg-[#1F1F1F] p-4 rounded-2xl mb-4 border border-[#333] group-hover:border-[#FFD700] transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <stat.icon className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div className="text-3xl md:text-4xl font-agombia text-white font-bold mb-1 tracking-tight">
                  {index === 0 ? count.toLocaleString() : stat.value}
                </div>
                <div className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold group-hover:text-[#C8102E] transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* REAL-TIME SIMULATOR (Right Side) */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end h-12">
             {activeNotification ? (
                <div className="animate-fade-in-up flex items-center bg-[#1A1A1A] border border-[#C8102E] px-4 py-2 rounded-full shadow-[0_0_15px_rgba(200,16,46,0.4)]">
                   <div className="bg-[#C8102E] p-1 rounded-full mr-3 animate-pulse">
                      <Zap className="w-3 h-3 text-white" />
                   </div>
                   <div className="text-left">
                      <p className="text-[9px] text-[#FFD700] uppercase font-bold tracking-wider">Live Activity</p>
                      <p className="text-white text-xs font-bold truncate max-w-[150px]">{activeNotification}</p>
                   </div>
                </div>
             ) : (
                <div className="flex items-center text-gray-600 text-xs uppercase tracking-widest">
                   <div className="w-2 h-2 bg-gray-600 rounded-full mr-2 animate-pulse"></div>
                   Monitoring Network...
                </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
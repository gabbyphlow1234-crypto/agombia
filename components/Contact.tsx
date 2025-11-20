import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background World Map Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION 1: OPERATIONS DASHBOARD --- */}
        <div className="bg-[#1A1A1A] rounded-t-2xl p-4 flex flex-wrap justify-between items-center border-b-4 border-[#FFD700] shadow-lg mx-4 lg:mx-0">
           <div className="flex items-center space-x-6 text-xs font-mono uppercase tracking-widest text-gray-400">
              <div className="flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                 Kumasi HQ: <span className="text-white ml-1">Online</span>
              </div>
              <div className="hidden md:flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                 Accra Depot: <span className="text-white ml-1">Dispatching</span>
              </div>
           </div>
           <div className="flex items-center text-[#FFD700] text-xs font-bold uppercase">
              <Clock className="w-4 h-4 mr-2" />
              <span>Current Local Time: {new Date().toLocaleTimeString('en-GH', {hour: '2-digit', minute:'2-digit'})} GMT</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl rounded-b-2xl overflow-hidden mx-4 lg:mx-0">
           
           {/* --- LEFT: THE PRIORITY CHANNELS (4 cols) --- */}
           <div className="lg:col-span-4 bg-[#F5F5F5] p-8 border-r border-gray-200">
              <h3 className="font-agombia text-3xl text-[#1A1A1A] uppercase mb-2">Direct <span className="text-[#C8102E]">Dispatch</span></h3>
              <p className="text-gray-500 text-sm mb-8">Choose your priority communication channel.</p>

              <div className="space-y-4">
                 {/* WHATSAPP CARD (HERO) */}
                 <a href="https://wa.me/233241234567" className="block group relative overflow-hidden bg-white border-2 border-[#25D366] rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-[#25D366] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wide">Fastest</div>
                    <div className="flex items-center mb-2">
                       <div className="bg-[#25D366] p-2 rounded-full mr-3 text-white">
                          <MessageCircle className="w-6 h-6 fill-current" />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#1A1A1A]">WhatsApp Hotline</h4>
                          <p className="text-xs text-gray-500">Response: &lt; 2 mins</p>
                       </div>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-[#25D366] font-bold group-hover:underline">
                       Start Chat <Send className="w-3 h-3 ml-2" />
                    </div>
                 </a>

                 {/* PHONE CARD */}
                 <a href="tel:+233241234567" className="block group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#C8102E] transition-all duration-300">
                    <div className="flex items-center">
                       <div className="bg-gray-100 p-2 rounded-full mr-3 text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                          <Phone className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#1A1A1A]">Voice Support</h4>
                          <p className="text-xs text-gray-500">+233 24 123 4567</p>
                       </div>
                    </div>
                 </a>

                 {/* VISIT CARD */}
                 <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center mb-3">
                       <div className="bg-gray-100 p-2 rounded-full mr-3 text-[#1A1A1A]">
                          <MapPin className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-[#1A1A1A]">Physical HQ</h4>
                          <p className="text-xs text-gray-500">Adum, Kumasi</p>
                       </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-lg h-24 overflow-hidden relative">
                       {/* Simulated Map Graphic */}
                       <div className="absolute inset-0 bg-[#E5E7EB] flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#C8102E] rounded-full animate-ping absolute"></div>
                          <div className="w-2 h-2 bg-[#C8102E] rounded-full relative z-10"></div>
                          <div className="absolute mt-4 text-[9px] font-bold text-[#1A1A1A] bg-white px-1 rounded shadow-sm">AGOMBIA HQ</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* --- RIGHT: THE DIGITAL MANIFEST (8 cols) --- */}
           <div className="lg:col-span-8 bg-white p-8 lg:p-12">
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <h3 className="font-agombia text-2xl text-[#1A1A1A] uppercase">New Order <span className="text-[#FFD700]">Manifest</span></h3>
                    <p className="text-gray-400 text-sm mt-1">Fill details below for priority dispatch.</p>
                 </div>
                 <div className="hidden md:block">
                    <div className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg flex items-center">
                       <Truck className="w-5 h-5 text-[#C8102E] mr-2" />
                       <div className="text-left">
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Next Dispatch</p>
                          <p className="text-xs font-bold text-[#1A1A1A]">Today @ 4:00 PM</p>
                       </div>
                    </div>
                 </div>
              </div>

              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                       <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Patient Name</label>
                       <input type="text" id="name" className="block w-full border-b-2 border-gray-200 bg-transparent py-2 px-0 text-lg font-bold text-[#1A1A1A] focus:border-[#C8102E] focus:outline-none transition-colors placeholder-gray-300" placeholder="e.g. Kwame Osei" />
                    </div>
                    <div className="relative">
                       <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Contact Line</label>
                       <input type="tel" id="phone" className="block w-full border-b-2 border-gray-200 bg-transparent py-2 px-0 text-lg font-bold text-[#1A1A1A] focus:border-[#C8102E] focus:outline-none transition-colors placeholder-gray-300" placeholder="e.g. 024..." />
                    </div>
                 </div>

                 <div className="relative">
                     <label htmlFor="type" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Request Type</label>
                     <select id="type" className="block w-full border-b-2 border-gray-200 bg-transparent py-2 px-0 text-lg text-[#1A1A1A] focus:border-[#C8102E] focus:outline-none transition-colors cursor-pointer">
                        <option>New Order (Agombia Capsules)</option>
                        <option>Consultation Request</option>
                        <option>Wholesale / Bulk Inquiry</option>
                        <option>Track Existing Order</option>
                     </select>
                 </div>

                 <div className="relative">
                    <label htmlFor="notes" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Delivery Notes / Location</label>
                    <textarea id="notes" rows={3} className="block w-full border-b-2 border-gray-200 bg-transparent py-2 px-0 text-base text-[#1A1A1A] focus:border-[#C8102E] focus:outline-none transition-colors placeholder-gray-300 resize-none" placeholder="e.g. Near the Shell Filing Station, East Legon..."></textarea>
                 </div>

                 <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                       <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                       <span>Secure Transmission (SSL)</span>
                    </div>
                    <button type="button" className="agombia-btn px-10 py-4 rounded-lg font-agombia text-sm uppercase tracking-widest shadow-xl hover:scale-105 transform transition-all">
                       Transmit Request
                    </button>
                 </div>
              </form>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
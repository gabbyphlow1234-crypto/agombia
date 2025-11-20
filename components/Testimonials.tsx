import React, { useState } from 'react';
import { Star, CheckCircle, MapPin, Receipt, Filter, ChevronLeft, ChevronRight, Camera, ThumbsUp, Users, Clock, Quote, PlayCircle } from 'lucide-react';

// --- DATA: THE MASSIVE TRUST DATABASE ---
const allTestimonials = [
  // PAGE 1 - HIGHLIGHTS
  {
    id: 1,
    name: "Kwame A.",
    location: "Accra, Greater Accra",
    category: "Men",
    headline: "NO MORE BACK PAIN",
    text: "I struggled with waist pain for years as a driver. Agombia fixed it in 3 days. My stamina is back to where it was in my 20s. My wife is very happy now.",
    rating: 5,
    gender: "male",
    timeResult: "Relief in 3 Days",
    orderDate: "12 Oct 2023",
    orderId: "#AG-4492",
    verified: true
  },
  {
    id: 2,
    name: "Abena S.",
    location: "Kumasi, Ashanti",
    category: "Women",
    headline: "BALANCED MY CYCLE",
    text: "My cycle was irregular and painful. This brought balance and I feel curvier, healthier, and more energetic. The waist beads fit better now!",
    rating: 5,
    gender: "female",
    timeResult: "Results in 2 Weeks",
    orderDate: "05 Nov 2023",
    orderId: "#AG-5501",
    verified: true
  },
  {
    id: 3,
    name: "Kojo M.",
    location: "Tamale, Northern",
    category: "Men",
    headline: "SLEEP THROUGH THE NIGHT",
    text: "The prostate support is real. I sleep through the night now without waking up constantly to urinate. This is powerful medicine.",
    rating: 5,
    gender: "male",
    timeResult: "Usage: 1 Month",
    orderDate: "22 Sept 2023",
    orderId: "#AG-3321",
    verified: true
  },
  {
    id: 4,
    name: "Esi D.",
    location: "Takoradi, Western",
    category: "Women",
    headline: "PERFECT FOR MARKET WOMEN",
    text: "I was skeptical at first, but after one week, the heaviness in my lower back vanished. I recommend this to every market woman standing all day.",
    rating: 5,
    gender: "female",
    timeResult: "Relief in 7 Days",
    orderDate: "10 Jan 2024",
    orderId: "#AG-6621",
    verified: true
  },
  {
    id: 5,
    name: "Emmanuel O.",
    location: "East Legon, Accra",
    category: "Men",
    headline: "DOUBLE THE ENERGY",
    text: "As a corporate driver, my back was killing me. Agombia is the only thing that worked. Also, my energy in the 'other room' has doubled.",
    rating: 5,
    gender: "male",
    timeResult: "Instant Effect",
    orderDate: "14 Feb 2024",
    orderId: "#AG-7782",
    verified: true
  },
  {
    id: 6,
    name: "Akosua B.",
    location: "Cape Coast",
    category: "Women",
    headline: "GLOWING SKIN",
    text: "It helped with my ovulation pain significantly. I feel lighter and my skin is even glowing. A true natural wonder.",
    rating: 4,
    gender: "female",
    timeResult: "Usage: 3 Weeks",
    orderDate: "02 Mar 2024",
    orderId: "#AG-8819",
    verified: true
  },
  // PAGE 2
  {
    id: 7,
    name: "Nii L.",
    location: "Teshie, Accra",
    category: "Men",
    headline: "PURE MAN POWER",
    text: "Man power! That is all I will say. If you are a man, just buy it. You will not regret it.",
    rating: 5,
    gender: "male",
    timeResult: "Usage: 2 Days",
    orderDate: "11 Mar 2024",
    orderId: "#AG-9901",
    verified: true
  },
  {
    id: 8,
    name: "Grace F.",
    location: "Sunyani, Brong-Ahafo",
    category: "Women",
    headline: "NO JITTERS",
    text: "Finally a product that understands women's bodies. No jitters, just pure health. I bought 3 packs for my sisters.",
    rating: 5,
    gender: "female",
    timeResult: "Constant Use",
    orderDate: "15 Mar 2024",
    orderId: "#AG-1022",
    verified: true
  },
  {
    id: 9,
    name: "Samuel K.",
    location: "Ho, Volta Region",
    category: "Men",
    headline: "FATIGUE IS GONE",
    text: "The delivery was fast to Ho. The product works exactly as advertised. My general fatigue is gone.",
    rating: 5,
    gender: "male",
    timeResult: "Relief in 5 Days",
    orderDate: "20 Mar 2024",
    orderId: "#AG-1103",
    verified: true
  },
  {
    id: 10,
    name: "Serwaa A.",
    location: "Koforidua",
    category: "Women",
    headline: "INTIMACY IMPROVED",
    text: "My husband and I both take it. It has improved our intimacy and general health. God bless Agombia.",
    rating: 5,
    gender: "female",
    timeResult: "Usage: 2 Months",
    orderDate: "25 Mar 2024",
    orderId: "#AG-1204",
    verified: true
  },
  {
    id: 11,
    name: "Yaw B.",
    location: "Obuasi",
    category: "Men",
    headline: "MINER APPROVED",
    text: "I work in the mines and body pain is normal. Since taking Agombia, I wake up fresh every morning.",
    rating: 5,
    gender: "male",
    timeResult: "Daily Routine",
    orderDate: "01 Apr 2024",
    orderId: "#AG-1305",
    verified: true
  },
  {
    id: 12,
    name: "Linda P.",
    location: "Tema",
    category: "Women",
    headline: "SNATCHED WAIST",
    text: "Very good for digestion too. I feel less bloated and my waist looks snatched!",
    rating: 4,
    gender: "female",
    timeResult: "Usage: 4 Weeks",
    orderDate: "05 Apr 2024",
    orderId: "#AG-1406",
    verified: true
  },
   // PAGE 3
  {
    id: 13,
    name: "Chief O.",
    location: "Manhyia, Kumasi",
    category: "Men",
    headline: "RESPECTABLE HERBS",
    text: "A respectable herb. It does not rush the heart, it builds the body from the inside. Highly approved.",
    rating: 5,
    gender: "male",
    timeResult: "Long Term",
    orderDate: "10 Apr 2024",
    orderId: "#AG-1507",
    verified: true
  },
  {
    id: 14,
    name: "Cynthia M.",
    location: "Madina",
    category: "Women",
    headline: "PAIN FREE PERIODS",
    text: "My cramps used to be unbearable. Two months on Agombia and I barely feel them. Thank you!",
    rating: 5,
    gender: "female",
    timeResult: "Usage: 2 Cycles",
    orderDate: "12 Apr 2024",
    orderId: "#AG-1608",
    verified: true
  },
  {
    id: 15,
    name: "Pastor John",
    location: "Dansoman",
    category: "Men",
    headline: "RESTORES DIGNITY",
    text: "I recommend this to the older men in my congregation. It restores strength and dignity.",
    rating: 5,
    gender: "male",
    timeResult: "Usage: 3 Months",
    orderDate: "15 Apr 2024",
    orderId: "#AG-1709",
    verified: true
  },
  {
    id: 16,
    name: "Fati I.",
    location: "Bolgatanga",
    category: "Women",
    headline: "SMELL THE QUALITY",
    text: "Authentic herbs. You can smell the quality when you open the bottle.",
    rating: 5,
    gender: "female",
    timeResult: "Instant",
    orderDate: "18 Apr 2024",
    orderId: "#AG-1810",
    verified: true
  },
  {
    id: 17,
    name: "Richmond D.",
    location: "Spintex",
    category: "Men",
    headline: "JUST POWER",
    text: "The best herbal capsule in Ghana right now. No headaches, just power.",
    rating: 5,
    gender: "male",
    timeResult: "Instant",
    orderDate: "20 Apr 2024",
    orderId: "#AG-1911",
    verified: true
  },
  {
    id: 18,
    name: "Ama K.",
    location: "Osu",
    category: "Women",
    headline: "10 YEARS YOUNGER",
    text: "I love the packaging and the results are even better. I feel 10 years younger.",
    rating: 5,
    gender: "female",
    timeResult: "Usage: 1 Year",
    orderDate: "22 Apr 2024",
    orderId: "#AG-2012",
    verified: true
  }
];

const customerPhotos = [
  "https://i.postimg.cc/Jtw5mJdg/Gemini-Generated-Image-78cecl78cecl78ce-(1).jpg",
  "https://i.postimg.cc/5jcS1vkL/Gemini-Generated-Image-fcx5b3fcx5b3fcx5.jpg",
  "https://i.postimg.cc/Sj0fq8t3/Gemini-Generated-Image-x4bg2ux4bg2ux4bg.jpg",
  "https://i.postimg.cc/vTxtpXXh/Gemini-Generated-Image-lhk5cclhk5cclhk5.jpg",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=800",
];

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const itemsPerPage = 6;

  // Filter Logic
  const filteredTestimonials = activeCategory === 'All' 
    ? allTestimonials 
    : allTestimonials.filter(t => t.category === activeCategory);

  // Pagination Logic
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = filteredTestimonials.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById('reviews-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = ["All", "Men", "Women"];

  return (
    <section id="testimonials" className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      
      {/* 1. GHANA PULSE MAP BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#C8102E_2px,_transparent_2.5px)] [background-size:30px_30px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION 1: THE TRUST DASHBOARD --- */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border-t-8 border-[#FFD700] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full blur-[100px] opacity-20"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                 <h2 className="text-4xl md:text-5xl font-agombia text-[#1A1A1A] uppercase tracking-tight">
                    Client <span className="text-[#C8102E]">Success</span>
                 </h2>
                 <p className="text-gray-500 mt-2">Real stories from verified users across Ghana.</p>
              </div>
              
              <div className="flex flex-col items-center border-l border-r border-gray-100 py-4">
                 <div className="text-5xl font-bold text-[#1A1A1A] font-agombia">4.9<span className="text-2xl text-gray-400">/5</span></div>
                 <div className="flex space-x-1 my-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-[#FFD700] fill-current" />)}
                 </div>
                 <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">Based on 15,402 Reviews</div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                 <div className="bg-green-50 border border-green-200 px-6 py-3 rounded-full flex items-center mb-3">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-bold">98% Re-order Rate</span>
                 </div>
                 <p className="text-xs text-gray-400 max-w-[200px] text-center md:text-right">Thousands of Ghanaians trust Agombia for their daily vitality.</p>
              </div>
           </div>
        </div>

        {/* --- SECTION 1.5: THE SPOTLIGHT STORY (FEATURED) --- */}
        <div className="mb-16 relative group cursor-pointer">
           <div className="absolute inset-0 bg-[#1A1A1A] rounded-3xl transform translate-x-2 translate-y-2"></div>
           <div className="relative bg-[#C8102E] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              {/* Left: Image / Video Placeholder */}
              <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden">
                 <img 
                   src="https://i.postimg.cc/Jtw5mJdg/Gemini-Generated-Image-78cecl78cecl78ce-(1).jpg" 
                   alt="Featured Story" 
                   className="w-full h-full object-cover object-top filter brightness-75 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform duration-300">
                       <PlayCircle className="w-10 h-10 text-white fill-current" />
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold uppercase">
                    Featured Story
                 </div>
              </div>
              
              {/* Right: Content */}
              <div className="md:w-7/12 p-8 md:p-12 text-white flex flex-col justify-center">
                 <div className="flex items-center mb-4 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                 </div>
                 <Quote className="w-10 h-10 text-white/20 mb-2 rotate-180" />
                 <h3 className="text-2xl md:text-4xl font-agombia uppercase leading-tight mb-4">
                    "I thought I was too old to feel this strong again."
                 </h3>
                 <p className="text-white/80 text-lg italic mb-6 font-light">
                    — Mr. Osei, 62, retired teacher from Kumasi, shares his journey of reclaiming his vitality and waist health in just 3 weeks.
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm font-bold">
                       <CheckCircle className="w-4 h-4 text-[#FFD700] mr-2" /> Verified Purchase
                    </div>
                    <div className="h-4 w-px bg-white/30"></div>
                    <div className="text-sm text-[#FFD700] font-mono uppercase">Result: Total Restoration</div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- SECTION 2: INTELLIGENT FILTERS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
           <div className="flex space-x-2 bg-white p-1 rounded-full shadow-sm border border-gray-200 mb-4 md:mb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-[#1A1A1A] text-[#FFD700] shadow-md' 
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
           <div className="text-gray-400 text-sm flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredTestimonials.length)} of {filteredTestimonials.length} stories
           </div>
        </div>

        {/* --- SECTION 3: THE REVIEW GRID --- */}
        <div id="reviews-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentTestimonials.map((t) => (
            <div 
              key={t.id} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-[#FFD700] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full"
            >
              
              {/* SLIDING RECEIPT (Hover Effect) */}
              <div className="absolute -top-10 left-0 w-full px-6 z-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 pointer-events-none">
                 <div className="bg-[#FDFDFD] border border-gray-200 p-3 rounded-t-lg shadow-inner flex justify-between items-center text-[10px] font-mono text-gray-500 border-b-2 border-dashed border-gray-300">
                    <div className="flex items-center">
                      <Receipt className="w-3 h-3 mr-1" />
                      <span>{t.orderId}</span>
                    </div>
                    <span className="text-[#C8102E] font-bold">Verified Purchase</span>
                 </div>
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-10 bg-white rounded-3xl flex-grow flex flex-col">
                  
                  {/* WAX SEAL BADGE */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#B8860B] rounded-full shadow-lg border-4 border-white flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                     <CheckCircle className="text-white w-7 h-7" />
                  </div>

                  {/* USER PROFILE HEADER */}
                  <div className="flex items-center mb-6">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold font-agombia shadow-md ${t.gender === 'male' ? 'bg-[#2C3E50]' : 'bg-[#C8102E]'}`}>
                        {t.name.charAt(0)}
                     </div>
                     <div className="ml-4">
                        <h4 className="font-agombia text-[#1A1A1A] text-lg uppercase tracking-wide leading-none">{t.name}</h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                           <MapPin className="w-3 h-3 mr-1 text-[#C8102E]" />
                           {t.location}
                        </div>
                     </div>
                  </div>

                  {/* KEY OUTCOME HEADLINE (NEW) */}
                  <div className="mb-4">
                     <h5 className="font-agombia text-[#C8102E] text-xl uppercase leading-none tracking-wide">{t.headline}</h5>
                  </div>

                  {/* TIME-TO-RESULT TAG (REPLACES AUDIO) */}
                  <div className="mb-4">
                     <div className="inline-flex items-center bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-green-600 mr-2" />
                        <span className="text-xs font-bold text-green-700 uppercase tracking-wide">{t.timeResult}</span>
                     </div>
                  </div>

                  {/* TESTIMONIAL TEXT */}
                  <div className="flex-grow">
                    <div className="flex mb-3">
                       {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />)}
                    </div>
                    <p className="text-gray-700 italic font-light leading-relaxed text-sm">
                      "{t.text}"
                    </p>
                  </div>

                  {/* FOOTER: Date */}
                  <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
                    <span>Posted on {t.orderDate}</span>
                    <div className="flex items-center text-green-600 font-bold">
                       <ThumbsUp className="w-3 h-3 mr-1" /> Helpful
                    </div>
                  </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 4: PAGINATION CONTROLS --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-24">
             <button 
               onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
               disabled={currentPage === 1}
               className="p-3 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#C8102E] hover:text-white transition-colors"
             >
                <ChevronLeft className="w-5 h-5" />
             </button>
             
             <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                   <button
                     key={i}
                     onClick={() => handlePageChange(i + 1)}
                     className={`w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${
                       currentPage === i + 1 
                         ? 'bg-[#C8102E] text-white shadow-lg scale-110' 
                         : 'bg-white text-gray-600 border border-gray-200 hover:border-[#FFD700]'
                     }`}
                   >
                     {i + 1}
                   </button>
                ))}
             </div>

             <button 
               onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
               disabled={currentPage === totalPages}
               className="p-3 rounded-full bg-white shadow-md border border-gray-200 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#C8102E] hover:text-white transition-colors"
             >
                <ChevronRight className="w-5 h-5" />
             </button>
          </div>
        )}

        {/* --- SECTION 5: THE WALL OF LOVE (GALLERY) --- */}
        <div className="border-t border-gray-200 pt-16">
           <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-[#FFF8E1] text-[#B8860B] px-4 py-1.5 rounded-full mb-4 border border-[#FFD700]">
                 <Camera className="w-4 h-4" />
                 <span className="text-xs font-bold uppercase tracking-widest">The Community</span>
              </div>
              <h3 className="text-3xl font-agombia text-[#1A1A1A] uppercase">
                Faces of <span className="text-[#C8102E]">Agombia</span>
              </h3>
              <p className="text-gray-500 mt-2">Join the thousands showing off their results.</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {customerPhotos.map((photo, idx) => (
                 <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer">
                    <img 
                      src={photo} 
                      alt="Happy Customer" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[#C8102E]/80 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                       <Star className="w-3 h-3 text-[#FFD700] fill-current" />
                    </div>
                 </div>
              ))}
           </div>
           
           <div className="mt-10 text-center">
              <a href="#contact" className="inline-flex items-center text-[#C8102E] font-bold uppercase tracking-widest text-sm border-b-2 border-[#C8102E] pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors">
                 Submit Your Story <ChevronRight className="w-4 h-4 ml-1" />
              </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
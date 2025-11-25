
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ShieldCheck, Truck, Info, Leaf, ThumbsUp, Sparkles, BookOpen } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // --- DATA: THE KNOWLEDGE BASE ---
  const categories = ["All", "Usage Protocol", "Safety & Medical", "Shipping & Orders"];

  const faqs = [
    {
      category: "Usage Protocol",
      question: "How strictly must I follow the dosage?",
      answer: "Consistency is key. Take 2 capsules in the morning and 2 in the evening.",
      note: "Best taken with warm water to activate the herbal compounds faster.",
      helpful: "98%"
    },
    {
      category: "Usage Protocol",
      question: "Can I take it on an empty stomach?",
      answer: "We recommend taking Agombia after a meal to ensure optimal absorption and prevent any mild stomach discomfort.",
      note: "A light meal like porridge or bread is sufficient.",
      helpful: "95%"
    },
    {
      category: "Safety & Medical",
      question: "Are there any side effects?",
      answer: "Agombia is 100% natural. Most users experience no side effects. Some may feel increased thirst due to the detoxification process.",
      note: "Drink at least 2 liters of water daily.",
      helpful: "99%"
    },
    {
      category: "Safety & Medical",
      question: "Can I take this with alcohol?",
      answer: "No. Alcohol reduces the efficacy of the herbs. Please wait at least 2 hours after taking your dose before consuming alcohol.",
      note: "Alcohol dehydrates the system, counteracting the hydration needed for the herbs.",
      helpful: "92%"
    },
    {
      category: "Safety & Medical",
      question: "Is it safe for hypertensive patients?",
      answer: "Agombia helps regulate blood flow, but if you are on strong prescription medication, please consult your doctor first.",
      note: "Monitor your BP regularly when starting any new supplement.",
      helpful: "100%"
    },
    {
      category: "Shipping & Orders",
      question: "Do you deliver outside Accra?",
      answer: "Yes, we deliver nationwide via VIP Parcel services or FedEx to all regions (Kumasi, Tamale, Takoradi, etc.).",
      note: "Delivery usually takes 24-72 hours depending on location.",
      helpful: "96%"
    },
    {
      category: "Shipping & Orders",
      question: "Is the packaging discreet?",
      answer: "Absolutely. All orders are shipped in plain brown boxes or opaque courier bags. No product details are visible on the outside.",
      note: "Your privacy is our priority.",
      helpful: "99%"
    }
  ];

  // --- LOGIC: FILTERING ---
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#F9F9F9] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C8102E] via-[#FFD700] to-[#C8102E]"></div>
      <div className="absolute -right-20 top-40 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
             <BookOpen className="h-5 w-5 text-[#C8102E] mr-2" />
             <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Knowledge Base</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-agombia text-[#1A1A1A] uppercase tracking-tight">
             The Agombia <span className="text-[#C8102E]">Wisdom Centre</span>
           </h2>
           <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
             Expert answers to your most pressing health questions. Verified by our herbal specialists.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* === LEFT COLUMN: MAIN FAQ ENGINE (8 cols) === */}
           <div className="lg:col-span-8">
              
              {/* 1. SEARCH BAR */}
              <div className="relative mb-10 shadow-lg rounded-2xl">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                 </div>
                 <input
                    type="text"
                    placeholder="Search keywords like 'dosage', 'alcohol', 'delivery'..."
                    className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-transparent focus:border-[#FFD700] rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 text-lg transition-colors duration-300"
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null); }}
                 />
              </div>

              {/* 2. TOPIC CLUSTERS */}
              <div className="flex flex-wrap gap-3 mb-8">
                 {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border ${
                         activeCategory === cat
                         ? 'bg-[#1A1A1A] text-[#FFD700] border-[#1A1A1A]'
                         : 'bg-white text-gray-500 border-gray-200 hover:border-[#C8102E] hover:text-[#C8102E]'
                      }`}
                    >
                       {cat}
                    </button>
                 ))}
              </div>

              {/* 3. QUESTION LIST */}
              <div className="space-y-4">
                 {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                      <div key={index} className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-[#FFD700] shadow-xl' : 'border-gray-100 shadow-sm hover:border-gray-200'}`}>
                         <button
                            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                         >
                            <span className={`text-lg font-bold font-agombia uppercase tracking-wide ${openIndex === index ? 'text-[#C8102E]' : 'text-[#1A1A1A]'}`}>
                               {faq.question}
                            </span>
                            <div className={`p-1 rounded-full transition-transform duration-300 ${openIndex === index ? 'bg-[#FFD700] rotate-180' : 'bg-gray-100'}`}>
                               <ChevronDown className={`h-5 w-5 ${openIndex === index ? 'text-[#1A1A1A]' : 'text-gray-500'}`} />
                            </div>
                         </button>

                         <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-6 pb-6 pt-0">
                               <p className="text-gray-600 leading-relaxed mb-4 border-l-2 border-gray-200 pl-4">
                                  {faq.answer}
                               </p>
                               
                               {/* HERBALIST NOTE BOX */}
                               <div className="bg-[#FFF8E1] border border-[#FFD700] rounded-xl p-4 flex items-start mb-4">
                                  <Sparkles className="h-5 w-5 text-[#B8860B] mr-3 mt-1 flex-shrink-0" />
                                  <div>
                                     <p className="text-xs font-bold text-[#B8860B] uppercase tracking-widest mb-1">Herbalist's Note</p>
                                     <p className="text-sm text-[#5D4037] italic">"{faq.note}"</p>
                                  </div>
                               </div>

                               <div className="flex items-center text-xs text-gray-400">
                                  <ThumbsUp className="h-3 w-3 mr-1 text-green-500" />
                                  <span className="font-bold text-green-600 mr-1">{faq.helpful}</span> found this helpful
                               </div>
                            </div>
                         </div>
                      </div>
                    ))
                 ) : (
                    <div className="text-center py-10 text-gray-400">
                       No questions found matching your search.
                    </div>
                 )}
              </div>
           </div>

           {/* === RIGHT COLUMN: SIDEBAR (4 cols) === */}
           <div className="lg:col-span-4 space-y-6 hidden lg:block">
              
              {/* DYNAMIC FACT CARD */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 text-white border-t-4 border-[#C8102E] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Leaf className="w-24 h-24" />
                 </div>
                 <h4 className="text-[#FFD700] font-agombia text-xl uppercase mb-2">Did You Know?</h4>
                 <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Ancient Ghanaian warriors chewed <span className="text-white font-bold">Prekese</span> before battle to enhance their stamina and reduce pain perception.
                 </p>
                 <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#C8102E] h-full w-2/3 animate-pulse"></div>
                 </div>
              </div>

              {/* SHIPPING CARD */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                 <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-2 rounded-full mr-3">
                       <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] uppercase">Fast Delivery</h4>
                 </div>
                 <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex justify-between">
                       <span>Accra & Tema:</span>
                       <span className="font-bold text-[#1A1A1A]">Same Day</span>
                    </li>
                    <li className="flex justify-between">
                       <span>Kumasi:</span>
                       <span className="font-bold text-[#1A1A1A]">24 Hours</span>
                    </li>
                    <li className="flex justify-between">
                       <span>Other Regions:</span>
                       <span className="font-bold text-[#1A1A1A]">72 Hours</span>
                    </li>
                 </ul>
              </div>

              {/* SUPPORT CARD */}
              <div className="bg-[#FFF] rounded-2xl p-6 border border-[#FFD700] shadow-lg text-center">
                 <Info className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                 <h4 className="font-bold text-[#1A1A1A] uppercase mb-2">Still have questions?</h4>
                 <p className="text-xs text-gray-500 mb-4">Our herbal specialists are available on WhatsApp.</p>
                 <a href="#contact" className="block w-full py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase rounded-lg hover:bg-[#333] transition-colors">
                    Contact Support
                 </a>
              </div>

           </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

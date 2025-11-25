
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Leaf, Phone, ShieldAlert, Info, ChevronRight, MessageCircle, User, Activity, Check, Clock, ShoppingBag, Sun, Moon } from 'lucide-react';

// --- TYPES ---
interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  type?: 'text' | 'alert' | 'warning' | 'card' | 'product' | 'dosage' | 'quiz' | 'form';
  timestamp: string;
  read?: boolean;
}

interface QuizState {
  active: boolean;
  step: number;
  gender?: string;
  goal?: string;
}

// --- KNOWLEDGE BASE (EXPANDED) ---
const KNOWLEDGE_BASE = [
  {
    keywords: ['price', 'cost', 'how much', 'buy', 'cedis', 'ghc', 'money', 'amount', 'pay', 'purchase', 'ordering', 'sell', 'pricing'],
    answer: "Agombia Capsules are sold at a standard national price.",
    type: 'product' // Triggers the Rich Media Product Card
  },
  {
    keywords: ['dosage', 'dose', 'take', 'how to', 'usage', 'daily', 'drink', 'directions', 'instruction', 'use', 'swallow', 'capsules', 'many'],
    answer: "Here is your Daily Vitality Protocol (6 Capsules Total):",
    type: 'dosage' // Triggers the Visual Dosage Card
  },
  {
    keywords: ['pregnant', 'breastfeeding', 'lactating', 'baby', 'child', 'children', 'kids', '18', 'minor', 'safe', 'safety', 'danger', 'harm', 'side effect', 'headache'],
    answer: "⚠️ **Safety Warning**:\n\nAgombia is NOT recommended for:\n• Pregnant women\n• Lactating mothers\n• Children under 18 years old.\n\nPlease consult your physician if you fall into these categories.",
    type: 'alert'
  },
  {
    keywords: ['alcohol', 'drink', 'beer', 'wine', 'akpeteshie', 'liquor', 'guinness', 'club', 'bitters'],
    answer: "Please **avoid alcohol** for at least 2 hours after taking your dose.\n\nAlcohol can dehydrate the system and reduce the efficacy of the herbal compounds.",
    type: 'warning'
  },
  {
    keywords: ['location', 'office', 'where', 'shop', 'store', 'address', 'techiman', 'visit', 'map', 'located', 'place', 'branch'],
    answer: "Our Head Office is located in **Techiman, Ghana**.\n\nHowever, Agombia is available at all leading Pharmacy, Chemical, and Herbal shops nationwide.",
    type: 'text'
  },
  {
    keywords: ['delivery', 'ship', 'send', 'accra', 'kumasi', 'tamale', 'region', 'wait', 'long', 'arrive', 'reach', 'dispatch'],
    answer: "Yes! We offer **Nationwide Dispatch** via VIP Parcel Services or FedEx.\n\n• **Accra/Kumasi:** Same or Next Day\n• **Other Regions:** 24-48 Hours\n• **Fee:** Paid by customer upon arrival.",
    type: 'text'
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening'],
    answer: "Hello! Akwaaba. I am Adwoa. How can I help you with your health today?",
    type: 'text'
  },
  {
    keywords: ['work', 'effective', 'good', 'real', 'scam', 'fake', 'result', 'testimony', 'proof'],
    answer: "Agombia is FDA approved and GMP certified. We have over 15,000 verified users. You can check our **Testimonials** section to see real video proof!",
    type: 'text'
  }
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [statusText, setStatusText] = useState('Online');
  const [inputValue, setInputValue] = useState('');
  const [showHumanCard, setShowHumanCard] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  
  // Quiz State
  const [quiz, setQuiz] = useState<QuizState>({ active: false, step: 0 });

  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'init-1', 
      role: 'ai', 
      content: "Akwaaba! I am Adwoa, your Agombia Health Specialist. 🌿\n\nI can help with Dosage, Pricing, or run a quick Health Check for you.", 
      type: 'text',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Unread Badge Effect
  useEffect(() => {
    if (isOpen) setUnreadCount(0);
  }, [isOpen]);

  // --- LOGIC ENGINE ---
  const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const addMessage = (role: 'user' | 'ai', content: string, type: Message['type'] = 'text') => {
    setMessages(prev => [...prev, { 
      id: Date.now().toString(), 
      role, 
      content, 
      type, 
      timestamp: getTime(),
      read: role === 'user' // User messages are read immediately
    }]);
  };

  const generateResponse = async (query: string) => {
    setStatusText('Adwoa is typing...');
    setIsTyping(true);
    
    // Random delay for realism
    const delay = 800 + Math.random() * 1000;
    await new Promise(resolve => setTimeout(resolve, delay));

    const lowerQuery = query.toLowerCase();

    // QUIZ LOGIC INTERCEPT
    if (quiz.active) {
      handleQuizLogic(lowerQuery);
      setIsTyping(false);
      setStatusText('Online');
      return;
    }

    // NORMAL LOGIC (SMART MATCHING)
    // Check if ANY keyword in the entry exists in the user query
    const match = KNOWLEDGE_BASE.find(entry => 
      entry.keywords.some(keyword => lowerQuery.includes(keyword))
    );

    if (match) {
      addMessage('ai', match.answer, match.type as any);
    } else if (lowerQuery.includes('check') || lowerQuery.includes('quiz') || lowerQuery.includes('health')) {
      startQuiz();
    } else {
      addMessage('ai', "That is a specific question! Let me connect you with our Senior Herbalist via WhatsApp for a precise answer.", 'text');
      setShowHumanCard(true);
    }

    setIsTyping(false);
    setStatusText('Online');
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const text = inputValue;
    setInputValue('');
    setShowHumanCard(false);
    addMessage('user', text);
    generateResponse(text);
  };

  const handleQuickChip = (text: string) => {
    if (text === "Start Health Check 🩺") {
      startQuiz();
    } else {
      setShowHumanCard(false);
      addMessage('user', text);
      generateResponse(text);
    }
  };

  // --- QUIZ SYSTEM ---
  const startQuiz = () => {
    setQuiz({ active: true, step: 1 });
    addMessage('ai', "Let's find the perfect protocol for you. First, are you Male or Female?", 'quiz');
  };

  const handleQuizLogic = (input: string) => {
    if (quiz.step === 1) {
      const gender = input.includes('female') || input.includes('woman') ? 'Female' : 'Male';
      setQuiz(prev => ({ ...prev, gender, step: 2 }));
      
      const nextQ = gender === 'Male' 
        ? "Got it. What is your main goal?\n1. Sexual Vitality/Stamina\n2. Waist Pain Relief\n3. General Health"
        : "Understood. What is your main goal?\n1. Menstrual/Hormonal Balance\n2. Waist Pain/Shape\n3. General Health";
      
      addMessage('ai', nextQ, 'quiz');
    } else if (quiz.step === 2) {
      setQuiz(prev => ({ ...prev, active: false, step: 0 }));
      addMessage('ai', `Excellent. Based on your needs, I highly recommend the **Standard 3-Pack Course** for ${quiz.gender === 'Male' ? 'maximum stamina restoration' : 'total hormonal balance'}.`, 'product');
    }
  };

  const handleQuizOption = (option: string) => {
    addMessage('user', option);
    generateResponse(option); // This triggers the logic above
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
      
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="bg-white w-[90vw] sm:w-[400px] rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-4 animate-fade-in-up flex flex-col max-h-[700px] h-[75vh] origin-bottom-right">
          
          {/* HEADER */}
          <div className="bg-[#111] p-4 flex justify-between items-center border-b-4 border-[#FFD700] shadow-lg z-20">
            <div className="flex items-center">
              <div className="relative mr-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#FFD700] overflow-hidden p-0.5 bg-white">
                  <img 
                     src="https://i.postimg.cc/Y0J6BjVt/Gemini_Generated_Image_v38pudv38pudv38p.jpg" 
                     alt="Adwoa AI" 
                     className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#111] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-white font-agombia uppercase tracking-wider text-lg leading-none flex items-center">
                  Adwoa AI <span className="bg-[#C8102E] text-[8px] px-1.5 py-0.5 rounded ml-2 tracking-normal">BOT</span>
                </h3>
                <p className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest mt-1">{statusText}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setIsOpen(false)} className="bg-[#333] p-1.5 rounded-full text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F0F2F5] space-y-4 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            
            <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest my-4 flex items-center justify-center gap-2">
               <span className="h-px w-12 bg-gray-300"></span>
               Today
               <span className="h-px w-12 bg-gray-300"></span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* BUBBLE */}
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm relative group ${
                  msg.role === 'user' 
                    ? 'bg-[#C8102E] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  
                  {/* SPECIAL CONTENT TYPES */}
                  {msg.type === 'text' && <div className="whitespace-pre-line">{msg.content}</div>}
                  
                  {msg.type === 'alert' && (
                    <div className="border-l-4 border-red-500 pl-3">
                      <div className="flex items-center text-red-600 font-bold mb-1"><ShieldAlert className="w-4 h-4 mr-1"/> SAFETY</div>
                      <div className="whitespace-pre-line">{msg.content}</div>
                    </div>
                  )}

                  {msg.type === 'warning' && (
                    <div className="border-l-4 border-orange-500 pl-3">
                      <div className="flex items-center text-orange-500 font-bold mb-1"><Info className="w-4 h-4 mr-1"/> NOTE</div>
                      <div className="whitespace-pre-line">{msg.content}</div>
                    </div>
                  )}

                  {/* PRODUCT CARD BUBBLE */}
                  {msg.type === 'product' && (
                    <div className="mt-2 mb-1">
                       <p className="mb-3">{msg.content}</p>
                       <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                          <div className="h-32 bg-white flex items-center justify-center p-2">
                             <img src="https://i.postimg.cc/Y0J6BjVt/Gemini_Generated_Image_v38pudv38pudv38p.jpg" alt="Product" className="h-full object-contain" />
                          </div>
                          <div className="p-3">
                             <div className="flex justify-between items-start">
                                <div>
                                   <div className="text-xs text-gray-500 uppercase font-bold">Agombia Capsules</div>
                                   <div className="text-[#C8102E] font-bold">GHC 35.00 <span className="text-gray-400 text-[10px] font-normal line-through">GHC 45</span></div>
                                </div>
                                <div className="bg-[#FFD700] text-[10px] font-bold px-2 py-1 rounded">IN STOCK</div>
                             </div>
                             <a href="#contact" className="block w-full text-center bg-[#1A1A1A] text-white text-xs font-bold uppercase py-2 rounded-lg mt-3 hover:bg-[#333]">
                                Add to Order
                             </a>
                          </div>
                       </div>
                    </div>
                  )}

                  {/* DOSAGE VISUALIZER BUBBLE */}
                  {msg.type === 'dosage' && (
                     <div>
                        <p className="mb-3">{msg.content}</p>
                        <div className="flex justify-between gap-2 text-center">
                           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 flex-1">
                              <Sun className="w-4 h-4 text-yellow-500 mx-auto mb-1" />
                              <div className="text-[10px] font-bold">Morn</div>
                              <div className="text-xs font-bold text-[#C8102E]">2 Caps</div>
                           </div>
                           <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 flex-1">
                              <Sun className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                              <div className="text-[10px] font-bold">Noon</div>
                              <div className="text-xs font-bold text-[#C8102E]">2 Caps</div>
                           </div>
                           <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 flex-1">
                              <Moon className="w-4 h-4 text-gray-500 mx-auto mb-1" />
                              <div className="text-[10px] font-bold">Eve</div>
                              <div className="text-xs font-bold text-[#C8102E]">2 Caps</div>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* QUIZ OPTIONS BUBBLE */}
                  {msg.type === 'quiz' && (
                     <div>
                        <p className="mb-3 font-bold text-[#C8102E]">{msg.content}</p>
                        {msg.content.includes('Male or Female') && (
                           <div className="flex gap-2 mt-2">
                              <button onClick={() => handleQuizOption('👨 Male')} className="flex-1 bg-[#1A1A1A] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#333]">👨 Male</button>
                              <button onClick={() => handleQuizOption('👩 Female')} className="flex-1 bg-[#C8102E] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#A00D24]">👩 Female</button>
                           </div>
                        )}
                        {msg.content.includes('goal') && (
                           <div className="flex flex-col gap-2 mt-2">
                              <button onClick={() => handleQuizOption('Vitality/Balance')} className="w-full text-left bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-bold">1. Restore Vitality/Balance</button>
                              <button onClick={() => handleQuizOption('Pain Relief')} className="w-full text-left bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-bold">2. Relieve Waist Pain</button>
                              <button onClick={() => handleQuizOption('General Health')} className="w-full text-left bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded text-xs font-bold">3. General Well-being</button>
                           </div>
                        )}
                     </div>
                  )}

                </div>
                
                {/* TIMESTAMP & READ RECEIPT */}
                <div className="flex items-center mt-1 mr-1 space-x-1">
                   <span className="text-[9px] text-gray-400">{msg.timestamp}</span>
                   {msg.role === 'user' && (
                      <span className="text-[9px] text-blue-500 flex">
                         <Check className="w-3 h-3" />
                         <Check className="w-3 h-3 -ml-1.5" />
                      </span>
                   )}
                </div>
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center space-x-1 w-16">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
            
            {/* HUMAN ESCALATION CARD */}
            {showHumanCard && (
               <div className="bg-[#FFF8E1] border border-[#FFD700] rounded-xl p-4 animate-fade-in-up shadow-md mx-4 mt-4">
                  <h4 className="text-[#1A1A1A] font-bold uppercase text-xs tracking-widest mb-3 flex items-center">
                     <Phone className="w-3 h-3 mr-1" /> Priority Support
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">I've prioritized your query. Choose a channel:</p>
                  
                  {/* Mini Lead Form */}
                  <div className="mb-3 border-b border-[#FFD700]/30 pb-3">
                     <input type="text" placeholder="Your Name (Optional)" className="w-full bg-white border border-[#FFD700] rounded px-2 py-1 text-xs mb-2" />
                     <button className="w-full bg-[#FFD700] text-[#333] text-xs font-bold py-1 rounded uppercase">Save My Spot</button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                     <a href="https://wa.me/233244946525" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-[#25D366] text-white py-2 rounded-lg text-xs font-bold uppercase hover:bg-[#1EBE5D] transition-colors shadow-sm">
                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                     </a>
                     <a href="tel:0244946525" className="flex items-center justify-center bg-[#1A1A1A] text-white py-2 rounded-lg text-xs font-bold uppercase hover:bg-[#333] transition-colors shadow-sm">
                        <Phone className="w-4 h-4 mr-2" /> Call Now
                     </a>
                  </div>
               </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* SUGGESTION CHIPS (ALWAYS VISIBLE) */}
          <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar pb-4">
             {[
                "Start Health Check 🩺",
                "How much is it? 💰",
                "How do I take it? 💊",
                "Is it safe? 🛡️",
                "Where are you located? 📍",
                "Can I drink alcohol? 🍺",
                "Do you deliver? 🚚"
             ].map((chip, i) => (
                <button 
                  key={i}
                  onClick={() => handleQuickChip(chip)}
                  className={`whitespace-nowrap border text-[10px] font-bold uppercase px-3 py-1.5 rounded-full transition-all flex-shrink-0 shadow-sm ${
                     chip.includes('Health') 
                     ? 'bg-[#C8102E] text-white border-[#C8102E] hover:bg-[#A00D24]'
                     : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-[#FFD700] hover:text-[#1A1A1A] hover:border-[#FFD700]'
                  }`}
                  disabled={quiz.active}
                >
                   {chip}
                </button>
             ))}
          </div>

          {/* INPUT AREA */}
          <div className="bg-white p-3 border-t border-gray-200 flex items-center z-20">
             <input 
                type="text" 
                placeholder={quiz.active ? "Select an option above..." : "Ask Adwoa..."}
                className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all disabled:opacity-50"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={quiz.active}
             />
             <button 
               onClick={handleSend}
               disabled={!inputValue.trim()}
               className="ml-2 bg-[#1A1A1A] text-[#FFD700] p-3 rounded-full hover:bg-[#333] transition-transform transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
             >
                <Send className="w-4 h-4" />
             </button>
          </div>

        </div>
      )}

      {/* FLOATING AVATAR BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group focus:outline-none"
      >
        {/* Unread Count Badge */}
        {!isOpen && unreadCount > 0 && (
           <div className="absolute -top-2 -left-2 bg-[#C8102E] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full z-20 border-2 border-white animate-bounce">
              {unreadCount}
           </div>
        )}

        {/* Ripple Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-40 animate-ping"></span>
        
        <div className="relative w-16 h-16 rounded-full border-[3px] border-[#FFD700] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] bg-white hover:scale-105 transition-transform duration-300">
           <img 
              src="https://i.postimg.cc/Y0J6BjVt/Gemini_Generated_Image_v38pudv38pudv38p.jpg" 
              alt="Chat" 
              className="w-full h-full object-cover"
           />
           {/* Headset Overlay (CSS) */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        {/* Status Dot */}
        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#25D366] border-2 border-white rounded-full z-10"></div>
        
        {/* Tooltip */}
        {!isOpen && (
           <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white text-[#1A1A1A] text-xs font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
              <span className="text-[#C8102E]">●</span> Ask the Herbalist
              <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white border-t border-r border-gray-100 transform -translate-y-1/2 rotate-45"></div>
           </div>
        )}
      </button>

    </div>
  );
};

export default ChatWidget;

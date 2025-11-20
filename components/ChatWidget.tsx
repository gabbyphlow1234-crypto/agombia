import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Leaf } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Agombia Herbal Assistant. How can I help you with your health goals today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || status === LoadingState.LOADING) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setStatus(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting. Please try again." }]);
      setStatus(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-80 sm:w-96 flex flex-col mb-4 border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out transform origin-bottom-right">
          {/* Header */}
          <div className="bg-[#D30000] p-4 flex justify-between items-center">
            <div className="flex items-center text-white">
              <div className="bg-white p-1 rounded-full mr-2">
                 <Leaf className="h-4 w-4 text-[#D30000]" />
              </div>
              <span className="font-bold">Agombia Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-red-700 rounded-full p-1 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#D30000] text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {status === LoadingState.LOADING && (
               <div className="flex justify-start mb-3">
                 <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                    <Loader2 className="h-5 w-5 text-[#D30000] animate-spin" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Agombia..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-[#D30000] focus:ring-1 focus:ring-[#D30000] text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={status === LoadingState.LOADING || !inputValue.trim()}
              className="ml-2 bg-[#FFD700] text-black p-2 rounded-full hover:bg-[#D30000] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#FFD700] text-black p-4 rounded-full shadow-lg hover:bg-[#D30000] hover:text-white transition-all duration-300 transform hover:scale-105 ${isOpen ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}
      >
        <MessageSquare className="h-8 w-8" />
      </button>
    </div>
  );
};

export default ChatWidget;
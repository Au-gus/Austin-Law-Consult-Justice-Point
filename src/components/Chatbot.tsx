"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Scale } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const botResponses: Record<string, Record<string, string>> = {
  "hello": {
    en: "Namaste! I am the Austin Law assistant. How can I help you find legal information today?",
    ne: "नमस्ते! म अस्टिन ल सहायक हुँ। म तपाईंलाई आज कानूनी जानकारी पाउन कसरी मद्दत गर्न सक्छु?"
  },
  "procedure": {
    en: "You can find information about various legal procedures in our FAQ section or under specific Practice Areas.",
    ne: "तपाईंले हाम्रो FAQ खण्डमा वा विशिष्ट कार्यक्षेत्रहरू अन्तर्गत विभिन्न कानूनी प्रक्रियाहरूको बारेमा जानकारी पाउन सक्नुहुन्छ।"
  },
  "contact": {
    en: "You can reach us through the inquiry form at the bottom of the page or visit us at Jyatha, Kantipath.",
    ne: "तपाईंले पृष्ठको तल रहेको सोधपुछ फारम मार्फत हामीलाई सम्पर्क गर्न सक्नुहुन्छ वा ज्याठा, कान्तिपथमा हामीलाई भेट्न सक्नुहुन्छ।"
  },
  "default": {
    en: "I'm here to help you navigate our informational portal. For specific inquiries, please use our contact form.",
    ne: "म तपाईंलाई हाम्रो जानकारीमूलक पोर्टल नेभिगेट गर्न मद्दत गर्न यहाँ छु। विशिष्ट सोधपुछका लागि, कृपया हाम्रो सम्पर्क फारम प्रयोग गर्नुहोस्।"
  }
};

export default function Chatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      let responseKey = "default";
      const lowered = userMsg.toLowerCase();
      if (lowered.includes("hello") || lowered.includes("hi") || lowered.includes("नमस्ते")) responseKey = "hello";
      else if (lowered.includes("procedure") || lowered.includes("how to") || lowered.includes("दर्ता")) responseKey = "procedure";
      else if (lowered.includes("contact") || lowered.includes("address") || lowered.includes("सम्पर्क")) responseKey = "contact";

      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: botResponses[responseKey][language] 
      }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 bg-accent-gold text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-sm font-bold"
        title={t("search_close")}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-primary-navy rounded-2xl shadow-3xl border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-primary-navy dark:bg-white/5 border-b border-white/10 flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-accent-gold flex items-center justify-center text-white">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white leading-none">Austin Assistant</h3>
                <span className="text-[10px] text-accent-gold/80 uppercase tracking-widest font-bold">Informational Bot</span>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar bg-gray-50/50 dark:bg-transparent"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 px-6">
                  <p className="text-sm text-gray-500 italic">
                    {t("chat_welcome")}
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-accent-gold text-white rounded-tr-none' 
                      : 'bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={t("chat_input_ph")}
                  className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-full px-4 py-3 pr-12 text-sm focus:ring-1 focus:ring-accent-gold dark:text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 p-2 text-accent-gold hover:text-yellow-600 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-[9px] text-center text-gray-400 mt-3 italic uppercase tracking-tighter">
                {t("chat_disclaimer_title")} • {t("chat_disclaimer_text")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

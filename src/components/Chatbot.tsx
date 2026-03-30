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
    en: "You can find information about various legal procedures in our FAQ section or under specific Practice Areas (Corporate, Criminal, Family, etc.).",
    ne: "तपाईंले हाम्रो FAQ खण्डमा वा विशिष्ट कार्यक्षेत्रहरू (कर्पोरेट, फौजदारी, पारिवारिक, आदि) अन्तर्गत विभिन्न कानूनी प्रक्रियाहरूको बारेमा जानकारी पाउन सक्नुहुन्छ।"
  },
  "contact": {
    en: "You can reach us through the inquiry form at the bottom of the page, call us at +977 9841356979, or visit us at Jyatha, Kantipath, Kathmandu.",
    ne: "तपाईंले पृष्ठको तल रहेको सोधपुछ फारम मार्फत हामीलाई सम्पर्क गर्न सक्नुहुन्छ, +९७७ ९८४१३५६९७९ मा फोन गर्न सक्नुहुन्छ वा ज्याठा, कान्तिपथ, काठमाडौंमा हामीलाई भेट्न सक्नुहुन्छ।"
  },
  "who": {
    en: "Austin Law Consult & Justice Point is led by Managing Director Shyam Raja Karki, a Senior Advocate with over 20 years of distinguished experience in Nepal.",
    ne: "अस्टिन ल कन्सल्ट र जस्टिस पोइन्टको नेतृत्व प्रबन्ध निर्देशक श्याम राजा कार्कीले गर्नुभएको छ, जो २० वर्षभन्दा बढीको अनुभव भएको वरिष्ठ अधिवक्ता हुनुहुन्छ।"
  },
  "services": {
    en: "We provide consultancy in Corporate Law, Criminal Defense, Family & Divorce, Real Estate, Banking, and Intellectual Property.",
    ne: "हामी कर्पोरेट कानून, फौजदारी रक्षा, पारिवारिक र सम्बन्धविच्छेद, घरजग्गा, बैंकिङ र बौद्धिक सम्पत्तिमा परामर्श प्रदान गर्दछौं।"
  },
  "price": {
    en: "Specific case fees depend on the complexity and duration. We recommend scheduling an initial inquiry through our contact form for a case evaluation.",
    ne: "शुल्क मुद्दाको जटिलता र अवधिमा भर पर्छ। हामी तपाईंलाई केस मूल्याङ्कनको लागि हाम्रो सम्पर्क फारम मार्फत प्रारम्भिक सोधपुछ गर्न सिफारिस गर्दछौं।"
  },
  "thanks": {
    en: "You're very welcome! Is there anything else you'd like to know about our legal firm?",
    ne: "तपाईंलाई धेरै स्वागत छ! हाम्रो कानूनी फर्मको बारेमा अरू केही जान्न चाहनुहुन्छ?"
  },
  "default": {
    en: "I don't have that information. You should contact the office directly for detailed inquiries.",
    ne: "मलाई त्यो जानकारी छैन। विस्तृत सोधपुछका लागि तपाईंले सिधै कार्यालयमा सम्पर्क गर्नुपर्छ।"
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
      const q = userMsg.toLowerCase();
      
      // Intelligent Keyword Matching
      if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("नमस्ते") || q.includes("नमस्कार")) {
        responseKey = "hello";
      } else if (q.includes("who") || q.includes("director") || q.includes("shyam") || q.includes("karki") || q.includes("को हो") || q.includes("निर्देशक")) {
        responseKey = "who";
      } else if (q.includes("service") || q.includes("practice") || q.includes("work") || q.includes("क्षेत्र") || q.includes("काम")) {
        responseKey = "services";
      } else if (q.includes("procedure") || q.includes("how to") || q.includes("process") || q.includes("दर्ता") || q.includes("प्रक्रिया")) {
        responseKey = "procedure";
      } else if (q.includes("contact") || q.includes("address") || q.includes("location") || q.includes("phone") || q.includes("सम्पर्क") || q.includes("ठेगाना")) {
        responseKey = "contact";
      } else if (q.includes("price") || q.includes("cost") || q.includes("fee") || q.includes("money") || q.includes("शुल्क") || q.includes("पैसा")) {
        responseKey = "price";
      } else if (q.includes("thank") || q.includes("thx") || q.includes("धन्यवाद")) {
        responseKey = "thanks";
      }

      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: botResponses[responseKey][language as keyof (typeof botResponses)["default"]] 
      }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 bg-accent-gold text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-sm font-bold border-2 border-white/20"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[60] w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-primary-navy rounded-2xl shadow-3xl border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-primary-navy dark:bg-white/5 border-b border-white/10 flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-accent-gold flex items-center justify-center text-white">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white leading-none text-base">Austin Assistant</h3>
                <span className="text-[10px] text-accent-gold/80 uppercase tracking-widest font-bold">24/7 Information Bot</span>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow p-5 overflow-y-auto space-y-4 custom-scrollbar bg-gray-50/50 dark:bg-transparent"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 px-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {t("chat_welcome")}
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-accent-gold text-white rounded-tr-none shadow-md' 
                      : 'bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-primary-navy">
              <div className="relative flex items-center mb-3">
                <input
                  type="text"
                  placeholder={t("chat_input_ph")}
                  className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-full px-5 py-3 pr-12 text-sm focus:ring-2 focus:ring-accent-gold/50 dark:text-white"
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
              <div className="px-2">
                <p className="text-[9px] text-center text-gray-400 font-medium italic uppercase tracking-tighter leading-tight">
                  {t("chat_disclaimer_title")} • {t("chat_disclaimer_text")}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

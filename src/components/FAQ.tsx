"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const faqs = [
  {
    question: {
      en: "What is the procedure for registering a private company in Nepal?",
      ne: "नेपालमा प्राली कम्पनी दर्ता गर्ने प्रक्रिया के हो?"
    },
    answer: {
      en: "The process involves reserving a name at the Office of Company Registrar (OCR), submitting the Memorandum and Articles of Association, and obtaining the registration certificate. Post-registration, you must obtain a PAN/VAT number.",
      ne: "यस प्रक्रियामा कम्पनी रजिस्ट्रारको कार्यालय (OCR) मा नाम रिजर्भ गर्ने, प्रबन्धपत्र र नियमावली पेश गर्ने र दर्ता प्रमाणपत्र प्राप्त गर्ने समावेश छ। दर्ता पछि, तपाईंले PAN/VAT नम्बर लिनुपर्छ।"
    }
  },
  {
    question: {
      en: "Are the informational services provided on this site legal advice?",
      ne: "यस साइटमा प्रदान गरिएका जानकारीमूलक सेवाहरू कानूनी सल्लाह हुन्?"
    },
    answer: {
      en: "No. All content on this portal is for informational purposes only. It is intended to provide a general understanding of Nepal's law and does not constitute a formal lawyer-client relationship.",
      ne: "होइन। यस पोर्टलका सबै सामग्रीहरू जानकारीमूलक उद्देश्यका लागि मात्र हुन्। यसको उद्देश्य नेपालको कानूनको बारेमा सामान्य बुझाइ प्रदान गर्नु हो र यसले औपचारिक कानून व्यवसायी-क्लायन्ट सम्बन्ध गठन गर्दैन।"
    }
  },
  {
    question: {
      en: "What documents are required for land registration (Malpot)?",
      ne: "जग्गा दर्ता (मालपोत) का लागि के-के कागजातहरू चाहिन्छ?"
    },
    answer: {
      en: "Typical documents include the Land Ownership Certificate (Lal-Purja), citizenship certificates of both parties, tax clearance receipts, and a signed sale-purchase deed.",
      ne: "साधारणतया जग्गाधनी प्रमाणपूर्जा (लालपुर्जा), दुवै पक्षको नागरिकता प्रमाणपत्र, कर चुक्ता रसिद, र हस्ताक्षर गरिएको राजीनामा लिखत आवश्यक पर्दछ।"
    }
  },
  {
    question: {
      en: "How long does a divorce proceeding take in Nepal?",
      ne: "नेपालमा सम्बन्ध विच्छेदको प्रक्रियालाई कति समय लाग्छ?"
    },
    answer: {
      en: "Mutual consent divorces can be finalized quickly once the petition is filed in the District Court. Contested divorces may take longer, involving a mandatory one-year reconciliation period in many cases.",
      ne: "पारस्परिक सहमतिको सम्बन्ध विच्छेद जिल्ला अदालतमा मुद्दा दर्ता भएपछि छिट्टै टुंगिन सक्छ। विवादित सम्बन्ध विच्छेदमा धेरै अवस्थामा एक वर्षको अनिवार्य मेलमिलाप अवधि समावेश हुने हुनाले बढी समय लाग्न सक्छ।"
    }
  }
];

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-primary-navy/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-gold/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-accent-gold" />
            <span className="text-accent-gold text-xs font-bold uppercase tracking-widest italic">
              {t("faq_badge")}
            </span>
          </div>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("faq_title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("faq_desc")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center group"
              >
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-5 w-5 text-accent-gold/40 group-hover:text-accent-gold transition-colors" />
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                    {faq.question[language]}
                  </span>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-accent-gold' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-15 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4 mx-6">
                      {faq.answer[language]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            {t("faq_footer")}
          </p>
        </div>
      </div>
    </section>
  );
}

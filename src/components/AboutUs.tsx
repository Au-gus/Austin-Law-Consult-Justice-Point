"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-neutral border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden bg-primary-navy shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 600" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 100 H350 V120 H50 Z" fill="#D4AF37"/>
                  <path d="M50 200 H350 V220 H50 Z" fill="#D4AF37"/>
                  <path d="M50 300 H350 V320 H50 Z" fill="#D4AF37"/>
                  <path d="M50 400 H350 V420 H50 Z" fill="#D4AF37"/>
                  <path d="M50 500 H350 V520 H50 Z" fill="#D4AF37"/>
                  {[...Array(12)].map((_, i) => (
                    <rect key={i} x={60 + (i * 25)} y={120} width={20} height={80} rx="2" fill={i % 3 === 0 ? "#D4AF37" : "#FFFFFF"} opacity={0.3 + (i % 5 * 0.1)}/>
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <rect key={i} x={60 + (i * 30)} y={220} width={25} height={80} rx="2" fill={i % 2 === 0 ? "#D4AF37" : "#FFFFFF"} opacity={0.2 + (i % 4 * 0.1)}/>
                  ))}
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center px-12">
                <Scale className="h-24 w-24 text-accent-gold/40 mb-6" />
                <h4 className="heading-serif text-3xl font-bold text-white/60 mb-4">Integrity in Practice</h4>
                <p className="text-white/40 text-sm uppercase tracking-[0.2em]">{t("nav_tagline")}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-accent-gold p-8 text-white max-w-[200px] shadow-xl hidden md:block"
            >
              <h4 className="text-5xl font-bold heading-serif mb-2">{t("about_exp_years")}</h4>
              <p className="text-sm font-bold uppercase tracking-wider">{t("about_exp_title")}</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 inline-block">
                {t("about_badge")}
              </span>
              <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t("about_title")}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mb-8"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("about_desc1")}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("about_desc2")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {[
                t("about_feat1"),
                t("about_feat2"),
                t("about_feat3"),
                t("about_feat4"),
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-800 dark:text-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-accent-gold shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <div className="h-16 w-16 rounded-full border-2 border-accent-gold bg-primary-navy flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h5 className="font-bold heading-serif text-xl text-gray-900 dark:text-white">Ram KC</h5>
                <p className="text-accent-gold text-sm font-semibold uppercase tracking-wider">{t("about_director_role")}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

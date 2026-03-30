"use client";

import { motion } from "framer-motion";
import { Briefcase, ShieldAlert, Users, Building, Landmark, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { practiceAreasData } from "@/data/practiceAreasData";

const iconMap = {
  "corporate-law": Building,
  "criminal-defense": ShieldAlert,
  "family-divorce": Users,
  "real-estate-law": Landmark,
  "banking-finance": Briefcase,
  "intellectual-property": Lightbulb,
};

export default function PracticeAreas() {
  const { t, language } = useLanguage();

  return (
    <section id="practice-areas" className="py-24 bg-gray-50 dark:bg-primary-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 inline-block">
              {t("nav_practice")}
            </span>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t("practice_title")}
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {t("practice_desc")}
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreasData.map((practice, index) => {
            const IconComponent = iconMap[practice.slug as keyof typeof iconMap] || Building;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-neutral border border-gray-100 dark:border-gray-800 p-8 hover:-translate-y-2 transition-transform duration-300 group shadow-sm hover:shadow-xl rounded-sm"
              >
                <div className="w-16 h-16 bg-primary-navy/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary-navy dark:text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="heading-serif text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent-gold transition-colors">
                  {practice.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {practice.description[language]}
                </p>
                <Link
                  href={`/practice-areas/${practice.slug}`}
                  className="inline-flex items-center text-sm font-bold text-primary-navy dark:text-white uppercase tracking-wider group-hover:text-accent-gold transition-colors"
                >
                  {t("btn_learn_more")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

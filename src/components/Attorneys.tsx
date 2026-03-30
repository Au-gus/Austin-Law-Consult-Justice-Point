"use client";

import { motion } from "framer-motion";
import { UserCircle2, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Attorneys() {
  const { t, language } = useLanguage();

  const attorneys = [
    {
      name: language === 'en' ? "Shyam Raja Karki" : "श्याम राजा कार्की",
      role: t("attorney_md"),
      tag: t("attorney_senior"),
      tagColor: "bg-accent-gold text-white",
      phone: "+977 9841356979",
      email: "karkishyam613@gmail.com",
      bio: {
        en: "Over 20 years of distinguished legal practice in corporate, criminal, and civil law across Nepal.",
        ne: "नेपालका कर्पोरेट, फौजदारी र देवानी कानूनमा २० वर्षभन्दा बढीको विशिष्ट कानूनी अभ्यास।"
      }
    },
    {
      name: t("attorney_name_withheld"),
      role: t("attorney_junior"),
      tag: t("attorney_junior"),
      tagColor: "bg-primary-navy text-white",
      phone: "",
      email: "",
      bio: {
        en: "Specializes in family law and civil litigation with a client-first approach.",
        ne: "ग्राहक-प्रथम दृष्टिकोणको साथ पारिवारिक कानून र देवानी मुद्दाहरूमा विशेषज्ञता।"
      }
    },
    {
      name: t("attorney_name_withheld"),
      role: t("attorney_junior"),
      tag: t("attorney_junior"),
      tagColor: "bg-primary-navy text-white",
      phone: "",
      email: "",
      bio: {
        en: "Focused on criminal defense and constitutional matters with strong courtroom presence.",
        ne: "बलियो इजलास उपस्थितिको साथ फौजदारी रक्षा र संवैधानिक मामिलाहरूमा केन्द्रित।"
      }
    },
  ];

  return (
    <section id="attorneys" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 inline-block">
            {t("nav_attorneys")}
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("attorneys_title")}
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t("attorneys_desc")}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-56 bg-gradient-to-br from-primary-navy to-slate-800 flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="h-24 w-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                    <UserCircle2 className="h-16 w-16 text-white/40" />
                  </div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-semibold">
                    {t("attorney_photo_private")}
                  </p>
                </div>
                <span className={`absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm ${person.tagColor}`}>
                  {person.tag}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="heading-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-gold transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold text-accent-gold uppercase tracking-wider">
                  {person.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed min-h-[4.5rem]">
                  {person.bio[language as keyof typeof person.bio]}
                </p>

                {(person.phone || person.email) && (
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
                    {person.phone && (
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-accent-gold transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2 shrink-0" />
                        {person.phone}
                      </a>
                    )}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-accent-gold transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2 shrink-0" />
                        {person.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

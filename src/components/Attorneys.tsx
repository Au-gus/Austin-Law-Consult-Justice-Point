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
      tagColor: "bg-indigo-600 text-white",
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
      tagColor: "bg-indigo-600 text-white",
      phone: "",
      email: "",
      bio: {
        en: "Focused on criminal defense and constitutional matters with strong courtroom presence.",
        ne: "बलियो इजलास उपस्थितिको साथ फौजदारी रक्षा र संवैधानिक मामिलाहरूमा केन्द्रित।"
      }
    },
    {
      name: t("attorney_team_member"),
      role: t("attorney_assistant"),
      tag: t("attorney_assistant"),
      tagColor: "bg-teal-600 text-white",
      phone: "",
      email: "",
      bio: {
        en: "Provides essential legal support and documentation management for complex cases.",
        ne: "जटिल मुद्दाहरूको लागि आवश्यक कानूनी सहयोग र कागजात व्यवस्थापन प्रदान गर्दछ।"
      }
    },
    {
      name: t("attorney_team_member"),
      role: t("attorney_assistant"),
      tag: t("attorney_assistant"),
      tagColor: "bg-teal-600 text-white",
      phone: "",
      email: "",
      bio: {
        en: "Supports the legal team with research, filing, and client communication coordination.",
        ne: "अनुसन्धान, फाइलिङ, र ग्राहक संचार समन्वयको साथ कानूनी टोलीलाई सहयोग गर्दछ।"
      }
    },
    {
      name: t("attorney_team_member"),
      role: t("attorney_investigator"),
      tag: t("attorney_investigator"),
      tagColor: "bg-red-700 text-white",
      phone: "",
      email: "",
      bio: {
        en: "Specialized in factual investigation and evidence gathering for criminal and civil cases.",
        ne: "फौजदारी र देवानी मुद्दाहरूको लागि तथ्यगत अनुसन्धान र प्रमाण संकलनमा विशेष।"
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
              <div className="relative h-48 bg-gradient-to-br from-primary-navy/90 to-slate-800 flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="h-20 w-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                    <UserCircle2 className="h-12 w-12 text-white/40" />
                  </div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold">
                    {t("attorney_photo_private")}
                  </p>
                </div>
                <span className={`absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm ${person.tagColor}`}>
                  {person.tag}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="heading-serif text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-gold transition-colors truncate">
                  {person.name}
                </h3>
                <p className="text-[10px] font-semibold text-accent-gold uppercase tracking-wider">
                  {person.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed min-h-[3rem] line-clamp-3">
                  {person.bio[language as keyof typeof person.bio]}
                </p>

                {(person.phone || person.email) ? (
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700 space-y-1">
                    {person.phone && (
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="flex items-center text-[11px] text-gray-500 dark:text-gray-400 hover:text-accent-gold transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 mr-2 shrink-0" />
                        {person.phone}
                      </a>
                    )}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center text-[11px] text-gray-500 dark:text-gray-400 hover:text-accent-gold transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5 mr-2 shrink-0" />
                        {person.email}
                      </a>
                    )}
                  </div>
                ) : (
                   <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
                     <p className="text-[10px] text-gray-400 italic">Contact through main line</p>
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

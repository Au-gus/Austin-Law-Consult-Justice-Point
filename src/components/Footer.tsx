"use client";

import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-navy text-gray-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-accent-gold" />
              <div className="flex flex-col">
                <span className="heading-serif font-bold text-xl leading-none text-white">
                  {t("nav_logo_main").split(' ')[0]}
                </span>
                <span className="text-[0.65rem] tracking-[0.12em] font-medium text-gray-400">
                  {t("nav_logo_main").split(' ').slice(1).join(' ')} {t("nav_tagline").split(' ').slice(2).join(' ')}
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              <span className="text-white font-bold">{t("nav_tagline")}</span> {t("footer_desc")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-wider">
                FB
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-wider">
                X
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-wider">
                IN
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-wider">
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold heading-serif text-lg mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-accent-gold mr-3 inline-block"></span>
              {t("footer_quick_links")}
            </h3>
            <ul className="space-y-3">
              {[
                { name: t("nav_about"), href: "/#about" },
                { name: t("nav_practice"), href: "/#practice-areas" },
                { name: t("nav_attorneys"), href: "/#attorneys" },
                { name: t("nav_blog"), href: "/#blog" },
                { name: t("nav_contact"), href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center text-gray-400 hover:text-accent-gold transition-colors text-sm group">
                    <ChevronRight className="h-4 w-4 mr-2 text-accent-gold/50 group-hover:text-accent-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-bold heading-serif text-lg mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-accent-gold mr-3 inline-block"></span>
              {t("footer_practice_areas")}
            </h3>
            <ul className="space-y-3">
              {practiceAreasData.map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="flex items-center text-gray-400 hover:text-accent-gold transition-colors text-sm group">
                    <ChevronRight className="h-4 w-4 mr-2 text-accent-gold/50 group-hover:text-accent-gold" />
                    {area.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold heading-serif text-lg mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-accent-gold mr-3 inline-block"></span>
              {t("footer_contact_info")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-gold mr-3 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  {t("contact_address").split(', ').slice(0, 2).join(', ')}<br />
                  {t("contact_address").split(', ').slice(2).join(', ')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-gold mr-3 shrink-0" />
                <div className="flex flex-col text-sm text-gray-400">
                  <a href="tel:+9779841356979" className="hover:text-white transition-colors">+977 9841356979</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-gold mr-3 shrink-0" />
                <a href="mailto:karkishyam613@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  karkishyam613@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-accent-gold mr-3 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  {t("contact_hours")}<br />
                  {t("contact_sat")}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Legal Disclaimer (Nepal Compliance) */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 p-6 rounded-sm border border-white/5">
            <p className="text-[10px] md:text-xs text-gray-500 text-center leading-relaxed uppercase tracking-wider">
              <span className="font-bold text-accent-gold block mb-2 underline decoration-accent-gold/30 underline-offset-4">{t("footer_disclaimer_title")}</span>
              {t("footer_disclaimer_text")}
              {t("footer_disclaimer_long")}
            </p>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-gray-500 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} {t("nav_tagline")}. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition-colors">{t("footer_privacy")}</Link>
              <Link href="#" className="hover:text-white transition-colors">{t("footer_terms")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

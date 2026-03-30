"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale, Search, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t("nav_about"), href: "/#about" },
    { name: t("nav_practice"), href: "/#practice-areas" },
    { name: t("nav_attorneys"), href: "/#attorneys" },
    { name: t("nav_blog"), href: "/#blog" },
    { name: t("nav_contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-primary-navy/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Scale className={`h-8 w-8 transition-colors duration-300 ${scrolled ? "text-accent-gold" : "text-white group-hover:text-accent-gold"}`} />
              <div className="flex flex-col">
                <span className={`heading-serif font-bold text-xl leading-none transition-colors duration-300 ${scrolled ? "text-primary-navy dark:text-white" : "text-white"}`}>
                  {t("nav_logo_main")}
                </span>
                <span className={`text-[0.55rem] tracking-[0.1em] font-bold uppercase transition-colors duration-300 ${scrolled ? "text-accent-gold" : "text-accent-gold/80"}`}>
                  {t("nav_tagline")}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold transition-colors duration-300 hover:text-accent-gold ${
                  scrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button 
                title="Search Legal Information"
                className={`p-2 transition-colors duration-300 hover:text-accent-gold ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}`}
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 text-xs font-bold ${
                  scrolled 
                    ? "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accent-gold" 
                    : "border-white/20 text-white hover:border-white"
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                {language === 'en' ? 'नेपाली' : 'English'}
              </button>

              <Link
                href="/#contact"
                className="bg-accent-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs"
              >
                {t("nav_contact")}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
             <button
                onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
                className={`p-2 transition-colors ${scrolled ? "text-primary-navy dark:text-white" : "text-white"}`}
              >
                <span className="text-xs font-bold">{language === 'en' ? 'NE' : 'EN'}</span>
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? "text-primary-navy dark:text-white" : "text-white"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-primary-navy shadow-xl border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-accent-gold hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button 
                  className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  <Search className="h-5 w-5 text-accent-gold" />
                  <span className="font-medium">{t("nav_search_portal")}</span>
                </button>
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-accent-gold hover:bg-yellow-600 text-white px-5 py-4 rounded-sm text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  {t("nav_contact")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Practice Areas", href: "/#practice-areas" },
  { name: "Attorneys", href: "/#attorneys" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Scale className={`h-8 w-8 transition-colors duration-300 ${scrolled ? "text-accent-gold" : "text-white group-hover:text-accent-gold"}`} />
              <div className="flex flex-col">
                <span className={`heading-serif font-bold text-xl leading-none transition-colors duration-300 ${scrolled ? "text-primary-navy dark:text-white" : "text-white"}`}>
                  AUSTIN
                </span>
                <span className={`text-[0.65rem] tracking-[0.15em] font-medium transition-colors duration-300 ${scrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-200"}`}>
                  LAW CONSULT
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-accent-gold ${
                  scrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-accent-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-primary-navy shadow-xl border-t border-gray-100 dark:border-gray-800"
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
            <div className="pt-4">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-accent-gold hover:bg-yellow-600 text-white px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Landmark, ShieldCheck, Scale, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import PracticeAreas from "@/components/PracticeAreas";
import AboutUs from "@/components/AboutUs";
import Attorneys from "@/components/Attorneys";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-[#0a0f1e]">
        {/* ── Animated Background ── */}
        <div className="absolute inset-0 z-0">
          {/* Radial glow centre */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(180,140,60,0.13) 0%, transparent 70%)" }} />

          {/* Fine gold grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

          {/* Floating orbs */}
          <div className="absolute rounded-full bg-accent-gold/10 blur-3xl animate-pulse"
            style={{ width: 420, height: 420, top: "-10%", right: "5%", animationDuration: "6s" }} />
          <div className="absolute rounded-full bg-blue-900/20 blur-3xl animate-pulse"
            style={{ width: 300, height: 300, bottom: "5%", left: "8%", animationDuration: "9s", animationDelay: "2s" }} />
          <div className="absolute rounded-full bg-accent-gold/5 blur-2xl animate-pulse"
            style={{ width: 180, height: 180, top: "55%", right: "25%", animationDuration: "7s", animationDelay: "1s" }} />

          {/* ── Scales of Justice SVG watermark ── */}
          <div className="absolute right-[4%] top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none hidden lg:block">
            <svg viewBox="0 0 320 400" width="380" height="480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="157" y="60" width="6" height="290" fill="#D4AF37"/>
              <rect x="110" y="345" width="100" height="12" rx="6" fill="#D4AF37"/>
              <rect x="130" y="357" width="60" height="8" rx="4" fill="#D4AF37"/>
              <rect x="60" y="56" width="200" height="8" rx="4" fill="#D4AF37"/>
              <circle cx="160" cy="60" r="10" stroke="#D4AF37" strokeWidth="5" fill="none"/>
              <line x1="80" y1="64" x2="80" y2="160" stroke="#D4AF37" strokeWidth="3" strokeDasharray="6 4"/>
              <line x1="240" y1="64" x2="240" y2="140" stroke="#D4AF37" strokeWidth="3" strokeDasharray="6 4"/>
              <path d="M40 160 Q80 185 120 160" stroke="#D4AF37" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <line x1="80" y1="160" x2="80" y2="163" stroke="#D4AF37" strokeWidth="3"/>
              <path d="M200 140 Q240 165 280 140" stroke="#D4AF37" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <line x1="240" y1="140" x2="240" y2="143" stroke="#D4AF37" strokeWidth="3"/>
            </svg>
          </div>

          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100%" x2="40%" y2="0" stroke="#D4AF37" strokeWidth="1"/>
            <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#D4AF37" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
              <span className="text-white text-xs font-semibold tracking-wider uppercase">{t("hero_portal")}</span>
            </div>
            
            <h1 className="heading-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Austin Law Consult <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-200">
                &amp; Justice Point.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
              {t("hero_tagline")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-accent-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {t("hero_cta_inquiry")}
              </Link>
              <Link
                href="/#practice-areas"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all hover:bg-white/10 group"
              >
                {t("hero_cta_info")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center animate-bounce text-white/50">
          <span className="text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Feature Highlights Banner */}
      <section className="bg-white dark:bg-dark-neutral border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
            {[
              { icon: Landmark, title: t("feat_rep"), desc: "Core consultancy across legal sectors." },
              { icon: ShieldCheck, title: t("feat_ethics"), desc: "Committed to the legal code of conduct." },
              { icon: Scale, title: t("feat_client"), desc: "Providing objective legal information." },
              { icon: Award, title: t("feat_profile"), desc: "Documented legal experience in Nepal." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="h-12 w-12 rounded-lg bg-primary-navy/5 text-primary-navy dark:bg-white/5 dark:text-accent-gold flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 heading-serif">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <AboutUs />
      <PracticeAreas />
      <FAQ />
      <Attorneys />
      <Blog />
      <Contact />
      <Chatbot />
    </div>
  );
}

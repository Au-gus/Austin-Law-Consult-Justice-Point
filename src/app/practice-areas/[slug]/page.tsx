"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Scale, ShieldCheck, Landmark, Printer } from "lucide-react";
import { practiceAreasData } from "@/data/practiceAreasData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

export default function PracticeAreaDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const practice = practiceAreasData.find((p) => p.slug === slug);

  if (!practice) {
    notFound();
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: { en: "Practice Areas", ne: "कार्यक्षेत्र" }, href: "/#practice-areas" },
            { label: practice.title }
          ]} />
          
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div className="max-w-3xl">
              <h1 className="heading-serif text-5xl md:text-7xl font-bold text-primary-navy dark:text-white mb-6">
                {practice.title}
              </h1>
              <div className="w-24 h-1.5 bg-accent-gold mb-8"></div>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                {practice.description}
              </p>
            </div>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent-gold text-gray-600 dark:text-gray-300 rounded shadow-sm transition-all group no-print"
            >
              <Printer className="h-4 w-4 group-hover:text-accent-gold" />
              <span className="font-bold text-xs uppercase tracking-widest">Download Factsheet</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div id="print-content">
                <div className="hidden print:block mb-8 border-b-2 border-primary-navy pb-4">
                   <h1 className="text-2xl font-bold text-primary-navy uppercase tracking-tight">Austin Law Consult & Justice Point</h1>
                   <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Practice Area Factsheet: {practice.title}</p>
                </div>

                <h2 className="heading-serif text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <Scale className="mr-4 h-8 w-8 text-accent-gold" />
                  Key Consultancy Aspects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {practice.detailedContent.map((item, i) => (
                    <div key={i} className="flex items-start p-6 bg-gray-50 dark:bg-gray-800/30 rounded-sm border-l-4 border-accent-gold">
                      <CheckCircle2 className="h-5 w-5 text-accent-gold mt-1 mr-3 shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-primary-navy/5 dark:bg-white/5 rounded-sm border border-primary-navy/10 dark:border-white/10">
                <h3 className="heading-serif text-2xl font-bold text-primary-navy dark:text-white mb-4 flex items-center">
                  <ShieldCheck className="mr-3 h-6 w-6 text-accent-gold" />
                  Professional Standards
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  At Austin Law Consult & Justice Point, we provide consultancy in {practice.title} matters with a focus on objective legal analysis and structural compliance. Our profile is dedicated to supporting the rule of law and providing transparent legal information within the Nepali regulatory framework.
                </p>
              </div>
            </div>

            <div className="space-y-8 no-print">
              <div className="bg-primary-navy text-white p-8 rounded-sm shadow-xl relative overflow-hidden">
                <h3 className="heading-serif text-xl font-bold mb-6 flex items-center">
                  <Landmark className="mr-3 h-5 w-5 text-accent-gold" />
                  Regulatory Context
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {practice.validity}
                </p>
                <div className="h-px bg-white/10 w-full mb-6"></div>
                <p className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-2">Legal Precedent</p>
                <p className="text-xs text-gray-400 italic">
                  "Consultancy is conducted in alignment with the prevailing laws of Nepal."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return practiceAreasData.map((p) => ({
    slug: p.slug,
  }));
}

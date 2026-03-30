"use client";

import React from 'react';
import { Printer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PrintButton() {
  const { t } = useLanguage();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <button 
      onClick={handlePrint}
      className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent-gold text-gray-600 dark:text-gray-300 rounded shadow-sm transition-all group no-print"
    >
      <Printer className="h-4 w-4 group-hover:text-accent-gold" />
      <span className="font-bold text-xs uppercase tracking-widest">{t("btn_download_factsheet")}</span>
    </button>
  );
}

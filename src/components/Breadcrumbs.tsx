"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface BreadcrumbsProps {
  items: {
    label: string | { en: string; ne: string };
    href?: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { language } = useLanguage();

  const getLabel = (label: string | { en: string; ne: string }) => {
    if (typeof label === 'string') return label;
    return label[language];
  };

  return (
    <nav className="flex items-center space-x-2 text-sm mb-8 overflow-x-auto whitespace-nowrap pb-2 custom-scrollbar">
      <Link 
        href="/" 
        className="text-gray-500 hover:text-accent-gold transition-colors flex items-center gap-1"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-4 w-4 text-gray-300 shrink-0" />
          {item.href ? (
            <Link 
              href={item.href}
              className="text-gray-500 hover:text-accent-gold transition-colors font-medium"
            >
              {getLabel(item.label)}
            </Link>
          ) : (
            <span className="text-primary-navy dark:text-accent-gold font-bold italic">
              {getLabel(item.label)}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

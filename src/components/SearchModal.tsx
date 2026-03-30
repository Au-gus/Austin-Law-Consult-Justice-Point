"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, ArrowRight, FileText, Scale } from 'lucide-react';
import Link from 'next/link';
import { practiceAreasData, PracticeArea } from '@/data/practiceAreasData';
import postsData from '@/data/posts.json';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Combine practice areas and blog posts for searching
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const q = query.toLowerCase();
    
    const matchedPractices = practiceAreasData.filter((p: PracticeArea) => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    ).map(p => ({
      type: 'practice',
      title: p.title,
      description: p.description,
      link: `/practice-areas/${p.slug}`,
      icon: Scale
    }));

    const matchedPosts = postsData.filter((p: any) => 
      p.title.toLowerCase().includes(q) || 
      p.excerpt.toLowerCase().includes(q)
    ).map(p => ({
      type: 'blog',
      title: p.title,
      description: p.excerpt,
      link: `/#blog-post-${p.id || p.date}`, // Fallback for ID
      icon: FileText
    }));

    return [...matchedPractices, ...matchedPosts];
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-navy/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-white dark:bg-dark-neutral rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {/* Search Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center space-x-4">
              <SearchIcon className="h-6 w-6 text-accent-gold shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search practice areas, legal info, or blog posts..."
                className="flex-grow bg-transparent border-none focus:ring-0 text-lg text-gray-800 dark:text-white placeholder-gray-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                title="Close Search"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {!query.trim() ? (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-50 dark:bg-gray-800 mb-4">
                    <SearchIcon className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">Type something to start searching...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4 ml-2">
                    {searchResults.length} Match{searchResults.length > 1 ? 'es' : ''} Found
                  </p>
                  {searchResults.map((result, i) => (
                    <Link
                      key={i}
                      href={result.link}
                      onClick={onClose}
                      className="flex items-start space-x-4 p-4 rounded-md hover:bg-accent-gold/5 border border-transparent hover:border-accent-gold/20 transition-all group"
                    >
                      <div className="h-10 w-10 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-accent-gold group-hover:text-white transition-colors">
                        <result.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-accent-gold transition-colors italic">
                            {result.title}
                          </h4>
                          <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500">
                            {result.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-accent-gold self-center opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-500 dark:text-gray-400">No results found for "{query}"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 px-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center space-x-4 text-[10px] text-gray-400 font-medium">
                <span className="flex items-center gap-1"><kbd className="bg-white dark:bg-gray-700 px-1 border border-gray-200 dark:border-gray-600 rounded">ESC</kbd> to close</span>
                <span className="flex items-center gap-1"><kbd className="bg-white dark:bg-gray-700 px-1 border border-gray-200 dark:border-gray-600 rounded">ENTER</kbd> to select</span>
              </div>
              <p className="text-[10px] text-accent-gold font-bold italic tracking-tighter uppercase">Legal Knowledge Hub</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

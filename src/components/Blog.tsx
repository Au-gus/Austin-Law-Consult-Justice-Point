"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, ArrowRight, Tag, Scale, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import BlogEditor from "./BlogEditor";
import { getBlogPosts } from "@/app/actions/blogActions";

const initialPosts = [
  {
    title: "Understanding Corporate Law in Nepal: A Practical Guide",
    excerpt:
      "Nepal's corporate legal framework has evolved significantly over the last decade. This guide walks business owners through the key regulations, compliance obligations, and best practices when registering or operating a company.",
    date: "March 25, 2026",
    readTime: "6 min read",
    category: "Corporate Law",
    author: "Ram KC",
  },
  {
    title: "Your Rights During a Criminal Investigation",
    excerpt:
      "Being questioned by authorities can be overwhelming. Knowing your fundamental rights under Nepali law — from the right to remain silent to the right to counsel — can make a critical difference in the outcome of your case.",
    date: "March 18, 2026",
    readTime: "5 min read",
    category: "Criminal Law",
    author: "Austin Law Consult & Justice Point",
  },
  {
    title: "Property Disputes in Nepal: How to Protect Your Interests",
    excerpt:
      "Land and property disputes are among the most common civil cases in Nepal. We explore the legal channels available to you, from mediation and arbitration to formal court proceedings, and how our firm can help.",
    date: "March 10, 2026",
    readTime: "7 min read",
    category: "Real Estate Law",
    author: "Austin Law Consult & Justice Point",
  },
];

const categoryColors: Record<string, string> = {
  "Corporate Law":   "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "Criminal Law":    "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  "Real Estate Law": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "Family Law":      "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
};

export default function Blog() {
  const [posts, setPosts] = useState(initialPosts);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const serverPosts = await getBlogPosts();
      if (serverPosts && serverPosts.length > 0) {
        setPosts(serverPosts);
      }
    };
    fetchPosts();
  }, []);

  const handleAddPost = (newPost: any) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <section
      id="blog"
      className="py-24 bg-white dark:bg-dark-neutral border-t border-gray-100 dark:border-gray-800 relative"
    >
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
            Legal Insights
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From Our Blog
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Expert commentary, legal updates, and practical advice from the
            attorneys at Austin Law Consult & Justice Point.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Stylized Placeholder Header */}
              <div className="h-48 bg-primary-navy relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" 
                     style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    <Scale className="h-8 w-8 text-accent-gold/40" />
                  </div>
                  <span className="text-white/30 text-[0.6rem] uppercase tracking-[0.3em] font-bold">Privacy Placeholder</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gold/30" />
              </div>

              <div className="p-7 flex flex-col flex-1 space-y-4">
                <div className="flex items-center space-x-2">
                  <Tag className="h-3.5 w-3.5 text-accent-gold" />
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      categoryColors[post.category] ??
                      "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="heading-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-gold transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1 font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <span className="font-semibold text-gray-500 dark:text-gray-400">
                    {post.author}
                  </span>
                </div>

                <button className="inline-flex items-center text-accent-gold font-bold text-sm hover:underline mt-1 group/btn w-fit">
                  Read Article
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setIsEditorOpen(true)}
            className="group relative flex items-center space-x-3 bg-primary-navy px-8 py-4 rounded-sm text-white font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-accent-gold hover:shadow-xl hover:-translate-y-1"
          >
            <Plus className="h-4 w-4" />
            <span>Write New Article</span>
            <div className="absolute -top-2 -right-2 bg-accent-gold text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-md">ADMIN</div>
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isEditorOpen && (
          <BlogEditor
            onPostAdded={handleAddPost}
            onClose={() => setIsEditorOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

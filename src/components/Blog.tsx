"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, ArrowRight, Tag, Scale, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import BlogEditor from "./BlogEditor";
import { getBlogPosts } from "@/app/actions/blogActions";
import { useLanguage } from "@/context/LanguageContext";

export default function Blog() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState([]);

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

  const categoryColors: Record<string, string> = {
    "Corporate Law":   "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    "Criminal Law":    "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    "Real Estate Law": "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    "Family Law":      "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  };

  return (
    <section id="blog" className="py-24 bg-white dark:bg-dark-neutral border-t border-gray-100 dark:border-gray-800 relative">
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
            {t("nav_blog")}
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("blog_title")}
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            {t("blog_desc")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
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
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-200 text-gray-700 font-bold"}`}>
                    {post.category}
                  </span>
                </div>

                <h3 className="heading-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-gold transition-colors leading-snug">
                  {post.title[language]}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt[language]}
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
                  {t("btn_read_article")}
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
            <span>{t("btn_write_article")}</span>
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

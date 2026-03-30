"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Lock, PenLine, AlertCircle } from "lucide-react";
import { addBlogPost } from "@/app/actions/blogActions";

interface BlogEditorProps {
  onPostAdded: (newPost: any) => void;
  onClose: () => void;
}

export default function BlogEditor({ onPostAdded, onClose }: BlogEditorProps) {
  const [step, setStep] = useState<"auth" | "form">("auth");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields (Bilingual)
  const [formData, setFormData] = useState({
    title: { en: "", ne: "" },
    excerpt: { en: "", ne: "" },
    category: "Corporate Law",
    author: "Shyam Raja Karki",
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a more secure session, but using the user's provided logic
    if (password === "Austin@Law2026") {
      setStep("form");
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const result = await addBlogPost(formData, password);
      onPostAdded(result);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to add post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-primary-navy/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-sm shadow-2xl relative overflow-hidden"
      >
        {/* Header */}
        <div className="bg-accent-gold p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-white">
            <PenLine className="h-6 w-6" />
            <h3 className="font-bold heading-serif text-xl uppercase tracking-wider">
              {step === "auth" ? "Admin Access" : "Write Bilingual Post"}
            </h3>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {step === "auth" ? (
              <motion.form
                key="auth"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleAuth}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="mx-auto h-12 w-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <Lock className="h-6 w-6 text-accent-gold" />
                  </div>
                  <p className="text-gray-500 text-sm">Enter administrative password to proceed.</p>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:outline-none focus:border-accent-gold transition-all"
                  placeholder="Password..."
                  autoFocus
                />
                {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
                <button type="submit" className="w-full bg-primary-navy text-white font-bold py-4 rounded-sm">Verify Identity</button>
              </motion.form>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Title (English)</label>
                    <input
                      required
                      value={formData.title.en}
                      onChange={(e) => setFormData({ ...formData, title: { ...formData.title, en: e.target.value } })}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Title (Nepali)</label>
                    <input
                      required
                      value={formData.title.ne}
                      onChange={(e) => setFormData({ ...formData, title: { ...formData.title, ne: e.target.value } })}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-all"
                  >
                    <option>Corporate Law</option>
                    <option>Criminal Law</option>
                    <option>Family Law</option>
                    <option>Real Estate Law</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Excerpt (English)</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.excerpt.en}
                      onChange={(e) => setFormData({ ...formData, excerpt: { ...formData.excerpt, en: e.target.value } })}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-all resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Excerpt (Nepali)</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.excerpt.ne}
                      onChange={(e) => setFormData({ ...formData, excerpt: { ...formData.excerpt, ne: e.target.value } })}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-accent-gold transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold text-white font-bold py-4 rounded-sm hover:-translate-y-1 transition-all shadow-lg active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Publishing..." : "Publish Bilingual Article"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

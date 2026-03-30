"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Lock, PenLine, CheckCircle2, AlertCircle } from "lucide-react";
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

  // Form Fields
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "Corporate Law",
    author: "Shyam Raja Karki",
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
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
      // Call Server Action
      const result = await addBlogPost(formData, password);
      
      onPostAdded(result);
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to add post. Please check your connection.");
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
        className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-sm shadow-2xl relative overflow-hidden"
      >
        {/* Header */}
        <div className="bg-accent-gold p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 text-white">
            <PenLine className="h-6 w-6" />
            <h3 className="font-bold heading-serif text-xl uppercase tracking-wider">
              {step === "auth" ? "Admin Access" : "Write New Post"}
            </h3>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8">
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
                  <p className="text-gray-500 text-sm">Please enter the administrative password to continue.</p>
                </div>

                <div className="space-y-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:outline-none focus:border-accent-gold transition-all"
                    autoFocus
                  />
                  {error && (
                    <div className="flex items-center space-x-2 text-red-500 text-xs font-semibold mt-2">
                      <AlertCircle className="h-3 w-3" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-navy dark:bg-accent-gold text-white font-bold py-4 rounded-sm hover:translate-y-[-2px] transition-all shadow-lg active:scale-95"
                >
                  Verify Identity
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Post Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:outline-none focus:border-accent-gold transition-all"
                    placeholder="e.g. New Legal Reforms in Nepal"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:outline-none focus:border-accent-gold transition-all appearance-none"
                  >
                    <option>Corporate Law</option>
                    <option>Criminal Law</option>
                    <option>Family Law</option>
                    <option>Real Estate Law</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Summary (Excerpt)</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-sm px-4 py-3 focus:outline-none focus:border-accent-gold transition-all resize-none"
                    placeholder="A brief summary of the article..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold text-white font-bold py-4 rounded-sm hover:translate-y-[-2px] transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:translate-y-0"
                >
                  {isSubmitting ? "Publishing..." : "Publish Article"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

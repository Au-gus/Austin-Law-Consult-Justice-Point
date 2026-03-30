"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-navy text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-4 inline-block">
              Get in Touch
            </span>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold mb-6">
              Request a Free Consultation
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              We are ready to listen. Please fill out the form below or contact us directly to schedule a strictly confidential discussion about your legal needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-md shadow-2xl">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold heading-serif mb-6 text-accent-gold">Direct Contact</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our team is available to assist you. If you have any urgent matters, please use the direct phone line provided below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="h-12 w-12 bg-white/10 group-hover:bg-accent-gold transition-colors duration-300 rounded-sm flex items-center justify-center shrink-0 mr-4">
                  <Phone className="h-5 w-5 text-accent-gold group-hover:text-primary-navy transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Phone</h4>
                  <p className="font-medium hover:text-accent-gold transition-colors">+977 9841356979</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-12 w-12 bg-white/10 group-hover:bg-accent-gold transition-colors duration-300 rounded-sm flex items-center justify-center shrink-0 mr-4">
                  <Mail className="h-5 w-5 text-accent-gold group-hover:text-primary-navy transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Email</h4>
                  <p className="font-medium hover:text-accent-gold transition-colors">karkishyam613@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-12 w-12 bg-white/10 group-hover:bg-accent-gold transition-colors duration-300 rounded-sm flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="h-5 w-5 text-accent-gold group-hover:text-primary-navy transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Office Location</h4>
                  <p className="font-medium">Jyatha, Kantipath</p>
                  <p className="text-sm text-gray-400 mt-1">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold tracking-wider uppercase text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                    placeholder="Ram KC"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold tracking-wider uppercase text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                    placeholder="ramkc@"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold tracking-wider uppercase text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                    placeholder="+977 98..."
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold tracking-wider uppercase text-gray-300">Interested Service</label>
                  <select
                    id="service"
                    className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all appearance-none"
                  >
                    <option value="" className="bg-primary-navy">Select a service...</option>
                    <option value="corporate" className="bg-primary-navy">Corporate Law</option>
                    <option value="criminal" className="bg-primary-navy">Criminal Defense</option>
                    <option value="family" className="bg-primary-navy">Family & Divorce</option>
                    <option value="real-estate" className="bg-primary-navy">Real Estate Law</option>
                    <option value="other" className="bg-primary-navy">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold tracking-wider uppercase text-gray-300">Case Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all resize-none"
                  placeholder="Please briefly describe your legal matter..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-gold hover:bg-yellow-600 text-white font-bold uppercase tracking-widest py-4 rounded-sm flex items-center justify-center transition-colors shadow-lg shadow-accent-gold/20"
              >
                Submit Request
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

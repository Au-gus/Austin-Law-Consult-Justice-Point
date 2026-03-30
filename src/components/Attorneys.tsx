"use client";

import { motion } from "framer-motion";
import { UserCircle2, Mail, Phone } from "lucide-react";

const attorneys = [
  {
    name: "Shyam Raja Karki",
    role: "Managing Director",
    tag: "Senior Advocate",
    tagColor: "bg-accent-gold text-white",
    phone: "+977 9841356979",
    email: "karkishyam613@gmail.com",
    bio: "Over 20 years of distinguished legal practice in corporate, criminal, and civil law across Nepal.",
  },
  {
    name: "Advocate (Name Withheld)",
    role: "Junior Advocate",
    tag: "Junior Advocate",
    tagColor: "bg-primary-navy text-white",
    phone: "",
    email: "",
    bio: "Specializes in family law and civil litigation with a client-first approach.",
  },
  {
    name: "Advocate (Name Withheld)",
    role: "Junior Advocate",
    tag: "Junior Advocate",
    tagColor: "bg-primary-navy text-white",
    phone: "",
    email: "",
    bio: "Focused on criminal defense and constitutional matters with strong courtroom presence.",
  },
  {
    name: "Staff (Name Withheld)",
    role: "Legal Assistant",
    tag: "Assistant",
    tagColor: "bg-slate-600 text-white",
    phone: "",
    email: "",
    bio: "Supports senior advocates in research, documentation and client coordination.",
  },
  {
    name: "Staff (Name Withheld)",
    role: "Legal Assistant",
    tag: "Assistant",
    tagColor: "bg-slate-600 text-white",
    phone: "",
    email: "",
    bio: "Handles case preparation, filings, and administrative support across all practice areas.",
  },
  {
    name: "Staff (Name Withheld)",
    role: "Legal Investigator",
    tag: "Investigator",
    tagColor: "bg-rose-800 text-white",
    phone: "",
    email: "",
    bio: "Conducts field investigations, witness interviews, and evidence gathering for active cases.",
  },
];

export default function Attorneys() {
  return (
    <section id="attorneys" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
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
            Our Team
          </span>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet the Attorneys
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            A dedicated team of legal professionals committed to delivering justice and excellence for every client.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Placeholder Avatar Area */}
              <div className="relative h-56 bg-gradient-to-br from-primary-navy to-slate-800 flex items-center justify-center">
                {/* Gold top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold" />

                {/* Avatar icon */}
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="h-24 w-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                    <UserCircle2 className="h-16 w-16 text-white/40" />
                  </div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-semibold">
                    Photo Private
                  </p>
                </div>

                {/* Role tag badge */}
                <span className={`absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm ${person.tagColor}`}>
                  {person.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="heading-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-gold transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold text-accent-gold uppercase tracking-wider">
                  {person.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {person.bio}
                </p>

                {/* Contact info — only shown if present */}
                {(person.phone || person.email) && (
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700 space-y-2">
                    {person.phone && (
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-accent-gold transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2 shrink-0" />
                        {person.phone}
                      </a>
                    )}
                    {person.email && (
                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-accent-gold transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2 shrink-0" />
                        {person.email}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Scale, ShieldCheck, Landmark } from "lucide-react";
import { practiceAreasData } from "@/data/practiceAreasData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function PracticeAreaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practiceAreasData.find((p) => p.slug === slug);

  if (!practice) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 bg-primary-navy overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link 
              href="/#practice-areas" 
              className="inline-flex items-center text-accent-gold hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Practice Areas
            </Link>
            <h1 className="heading-serif text-5xl md:text-7xl font-bold text-white mb-6">
              {practice.title}
            </h1>
            <div className="w-24 h-1 bg-accent-gold mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              {practice.description}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-dark-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="heading-serif text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                    <Scale className="mr-4 h-8 w-8 text-accent-gold" />
                    Overview of Services
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {practice.detailedContent.map((item, i) => (
                      <div key={i} className="flex items-start p-4 bg-gray-50 dark:bg-gray-800/50 rounded-sm border-l-4 border-accent-gold">
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
                    Professional Standard
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    At Austin Law Consult, we provide legal consultancy in {practice.title} matters with a focus on objective legal analysis and structural compliance. Our profile is dedicated to supporting the rule of law and providing transparent legal information within the Nepali regulatory framework.
                  </p>
                </div>
              </div>

              {/* Sidebar / Validity Info */}
              <div className="space-y-8">
                <div className="bg-primary-navy text-white p-8 rounded-sm shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="heading-serif text-xl font-bold mb-6 flex items-center">
                    <Landmark className="mr-3 h-5 w-5 text-accent-gold" />
                    Legal Framework
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {practice.validity}
                  </p>
                  <div className="h-px bg-white/10 w-full mb-6"></div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-2">Legal Precedent</p>
                  <p className="text-xs text-gray-400 italic">
                    "All proceedings and consultancy are strictly conducted in accordance with the prevailing laws of Nepal."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-sm border border-gray-100 dark:border-gray-700">
                  <h4 className="font-bold heading-serif text-lg mb-4 text-gray-900 dark:text-white">Inquiry & Contact</h4>
                  <p className="text-sm text-gray-500 mb-6">
                    For further information regarding our consultancy in {practice.title}, please reach out through our contact profile.
                  </p>
                  <Link 
                    href="/#contact" 
                    className="block w-full text-center bg-accent-gold hover:bg-yellow-600 text-white font-bold uppercase tracking-wider py-4 rounded-sm transition-colors text-sm shadow-md"
                  >
                    Contact for Inquiry
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
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

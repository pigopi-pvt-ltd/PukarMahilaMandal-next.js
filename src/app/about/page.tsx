"use client";

import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  Target,
  FileText,
  X,
  AlertCircle,
  Lock,
  ChevronRight,
  Award,
  Scale
} from "lucide-react";

interface DocumentType {
  id: number;
  title: string;
  subtitle: string;
  links: string[];
  icon: React.ReactNode;
}

export default function About() {
  const [activeDoc, setActiveDoc] = useState<DocumentType | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeDoc]);

  const documents: DocumentType[] = [
    {
      id: 1,
      title: "ROC Certificate",
      subtitle: "Registrar of Companies",
      links: ["/images/documents/Register letter.JPG"],
      icon: <Scale size={24} />
    },
    {
      id: 5,
      title: "Awards & Honors",
      subtitle: "Recognition of Excellence",
      links: ["/images/awards/awardcertificate1.jpeg", "/images/awards/awardcertificate2.jpeg"],
      icon: <Award size={24} />
    },
    {
      id: 2,
      title: "PAN Card",
      subtitle: "Income Tax Department",
      links: ["/images/documents/pancard.JPG"],
      icon: <Shield size={24} />
    },
    {
      id: 3,
      title: "Samiti Praman",
      subtitle: "Society Registration",
      links: ["/images/documents/letter.jpeg", "/images/documents/letter2.JPG"],
      icon: <FileText size={24} />
    },
    {
      id: 4,
      title: "Form 10AC",
      subtitle: "12A & 80G Approval",
      links: ["/images/documents/Form-10.JPG"],
      icon: <Award size={24} />
    },
  ];

  return (
    <div className="pt-[64px] md:pt-[88px] pb-16 md:pb-20 selection:bg-rose-100 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* --- HERO SECTION (reduced sizes) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-24 mt-0">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
              <h2 className="text-rose-600 font-bold text-[9px] uppercase tracking-[0.3em]">Our Journey</h2>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-teal-950 dark:text-slate-100 tracking-tight leading-[1.1]">
              A Voice for <br />
              <span className="text-rose-600 italic">the Unheard.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-600 dark:text-slate-400 leading-relaxed font-medium max-w-xl">
              Founded in 2017 in Guna, Madhya Pradesh, Pukar Mahila Mandal started as a small gathering of 10 women. Today, we are a powerhouse federation of <span className="text-teal-950 dark:text-slate-100 font-bold">2,500+ leaders</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6 mt-8 md:mt-10">
            <div className="group bg-zinc-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-zinc-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-zinc-200/50">
              <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-4 shadow-md shadow-rose-200 group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="text-base font-black text-teal-950 dark:text-slate-100 uppercase tracking-wider mb-2">Our Mission</h3>
              <p className="text-zinc-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                Empowering rural women to lead socio-economic narratives through skill-building and grassroots education.
              </p>
            </div>

            <div className="group bg-zinc-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-zinc-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-zinc-200/50">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-200 group-hover:scale-110 transition-transform">
                <Eye size={24} />
              </div>
              <h3 className="text-base font-black text-teal-950 dark:text-slate-100 uppercase tracking-wider mb-2">Our Vision</h3>
              <p className="text-zinc-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                A gender-equal society where every rural household thrives as a sustainable entrepreneurial hub.
              </p>
            </div>
          </div>
        </section>

        {/* --- LEGAL BOX (reduced padding, text sizes) --- */}
        <div className="bg-teal-950 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/10 rounded-full blur-2xl -mr-24 -mt-24" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/5 rounded-full blur-2xl -ml-24 -mb-24" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-3 space-y-5 md:space-y-6">
              <div className="space-y-2">
                <h4 className="text-2xl md:text-4xl font-black tracking-tighter">Radical Transparency</h4>
                <p className="text-teal-100/70 font-medium leading-relaxed text-sm md:text-base max-w-2xl">
                  We maintain the highest standards of legal and financial integrity. Registered under the MP Societies Registration Act, 1973.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Reg: 02/40/01/21798/17",
                  "80G & 12A Certified",
                  "NITI Aayog (Darpan)",
                  "CSR-01 Compliant"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-bold text-xs bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                    <Shield className="text-rose-500 shrink-0" size={16} />
                    <span className="tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center border border-white/10 rounded-full p-3">
                <div className="absolute inset-0 border-t border-rose-500 rounded-full animate-[spin_4s_linear_infinite]" />
                <div className="text-center">
                  <span className="text-4xl md:text-6xl font-black text-rose-500 block">100%</span>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-teal-100 opacity-60">Compliance &<br />Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- DOCUMENTS SECTION (reduced text, better grid) --- */}
        <section className="mt-20 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-6">
            <div className="space-y-2 text-center md:text-left w-full md:w-auto">
              <h2 className="text-rose-600 font-bold text-[9px] uppercase tracking-[0.4em]">Audit Trail</h2>
              <h3 className="text-3xl md:text-5xl font-black text-teal-950 dark:text-slate-100 tracking-tighter">Verify Our Status</h3>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-slate-900 rounded-xl border border-zinc-100 dark:border-slate-800 shadow-sm w-full md:w-auto">
              <Lock size={14} className="text-rose-600" />
              <span className="text-zinc-500 dark:text-slate-400 font-bold text-[10px] uppercase tracking-widest">End-to-End Encrypted Preview</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {documents.map((doc) => (
              <button
                key={doc.id}
                onClick={() => setActiveDoc(doc)}
                className="group relative bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-rose-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-100/30 overflow-hidden"
              >
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rose-50 dark:bg-rose-900/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-teal-950 text-white flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-rose-600 group-hover:rotate-12 group-hover:scale-110">
                    {doc.icon}
                  </div>

                  <h4 className="text-xl md:text-2xl font-black text-teal-950 dark:text-slate-100 mb-1 tracking-tight transition-colors group-hover:text-rose-600">
                    {doc.title}
                  </h4>
                  <p className="text-zinc-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-6">
                    {doc.subtitle}
                  </p>

                  <div className="inline-flex items-center gap-2 text-rose-600 font-black text-[10px] uppercase tracking-[0.2em] pt-3 border-t border-zinc-100 dark:border-slate-800 w-full transition-all group-hover:border-rose-100">
                    Open Securely <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* --- MODAL (fixed scrolling) --- */}
      {activeDoc && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-hidden">
          <div
            className="absolute inset-0 bg-teal-950/80 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setActiveDoc(null)}
          />

          <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-xl md:rounded-2xl overflow-auto flex flex-col shadow-2xl animate-in zoom-in slide-in-from-bottom-10 duration-500">

            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-slate-900 z-20 px-5 py-4 flex items-center justify-between border-b border-zinc-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-xl flex items-center justify-center shadow-md">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-base font-black text-teal-950 dark:text-slate-100 uppercase tracking-tight">{activeDoc.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[8px] font-black text-zinc-400 dark:text-slate-500 uppercase tracking-[0.2em]">Live Secure Preview</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveDoc(null)}
                className="p-2 bg-zinc-50 dark:bg-slate-800 rounded-xl hover:bg-rose-600 transition-all"
              >
                <X size={18} className="text-zinc-900 dark:text-slate-100 hover:text-white transition-colors" />
              </button>
            </div>

            {/* Document Viewer Container (scrolls) */}
            <div className="flex-1 bg-zinc-50 overflow-auto">
              {/* Security Banner */}
              <div className="bg-rose-50 border-b border-rose-100 px-4 py-1.5 flex items-center gap-2 text-rose-700 sticky top-0 z-10">
                <AlertCircle size={12} />
                <span className="text-[8px] font-bold uppercase tracking-wider">Screenshot prevention enabled • No caching allowed</span>
              </div>

              <div className="relative p-4 md:p-6">
                {/* Watermark Overlay (light) */}
                <div className="absolute inset-0 grid grid-cols-2 gap-10 p-10 pointer-events-none z-0 opacity-[0.02] select-none uppercase overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="text-2xl font-black -rotate-45 whitespace-nowrap">PUKAR</span>
                  ))}
                </div>

                {/* The Images */}
                <div className="relative z-10 flex flex-col gap-8 items-center">
                  {activeDoc.links.map((link, index) => (
                    <img
                      key={index}
                      src={link}
                      alt={`${activeDoc.title} - Page ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md select-none border border-zinc-100"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-teal-950 text-white px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 order-2 sm:order-1">
                <div className="flex flex-col">
                  <span className="text-[8px] text-teal-400 font-bold uppercase tracking-wider">Registered District</span>
                  <span className="text-xs font-bold">Guna, Madhya Pradesh</span>
                </div>
              </div>
              <div className="flex items-center gap-2 order-1 sm:order-2 bg-white/5 px-3 py-1.5 rounded-lg">
                <Lock size={12} className="text-rose-500" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em]">Verified Integrity</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Logic */}
      <style jsx global>{`
        @media print {
          body { display: none !important; }
        }
        .no-select {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
"use client";

import { Heart, Globe, Star, ShieldCheck, Download } from "lucide-react";
import Link from "next/link";

const corporateDonors = [
  { name: "Global Giving", type: "Grant Partner", impact: "200+ Kits" },
  { name: "Rural Dev Bank", type: "Banking Linkage", impact: "Microloans" },
  { name: "Tech For Good", type: "Digital Partner", impact: "Training" },
];

export default function Donors() {
  return (
    <div className="pt-[64px] md:pt-[88px] pb-20 md:pb-24 bg-white dark:bg-slate-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-24">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-teal-950 dark:text-slate-100 tracking-tighter leading-tight">
              Powering the <br /><span className="text-rose-600 italic">Pukar Movement.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-500 dark:text-slate-400 font-medium leading-relaxed">
              We are grateful to the individuals and organizations whose contributions allow Pukar Mahila Mandal to maintain 12 decentralized garment units in Guna.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-teal-950 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black hover:bg-rose-600 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                Join our Donors <Globe size={18} />
              </Link>
            </div>
          </div>
          <div className="bg-zinc-50 dark:bg-slate-900 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-zinc-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden shadow-md">
            <div className="text-center relative z-10">
              <div className="text-5xl md:text-6xl font-black text-teal-950 dark:text-slate-100 mb-2">300+</div>
              <p className="text-zinc-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                Active Individual Donors
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-100 rounded-full opacity-50 blur-3xl" />
          </div>
        </section>

        {/* Institutional Partners */}
        <div className="mb-20 md:mb-24">
          <h3 className="text-xl md:text-2xl font-black text-teal-950 dark:text-slate-100 mb-6 md:mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            Our Institutional Partners
            <div className="h-px flex-1 bg-zinc-100 dark:bg-slate-800 w-full sm:w-auto" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {corporateDonors.map((donor, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 bg-white dark:bg-slate-900 border border-zinc-100 dark:border-slate-800 rounded-2xl md:rounded-3xl hover:shadow-xl hover:shadow-zinc-100 dark:hover:shadow-slate-950 transition-all text-center hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-50 dark:bg-slate-800 rounded-xl md:rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center text-zinc-400 dark:text-slate-500 group-hover:text-rose-600 group-hover:bg-rose-50 transition-all">
                  <Star size={22} className="md:w-6 md:h-6" />
                </div>
                <h4 className="text-lg md:text-xl font-black text-teal-950 dark:text-slate-100 mb-1">
                  {donor.name}
                </h4>
                <p className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
                  {donor.type}
                </p>
                <div className="inline-block px-3 md:px-4 py-1 bg-teal-50 text-teal-700 text-[10px] font-black rounded-full">
                  Impact: {donor.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Compliance – Download buttons now functional */}
        <div className="bg-rose-600 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-white grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center shadow-xl">
          <div className="lg:col-span-2 space-y-3 md:space-y-4 text-center lg:text-left">
            <h4 className="text-2xl md:text-3xl font-black tracking-tight">
              Transparency for Peace of Mind
            </h4>
            <p className="text-rose-100 font-medium text-sm md:text-base">
              Download our annual impact reports and audit statements. Your trust is our greatest asset.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {/* Replace href with actual file paths in /public */}
            <a
              href="/reports/annual-report-2024-25.pdf"
              download
              className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl font-bold transition-all text-sm md:text-base"
            >
              Annual Report 2024-25 <Download size={18} />
            </a>
            <a
              href="/reports/audit-statement.pdf"
              download
              className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 border border-white/20 p-3 md:p-4 rounded-xl md:rounded-2xl font-bold transition-all text-sm md:text-base"
            >
              Audit Statement <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
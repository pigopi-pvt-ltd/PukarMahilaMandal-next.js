"use client";

import { useState } from "react";
import {
  Heart, CreditCard, Landmark, ShieldCheck,
  CheckCircle2, Info, ArrowRight, Copy
} from "lucide-react";

const givingLevels = [
  { amount: "1,500", label: "Sponsor a Training", desc: "Covers the cost of legal literacy training for 5 rural women." },
  { amount: "5,000", label: "Equip a Sister", desc: "Provides a professional stitching machine and start-up raw materials." },
  { amount: "10,000", label: "Unit Support", desc: "Supports the monthly operational costs of a village garment unit." },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-[64px] md:pt-[88px] pb-24 bg-zinc-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* --- LEFT: IMPACT CONTEXT --- */}
          <div className="lg:col-span-7 space-y-10 mt-0">
            <header className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-teal-950 dark:text-slate-100 tracking-tighter leading-tight">
                Your Contribution, <br /><span className="text-rose-600 italic">Their Empowerment.</span>
              </h1>
              <p className="text-xl text-zinc-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                Every rupee donated to Pukar Mahila Mandal goes directly toward establishing sustainable livelihoods for women in Guna.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Tax Exemption", desc: "All donations are eligible for 80G tax benefits.", icon: ShieldCheck },
                { title: "Direct Impact", desc: "90% of funds go directly to field programs.", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-teal-950 dark:text-slate-100">{item.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-slate-400 font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- GIVING LEVELS --- */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-zinc-400">Select a Giving Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {givingLevels.map((level) => (
                  <button
                    key={level.amount}
                    onClick={() => setSelectedAmount(level.amount)}
                    className={`p-6 rounded-lg border-2 transition-all text-left space-y-2 ${selectedAmount === level.amount
                      ? "border-rose-600 bg-rose-50 dark:bg-rose-900/20 ring-4 ring-rose-600/10"
                      : "border-white dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-zinc-200 dark:hover:border-slate-700"
                      }`}
                  >
                    <span className="text-2xl font-black text-teal-950 dark:text-slate-100">₹{level.amount}</span>
                    <p className="text-xs font-black text-rose-600 uppercase tracking-tighter">{level.label}</p>
                    <p className="text-[10px] text-zinc-400 dark:text-slate-500 font-medium leading-tight">{level.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: DONATION FORM --- */}
          <div className="lg:col-span-5 mt-0">
            <div className="bg-teal-950 rounded-lg p-4 md:p-12 text-white sticky top-28 shadow-2xl shadow-teal-950/40 border-2">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black">Donation Details</h3>
                  <p className="text-teal-100/50 text-sm font-medium">Securely processed via our banking partners.</p>
                </div>

                <div className="space-y-6">
                  {/* Amount Input */}
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-teal-400 font-black text-xl">₹</span>
                    <input
                      type="text"
                      placeholder="Enter Custom Amount"
                      value={selectedAmount}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-5 pl-12 pr-6 font-black text-xl focus:outline-none focus:border-rose-600 transition-all placeholder:text-white/20"
                    />
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-400">Payment Options</h4>

                    {/* BANK TRANSFER BOX */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Landmark size={20} className="text-rose-500" />
                        <span className="font-bold text-sm">Direct Bank Transfer</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                          <span className="text-white/40">A/C Name:</span>
                          <span className="font-mono font-bold">Pukar Mahila Mandal</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                          <span className="text-white/40">A/C No:</span>
                          <span className="font-mono font-bold flex items-center gap-2">
                            889010210000025
                            <button onClick={() => copyToClipboard("889010210000025")} className="text-rose-400 hover:text-white">
                              <Copy size={14} />
                            </button>
                          </span>
                        </div>
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                          <span className="text-white/40">IFSC Code:</span>
                          <span className="font-mono font-bold uppercase">BKID0008890</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-rose-600 hover:bg-rose-700 py-5 rounded-lg font-black text-lg shadow-xl shadow-rose-900/40 transition-all flex items-center justify-center gap-3">
                      Donate<ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 justify-center text-[10px] text-teal-100/40 font-bold uppercase tracking-widest">
                    <ShieldCheck size={14} /> 256-bit Secure Encryption
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
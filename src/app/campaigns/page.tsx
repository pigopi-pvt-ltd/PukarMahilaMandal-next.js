"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "10 New Garment Training Units in Guna",
    category: "Livelihood",
    image: "/images/garment.jpg",
    raised: "4,50,000",
    goal: "10,00,000",
    percentage: 45,
    donors: 124,
    urgent: true,
  },
  {
    id: 2,
    title: "Legal Literacy Camps for 50 Villages",
    category: "Rights",
    image: "/images/home/image-3.jpg",
    raised: "85,000",
    goal: "2,00,000",
    percentage: 42,
    donors: 56,
    urgent: false,
  },
  {
    id: 3,
    title: "Health & Hygiene Kits for Rural Artisans",
    category: "Health",
    image: "/images/news-2.jpg",
    raised: "1,20,000",
    goal: "1,50,000",
    percentage: 80,
    donors: 89,
    urgent: false,
  },
  // Add more campaigns as needed
];

export default function AllCampaigns() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest">
              <Zap size={14} fill="currentColor" /> Active Appeals
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-teal-950 tracking-tighter leading-none">
              Current <br /><span className="text-rose-600 italic">Campaigns.</span>
            </h1>
          </div>
          <p className="text-zinc-500 font-medium max-w-sm leading-relaxed">
            Directly fund specific projects in Guna. 100% of these contributions go toward project implementation costs.
          </p>
        </div>

        {/* --- CAMPAIGN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campaigns.map((camp) => (
            <div key={camp.id} className="group flex flex-col bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500">
              
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={camp.image} 
                  alt={camp.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {camp.urgent && (
                  <div className="absolute top-6 left-6 bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Urgent
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg">
                    {camp.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-black text-teal-950 leading-tight mb-6 group-hover:text-rose-600 transition-colors">
                  {camp.title}
                </h3>

                <div className="space-y-6 mt-auto">
                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">Raised</span>
                        <span className="text-lg font-black text-teal-950">₹{camp.raised}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">Goal</span>
                        <span className="block text-sm font-bold text-zinc-600 uppercase">₹{camp.goal}</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-rose-600 transition-all duration-1000" 
                        style={{ width: `${camp.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center py-4 border-y border-zinc-50">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Target size={16} className="text-rose-500" />
                      <span className="text-xs font-bold uppercase">{camp.percentage}% Achieved</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Users size={16} className="text-teal-600" />
                      <span className="text-xs font-bold uppercase">{camp.donors} Donors</span>
                    </div>
                  </div>

                  <Link 
                    href={`/donate?campaign=${camp.id}`}
                    className="w-full bg-teal-950 text-white py-4 rounded-2xl font-black text-center group-hover:bg-rose-600 transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
                  >
                    Support Project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- TRUST FOOTER --- */}
        <div className="mt-24 p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-teal-950">Transparency First.</h4>
            <p className="text-zinc-500 font-medium">All campaigns are audited annually. 80G tax benefits apply to every donation.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-white px-6 py-4 rounded-2xl border border-zinc-200 text-center">
                <p className="text-rose-600 font-black text-xl leading-none">80G</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Tax Exempt</p>
             </div>
             <div className="bg-white px-6 py-4 rounded-2xl border border-zinc-200 text-center">
                <p className="text-teal-600 font-black text-xl leading-none">CSR</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Compliant</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
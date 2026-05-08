"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Scissors, 
  Droplets, 
  UtensilsCrossed, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Zap 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Garment Manufacturing",
      icon: Scissors,
      description: "Industrial-grade training and production for the modern apparel market.",
      longDescription: "From basic stitching to advanced embroidery, our trainees master industrial machines. We partner with local schools and businesses for uniform and apparel contracts.",
      stats: { beneficiaries: "120+ Artisans", growth: "Tier-1 Certified" },
      features: ["Machine Maintenance", "Pattern Making", "Bulk Order Mgmt"],
      image: "/images/services/Garment_Manufacturing.webp",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
    {
      title: "Herbal Soap Production",
      icon: Droplets,
      description: "Sustainable chemistry meeting traditional wellness for eco-conscious consumers.",
      longDescription: "We upcycle floral waste from local temples into premium essential-oil based soaps. This unit teaches scientific formulation and eco-friendly packaging.",
      stats: { beneficiaries: "80+ Producers", growth: "Zero Waste" },
      features: ["Phosphate Free", "Floral Upcycling", "Natural Essential Oils"],
      image: "/images/services/soapmaking.jpg",
      color: "text-teal-700",
      bg: "bg-teal-50",
    },
       {
      title: "Handmade Papad Production",
      icon: UtensilsCrossed,
      description: "Empowering rural households through a decentralized production model. We combine traditional recipes with modern quality control.",
      longDescription: "Our flagship unit in Guna focuses on authentic sun-drying techniques. By providing raw materials to women's doorsteps, we ensure they can balance livelihood with family care.",
      stats: { beneficiaries: "250+ Women", growth: "40% Monthly" },
      features: ["Traditional Recipes", "Quality Inspection", "Direct Market Access"],
      image: "/images/services/papad.jpg",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-rose-100 pb-20">
      {/* --- MINIMALIST HEADER --- */}
      <section className="pt-20 pb-12 px-6 border-b border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-orange-500" />
                <p className="text-orange-600 font-bold text-xs uppercase tracking-widest">Empowerment Through Skill</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight">
                Our Services <span className="text-zinc-400">&</span> Impact.
              </h1>
            </div>
            <p className="max-w-md text-zinc-500 font-medium leading-relaxed">
              We bridge the gap between rural talent and urban markets through structured industrial training units in Guna[cite: 1].
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES CONTENT LIST --- */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Side - Compact Size */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className={`absolute -inset-4 ${service.bg} rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500`} />
                  <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl">
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-zinc-600 font-semibold leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-zinc-500 leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>

                {/* Micro Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-3">
                    <Users className="h-5 w-5 text-zinc-400" />
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase">Impact</p>
                      <p className="font-black text-zinc-900">{service.stats.beneficiaries}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-zinc-400" />
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase">Status</p>
                      <p className="font-black text-zinc-900">{service.stats.growth}</p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-bold text-zinc-700 text-sm">
                      <CheckCircle2 className={`h-5 w-5 ${service.color}`} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-zinc-900 hover:text-orange-600 transition-colors"
                >
                  Learn more about this unit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COMPACT CTA --- */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-zinc-900 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Empower Your Community.
              </h2>
              <p className="text-zinc-400 font-medium">
                Enroll in our Guna training programs today[cite: 1].
              </p>
            </div>
            <Link 
              href="/contact"
              className="bg-white text-zinc-900 px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition-all flex items-center gap-3 whitespace-nowrap"
            >
              Contact Us <Zap className="h-5 w-5 fill-current" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
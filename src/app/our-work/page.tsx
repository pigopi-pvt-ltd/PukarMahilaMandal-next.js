"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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

// --- Define separate carousel images for each service ---
const garmentImages = [
  "/images/services/Garment_Manufacturing.webp",
  "/images/services/garment-2.jpg",
  "/images/services/garment-3.jpg",
  "/images/services/garment-4.jpg",
];

const soapImages = [
  "/images/services/soap-1.jpg",
  "/images/services/soap-2.jpg",
  "/images/services/soap-3.jpg",
  "/images/services/soap-4.jpg",
];

const papadImages = [
  "/images/services/papad-1.jpg",
  "/images/services/papad-2.jpg",
  "/images/services/papad-3.jpg",
  "/images/services/papad-4.jpg",
];

// Custom hook for carousel state
function useCarousel(images: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);
  return { currentIndex, setCurrentIndex };
}

export default function OurWork() {
  const garmentCarousel = useCarousel(garmentImages);
  const soapCarousel = useCarousel(soapImages);
  const papadCarousel = useCarousel(papadImages);

  const services = [
    {
      title: "Garment Manufacturing",
      icon: Scissors,
      description: "Industrial-grade training and production for the modern apparel market.",
      longDescription: "From basic stitching to advanced embroidery, our trainees master industrial machines. We partner with local schools and businesses for uniform and apparel contracts.",
      stats: { beneficiaries: "120+ Artisans", growth: "Tier-1 Certified" },
      features: ["Machine Maintenance", "Pattern Making", "Bulk Order Mgmt"],
      images: garmentImages,
      carousel: garmentCarousel,
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
      images: soapImages,
      carousel: soapCarousel,
      color: "text-teal-700",
      bg: "bg-teal-50",
    },
    {
      title: "Herbal handmade product production",
      icon: UtensilsCrossed,
      description: "Empowering rural households through a decentralized production model. We combine traditional recipes with modern quality control.",
      longDescription: "Our flagship unit in Guna focuses on authentic sun-drying techniques. By providing raw materials to women's doorsteps, we ensure they can balance livelihood with family care.",
      stats: { beneficiaries: "250+ Women", growth: "40% Monthly" },
      features: ["Traditional Recipes", "Quality Inspection", "Direct Market Access"],
      images: papadImages,
      carousel: papadCarousel,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-rose-100 pt-[64px] md:pt-[88px] pb-12 md:pb-20">

      {/* Header */}
      <section className="pt-0 pb-2 md:pb-4 px-6 border-b border-zinc-100 dark:border-slate-800 bg-zinc-50/50 dark:bg-slate-900/50 mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 md:w-8 bg-orange-500" />
                <p className="text-orange-600 font-bold text-[10px] md:text-xs uppercase tracking-widest">What We Do</p>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-slate-100 tracking-tight">
                Our Work <span className="text-zinc-400">&</span> Impact.
              </h1>
            </div>
            <p className="max-w-md text-zinc-500 dark:text-slate-400 font-medium text-sm md:text-base leading-relaxed">
              We bridge the gap between rural talent and urban markets through structured industrial training units in Guna.
            </p>
          </div>
        </div>
      </section>

      {/* Service Blocks with Carousels */}
      <section className="px-6 pt-4 md:pt-6 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
          {services.map((service, index) => {
            const { currentIndex, setCurrentIndex } = service.carousel;
            return (
              <div
                key={index}
                className={`flex flex-col gap-10 md:gap-16 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image side: Carousel */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className={`absolute -inset-3 md:-inset-4 ${service.bg} rounded-2xl md:rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500`} />
                    <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                      {service.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${service.title} ${i + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-105 ${i === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        />
                      ))}
                      <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-10">
                        <service.icon className={`h-5 w-5 md:h-6 md:w-6 ${service.color}`} />
                      </div>
                      {/* Carousel dots */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                        {service.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 hover:scale-125 ${i === currentIndex ? "w-6 bg-rose-500" : "w-1.5 bg-white/50 hover:bg-white"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content side (unchanged) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5 md:space-y-8">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-slate-100 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-slate-300 font-semibold leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm md:text-base text-zinc-500 dark:text-slate-400 leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>

                  {/* Micro Stats */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-50 dark:bg-slate-900 border border-zinc-100 dark:border-slate-800 flex items-center gap-2 md:gap-3">
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-zinc-400" />
                      <div>
                        <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase">Impact</p>
                        <p className="font-black text-zinc-900 dark:text-slate-100 text-sm md:text-base">{service.stats.beneficiaries}</p>
                      </div>
                    </div>
                    <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-50 dark:bg-slate-900 border border-zinc-100 dark:border-slate-800 flex items-center gap-2 md:gap-3">
                      <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-zinc-400" />
                      <div>
                        <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase">Status</p>
                        <p className="font-black text-zinc-900 dark:text-slate-100 text-sm md:text-base">{service.stats.growth}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 md:space-y-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 md:gap-3 font-bold text-zinc-700 text-xs md:text-sm">
                        <CheckCircle2 className={`h-4 w-4 md:h-5 md:w-5 ${service.color}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 md:gap-2 font-black text-[10px] md:text-xs uppercase tracking-widest text-zinc-900 dark:text-slate-100 hover:text-orange-600 transition-colors"
                  >
                    Learn more about this unit <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section (unchanged) */}
      <section className="px-6 pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto rounded-2xl md:rounded-[3rem] bg-zinc-900 p-6 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-orange-600 rounded-full blur-[80px] md:blur-[120px] opacity-20 -mr-24 -mt-24 md:-mr-32 md:-mt-32" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                Empower Your Community.
              </h2>
              <p className="text-zinc-400 font-medium text-sm md:text-base">
                Enroll in our Guna training programs today.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-zinc-900 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-base hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Contact Us <Zap className="h-4 w-4 md:h-5 md:w-5 fill-current" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
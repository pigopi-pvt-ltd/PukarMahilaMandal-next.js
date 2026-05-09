"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Play, Calendar, Tag, User,
  ArrowRight, Heart, ShieldCheck, CheckCircle2, Star,
  ShoppingBag, BookOpen, Users, MapPin, BarChart3, Image as ImageIcon,
  ChevronRight, Target, Zap, Info, Megaphone, Award, GraduationCap, Trophy
} from "lucide-react";

// --- Hero Carousel Content  ---
const slides = [
  {
    image: "/images/home/banner1.png",
    title: "Empowering Rural Women, Changing Lives.",
  },
  {
    image: "/images/home/banner3.png",
    title: "Economic Freedom Through Skill Training.",
  },
  {
    image: "/images/home/banner2.png",
    title: "Legal Literacy and Social Excellence.",
  },
  {
    image: "/images/home/banner4.png",
    title: "Sustainable Livelihoods Since 2017.",
  },
  {
    image: "/images/home/banner5.png",
    title: "Building Self-Reliant Communities.",
  },
  {
    image: "/images/home/banner6.png",
    title: "Leadership and Growth for Every Woman.",
  },
];

// --- Campaigns Carousel Content ---
const campaigns = [
  {
    title: "10 New Garment Training Units",
    goal: "Goal: ₹10 Lakhs",
    raised: "45%",
    image: "/images/campaigns/garment.png",
    link: "/donate",
  },
  {
    title: "Rural Legal Literacy Camps",
    goal: "Goal: ₹5 Lakhs",
    raised: "30%",
    image: "/images/campaigns/legal.png",
    link: "/donate",
  },
  {
    title: "Herbal Soap Expansion",
    goal: "Goal: ₹3 Lakhs",
    raised: "60%",
    image: "/images/campaigns/soap.png",
    link: "/donate",
  },
  {
    title: "Women's Safety Workshops",
    goal: "Goal: ₹2 Lakhs",
    raised: "75%",
    image: "/images/campaigns/safety.png",
    link: "/donate",
  },
  {
    title: "Digital Literacy for SHGs",
    goal: "Goal: ₹4 Lakhs",
    raised: "20%",
    image: "/images/campaigns/digital.png",
    link: "/donate",
  },
];

// --- Awards & Achievements Data ---
const awards = [
  { title: "Republic Day Award", year: "2024", desc: "Recognized for outstanding social service in Guna district.", icon: Trophy },
  { title: "NITI Aayog Verified", year: "2024", desc: "Registered under Darpan Portal with unique ID.", icon: Award },
  { title: "CSR Excellence", year: "2023", desc: "Best grassroots NGO for women empowerment.", icon: Star },
  { title: "Financial Inclusion Champion", year: "2023", desc: "100% SHG bank linkage achievement.", icon: Target },
];

// --- Field Reports Data ---
const fieldReports = [
  {
    image: "meet1 (1).jpeg",
    date: "May 20, 2026",
    tag: "Field Report",
    title: "Republic Day Honors for Area Level Federation",
    desc: "Recognized for 100% implementation of women welfare schemes in remote Guna blocks."
  },
  {
    image: "swachhta.jpeg",
    date: "May 15, 2026",
    tag: "Swachhta Mission",
    title: "Swachhta Abhiyan in Guna Villages",
    desc: "Rural women leading cleanliness drives and waste management initiatives for a cleaner India."
  },
  {
    image: "meet1 (2).jpeg",
    date: "May 10, 2026",
    tag: "Field Report",
    title: "Community Meeting on Economic Freedom",
    desc: "Discussing new production centers and fair wage systems for rural artisans."
  },
  {
    image: "meet1 (3).jpeg",
    date: "May 05, 2026",
    tag: "Field Report",
    title: "Legal Literacy Camp Success",
    desc: "Over 200 women attended the legal awareness workshop in Aaron block."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCampaign, setCurrentCampaign] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampaign((prev) => (prev + 1) % campaigns.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToCampaign = (index: number) => setCurrentCampaign(index);

  return (
    <div className="flex flex-col bg-zinc-50 dark:bg-slate-950 pt-[64px] md:pt-[72px] min-h-screen">

      {/* Hero Carousel */}
      <section className="relative w-full h-[280px] md:h-[80vh] overflow-hidden mt-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              quality={90}
              priority={i === 0}
              className="object-contain md:object-cover bg-teal-950 object-top md:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="relative h-full flex flex-col justify-end items-start space-y-2 md:space-y-3 pb-6 md:pb-10 px-4 md:px-10">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-white/20 transition-all">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-600"></span>
                </span>
                Registered NGO: Guna, Madhya Pradesh
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl drop-shadow-lg">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 hover:scale-125 ${i === currentSlide ? "w-8 bg-rose-500" : "w-2 bg-white/50 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-zinc-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "80G Certified", d: "Tax Benefits", i: ShieldCheck },
            { t: "NITI Aayog", d: "Verified Partner", i: CheckCircle2 },
            { t: "CSR-01", d: "Regd. NGO", i: Info },
            { t: "2,500+", d: "Women Empowered", i: Star },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-zinc-50 dark:bg-slate-800 p-3 rounded-2xl shadow-sm text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-all group-hover:scale-110">
                <item.i size={24} />
              </div>
              <div>
                <h4 className="font-black text-teal-950 dark:text-slate-100 text-sm md:text-lg group-hover:text-rose-600 transition-colors leading-tight">{item.t}</h4>
                <p className="text-[10px] md:text-xs uppercase font-extrabold text-zinc-400 tracking-widest mt-0.5">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. DYNAMIC RESOURCE HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 w-full">
        <div className="bg-[#dbeafe] dark:bg-slate-900 rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-5 md:p-8 lg:p-10 border-2 border-[#bfdbfe] dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="flex gap-2 mb-6 md:mb-8">
            {["home", "resources", "videos"].map((tab) => (
              <span key={tab} className="px-3 md:px-4 py-1 bg-zinc-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest cursor-default hover:bg-rose-600 transition-colors">
                {tab}
              </span>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl group">
                {slides.map((slide, i) => (
                  <Image
                    key={i}
                    src={i === 0 ? "/images/home/mobileview.jpeg" : slide.image}
                    alt="Spotlight"
                    fill
                    className={`object-cover transition-opacity duration-1000 group-hover:scale-105 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] border-4 border-[#3b82f6] dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                  <h3 className="text-teal-950 dark:text-slate-100 font-black text-lg md:text-xl border-b dark:border-slate-700 pb-3">Entity Details</h3>
                  <div className="space-y-4">
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Registered Name:</p>
                      <p className="text-teal-950 font-extrabold text-sm">Pukar Mahila Mandal</p>
                    </div>
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Status:</p>
                      <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                        <ShieldCheck size={16} /> 80G Certified
                      </div>
                    </div>
                    <div className="hover:translate-x-1 transition-transform">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Location:</p>
                      <p className="text-teal-950 font-extrabold text-sm">Guna, Madhya Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-between">
              <div className="space-y-6 md:space-y-8">
                <div className="min-h-[220px] md:min-h-[260px]">
                  {slides.map((slide, i) => (
                    <div key={i} className={`transition-all duration-700 ${i === currentSlide ? "block translate-y-0 opacity-100" : "hidden translate-y-4 opacity-0"}`}>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-teal-950 tracking-tighter leading-[1.1] mb-4 md:mb-6">
                        {slide.title.split(',')[0]} <br />
                        <span className="text-[#3b82f6] italic">{slide.title.split(',')[1] || "Transforming Lives"}</span>
                      </h1>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
                  <Link href="/donate" className="bg-rose-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-rose-700 hover:scale-105 transition-all shadow-md">
                    Support a Cause <Heart size={18} fill="white" />
                  </Link>
                  <Link href="/our-work" className="bg-white border-2 border-teal-950 text-teal-950 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-teal-950 hover:text-white hover:scale-105 transition-all shadow-sm">
                    View Impact
                  </Link>
                </div>
                <div className="pt-6 md:pt-8 border-t-2 border-[#bfdbfe]">
                  <h4 className="text-teal-950 font-black mb-4 md:mb-6 flex items-center gap-4 text-xs md:text-sm uppercase tracking-widest">
                    Featured Campaign <div className="h-[2px] flex-1 bg-[#bfdbfe]" />
                  </h4>
                  <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-teal-950 group cursor-pointer shadow-xl border-2 md:border-4 border-white hover:shadow-2xl transition-all">
                    <Image src="/images/meetings/meeting1.png" alt="Video" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-rose-700 transition-all">
                        <Play size={24} className="md:w-8 md:h-8" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-4xl md:text-6xl font-black text-teal-950 dark:text-slate-100 tracking-tighter hover:text-rose-600 transition-colors">What We Do.</h3>
            <p className="text-zinc-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
              We empower rural women in Guna by establishing decentralized production centers, providing legal literacy, and fostering community leadership through Federations.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                <CheckCircle2 className="text-rose-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h5 className="font-black text-teal-950 text-lg md:text-xl group-hover:text-rose-600">Livelihood</h5>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold uppercase">Fair Wages</p>
              </div>
              <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                <ShieldCheck className="text-teal-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h5 className="font-black text-teal-950 text-lg md:text-xl group-hover:text-teal-800">Rights</h5>
                <p className="text-[10px] md:text-xs text-zinc-400 font-bold uppercase">Legal Aid</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image src="/images/home/image-3.webp" fill alt="Impact" className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* 3. OUR INSTITUTES (with background images) */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-900 border-y dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-4xl md:text-5xl font-black text-teal-950 dark:text-slate-100 tracking-tighter mb-12 md:mb-16">Our Institutes.</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Guna Main", bg: "/images/home/guna_main_production.png" },
              { name: "Aaron Block", bg: "/images/meetings/meet1 (1).jpeg" },
              { name: "Chachoda", bg: "/images/home/banner66.jpg" },
              { name: "Raghogarh", bg: "/images/awards/award2.webp" },
            ].map((loc, i) => (
              <div key={i} className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer min-h-[280px]">
                <Image src={loc.bg} alt={loc.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-teal-950/90 via-teal-950/60 to-transparent text-white text-center">
                  <MapPin className="mx-auto mb-2 text-rose-400 group-hover:scale-110 transition-transform" size={24} />
                  <h5 className="font-black text-lg md:text-xl group-hover:text-rose-300 transition-colors">{loc.name} Center</h5>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-teal-200 mt-1">Active Hub</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR CAMPAIGNS CAROUSEL */}
      <section className="py-12 md:py-20 bg-zinc-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 md:mb-12">
            <h4 className="text-4xl md:text-5xl font-black text-teal-950 dark:text-slate-100 tracking-tighter">Our Campaigns.</h4>
            <div className="flex gap-2">
              {campaigns.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToCampaign(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentCampaign ? "w-8 bg-rose-600" : "w-2 bg-zinc-300 hover:bg-rose-300"}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            {campaigns.map((camp, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${idx === currentCampaign ? "block opacity-100" : "hidden opacity-0"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-8 relative h-[400px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden group shadow-xl cursor-pointer">
                    <Image src={camp.image} fill alt={camp.title} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
                      <h5 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 group-hover:text-rose-400 transition-colors">{camp.title}</h5>
                      <div className="w-full h-1.5 md:h-2 bg-white/20 rounded-full overflow-hidden mb-5 md:mb-6">
                        <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: camp.raised }} />
                      </div>
                      <Link href={camp.link} className="inline-block bg-white text-teal-950 px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-rose-600 hover:text-white hover:scale-105 transition-all">
                        Support Now
                      </Link>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-white dark:bg-slate-900 p-6 md:p-10 rounded-2xl md:rounded-3xl border dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
                    <Megaphone className="text-rose-600 mb-5 md:mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h5 className="text-xl md:text-2xl font-black text-teal-950 dark:text-slate-100 mb-3 md:mb-4 group-hover:text-rose-600">{camp.title}</h5>
                    <p className="text-zinc-500 dark:text-slate-400 font-medium text-sm md:text-base mb-6 md:mb-8">{camp.goal}</p>
                    <Link href="/donate" className="w-full py-3 md:py-4 rounded-xl border-2 border-zinc-100 dark:border-slate-800 text-center font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-teal-950 hover:text-white hover:border-teal-950 transition-all">
                      Contribute Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR IMPACT */}
      <section className="py-12 md:py-20 bg-teal-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 md:mb-16">Our Impact.</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[["2,500+", "Women"], ["50+", "Villages"], ["100%", "Fair Wage"], ["15k", "Lives"]].map(([val, lab], i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-4xl md:text-7xl font-black text-rose-500 italic mb-2 group-hover:scale-110 transition-transform inline-block">{val}</p>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-teal-200/50 group-hover:text-white transition-colors">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AWARDS & ACHIEVEMENTS */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-teal-950 dark:text-slate-100 tracking-tighter">Awards & Achievements</h3>
            <div className="h-1 w-20 bg-rose-600 mx-auto rounded-full mt-4"></div>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">Recognitions that reflect our commitment to rural empowerment and transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-zinc-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border hover:border-rose-400 hover:shadow-xl transition-all group cursor-pointer text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-rose-600 transition-colors">
                  <award.icon className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl md:text-2xl font-black text-teal-950 mb-2 group-hover:text-rose-600 transition-colors">{award.title}</h4>
                <p className="text-rose-600 font-bold text-sm mb-2">{award.year}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LATEST FROM THE FIELD */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-teal-950 tracking-tight">Latest from <span className="text-rose-600 italic hover:text-rose-700 transition-colors">the Field</span></h3>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {fieldReports.map((report, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 md:mb-5 shadow-md group-hover:shadow-xl transition-all">
                <Image
                  src={`/images/meetings/${report.image}`}
                  fill
                  alt={report.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase text-rose-600 tracking-widest">
                  <span>{report.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300" />
                  <span>{report.tag}</span>
                </div>
                <h4 className="text-base md:text-lg font-black text-teal-950 dark:text-white group-hover:text-rose-600 transition-colors leading-tight">
                  {report.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm font-medium line-clamp-2 group-hover:text-zinc-600">
                  {report.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. GALLERY */}
      <section className="py-12 md:py-20 bg-white dark:bg-slate-900 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10 md:mb-16">
            <h4 className="text-3xl md:text-4xl font-black text-teal-950 tracking-tighter shrink-0">Field Gallery.</h4>
            <div className="h-[2px] flex-1 bg-zinc-100 hidden sm:block" />
          </div>
        </div>
        <div className="w-full px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px] md:auto-rows-[320px] max-w-full">
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
              <Image src="/images/home/field_gallery_final.png" fill alt="Pukar Mahila Mandal Project Gallery" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </div>
            <div className="md:col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
              <Image src="/images/meetings/swachhta2.jpeg" fill alt="Swachhta Mission" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </div>
            <div className="md:col-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-lg cursor-pointer">
              <Image src="/images/home/banner66.jpg" fill alt="Video thumbnail" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-rose-700 transition-all">
                  <Play size={24} className="ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md text-center backdrop-blur-sm">
                Watch: Women at Work
              </div>
            </div>
            <div className="md:col-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg cursor-pointer">
              <Image src="/images/services/soap-1.JPG" fill alt="Herbal Soap Production" className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. CORE PROGRAMS */}
      <section className="py-12 md:py-20 bg-zinc-50 dark:bg-slate-950 border-t dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-teal-950 tracking-tighter">Core Programs</h2>
            <div className="h-1 w-20 bg-rose-600 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { title: "Livelihood Units", icon: <ShoppingBag size={32} />, color: "bg-teal-50 text-teal-600", hoverColor: "hover:bg-rose-50 hover:text-rose-600" },
              { title: "Legal Awareness", icon: <BookOpen size={32} />, color: "bg-rose-50 text-rose-600", hoverColor: "hover:bg-teal-50 hover:text-teal-600" },
              { title: "Social Excellence", icon: <Users size={32} />, color: "bg-teal-950 text-white", hoverColor: "hover:bg-rose-600 hover:text-white" }
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl border hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-pointer">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${p.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform ${p.hoverColor}`}>
                  {p.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-teal-950 mb-3 md:mb-4 group-hover:text-rose-600 transition-colors">{p.title}</h4>
                <p className="text-zinc-500 font-medium text-sm md:text-base group-hover:text-zinc-700">Sustainable systems built by women, for women in rural Madhya Pradesh.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
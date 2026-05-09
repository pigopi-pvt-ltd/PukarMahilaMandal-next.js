"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Heart,
  ChevronRight,
  Send,
  Zap,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = "Newsletter Subscription Request";
    const body = `Hello Pukar Mahila Mandal,\n\nI would like to subscribe to your newsletter for latest updates and impact stories.\n\nSubscriber Email: ${email}\n\nThank you!`;

    window.location.href = `mailto:pukarmahilamandalguna@gmail.com,rs4038990@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmail("");
  };

  return (
    <footer className="bg-zinc-50 dark:bg-slate-950 text-zinc-900 dark:text-white pt-24 pb-12 border-t border-zinc-200 dark:border-white/5 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full translate-y-1/3 translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Newsletter Section */}
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-[2rem] p-8 md:p-12 mb-20 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-600/10 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-rose-500/10">
              <Zap size={12} fill="currentColor" /> Stay Updated
            </div>
            <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-teal-950 dark:text-white">Join our mission to <br /><span className="text-rose-500">empower women.</span></h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm md:text-base max-w-md">Subscribe to get latest updates from the field and impact stories directly in your inbox.</p>
          </div>
          <div className="w-full lg:w-auto">
            <form onSubmit={handleSubscribe} className="flex p-1.5 bg-zinc-100 dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-white/10 focus-within:ring-2 ring-rose-500/50 transition-all max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border-none px-6 py-3 text-sm font-bold outline-none w-full text-zinc-900 dark:text-white"
              />
              <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-rose-600/20 active:scale-95">
                <Send size={18} />
              </button>
            </form>
            <p className="text-[10px] text-zinc-400 mt-4 text-center lg:text-left font-bold uppercase tracking-widest">No spam, only impact stories.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* About Section */}
          <div className="space-y-8">
            <div className="relative h-20 w-64 -ml-4 group cursor-pointer">
              <Image
                src="/mahila.png"
                alt="Pukar Mahila Mandal Logo"
                fill
                className="object-contain object-left group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
              A grassroots federation of 2,500+ rural women leaders in Guna, MP. Dedicated to economic freedom, legal literacy, and social excellence since 2017.
            </p>
            <div className="flex gap-4">
              <Link href="/donate" className="group relative flex items-center gap-2 bg-teal-950 dark:bg-white text-white dark:text-teal-950 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all shadow-xl">
                <Heart size={14} fill="currentColor" className="group-hover:scale-125 transition-transform" /> Support Us
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-teal-950 dark:text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
              Organization <div className="h-[2px] w-8 bg-teal-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/our-work" },
                { name: "Donors", href: "/donors" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-zinc-500 hover:text-rose-500 transition-all font-bold text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-teal-950 dark:text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
              Headquarters <div className="h-[2px] w-8 bg-rose-600 rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-rose-500 border border-zinc-100 dark:border-none group-hover:bg-rose-600 group-hover:text-white transition-all shadow-md">
                  <MapPin size={18} />
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-bold group-hover:text-teal-950 dark:group-hover:text-zinc-300 transition-colors">
                  Budhe Balaji, Guna,<br /> Madhya Pradesh, 473001
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-teal-500 border border-zinc-100 dark:border-none group-hover:bg-teal-600 group-hover:text-white transition-all shadow-md">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col text-zinc-600 dark:text-zinc-400 text-sm font-black">
                  <a href="tel:+919131931137" className="hover:text-teal-600 transition-colors">+91 91319 31137</a>
                  <a href="tel:+919685070307" className="hover:text-teal-600 transition-colors">+91 96850 70307</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-white dark:bg-zinc-900 p-2.5 rounded-xl text-violet-500 border border-zinc-100 dark:border-none group-hover:bg-violet-600 group-hover:text-white transition-all shadow-md">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col text-zinc-600 dark:text-zinc-400 text-sm font-black">
                  <a href="mailto:pukarmahilamandalguna@gmail.com" className="hover:text-violet-400 transition-colors">
                    pukarmahilamandalguna@gmail.com
                  </a>
                  <a href="mailto:rs4038990@gmail.com" className="hover:text-violet-400 transition-colors">
                    rs4038990@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-teal-950 dark:text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
              Field Stories <div className="h-[2px] w-8 bg-violet-600 rounded-full" />
            </h4>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Connect with our journey</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: FaFacebook, href: "#", color: "hover:bg-[#1877F2]" },
                { icon: FaInstagram, href: "#", color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
                { icon: FaTwitter, href: "#", color: "hover:bg-[#1DA1F2]" },
                { icon: FaWhatsapp, href: `https://wa.me/919131931137`, color: "hover:bg-[#25D366]" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-100 dark:border-none transition-all hover:-translate-y-2 text-zinc-400 hover:text-white shadow-md flex items-center justify-center ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-white/5">
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-rose-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Guna District Federation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-zinc-200 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-zinc-500 text-sm font-bold">
            © {new Date().getFullYear()} Pukar Mahila Mandal. All rights reserved.
          </p>
          <p className="uppercase tracking-widest text-[10px] md:text-xs text-zinc-500 font-black flex items-center gap-2">
            Powered by{" "}
            <a
              href="https://pigo-pi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] bg-clip-text text-transparent hover:opacity-80 transition-all normal-case text-sm md:text-lg"
            >
              PigoPi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
;
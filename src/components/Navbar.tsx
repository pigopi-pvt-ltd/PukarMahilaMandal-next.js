"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Heart, Search, ChevronRight, Moon, Sun } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const whatsappNumber = "919131931137";
  const whatsappMessage = "Hello, I want to know more about Pukar Mahila Mandal.";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/our-work" },
    { name: "Donors", href: "/donors" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* TOP BAR */}
      <div className="bg-teal-950 text-zinc-300 py-1 hidden md:block border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-wider">
          <div className="flex gap-6">
            <div className="flex items-center gap-1.5">
              <Phone size={14} />
              <div className="flex gap-1.5">
                <a href="tel:+919131931137" className="hover:text-rose-400 transition-colors">+91 91319 31137</a>
                <span className="text-white/30">,</span>
                <a href="tel:+919685070307" className="hover:text-rose-400 transition-colors">96850 70307</a>
              </div>
            </div>
            <a href="mailto:info@pukarmandal.org" className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"><Mail size={14} /> info@pukarmandal.org</a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-3.5 border-r border-white/10 pr-5">
              <Link href="https://www.facebook.com/NULMMoHUA" className="hover:text-rose-400 transition-all"><FaFacebook size={14} /></Link>
              <Link href="#" className="hover:text-rose-400 transition-all"><FaInstagram size={14} /></Link>
              <Link href="#" className="hover:text-rose-400 transition-all"><FaTwitter size={14} /></Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-all"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
            <Link href="/donate" className="text-rose-400 hover:text-rose-300 flex items-center gap-1 group">
              <Heart size={12} fill="currentColor" className="group-hover:scale-110 transition-transform" /> 80G Benefits
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAV  */}
      <nav className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md py-2 border-b border-zinc-100 dark:border-slate-800">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex justify-between items-center">

          {/* Logo (wider but shorter for less height) */}
          <Link href="/" className="relative h-12 w-48 md:h-14 md:w-80 hover:scale-105 transition-transform">
            <Image src="/mahila.png" alt="Pukar Logo" fill className="object-contain object-left" priority />
          </Link>

          {/* Desktop Links  */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-sm md:text-base font-extrabold uppercase tracking-wider transition-all ${pathname === link.href ? "text-rose-600" : "text-zinc-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-500 hover:underline"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-zinc-100 dark:border-slate-800">
              <button
                onClick={toggleDarkMode}
                className="p-1.5 text-zinc-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all hover:scale-110"
                aria-label="Toggle Dark Mode"
              >
                {mounted && (darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />)}
                {!mounted && <div className="w-[18px] h-[18px]" />}
              </button>
              <button
                onClick={() => setSearchActive(!searchActive)}
                className="p-1.5 text-zinc-400 hover:text-teal-900 transition-colors"
              >
                <Search size={18} />
              </button>
              <Link
                href="/donate"
                className="bg-rose-600 text-white px-4 py-1.5 rounded-full font-extrabold text-xs md:text-sm hover:bg-teal-950 shadow-md shadow-rose-100 hover:shadow-teal-100 transition-all flex items-center gap-1.5"
              >
                <Heart size={14} /> DONATE
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchActive(!searchActive)}
              className="p-1.5 text-zinc-500"
            >
              <Search size={22} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-1.5 text-zinc-900 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Overlay  */}
        {searchActive && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-3 animate-in slide-in-from-top duration-300 shadow-xl">
            <div className="max-w-3xl mx-auto relative">
              <input
                type="text"
                autoFocus
                placeholder="Search programs or impact..."
                className="w-full bg-zinc-50 border-none rounded-lg py-2 px-4 outline-none focus:ring-2 ring-rose-500/10 font-medium text-base"
              />
              <button onClick={() => setSearchActive(false)} className="absolute right-3 top-2.5 text-zinc-400 hover:text-rose-500">
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu  */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-[90] p-4 flex flex-col gap-2 animate-in slide-in-from-right duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex justify-between items-center p-3 rounded-lg border border-transparent transition-all ${pathname === link.href ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-zinc-50 text-teal-950"
                  } text-base font-extrabold`}
              >
                {link.name} <ChevronRight size={18} className="text-rose-500" />
              </Link>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex justify-between items-center p-3 rounded-lg bg-green-50 text-green-700 border border-green-100 text-base font-extrabold"
            >
              Chat on WhatsApp <FaWhatsapp size={20} />
            </a>
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full bg-rose-600 text-white p-3 rounded-xl text-center font-extrabold text-lg shadow-lg active:scale-95 transition-transform"
            >
              DONATE NOW
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
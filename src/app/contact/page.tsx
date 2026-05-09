import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-rose-100 pt-[64px] md:pt-[88px] pb-24">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-zinc-100 dark:border-slate-800 bg-zinc-50/50 dark:bg-slate-900/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/30 dark:bg-rose-900/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-[120px] -ml-64 -mb-64" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                <span className="text-rose-600 font-bold text-[10px] uppercase tracking-[0.2em]">Always Accessible</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-teal-950 dark:text-slate-100 tracking-tighter leading-[0.9]">
                Let's Start <br />
                <span className="text-rose-600 italic">the Conversation.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 dark:text-slate-400 font-medium leading-relaxed">
                Whether you're looking to volunteer, partner with our units in Guna, or simply want to learn more about our movement—we're just a message away.
              </p>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-slate-950/50 border border-zinc-100 dark:border-slate-800 -rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShieldCheck className="text-teal-600 mb-4" size={32} />
                <h3 className="font-black text-teal-950 dark:text-slate-100 text-sm uppercase">100% Secure</h3>
                <p className="text-zinc-400 dark:text-slate-500 text-xs mt-1">Encrypted communication channel.</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-slate-950/50 border border-zinc-100 dark:border-slate-800 rotate-6 translate-y-8 hover:rotate-0 hover:translate-y-4 transition-all duration-500">
                <Globe className="text-rose-600 mb-4" size={32} />
                <h3 className="font-black text-teal-950 dark:text-slate-100 text-sm uppercase">Regional Hub</h3>
                <p className="text-zinc-400 dark:text-slate-500 text-xs mt-1">Headquartered in Guna, MP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: INFO PANELS */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-teal-950 dark:text-slate-100 tracking-tight">Regional Headquarters</h2>
              <p className="text-zinc-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                Our main office manages a network of 50+ village federations across the Guna district.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-6 p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-slate-900 border border-zinc-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all group">
                <div className="bg-teal-950 text-white p-4 rounded-2xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-teal-950 dark:text-slate-100 uppercase text-xs tracking-widest mb-2">Main Office</h4>
                  <p className="text-zinc-600 dark:text-slate-300 text-lg leading-snug font-medium">
                    Pukar Mahila Mandal HQ,<br />
                    Guna, Madhya Pradesh 473001, India
                  </p>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100/50 dark:border-rose-900/30 space-y-4 hover:shadow-xl transition-all">
                  <Mail className="text-rose-600" size={32} />
                  <div>
                    <h4 className="font-black text-teal-950 dark:text-slate-100 uppercase text-[10px] tracking-widest mb-1">Email Us</h4>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:pukarmahilamandalguna@gmail.com" className="text-rose-900 dark:text-rose-400 font-bold hover:text-rose-600 transition-colors break-words text-sm">
                        pukarmahilamandalguna@gmail.com
                      </a>
                      <a href="mailto:rs4038990@gmail.com" className="text-rose-900 dark:text-rose-400 font-bold hover:text-rose-600 transition-colors break-words text-sm">
                        rs4038990@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-teal-50/50 dark:bg-teal-900/10 border border-teal-100/50 dark:border-teal-900/30 space-y-4 hover:shadow-xl transition-all">
                  <Phone className="text-teal-700" size={32} />
                  <div>
                    <h4 className="font-black text-teal-950 dark:text-slate-100 uppercase text-[10px] tracking-widest mb-1">Call Support</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919131931137" className="text-teal-950 dark:text-slate-200 font-bold hover:text-teal-600 transition-colors">
                        +91 91319 31137
                      </a>
                      <a href="tel:+919685070307" className="text-teal-950 dark:text-slate-200 font-bold hover:text-teal-600 transition-colors">
                        +91 96850 70307
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-4 px-8 py-5 bg-teal-950 rounded-full text-white shadow-lg">
                <Clock className="text-rose-500" size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Available: Mon — Sat, 10 AM - 6 PM</span>
              </div>
            </div>
          </div>

          {/* RIGHT: BENTO CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-zinc-100 dark:border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 dark:bg-rose-950/20 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-slate-500 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Aditi Sharma"
                      className="w-full bg-zinc-50 dark:bg-slate-800 border border-zinc-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-teal-950 dark:text-slate-100 focus:ring-2 focus:ring-rose-500 focus:bg-white dark:focus:bg-slate-700 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-slate-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@email.com"
                      className="w-full bg-zinc-50 dark:bg-slate-800 border border-zinc-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-teal-950 dark:text-slate-100 focus:ring-2 focus:ring-rose-500 focus:bg-white dark:focus:bg-slate-700 outline-none transition-all placeholder:text-zinc-300 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-slate-500 ml-1">Reason for Inquiry</label>
                  <select className="w-full bg-zinc-50 dark:bg-slate-800 border border-zinc-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-teal-950 dark:text-slate-100 focus:ring-2 focus:ring-rose-500 outline-none appearance-none cursor-pointer">
                    <option>General Support</option>
                    <option>Volunteer Opportunities</option>
                    <option>Donation & 80G Benefits</option>
                    <option>Media & Partnerships</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-slate-500 ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-zinc-50 dark:bg-slate-800 border border-zinc-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-teal-950 dark:text-slate-100 focus:ring-2 focus:ring-rose-500 focus:bg-white dark:focus:bg-slate-700 outline-none transition-all resize-none placeholder:text-zinc-300 dark:placeholder:text-slate-600"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-teal-950 text-white py-5 rounded-2xl font-black text-lg hover:bg-rose-600 transition-all shadow-xl shadow-teal-900/20 hover:shadow-rose-500/20 flex items-center justify-center gap-3 group"
                >
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-zinc-100 border-8 border-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6 max-w-md border border-white dark:border-slate-800 mx-4">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-rose-200">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-teal-950 dark:text-slate-100 tracking-tight">Our Guna Hub</h3>
                <p className="text-zinc-500 dark:text-slate-400 font-medium mt-1">Conveniently located in Guna, managing operations across 50+ village units.</p>
              </div>
              <Link 
                href="https://maps.google.com" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-teal-950 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-600 transition-all"
              >
                Get Directions <MessageSquare size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
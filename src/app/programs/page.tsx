import { GraduationCap, Sprout, Gavel, HeartPulse, Factory, Users } from "lucide-react";

const programs = [
  { 
    title: "Garment Unit", 
    desc: "A NABARD-supported initiative where women are trained in tailoring and garment manufacturing to generate local employment.",
    icon: Sprout, 
    tags: ["Livelihood", "NABARD"] 
  },
  { 
    title: "Herbal Soap Making", 
    desc: "Converting temple flower waste into organic soaps, promoting eco-friendly hygiene and sustainable income.",
    icon: Factory, 
    tags: ["Eco-Friendly", "Skill"] 
  },
  { 
    title: "Legal Literacy", 
    desc: "Camps focused on educating women about their rights, domestic laws, and community safety.",
    icon: Gavel, 
    tags: ["Rights", "Awareness"] 
  },
  { 
    title: "Self-Help Groups", 
    desc: "Managing 60+ SHGs to provide micro-finance support and bank linkage for small entrepreneurs.",
    icon: Users, 
    tags: ["Finance", "Trust"] 
  }
];

export default function ProgramsPage() {
  return (
    <main className="pt-32 pb-20 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-teal-950">Our Impact Areas</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto">Transforming lives through structured skill-building and direct community intervention.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-zinc-100 flex gap-6">
              <div className="hidden sm:flex bg-rose-50 text-rose-600 w-16 h-16 rounded-2xl items-center justify-center shrink-0">
                <p.icon size={32} />
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  {p.tags.map(tag => <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded-md">{tag}</span>)}
                </div>
                <h3 className="text-2xl font-bold text-teal-950">{p.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
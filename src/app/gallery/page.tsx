"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";

const categories = ["All", "Garment Units", "Legal Camps", "Events"];

const galleryItems = [
  {
    id: 1,
    category: "Garment Units",
    title: "Stitching Workshop",
    // Replace with your real image path (e.g., "/images/gallery/stitching.jpg")
    image: "https://placehold.co/600x800/e2e8f0/475569?text=Stitching+Workshop",
  },
  {
    id: 2,
    category: "Legal Camps",
    title: "Rights Awareness Guna",
    image: "https://placehold.co/600x800/f1f5f9/475569?text=Rights+Awareness",
  },
  {
    id: 3,
    category: "Events",
    title: "Annual Meet 2025",
    image: "https://placehold.co/600x800/fff5f5/475569?text=Annual+Meet",
  },
  {
    id: 4,
    category: "Garment Units",
    title: "Skill Training",
    image: "https://placehold.co/600x800/f0fdf4/475569?text=Skill+Training",
  },
  {
    id: 5,
    category: "Legal Camps",
    title: "Panchayat Awareness",
    image: "https://placehold.co/600x800/fef3c7/475569?text=Panchayat+Awareness",
  },
  {
    id: 6,
    category: "Events",
    title: "Republic Day Celebration",
    image: "https://placehold.co/600x800/fce7f3/475569?text=Republic+Day",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-teal-950 tracking-tighter">
            Impact in <span className="text-rose-600">Frames</span>
          </h1>
          <p className="text-zinc-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            Witness the transformation of rural Guna through the lenses of our field workers.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === cat
                  ? "bg-teal-950 text-white shadow-lg scale-105"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry‑style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-6 space-y-5 md:space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 md:p-8 flex flex-col justify-end">
                <p className="text-white font-black text-base md:text-lg">{item.title}</p>
                <p className="text-rose-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">
                  {item.category}
                </p>
              </div>
              {/* Expand button */}
              <button className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-rose-600 hover:scale-110">
                <Maximize2 size={16} className="md:w-[18px] md:h-[18px]" />
              </button>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 font-medium">No images in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, MessageSquare, PhoneCall } from "lucide-react";
import { BRANDS_DATA } from "@/data/brands";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(BRANDS_DATA[0].category);
  const activeData = BRANDS_DATA.find(g => g.category === activeCategory);

  return (
    <main className="font-body bg-[#F8FAFC] text-slate-800 w-full relative min-h-screen overflow-x-hidden selection:bg-maroon/20 pt-[80px] lg:pt-[112px]">
      
      {/* Liquid Glass Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-orange-100 blur-[120px] mix-blend-multiply opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-rose-100 blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
         
        {/* Minimalist Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16 space-y-6">
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-700 px-4 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest border border-slate-200 shadow-sm"
           >
              <Search className="w-4 h-4 text-maroon" /> Complete Inventory Catalog
           </motion.div>
           
           <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-5xl md:text-6xl lg:text-8xl text-slate-900 leading-[1.1] font-bold tracking-tight"
           >
              Global Brands, <br/> Local Availability.
           </motion.h1>
           
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
           >
              Browse our massive retail inventory of paints, waterproofing chemicals, and architectural finishes curated directly from authorized manufacturers.
           </motion.p>
        </header>

        {/* BENTO GRID UI: Categories & Product Display */}
        <section className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            
          {/* Glassmorphic Category Sticky Navigation */}
          <motion.aside 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="w-full lg:w-[320px] xl:w-[360px] bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-sm border border-slate-100 p-6 shrink-0 lg:sticky lg:top-[140px]"
          >
            <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
               Divisions
            </h3>
            
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-2 lg:pb-0">
              {BRANDS_DATA.map(group => (
                <button
                  key={group.category}
                  onClick={() => setActiveCategory(group.category)}
                  className={`relative flex items-center justify-between shrink-0 px-5 py-3.5 rounded-2xl text-[11px] md:text-xs font-bold transition-all uppercase tracking-widest overflow-hidden group border ${
                    activeCategory === group.category 
                    ? "text-maroon border-maroon/20 shadow-md bg-white/90" 
                    : "text-slate-500 hover:bg-white hover:text-slate-800 border-transparent hover:border-slate-100"
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap lg:whitespace-normal text-left">{group.category}</span>
                  {activeCategory === group.category && (
                     <motion.div layoutId="categoryActive" className="absolute inset-0 bg-maroon/[0.03] z-0"></motion.div>
                  )}
                  <div className={`relative z-10 hidden md:flex items-center justify-center w-6 h-6 rounded-full text-[9px] ${activeCategory === group.category ? 'bg-maroon text-white shadow-lg' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                    {group.images.length}
                  </div>
                </button>
              ))}
            </div>
          </motion.aside>
            
          {/* Liquid Glass Main Product Grid Display */}
          <motion.article 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.4 }}
             className="w-full flex-grow bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12 min-h-[600px] flex flex-col"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/50 pb-8 mb-8">
               <div className="space-y-2">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-maroon opacity-80">Currently Viewing</span>
                  <AnimatePresence mode="popLayout">
                     <motion.h2 
                       key={activeCategory}
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 20 }}
                       transition={{ duration: 0.3 }}
                       className="font-headline text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold tracking-tight"
                     >
                       {activeCategory}
                     </motion.h2>
                  </AnimatePresence>
               </div>
               <div className="flex items-center gap-2 bg-white/80 px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-600 border border-slate-200 shadow-sm shrink-0">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 {activeData?.images.length} Verified Brands
               </div>
            </div>

            <motion.div 
               layout
               className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 flex-grow items-start content-start"
            >
              <AnimatePresence mode="popLayout">
                {activeData?.images.map((imgSrc, i) => (
                  <motion.div
                    layout
                    key={`${activeCategory}-${i}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white rounded-[1.5rem] p-6 h-[140px] md:h-[180px] shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:border-maroon/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative w-full h-full">
                       <Image 
                          src={imgSrc} 
                          alt={`${activeCategory} brand logo ${i}`} 
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-contain filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" 
                       />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {activeData?.images.length === 0 && (
              <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 className="flex-grow flex items-center justify-center text-slate-500 font-medium bg-white/50 rounded-[1.5rem] border border-slate-100 min-h-[300px]"
              >
                Catalog digital uploads pending for this division. Check our physical store.
              </motion.div>
            )}
          </motion.article>
        </section>
        
        {/* Availability CTA using Glassmorphism */}
        <section className="mt-12 bg-white/60 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 text-center border border-slate-100 shadow-sm">
             <h2 className="text-slate-900 font-headline text-3xl md:text-5xl font-bold mb-4">Can't spot your preferred brand?</h2>
             <p className="text-slate-600 font-medium md:text-lg max-w-2xl mx-auto mb-10">We operate dynamic backstock that updates daily directly from prime manufacturers. Call our desk and we will assist via instant inventory checks.</p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="tel:9940839999" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95 group">
                  <PhoneCall className="w-4 h-4 group-hover:text-green-400 transition-colors" /> Direct Call: 99408 39999
               </a>
             </div>
        </section>
      </div>

      {/* Floating Fast Action */}
      <a 
        href="https://wa.me/919940839999?text=Hello,%20I%20am%20looking%20for%20specific%20products." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25d366] text-white px-6 py-4 md:px-8 md:py-5 rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-transform z-50 flex items-center gap-3 border-2 border-white/50 group"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6 fill-current group-hover:animate-bounce" />
        <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest">Rapid Inquiry</span>
      </a>

    </main>
  );
}

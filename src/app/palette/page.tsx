"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Check, Download, Palette as PaletteIcon, Minus, SlidersHorizontal, Trash2 } from "lucide-react";
import Image from "next/image";

// Sample color database
const COLOR_DATABASE = [
  { id: 1, name: "Ivory White", hex: "#FFFFF0", category: "Neutrals", popular: true },
  { id: 2, name: "Slate Grey", hex: "#708090", category: "Neutrals", popular: true },
  { id: 3, name: "Midnight Blue", hex: "#191970", category: "Cool", popular: false },
  { id: 4, name: "Forest Green", hex: "#228B22", category: "Cool", popular: true },
  { id: 5, name: "Regal Maroon", hex: "#800000", category: "Warm", popular: true },
  { id: 6, name: "Dusty Rose", hex: "#DCAE96", category: "Warm", popular: false },
  { id: 7, name: "Ocean Teal", hex: "#008080", category: "Cool", popular: true },
  { id: 8, name: "Sunset Orange", hex: "#FD5E53", category: "Warm", popular: false },
  { id: 9, name: "Goldenrod", hex: "#DAA520", category: "Warm", popular: true },
  { id: 10, name: "Charcoal", hex: "#36454F", category: "Neutrals", popular: true },
  { id: 11, name: "Lavender", hex: "#E6E6FA", category: "Cool", popular: false },
  { id: 12, name: "Mint Cream", hex: "#F5FFFA", category: "Cool", popular: false },
];

const CATEGORIES = ["All", "Neutrals", "Warm", "Cool", "Trending"];

export default function PalettePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState<typeof COLOR_DATABASE>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filteredColors = useMemo(() => {
    return COLOR_DATABASE.filter((color) => {
      const matchesSearch = color.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = 
        activeCategory === "All" || 
        color.category === activeCategory || 
        (activeCategory === "Trending" && color.popular);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleColorSelection = (color: typeof COLOR_DATABASE[0]) => {
    setSelectedColors(prev => {
      if (prev.find(c => c.id === color.id)) {
        return prev.filter(c => c.id !== color.id);
      }
      if (prev.length < 5) {
        return [...prev, color];
      }
      return prev;
    });
  };

  const handleExport = () => {
    window.print();
  };

  return (
    <main className="font-body bg-[#F8FAFC] text-slate-800 w-full relative min-h-screen overflow-x-hidden selection:bg-maroon/20 pt-[80px] lg:pt-[112px] pb-[100px]">
      
      {/* Liquid Glass Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-orange-100 blur-[120px] mix-blend-multiply opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-rose-100 blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-12">
         
         {/* Minimalist Header */}
         <header className="max-w-4xl mx-auto text-center mb-16 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-700 px-4 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest border border-slate-200 shadow-sm"
            >
               <PaletteIcon className="w-4 h-4 text-maroon" /> Interactive Color Studio
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="font-headline text-5xl md:text-6xl lg:text-8xl text-slate-900 leading-[1.1] font-bold tracking-tight"
            >
               The Paint <br/> Pigment Library.
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
            >
               Select up to 5 master shades, visualize their harmony, and export your curated palette directly to PDF for your contractor.
            </motion.p>
         </header>

         {/* Liquid Glass Filtering Tools */}
         <section className="bg-white/60 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
           
           <div className="flex bg-white rounded-full p-2 border border-slate-200 shadow-sm w-full md:w-auto overflow-x-auto no-scrollbar">
             {CATEGORIES.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${activeCategory === cat ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
               >
                 <span className="relative z-10">{cat}</span>
                 {activeCategory === cat && (
                   <motion.div layoutId="paletteCategory" className="absolute inset-0 bg-maroon rounded-full z-0"></motion.div>
                 )}
               </button>
             ))}
           </div>
           
           <div className="relative w-full md:w-72 mt-4 md:mt-0">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search pigments..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-white border border-slate-200 rounded-full py-4 pl-12 pr-6 text-sm outline-none focus:ring-2 focus:ring-maroon/20 focus:border-maroon/30 transition-shadow shadow-sm"
             />
           </div>

         </section>

         {/* Grid of Pigment Cards */}
         <section className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 min-h-[500px] content-start">
            <AnimatePresence mode="popLayout">
               {filteredColors.map((color, i) => {
                 const isSelected = selectedColors.some(c => c.id === color.id);
                 return (
                   <motion.div
                     layout
                     key={color.id}
                     initial={{ opacity: 0, scale: 0.9, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.9, y: -20 }}
                     transition={{ duration: 0.3, delay: i * 0.05 }}
                     onClick={() => toggleColorSelection(color)}
                     className={`cursor-pointer rounded-[2rem] p-4 bg-white/60 backdrop-blur-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isSelected ? 'border-maroon shadow-md' : 'border-slate-100 hover:border-slate-300 shadow-sm'}`}
                   >
                     <div className="w-full aspect-square rounded-[1.5rem] mb-4 relative shadow-inner overflow-hidden" style={{ backgroundColor: color.hex }}>
                       {isSelected && (
                         <motion.div 
                           initial={{ opacity: 0, scale: 0.5 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px]"
                         >
                           <div className="bg-white/90 p-3 rounded-full shadow-lg">
                             <Check className="w-5 h-5 text-maroon" />
                           </div>
                         </motion.div>
                       )}
                     </div>
                     <div className="text-center">
                       <h3 className="font-bold text-slate-900 text-sm">{color.name}</h3>
                       <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">{color.hex}</p>
                     </div>
                   </motion.div>
                 );
               })}
            </AnimatePresence>
         </section>
         
         {filteredColors.length === 0 && (
            <div className="w-full flex justify-center items-center py-20">
               <div className="bg-white/50 backdrop-blur-md px-10 py-6 rounded-3xl border border-slate-200 text-slate-500 font-medium">
                 No pigments match your exact search criteria.
               </div>
            </div>
         )}
      </div>

      {/* "My Palette" Floating Bottom Drawer (Liquid Glass style) */}
      <AnimatePresence>
        {selectedColors.length > 0 && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: isDrawerOpen ? 0 : "80%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 w-full z-50 px-4 md:px-8 lg:px-12 pb-6 print:hidden"
          >
            <div className="max-w-[1920px] mx-auto bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden flex flex-col">
              
              <button 
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="w-full py-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-1 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors"></div>
                <div className="flex items-center gap-3 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest">My Curated Palette ({selectedColors.length}/5)</span>
                  <div className={`transition-transform duration-300 ${isDrawerOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>
              
              <div className="p-6 md:p-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-9 flex justify-center gap-4 flex-wrap">
                  <AnimatePresence>
                    {selectedColors.map(color => (
                      <motion.div 
                        key={color.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex flex-col items-center gap-3 group relative"
                      >
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl shadow-inner border border-white/20 cursor-pointer overflow-hidden relative" style={{ backgroundColor: color.hex }}>
                           <div onClick={() => toggleColorSelection(color)} className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                             <Trash2 className="text-white w-6 h-6" />
                           </div>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">{color.name}</span>
                      </motion.div>
                    ))}
                    {[...Array(5 - selectedColors.length)].map((_, i) => (
                      <div key={`empty-${i}`} className="w-16 h-16 md:w-24 md:h-24 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 opacity-50">
                        <span className="text-white/30 text-2xl">+</span>
                      </div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <div className="lg:col-span-3 flex justify-center lg:justify-end">
                  <button 
                    onClick={handleExport}
                    disabled={selectedColors.length === 0}
                    className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-xl hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Download className="w-4 h-4" /> Export PDF
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Print-only View */}
      <div className="hidden print:block p-10 bg-white min-h-screen">
         <Image src="/assets/images/logo.png" alt="MR TRADERS" width={150} height={50} className="mb-10 object-contain" />
         <h1 className="text-4xl font-headline font-bold mb-4 text-slate-900 border-b border-slate-200 pb-4">Curated Color Estimate</h1>
         <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-12">MR Traders, Ramanathapuram - Official Pigment Report</p>
         
         <div className="grid grid-cols-2 gap-8">
           {selectedColors.map((color, idx) => (
              <div key={idx} className="flex items-center gap-8 border border-slate-200 rounded-2xl p-6">
                <div className="w-24 h-24 rounded-xl border border-slate-200 shadow-sm" style={{ backgroundColor: color.hex }}></div>
                <div>
                  <h3 className="text-2xl font-bold font-headline text-slate-900 mb-2">{color.name}</h3>
                  <p className="text-sm font-bold font-mono text-slate-500 mb-1 uppercase">HEX: {color.hex}</p>
                  <p className="text-sm font-bold text-slate-500 uppercase">Class: {color.category}</p>
                </div>
              </div>
           ))}
         </div>
      </div>
      
    </main>
  );
}

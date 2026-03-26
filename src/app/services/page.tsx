"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BadgeCheck, HardHat, HeadphonesIcon,
  Armchair, Home, Droplets, Palette, Wrench, ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const services = [
    {
      id: "interior-painting",
      title: "Interior Painting",
      icon: <Armchair className="text-maroon w-8 h-8" />,
      tag: "Aesthetics & Texture",
      desc: "Transform your living spaces into a curated gallery. We specialize in luxury finishes including velvet mattes, royal emulations, and custom textures that handle light beautifully while ensuring easy maintenance and low VOC levels.",
      features: ['Anti-Fungal', 'Washable', 'Eco-Friendly'],
      img: "/assets/images/services/interior_painting.png"
    },
    {
      id: "exterior-painting",
      title: "Exterior Painting",
      icon: <Home className="text-maroon w-8 h-8" />,
      tag: "Protection & Durability",
      desc: "Engineered for the coastal climate of Ramanathapuram. Our systems include dust-repellent technology, high SRI coatings for heat reduction, and advanced weather-proof shields that prevent hairline cracks.",
      features: ['UV-Resistant', 'Heat Guard', 'Anti-Algal'],
      img: "/assets/images/services/exterior_painting.png"
    },
    {
      id: "waterproofing",
      title: "Waterproofing",
      icon: <Droplets className="text-maroon w-8 h-8" />,
      tag: "Advanced Engineering",
      desc: "Eliminate leakages before they compromise your structure. We employ high-performance elastomeric membranes, crystalline waterproofing, and PU injection techniques from Dr. Fixit and Bostik.",
      features: ['10 Year Warranty', 'Crack-Bridging', '7-Layer System'],
      img: "/assets/images/services/waterproofing.png"
    },
    {
      id: "colour-consultation",
      title: "Colour Consultation",
      icon: <Palette className="text-maroon w-8 h-8" />,
      tag: "Psychology & Logic",
      desc: "Choosing the perfect palette is both art and science. Our experts utilize digital visualization and physical swatching to evaluate how light interacts with your architecture, ensuring a perfect mood balance.",
      features: ['Site Swatching', 'Digital Preview', 'Light Analysis'],
      img: "/assets/images/services/colour_consultation.png"
    },
    {
      id: "repair-maintenance",
      title: "Repair & Maintenance",
      icon: <Wrench className="text-maroon w-8 h-8" />,
      tag: "Structural Health",
      desc: "A beautiful finish requires a perfect foundation. We provide end-to-end structural health services including deep crack filling, plaster reinforcement, and polymer-modified mortar repairs to ensure your walls are sound.",
      features: ['Crack Filling', 'Wall Strengthening', 'Surface Leveling'],
      img: "/assets/images/services/tn_repair_maintenance.png"
    }
  ];

  return (
    <main className="font-body bg-[#F8FAFC] text-slate-800 w-full relative min-h-screen overflow-x-hidden selection:bg-maroon/20 pt-[80px] lg:pt-[112px] pb-[100px]">
      
      {/* Liquid Glass Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-orange-100 blur-[120px] mix-blend-multiply opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-rose-100 blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-12">
        
        {/* Minimalist Hero Section */}
        <header className="max-w-4xl mx-auto text-center mb-16 space-y-6">
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-700 px-4 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest border border-slate-200 shadow-sm"
           >
              <HardHat className="w-4 h-4 text-maroon" /> Expert Applicators
           </motion.div>
           
           <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-5xl md:text-6xl lg:text-8xl text-slate-900 leading-[1.1] font-bold tracking-tight"
           >
              Artistry in <br/> Structure.
           </motion.h1>
           
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
           >
              From premium bespoke painting to advanced construction chemical applications. We bring unparalleled durability and aesthetics to your spaces.
           </motion.p>
        </header>

        {/* Value Proposition Cards (Glassmorphic) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <motion.div variants={itemVariants} className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20">
                <BadgeCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-2xl mb-3">Premium Materials</h3>
              <p className="text-slate-400 font-medium leading-relaxed">Sourced from Tier-1 global brands, ensuring pigments and chemicals resist fading, peeling, and moisture for decades.</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors">
               <HardHat className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-2xl mb-3">Master Applicators</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Certified artisans trained directly by brands to understand the science behind every coat applied to your walls.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <HeadphonesIcon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-slate-900 text-2xl mb-3">Consultative Approach</h3>
            <p className="text-slate-600 font-medium leading-relaxed">From initial swatching to structural moisture analysis, we expertly guide you through a precision process.</p>
          </motion.div>
        </motion.div>

        {/* Bento Grid Services */}
        <div className="space-y-8">
           {services.map((svc, i) => (
             <motion.div 
               key={svc.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-8`}
             >
               {/* Image Tile */}
               <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto rounded-[3rem] overflow-hidden relative shadow-sm border border-slate-100 group cursor-pointer block h-[300px] lg:h-auto">
                 <Link href={`/services/${svc.id}`}>
                    <Image 
                      src={svc.img} 
                      alt={svc.title} 
                      fill 
                      className="object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale-[10%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-8 h-2/3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold flex items-center gap-2 uppercase tracking-widest text-xs">
                         View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                 </Link>
               </div>
               
               {/* Content Tile */}
               <div className="w-full lg:w-1/2 bg-white/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-sm border border-slate-100 flex flex-col justify-center hover:shadow-xl hover:border-maroon/20 transition-all duration-500">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-8">
                     {svc.icon}
                  </div>
                  <span className="inline-block bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px] mb-6 w-fit shadow-sm">
                     {svc.tag}
                  </span>
                  <h2 className="font-headline text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{svc.title}</h2>
                  <p className="text-slate-600 font-medium leading-relaxed md:text-lg mb-8">{svc.desc}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                     {svc.features.map(f => (
                       <span key={f} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white/80 px-4 py-2 rounded-full border border-slate-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-maroon"></span> {f}
                       </span>
                     ))}
                  </div>
                  
                  <Link href={`/services/${svc.id}`} className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 w-fit">
                     Explore Services
                  </Link>
               </div>
             </motion.div>
           ))}
        </div>

      </div>
    </main>
  );
}

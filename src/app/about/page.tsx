"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Handshake, MapPin, Building2, Users, HardHat, PhoneCall } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "30+", label: "Years of Trust", icon: <Award className="w-6 h-6" /> },
    { value: "2", label: "Massive Showrooms", icon: <Building2 className="w-6 h-6" /> },
    { value: "80+", label: "Premium Brands", icon: <Handshake className="w-6 h-6" /> },
    { value: "10M+", label: "Litres Supplied", icon: <HardHat className="w-6 h-6" /> },
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
              <Users className="w-4 h-4 text-maroon" /> The MR Traders Legacy
           </motion.div>
           
           <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-5xl md:text-6xl lg:text-8xl text-slate-900 leading-[1.1] font-bold tracking-tight"
           >
              Three Decades of <br/> Unwavering Trust.
           </motion.h1>
           
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
           >
              Founded with the vision to supply Ramanathapuram with world-class architectural materials, we have grown into the district’s most reputed authorized dealer.
           </motion.p>
        </header>

        {/* Bento Grid layout for Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          
          {/* Main Story Image */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="col-span-1 md:col-span-2 lg:col-span-4 bg-white/60 backdrop-blur-2xl rounded-[3rem] p-4 lg:p-6 shadow-sm border border-slate-100 overflow-hidden relative group min-h-[400px] flex items-end"
          >
             <Image 
               className="object-cover rounded-[2.5rem] brightness-[0.8] group-hover:brightness-[1.05] transition-all duration-1000 group-hover:scale-105" 
               src="/assets/images/image2.jpeg" 
               alt="Legacy Architecture"
               fill
               priority
               sizes="(max-width: 1024px) 100vw, 66vw"
             />
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-10 h-1/2 flex flex-col justify-end">
               <span className="font-headline text-4xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-md">Since 1994</span>
               <p className="text-white/80 font-bold uppercase tracking-widest text-sm mt-2">Ramanathapuram HQ</p>
             </div>
          </motion.div>

          {/* Quick Metrics (Stacked) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-rows-4 gap-4"
          >
             {stats.map((stat, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl border border-slate-100 rounded-3xl p-6 flex flex-row items-center justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                   <div>
                     <span className="block font-headline text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-maroon transition-colors">{stat.value}</span>
                     <span className="text-xs uppercase font-bold tracking-widest text-slate-500">{stat.label}</span>
                   </div>
                   <div className="bg-white p-3 rounded-2xl shadow-sm text-slate-400 group-hover:text-maroon group-hover:scale-110 transition-all">{stat.icon}</div>
                </div>
             ))}
          </motion.div>
        </section>

        {/* History Bento Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
           
           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white/60 backdrop-blur-xl border border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-sm hover:shadow-xl transition-shadow"
           >
              <div className="w-14 h-14 bg-maroon/10 rounded-2xl flex items-center justify-center text-maroon mb-8">
                 <MapPin className="w-7 h-7" />
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Ramanathapuram Roots</h2>
              <p className="text-slate-600 font-medium leading-relaxed md:text-lg">
                 What began as an independent trading post has evolved into the region's largest dedicated paint hub. We built our reputation by refusing to stock inferior products. We recognized early on that a house becomes a home only when it reflects the personality of those living within. For decades, we have been the silent partner behind the district's most beautiful homes and robust commercial structures, ensuring 100% genuine products always.
              </p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[3rem] p-10 lg:p-14 shadow-xl text-white hover:-translate-y-2 transition-transform"
           >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/20 shadow-inner">
                 <Building2 className="w-7 h-7" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">The Kilakarai Expansion</h2>
              <p className="text-slate-300 font-medium leading-relaxed">
                 Our commitment to serving the coastal districts led to our flagship Kilakarai branch. This allowed us to bring highly specialized salt-resistant exterior coatings and advanced waterproofing chemicals directly to the developments facing unique, aggressive weather challenges along the coast.
              </p>
           </motion.div>

        </section>

        {/* Fast Action / CTA Block */}
        <section className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 text-center border border-slate-200 shadow-xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-maroon/5 rounded-full blur-3xl pointer-events-none -mt-32 -mr-32"></div>
             
             <h2 className="text-slate-900 font-headline text-3xl md:text-5xl font-bold mb-4 relative z-10">We Are Ready to Help</h2>
             <p className="text-slate-600 font-medium md:text-lg max-w-2xl mx-auto mb-10 relative z-10">
                Whether you are a professional contractor or a homeowner, our consulting desk is open. Visit our branches or call us for direct expert assistance.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
               <Link href="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  <MapPin className="w-4 h-4" /> Locate Our Stores
               </Link>
               <a href="tel:9940839999" className="bg-white border border-slate-200 text-slate-800 px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-sm hover:shadow-md hover:border-maroon/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  <PhoneCall className="w-4 h-4 text-maroon" /> Direct Call: 99408 39999
               </a>
             </div>
        </section>

      </div>
    </main>
  );
}

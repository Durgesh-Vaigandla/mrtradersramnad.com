"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, PaintBucket, Shield, Droplets, MapPin, PhoneCall, Star, Building2, Wrench } from "lucide-react";
import { ALL_BRAND_LOGOS } from "@/data/brands";

const PREVIEW_SERVICES = [
  { title: "Interior Painting", icon: <PaintBucket className="w-5 h-5 text-indigo-600" /> },
  { title: "Exterior Defense", icon: <Shield className="w-5 h-5 text-emerald-600" /> },
  { title: "Waterproofing", icon: <Droplets className="w-5 h-5 text-blue-600" /> },
  { title: "Crack Repair", icon: <Wrench className="w-5 h-5 text-orange-600" /> },
];

const CAROUSEL_IMAGES = [
  { src: "/assets/images/image3.jpeg", title: "Elite Interior Finishes", desc: "Transforming spaces with premium palettes and expert craftsmanship." },
  { src: "/assets/images/image2.jpeg", title: "Structural Integrity", desc: "Advanced waterproofing and construction chemicals for lasting protection." },
  { src: "/assets/images/image1.jpeg", title: "Color Innovation", desc: "Access over 4,000+ shades with our precision mixing technology." },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {CAROUSEL_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ 
            opacity: i === index ? 1 : 0,
            x: i === index ? "0%" : (i < index ? "-100%" : "100%"),
            zIndex: i === index ? 10 : 0
          }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          <Image src={img.src} alt={img.title} fill className="object-cover" priority={i === 0} sizes="100vw" />
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-12 left-6 md:left-12 z-20 text-white max-w-xl"
          >
            <h3 className="text-3xl md:text-5xl font-headline font-bold italic mb-4">{img.title}</h3>
            <p className="text-slate-200 font-medium">{img.desc}</p>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Progress Indicators */}
      <div className="absolute bottom-8 right-6 md:right-8 flex gap-4 z-30">
        {CAROUSEL_IMAGES.map((_, i) => (
          <div key={i} className="w-12 h-1 bg-white/30 rounded-full overflow-hidden relative">
            {i === index && (
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0 bg-white"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="font-body bg-[#F8FAFC] text-slate-800 w-full relative min-h-screen overflow-x-hidden selection:bg-maroon/20">
      
      {/* Liquid Glass Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-orange-100 blur-[120px] mix-blend-multiply opacity-50 animate-pulse" style={{ animationDuration: '12s' }}></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-rose-100 blur-[120px] mix-blend-multiply opacity-60 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 pt-[100px] md:pt-[140px] pb-24">
         
         {/* Minimalist Hero Section */}
         <header className="max-w-4xl mx-auto text-center mb-16 space-y-8">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-700 px-4 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest border border-slate-200 shadow-sm"
            >
               <Star className="w-4 h-4 text-orange-500 fill-orange-500" /> Ramanathapuram's Trusted Paint Dealers Since 1994
            </motion.div>
            
            <motion.h1 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="font-headline text-5xl md:text-6xl lg:text-8xl text-slate-900 leading-[1.1] font-bold tracking-tight"
            >
               Build & Protect <br/> Your Dream Home.
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
            >
               100% genuine paints, construction chemicals, and expert waterproofing services at the best wholesale prices in Ramnad.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
               <Link href="/products" className="bg-maroon hover:bg-[#5C0000] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Products <ArrowRight className="w-4 h-4" />
               </Link>
               <Link href="/contact" className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-white hover:text-maroon hover:border-maroon/30 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4" /> Contact Store
               </Link>
            </motion.div>
         </header>

         {/* THE BENTO GRID ARCHITECTURE */}
         <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-[minmax(250px,auto)_minmax(250px,auto)_minmax(200px,auto)] gap-4 md:gap-6">
            
            {/* Tile 1: The Authority (Hero Image + Experience) - Spans 4 Cols, 2 Rows */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7 }}
               className="col-span-1 md:col-span-4 lg:col-span-4 lg:row-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-500 min-h-[400px] lg:min-h-0 flex flex-col justify-end"
            >
               <Image 
                  src="/assets/images/image3.jpeg" 
                  alt="Shop Interior" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
               
               <div className="relative z-10 p-4 md:p-8 flex flex-col sm:flex-row justify-between items-end gap-6 w-full">
                  <div>
                     <h2 className="text-white font-headline text-3xl md:text-5xl font-bold leading-tight mb-2">30+ Years <br/>of Trust.</h2>
                     <p className="text-slate-200 font-medium md:text-lg">Executing 50+ Major Projects Yearly</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-2xl p-4 flex items-center gap-4 shrink-0 shadow-2xl">
                     <BadgeCheck className="w-10 h-10 text-emerald-400" strokeWidth={1.5} />
                     <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Authorized Dealers</p>
                        <p className="font-bold text-lg">100% Original Brands</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Tile 2: Active Services Panel */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7, delay: 0.1 }}
               className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
               <div className="relative z-10 mb-8">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Expert Services</h3>
                  <p className="text-slate-500 text-sm font-medium">Professional applicators for flawless results.</p>
               </div>
               <div className="space-y-4 relative z-10 flex-grow">
                  {PREVIEW_SERVICES.map((srv, i) => (
                     <div key={i} className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 p-3 rounded-xl transition-colors cursor-pointer border border-slate-100">
                        <div className="bg-white p-2 rounded-lg shadow-sm">{srv.icon}</div>
                        <span className="font-bold text-sm text-slate-800">{srv.title}</span>
                     </div>
                  ))}
               </div>
               <Link href="/services" className="relative z-10 mt-6 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest hover:text-blue-800 transition-colors">
                  View All Services <ArrowRight className="w-4 h-4" />
               </Link>
            </motion.div>

            {/* Tile 3: Pigment / Color Discovery */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-maroon to-[#4A0000] rounded-3xl p-8 shadow-lg text-white flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
               <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 mb-6">
                     <PaintBucket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-2">4,000+ Shades</h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed">Instantly mix any color mathematically via our automated digital pigment dispatchers.</p>
               </div>
               
               {/* Mini interactive color nodes */}
               <div className="relative z-10 flex gap-2 mt-8">
                  <div className="w-8 h-8 rounded-full bg-[#191970] border-2 border-white/50 shadow-inner"></div>
                  <div className="w-8 h-8 rounded-full bg-[#228B22] border-2 border-white/50 shadow-inner -ml-3"></div>
                  <div className="w-8 h-8 rounded-full bg-[#DCAE96] border-2 border-white/50 shadow-inner -ml-3"></div>
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-white/50 shadow-inner -ml-3 flex items-center justify-center"><ArrowRight className="w-3 h-3 text-slate-900" /></div>
               </div>
               
               <Link href="/palette" className="absolute inset-0 z-20"><span className="sr-only">Go to Color Palette</span></Link>
            </motion.div>

            {/* Tile 4: Infinite Marquee Brands Box - Spans 4 Cols */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="col-span-1 md:col-span-4 lg:col-span-4 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center overflow-hidden hover:shadow-lg transition-shadow relative"
            >
               <div className="bg-slate-50 border-r border-slate-100 p-6 md:p-8 h-full flex flex-col justify-center min-w-[200px] z-20 shrink-0">
                  <h3 className="font-bold text-lg text-slate-900">80+ Brands</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">In Stock Now</p>
               </div>
               
               <div className="relative w-full overflow-hidden flex items-center h-full z-10 mask-linear-edges py-6">
                   <motion.div 
                     animate={{ x: ["0%", "-50%"] }}
                     transition={{ ease: "linear", duration: 120, repeat: Infinity }}
                     className="flex gap-12 md:gap-16 items-center w-max px-8"
                   >
                     {[...ALL_BRAND_LOGOS, ...ALL_BRAND_LOGOS].map((logo, i) => (
                       <Image key={i} src={logo} alt="Brand" width={100} height={50} className="object-contain h-10 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-pointer" />
                     ))}
                   </motion.div>
               </div>
               <Link href="/products" className="absolute inset-0 z-30"><span className="sr-only">All Products</span></Link>
            </motion.div>

            {/* Tile 5: Core Values */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.4 }}
               className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
               <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group">
                     <div className="w-12 h-12 mx-auto bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-3 group-hover:scale-110 group-hover:bg-green-100 transition-all">
                        <BadgeCheck className="w-6 h-6" />
                     </div>
                     <span className="font-bold text-sm text-slate-800">100% Genuine</span>
                  </div>
                  <div className="text-center group">
                     <div className="w-12 h-12 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-3 group-hover:scale-110 group-hover:bg-orange-100 transition-all">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <span className="font-bold text-sm text-slate-800">Free Delivery</span>
                  </div>
                  <div className="text-center group">
                     <div className="w-12 h-12 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                        <Shield className="w-6 h-6" />
                     </div>
                     <span className="font-bold text-sm text-slate-800">Warranty</span>
                  </div>
                  <div className="text-center group">
                     <div className="w-12 h-12 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-3 group-hover:scale-110 group-hover:bg-purple-100 transition-all">
                        <Building2 className="w-6 h-6" />
                     </div>
                     <span className="font-bold text-sm text-slate-800">Site Planning</span>
                  </div>
               </div>
            </motion.div>

         </section>

          {/* Image Carousel Section */}
          <section className="mb-16 mt-6 relative">
            <div className="relative h-[300px] md:h-[500px] lg:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 group">
               <Carousel />
            </div>
          </section>

         {/* Trust & Testimonial Section */}
         <section className="mt-8 mb-4 grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-20">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-white/60 backdrop-blur-2xl border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-sm flex flex-col justify-between"
             >
                <div className="mb-8">
                   <div className="flex gap-1 text-orange-400 mb-4">
                      <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                   </div>
                   <h3 className="font-headline text-2xl md:text-3xl font-bold text-slate-900 leading-tight">"They provided exactly what our commercial complex needed. Flawless consultation and genuine prices."</h3>
                </div>
                <div>
                   <p className="font-bold text-slate-900">— S. Ramesh</p>
                   <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mt-1">Lead Developer, Ramnad</p>
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-700 text-white flex flex-col justify-between overflow-hidden relative group"
             >
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="relative z-10 mb-8">
                   <div className="flex gap-1 text-orange-400 mb-4">
                      <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                   </div>
                   <h3 className="font-headline text-2xl md:text-3xl font-bold leading-tight">"The only dealer in Ramanathapuram where I fully trust the authenticity of the Dr. Fixit waterproofing batches."</h3>
                </div>
                <div className="relative z-10">
                   <p className="font-bold">— M. Abdul</p>
                   <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Independent Architect</p>
                </div>
             </motion.div>
         </section>

         {/* Final Fast Contact CTA */}
         <section className="mt-12 bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl pointer-events-none -mt-32 -mr-32"></div>
             
             <h2 className="text-white font-headline text-3xl md:text-5xl font-bold mb-6 relative z-10">Start Your Consultation</h2>
             <p className="text-slate-400 font-medium md:text-lg max-w-xl mx-auto mb-10 relative z-10">Call us today or visit our Ramnad showroom for expert advice on paints and waterproofing.</p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
               <a href="tel:9940839999" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 group">
                  <PhoneCall className="w-4 h-4 group-hover:text-green-600 transition-colors" /> Call 99408 39999
               </a>
               <a href="https://wa.me/919940839999" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
                  WhatsApp Us
               </a>
             </div>
         </section>
      </div>

      <style jsx global>{`
        .mask-linear-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </main>
  );
}

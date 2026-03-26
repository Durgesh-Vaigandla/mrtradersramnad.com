"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, PaintBucket, Layers, ShieldCheck, 
  SunSnow, ThermometerSun, Droplets, Droplet, 
  Hammer, Palette, PaintbrushVertical
} from "lucide-react";

export default function ClientServicePage({ data }: { data: any }) {
  
  // Icon mapping logic
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "broom": return <PaintbrushVertical className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "paint": return <PaintBucket className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "texture": return <Layers className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "shield": return <ShieldCheck className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "wash": return <Droplets className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "thermometer": return <ThermometerSun className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "droplet": return <Droplet className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "layers": return <Layers className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "hammer": return <Hammer className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "palette": return <Palette className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "sun": return <SunSnow className="w-8 h-8 text-maroon" strokeWidth={2} />;
      case "sparkles": return <Sparkles className="w-8 h-8 text-maroon" strokeWidth={2} />;
      default: return <Sparkles className="w-8 h-8 text-maroon" strokeWidth={2} />;
    }
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
        
        {/* Sleek Hero Image Header */}
        <header className="relative w-full h-[40vh] md:h-[50vh] rounded-[3rem] overflow-hidden mb-12 shadow-sm group">
          <Image 
             src={data.heroImage} 
             alt={data.title} 
             fill 
             className="object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-[2000ms]" 
             priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent z-10"></div>
          
          <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 block text-white/70"
            >
              {data.subtitle}
            </motion.span>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="font-headline text-4xl md:text-6xl lg:text-8xl leading-none mb-6 font-bold text-white tracking-tight drop-shadow-xl"
            >
               {data.title}
            </motion.h1>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
          {/* Main Content Pane */}
          <div className="lg:col-span-8 bg-white/60 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-sm border border-slate-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">{data.introTitle}</h2>
              <p className="text-slate-600 font-medium leading-relaxed md:text-xl max-w-2xl">{data.introDesc}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.features.map((feature: any, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-100 hover:border-maroon/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="mb-6 bg-slate-50 border border-slate-100 p-4 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-maroon/5 transition-all duration-300 shadow-sm">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contextual Sticky Lead Form */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 pointer-events-none"></div>
              
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-white mb-3 relative z-10 tracking-tight">Request Estimate</h3>
              <p className="text-sm font-medium text-slate-400 mb-8 relative z-10">Get customized pricing for your specific {data.title.toLowerCase()} project.</p>
              
              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-slate-400">Full Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-slate-400">Phone</label>
                  <input type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner" required />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 text-slate-400">Scope</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner cursor-pointer appearance-none">
                    {data.formOptions.map((opt: string, i: number) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="w-full bg-white text-slate-900 font-bold uppercase tracking-widest text-[11px] py-5 rounded-xl shadow-xl hover:bg-slate-200 transition-all hover:-translate-y-1 active:scale-95 mt-4">
                  Schedule Evaluation
                </button>
              </form>
            </motion.div>
          </div>

        </section>

      </div>

      {/* Floating Action Button */}
      <a 
        href={`https://wa.me/919940839999?text=${encodeURIComponent(data.whatsappMessage)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25d366] text-white px-6 py-4 md:px-8 md:py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform z-50 flex items-center gap-3 border-2 border-white/50 group"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 fill-current group-hover:animate-bounce" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
        <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest">{data.whatsappBtnText}</span>
      </a>

    </main>
  );
}

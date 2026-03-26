"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Clock, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <main className="bg-[#F8FAFC] text-slate-800 font-body relative min-h-screen pt-[80px] lg:pt-[112px] pb-24 overflow-x-hidden">
      
      {/* Liquid Glass Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.55]">
         <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] rounded-full bg-orange-100 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '12s' }}></div>
         <div className="absolute bottom-[0%] left-[20%] w-[60%] h-[40%] rounded-full bg-rose-100 blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-12">
        
        {/* Sleek Hero Header */}
        <header className="max-w-3xl mx-auto text-center mb-16 space-y-6">
           <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-700 px-4 py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest border border-slate-200 shadow-sm"
           >
              <MessageSquare className="w-4 h-4 text-maroon" /> Expert Consultation
           </motion.div>
           
           <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-5xl md:text-6xl lg:text-8xl text-slate-900 leading-[1.1] font-bold tracking-tight"
           >
              Connect with <br/> the Atelier.
           </motion.h1>
           
           <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
           >
              Whether embarking on a residential restoration or a large-scale commercial project, our artisans are ready to bring your vision to life.
           </motion.p>
        </header>

        {/* Info Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-20"
        >
          {/* Quick Contact Box */}
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
             <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <Phone className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Phone</h3>
             <p className="text-sm font-medium text-slate-500 mb-6">Immediate assistance available during working hours.</p>
             <div className="space-y-2">
               <a href="tel:9940839999" className="block text-2xl font-bold text-slate-900 hover:text-maroon transition-colors">99408 39999</a>
               <a href="tel:9543205657" className="block text-2xl font-bold text-slate-900 hover:text-maroon transition-colors">95432 05657</a>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
             <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
               <Mail className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Desk</h3>
             <p className="text-sm font-medium text-slate-500 mb-6">For detailed plans, quotation requests or vendor inquiries.</p>
             <a href="mailto:mrtradersrmd@gmail.com" className="text-lg md:text-xl font-bold text-slate-900 hover:text-maroon transition-colors break-all">mrtradersrmd@gmail.com</a>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
             <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
             <div className="relative z-10">
               <div className="w-14 h-14 bg-white/10 border border-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
                 <Clock className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
               <p className="text-sm font-medium text-slate-400 mb-6">The headquarters and logistics hub operational timings.</p>
               <div className="space-y-1">
                 <p className="text-xl font-bold text-white">Mon-Sat</p>
                 <p className="text-slate-300 font-bold tracking-widest uppercase text-xs">8:30 AM — 9:00 PM</p>
                 <p className="text-sm text-slate-400 mt-2 italic font-medium">Sunday: Closed</p>
               </div>
             </div>
          </motion.div>
        </motion.div>

        {/* Master Bento Container */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Main Inquiry Form */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 relative overflow-hidden h-full flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-maroon/5 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight relative z-10">Send a Message</h2>
            <p className="text-sm md:text-base font-medium text-slate-500 mb-10 relative z-10">Share your project details and an atelier consultant will reach out directly.</p>

            <form className="space-y-6 relative z-10 flex-grow" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner text-sm font-medium" type="text" required />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Email Address</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner text-sm font-medium" type="email" required />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Project Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner cursor-pointer appearance-none text-sm font-medium">
                  <option>Residential Painting</option>
                  <option>Commercial Projects</option>
                  <option>Color Consulting</option>
                  <option>Waterproofing Services</option>
                  <option>Bulk Material Supply</option>
                </select>
              </div>
              <div className="flex-grow flex flex-col">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Your Message</label>
                <textarea className="w-full h-full min-h-[120px] bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon transition-all shadow-inner resize-none text-sm font-medium" required></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:bg-slate-800 active:scale-95 transition-all text-xs flex justify-center items-center gap-3 mt-4" type="submit">
                <Send className="w-4 h-4" /> Transmit Request
              </button>
            </form>
          </motion.div>

          {/* Map and HQ Box */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col gap-6"
          >
             {/* Map Container */}
             <div className="w-full h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-sm border border-slate-200 relative group">
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15049.63881004949!2d78.83712!3d9.360653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0198026bd09a75%3A0x7c8b3877b5a5bba9!2sMR%20TRADERS!5e1!3m2!1sen!2sin!4v1774364662784!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto"
                ></iframe>
                {/* Overlay map interaction prompt */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                   <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase shadow-2xl flex items-center gap-2">
                     <MapPin className="w-4 h-4" /> Tap Map to Interact
                   </div>
                </div>
             </div>

             {/* HQ Detail Card */}
             <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-10 shadow-sm border border-slate-200 flex-grow hover:shadow-lg transition-shadow">
                <div className="inline-block px-4 py-1.5 bg-maroon/10 text-maroon rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-maroon/10">Headquarters</div>
                <h3 className="font-headline text-3xl font-bold text-slate-900 mb-4">Ramanathapuram HQ</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  No. 61 C1, Railway Feeder Road,<br />
                  Near Old Bus Stand, Ramanathapuram <br />
                  Tamil Nadu – 623 504
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                   <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                      <Image src="/assets/images/logo.png" alt="Mr Traders Manager" width={24} height={24} className="opacity-60" />
                   </div>
                   <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Branch Manager</p>
                      <p className="text-slate-900 font-bold text-lg">Mr. Muthukumar</p>
                   </div>
                </div>
             </div>
          </motion.div>

        </section>

      </div>
    </main>
  );
}

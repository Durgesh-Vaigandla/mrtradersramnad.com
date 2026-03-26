"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Globe, Paintbrush } from "lucide-react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl shadow-sm border-b border-slate-200 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 max-w-[1920px]">
        <nav className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className={`relative shrink-0 transition-all duration-500 ${isScrolled ? 'h-12 w-12 md:h-14 md:w-14' : 'h-16 w-16 md:h-20 md:w-20'}`}>
              <Image src="/assets/images/logo.png" alt="MR TRADERS" fill sizes="80px" priority className="object-contain group-hover:scale-110 transition-transform rounded-xl" />
            </div>
            <div className="flex flex-col">
              <h2 className="m-0 text-xl md:text-2xl font-bold tracking-tighter text-slate-900 font-headline uppercase italic leading-none group-hover:text-maroon transition-colors">MR TRADERS</h2>
              <span className="text-[8px] md:text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase hidden sm:block mt-0.5">Since 1994</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center gap-10 text-slate-600 font-bold uppercase tracking-[0.15em] text-[11px]">
            <li><Link href="/" className={`${pathname === '/' ? 'text-maroon' : 'hover:text-maroon'} transition-colors py-4 block`}>Home</Link></li>
            <li><Link href="/about" className={`${pathname === '/about' ? 'text-maroon' : 'hover:text-maroon'} transition-colors py-4 block`}>About Us</Link></li>
            <li><Link href="/services" className={`${pathname?.includes('/services') ? 'text-maroon' : 'hover:text-maroon'} transition-colors py-4 block`}>Services</Link></li>
            <li><Link href="/palette" className={`${pathname === '/palette' ? 'text-maroon' : 'hover:text-maroon'} transition-colors py-4 block`}>Colour Palette</Link></li>
            <li><Link href="/products" className={`${pathname === '/products' ? 'text-maroon' : 'hover:text-maroon'} transition-colors py-4 block`}>Products</Link></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg hover:shadow-2xl hover:bg-maroon hover:-translate-y-0.5 active:scale-95 transition-all inline-block border border-transparent hover:border-maroon/20 relative overflow-hidden group">
              <span className="relative z-10">Get a Free Quote</span>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden flex flex-col justify-center items-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 active:scale-95 transition-transform z-[1001]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[2px] bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`}></span>
            <span className={`w-5 h-[2px] bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-5 h-[2px] bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-[1000] xl:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
         <div className="flex flex-col h-full justify-center px-8 py-20 overflow-y-auto">
            <ul className="flex flex-col gap-6 text-2xl md:text-4xl font-headline font-bold italic tracking-tight text-slate-900">
               <li><Link href="/" className="hover:text-maroon transition-colors block border-b border-slate-100 pb-4">Home</Link></li>
               <li><Link href="/about" className="hover:text-maroon transition-colors block border-b border-slate-100 pb-4">About Us</Link></li>
               <li><Link href="/services" className="hover:text-maroon transition-colors block border-b border-slate-100 pb-4">Services</Link></li>
               <li><Link href="/palette" className="hover:text-maroon transition-colors block border-b border-slate-100 pb-4">Colour Palette</Link></li>
               <li><Link href="/products" className="hover:text-maroon transition-colors block border-b border-slate-100 pb-4">Products</Link></li>
            </ul>
            <div className="mt-12">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-4">Direct Contact</span>
               <a href="tel:9940839999" className="text-xl font-bold text-slate-800 hover:text-maroon flex items-center gap-3 mb-4"><Phone className="w-5 h-5 text-maroon" /> 99408 39999</a>
               <Link href="/contact" className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs flex justify-center items-center mt-8 active:scale-95 transition-transform">
                  Get a Free Quote
               </Link>
            </div>
         </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white text-slate-800 pt-24 pb-10 font-body border-t border-slate-200 relative overflow-hidden">
      
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -mt-[400px] -mr-[400px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1920px] relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20 lg:mb-24">
          
          {/* Brand & Vision Segment */}
          <div className="flex flex-col gap-8 lg:col-span-5 pr-0 lg:pr-12">
            <div className="flex items-center gap-5">
              <div className="relative h-14 w-14 shrink-0 bg-slate-50 border border-slate-100 p-2 rounded-2xl shadow-sm">
                <Image src="/assets/images/logo.png" alt="MR TRADERS" fill sizes="56px" className="object-contain" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-headline font-bold tracking-tighter uppercase italic text-slate-900 flex flex-col leading-none">
                MR TRADERS
                <span className="text-[9px] tracking-[0.4em] text-slate-400 mt-2">Since 1994</span>
              </h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-slate-500 font-medium md:max-w-md">
              Ramanathapuram's premier destination for genuine architecture finishes. Specializing in high-end paints, advanced construction chemicals, and expert waterproofing. Building absolute trust for over three decades.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-slate-400">Divisions</h3>
            <ul className="flex flex-col gap-4 text-xs md:text-sm font-bold tracking-wider text-slate-700">
              <li><Link href="/services" className="hover:text-maroon transition-colors">Painting Services</Link></li>
              <li><Link href="/services" className="hover:text-maroon transition-colors">Waterproofing</Link></li>
              <li><Link href="/products" className="hover:text-maroon transition-colors">Brand Catalog</Link></li>
              <li><Link href="/palette" className="hover:text-maroon transition-colors">Color Studio</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-slate-400">Company</h3>
            <ul className="flex flex-col gap-4 text-xs md:text-sm font-bold tracking-wider text-slate-700">
              <li><Link href="/about" className="hover:text-maroon transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-maroon transition-colors">Locate Store</Link></li>
              <li><Link href="/careers" className="hover:text-maroon transition-colors">Careers</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-maroon transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-slate-400">Direct Contact</h3>
            <div className="flex flex-col gap-6 text-[13px] font-bold tracking-wider text-slate-700">
              <a href="tel:9940839999" className="flex items-center gap-4 hover:text-maroon transition-colors group">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-maroon/5 group-hover:border-maroon/10 transition-colors shrink-0">
                  <Phone className="text-maroon w-4 h-4" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] uppercase tracking-widest text-slate-400 mb-0.5">Primary Line</span>
                   <span className="text-sm">99408 39999</span>
                </div>
              </a>
              <a href="mailto:mrtradersrmd@gmail.com" className="flex items-center gap-4 hover:text-maroon transition-colors lowercase group">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-maroon/5 group-hover:border-maroon/10 transition-colors shrink-0">
                  <Mail className="text-maroon w-4 h-4" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] uppercase tracking-widest text-slate-400 mb-0.5 block">Digital Desk</span>
                   <span className="text-sm">mrtradersrmd@gmail.com</span>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-maroon w-4 h-4" />
                </div>
                <div className="flex flex-col">
                   <span className="text-[9px] uppercase tracking-widest text-slate-400 mb-0.5">Headquarters</span>
                   <span className="leading-relaxed text-sm font-medium">Railway Feeder Road,<br/>Ramanathapuram</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Copyright Edge */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} MR TRADERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
               <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
               <Paintbrush className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

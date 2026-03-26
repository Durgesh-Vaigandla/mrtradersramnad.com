import { notFound } from "next/navigation";
import Image from "next/image";
import { 
  Sparkles, PaintBucket, Layers, ShieldCheck, 
  SunSnow, ThermometerSun, Droplets, Droplet, 
  Hammer, HammerIcon, Palette, DropletIcon, Paintbrush
} from "lucide-react";
import ClientServicePage from "./ClientServicePage";

// Centralized Data for All Services
export const SERVICES_DATA: Record<string, any> = {
  "interior-painting": {
    title: "Interior Painting",
    subtitle: "Artisanal Craftsmanship",
    description: "Transform your living spaces with colors that reflect your style. Quality finishes for every room.",
    heroImage: "/assets/images/services/interior_painting.png",
    introTitle: "Mastery in Every Stroke",
    introDesc: "We curate architectural finishes that define luxury living. Our interior services focus on air quality, impeccable smoothness, and bespoke color curation that responds to the unique light of your home.",
    features: [
      { icon: "broom", title: "Surface Calibration", desc: "Corrective sanding and structural priming for a flawless canvas before any pigment touches the wall." },
      { icon: "paint", title: "Pigment Application", desc: "Triple-coat precision using heritage-grade artisanal techniques and eco-friendly, low-VOC paints." },
      { icon: "texture", title: "Designer Textures", desc: "From Venetian plaster to metallic gradients, our artisans create tactile surfaces that command attention." },
      { icon: "shield", title: "Clean & Protected", desc: "We meticulously protect your furniture and floors before starting, ensuring a spotless reveal upon finish." }
    ],
    formOptions: ["Full House Interior", "Single Room / Accent Wall", "Living Area", "Commercial Office"],
    whatsappMessage: "Hello, I would like a quote for Interior Painting.",
    whatsappBtnText: "Talk to Painter"
  },
  "exterior-painting": {
    title: "Exterior Painting",
    subtitle: "Weather Defense",
    description: "Protect and beautify your property's exterior with weather-resistant, durable paint solutions.",
    heroImage: "/assets/images/services/exterior_painting.png",
    introTitle: "Built To Last",
    introDesc: "Protection meets prestige. Our exterior systems are engineered to withstand extreme sunlight and heavy monsoons while maintaining vibrant color saturation for decades.",
    features: [
      { icon: "wash", title: "Pressure Sanitation", desc: "High-velocity cleaning to remove years of environmental wear, mold, and loose debris before application." },
      { icon: "thermometer", title: "Thermal Barrier", desc: "Heat-reflective pigments that actively lower your home's exterior surface temperature during the summer." },
      { icon: "droplet", title: "Algae & Fungal Shield", desc: "Advanced bio-resistant components that prevent black spotting and algae growth common in humid climates." },
      { icon: "layers", title: "Elastomeric Coating", desc: "Specialized high-elasticity paints that bridge hairline cracks formed by structural settling." }
    ],
    formOptions: ["Independent Villa / House", "Commercial Building", "Apartment Complex"],
    whatsappMessage: "Hello, I would like a quote for Exterior Painting.",
    whatsappBtnText: "Talk to Expert"
  },
  "waterproofing": {
    title: "Waterproofing",
    subtitle: "Structural Integrity",
    description: "Expert waterproofing applicator and repair works to keep your structure safe from leakages.",
    heroImage: "/assets/images/services/waterproofing.png",
    introTitle: "Ultimate Moisture Protection",
    introDesc: "Water damage works silently. We provide robust, chemical-grade waterproofing systems that seal your property against monsoons, ground moisture, and internal plumbing leaks.",
    features: [
      { icon: "shield", title: "Terrace Waterproofing", desc: "Multi-layered elastomeric membranes to prevent roof-level water penetration and thermal stress." },
      { icon: "droplet", title: "Bathroom & Sump Seal", desc: "Advanced epoxy and crystalline grouting for wet areas to contain moisture effectively." },
      { icon: "hammer", title: "Crack Injection", desc: "High-pressure PU injection technology to seal deep structural cracks internally." },
      { icon: "layers", title: "Performance Warranty", desc: "All our specialized waterproofing solutions come matched with comprehensive performance warranties." }
    ],
    formOptions: ["Terrace / Roof Leakage", "Bathroom Deep Seepage", "Underground Sump / Tank", "External Wall Dampness"],
    whatsappMessage: "Hello, I have a leakage issue and need Waterproofing services.",
    whatsappBtnText: "Consult Waterproofing Expert"
  },
  "colour-consultation": {
    title: "Colour Consultation",
    subtitle: "Psychology & Aesthetics",
    description: "Expert advice to help you choose the perfect shades that balance aesthetics and lighting.",
    heroImage: "/assets/images/services/colour_consultation.png",
    introTitle: "Designing Your Palette",
    introDesc: "Choosing color is about setting a mood. Our experts blend design psychology with light theory to ensure your space looks incredible under both morning sun and evening LEDs.",
    features: [
      { icon: "palette", title: "Digital Rendering", desc: "See your home transformed visually on screen before committing to any physical paint." },
      { icon: "sun", title: "Light Calibration", desc: "We study your room's natural and artificial lighting to pick pigments that won't distort." },
      { icon: "paint", title: "Site Swatching", desc: "Applying physical 2x2ft test patches to let you experience the true texture and finish in reality." },
      { icon: "sparkles", title: "Curated Harmonies", desc: "We design complete aesthetic flows, ensuring your trims, ceilings, and accents perfectly match the main walls." }
    ],
    formOptions: ["New Construction Full Palette", "Single Room Remodel", "Exterior Facade Design", "Commercial Branding Swatches"],
    whatsappMessage: "Hello, I need help with Colour Consultation.",
    whatsappBtnText: "Book Session"
  },
  "repair-maintenance": {
    title: "Repair & Maintenance",
    subtitle: "Restoration Masters",
    description: "Complete wall repair and maintenance services to ensure a smooth, long-lasting paint finish.",
    heroImage: "/assets/images/services/repair_maintenance.png",
    introTitle: "Healing The Canvas",
    introDesc: "A phenomenal finish requires a flawless foundation. Before painting, we diagnose and treat every underlying structural flaw, from plaster hollowness to deep fissures.",
    features: [
      { icon: "hammer", title: "Deep Fissure Repair", desc: "V-groove cutting and polymer modified mortar filling for deep structural cracks." },
      { icon: "layers", title: "Plaster Consolidation", desc: "Removing dead, hollow plaster and rebuilding the surface using high-strength cement additives." },
      { icon: "droplet", title: "Efflorescence Treatment", desc: "Neutralizing wall salts and applying chemical barriers to prevent paint peeling and bubbling." },
      { icon: "sparkles", title: "Priming & Putty", desc: "Applying double layers of premium acrylic putty for a perfectly smooth, glass-like finish." }
    ],
    formOptions: ["Wall Cracks / Peeling", "Hollow Plaster / Dampness", "General Preparation", "Building Exterior Repair"],
    whatsappMessage: "Hello, I need Repair & Maintenance for my walls.",
    whatsappBtnText: "Request Inspection"
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate Static Params for SSG
export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const serviceData = SERVICES_DATA[slug];

  if (!serviceData) {
    notFound();
  }

  return <ClientServicePage data={serviceData} />;
}

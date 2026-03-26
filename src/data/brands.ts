export const BRANDS_DATA = [
  {
    category: "Abrasives",
    images: [
      "/assets/images/brand-logos/abrasives/CUMI.jpg",
      "/assets/images/brand-logos/abrasives/Norton.jpg",
      "/assets/images/brand-logos/abrasives/SaintGobain.jpg",
      "/assets/images/brand-logos/abrasives/beartext.jpg",
      "/assets/images/brand-logos/abrasives/deerfos.jpg",
      "/assets/images/brand-logos/abrasives/mirk.jpg"
    ]
  },
  {
    category: "Adhesives",
    images: [
      "/assets/images/brand-logos/adhesives/Mseal.jpg",
      "/assets/images/brand-logos/adhesives/Pidilite.jpg",
      "/assets/images/brand-logos/adhesives/Wacker-Chemicals.jpg",
      "/assets/images/brand-logos/adhesives/araldite.png"
    ]
  },
  {
    category: "Airless Spray",
    images: [
      "/assets/images/brand-logos/airless_spray/Graco.jpg",
      "/assets/images/brand-logos/airless_spray/Wagner.jpg",
      "/assets/images/brand-logos/airless_spray/WoodPecker.png"
    ]
  },
  {
    category: "Brushes",
    images: [
      "/assets/images/brand-logos/brushes/agendas.jpg",
      "/assets/images/brand-logos/brushes/arunbrush.jpg",
      "/assets/images/brand-logos/brushes/classic.jpg",
      "/assets/images/brand-logos/brushes/derin.jpg",
      "/assets/images/brand-logos/brushes/tiaroller.jpg",
      "/assets/images/brand-logos/brushes/z.jpg"
    ]
  },
  {
    category: "Construction Chemicals",
    images: [
      "/assets/images/brand-logos/construction_chemicals/Bostik.jpg",
      "/assets/images/brand-logos/construction_chemicals/DrFixit.jpg",
      "/assets/images/brand-logos/construction_chemicals/Fosroc.jpg",
      "/assets/images/brand-logos/construction_chemicals/Gillanders.jpg",
      "/assets/images/brand-logos/construction_chemicals/Huntsman.gif",
      "/assets/images/brand-logos/construction_chemicals/MC-Bauchemie.jpg",
      "/assets/images/brand-logos/construction_chemicals/Wacker-Chemicals.jpg"
    ]
  },
  {
    category: "Diy Aersol",
    images: [
      "/assets/images/brand-logos/diy_aersol/bosny.png",
      "/assets/images/brand-logos/diy_aersol/nippon.png"
    ]
  },
  {
    category: "Masking Tape",
    images: [
      "/assets/images/brand-logos/masking_tape/3m.jpg",
      "/assets/images/brand-logos/masking_tape/lion.jpg"
    ]
  },
  {
    category: "Multipurpose",
    images: [
      "/assets/images/brand-logos/multipurpose/JIMCO.JPG"
    ]
  },
  {
    category: "Occupational",
    images: [
      "/assets/images/brand-logos/occupational/3M.jpg",
      "/assets/images/brand-logos/occupational/KARAM-logo.png",
      "/assets/images/brand-logos/occupational/lakeland-logo.jpg"
    ]
  },
  {
    category: "Paints",
    images: [
      "/assets/images/brand-logos/paints/AkzoNobel.jpg",
      "/assets/images/brand-logos/paints/AsianPaints.gif",
      "/assets/images/brand-logos/paints/BASF.jpg",
      "/assets/images/brand-logos/paints/KansaiNerolac.png",
      "/assets/images/brand-logos/paints/MRF.jpg",
      "/assets/images/brand-logos/paints/MRFVapocurePaints.jpg",
      "/assets/images/brand-logos/paints/axalta.jpg",
      "/assets/images/brand-logos/paints/berger-paints.png",
      "/assets/images/brand-logos/paints/dulux.jpg",
      "/assets/images/brand-logos/paints/esdee.jpeg",
      "/assets/images/brand-logos/paints/ica.png",
      "/assets/images/brand-logos/paints/indigo.jpg",
      "/assets/images/brand-logos/paints/jotun.jpg",
      "/assets/images/brand-logos/paints/jsw.jpg"
    ]
  },
  {
    category: "Pigments",
    images: [
      "/assets/images/brand-logos/pigments/SudarshanChemicals.jpg",
      "/assets/images/brand-logos/pigments/mepco.jpg",
      "/assets/images/brand-logos/pigments/tata.jpg"
    ]
  },
  {
    category: "Pre-treatment",
    images: [
      "/assets/images/brand-logos/pre-treatment/LAKMEE.jpg",
      "/assets/images/brand-logos/pre-treatment/Reckitt_Benckiser.jpg",
      "/assets/images/brand-logos/pre-treatment/hardcastle_waud.jpg",
      "/assets/images/brand-logos/pre-treatment/logo_wd40.gif",
      "/assets/images/brand-logos/pre-treatment/rustolene.jpg",
      "/assets/images/brand-logos/pre-treatment/sb.jpg"
    ]
  },
  {
    category: "Wall Putty",
    images: [
      "/assets/images/brand-logos/wall_putty/VIPCO.jpg",
      "/assets/images/brand-logos/wall_putty/birlawallputty.jpg",
      "/assets/images/brand-logos/wall_putty/jkwallputty.jpg"
    ]
  },
  {
    category: "White Cement",
    images: [
      "/assets/images/brand-logos/white_cement/birlawhitecement.jpg",
      "/assets/images/brand-logos/white_cement/jkwhitecement.jpg"
    ]
  }
];

// Generate a flat array of all logos for the marquee
export const ALL_BRAND_LOGOS = BRANDS_DATA.flatMap(g => g.images);

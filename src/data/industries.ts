import { IndustryItem } from '../types';

export const industries: IndustryItem[] = [
  {
    id: 'boutique-tailoring',
    slug: 'boutique-tailoring',
    title: 'Fashion Boutiques & Bespoke Master Tailors',
    iconName: 'Scissors',
    description: 'Precision artisan lockstitch units, silent direct-drive machines, saree pico/fall specialists, and designer embroidery systems configured for custom boutiques and master tailoring salons.',
    keyRequirements: [
      'Whisper-quiet direct-drive servo operation for peaceful boutique salon environments',
      'Zero oil staining on sensitive bridal lehengas, pure silk, and organza',
      'Micro-pitch feed control to prevent puckering on fine chiffon and georgette',
      'Versatile attachments for saree pico, fall, dori cording, and buttonholes'
    ],
    recommendedMachines: ['ASM-DLX-200', 'ASM-BT-202', 'ASM-PICO-108', 'ASM-EMB-800'],
    caseStudy: {
      clientType: 'Premier Bridal Fashion Boutique & Tailoring Studio (Kolhapur)',
      solution: 'Equipped workshop with ASM-DLX-200 Treadle Stand units, ASM-BT-202 Silent Direct-Drive machines, and ASM-PICO-108 Saree Pico units.',
      result: 'Accelerated blouse and designer gown delivery turnaround by 40% with showroom-grade stitch perfection.'
    },
    imageUrl: '/images/novel/Frame-35.png'
  },
  {
    id: 'garment-apparel',
    slug: 'garment-apparel',
    title: 'Garments & Apparel Manufacturing',
    iconName: 'Shirt',
    description: 'High-speed lockstitch, direct-drive computerized, and overlock machinery engineered for apparel export houses, garment clusters, and high-fashion ateliers.',
    keyRequirements: [
      'Zero oil staining on sensitive fabrics with dry-head systems',
      'Continuous 16-hour daily duty cycles without mechanical overheating',
      'High stitch cadence up to 5,000–6,500 SPM with uniform tension control',
      'Micro-stitch pitch precision on delicate knits and fine woven textiles'
    ],
    recommendedMachines: ['ASM-DD-9000', 'ASM-TM-101', 'ASM-OV-757'],
    caseStudy: {
      clientType: 'Export Shirt & Trouser Manufacturer (Ichalkaranji & Kolhapur Region)',
      solution: 'Deployed 45 units of ASM-DD-9000 Direct-Drive Computerized Lockstitch units.',
      result: 'Reduced power consumption by 68% and boosted daily operator seam output by 28%.'
    },
    imageUrl: '/images/novel/Frame-67-1.png'
  },
  {
    id: 'heavy-canvas-tarpaulins',
    slug: 'heavy-canvas-tarpaulins',
    title: 'Canvas, Tarpaulins & Military Uniforms',
    iconName: 'Shield',
    description: 'Rugged heavy-duty Umbrella and walking foot machines with deep arm clearance and high-torque penetration for military gear, tents, and transport covers.',
    keyRequirements: [
      'Penetration of up to 12 plies of 16-oz waterproof canvas',
      'Reinforced shuttle hook and large thread capacity bobbins',
      'Reverse feed locking mechanisms for reinforced stress points',
      'Long-life heat-treated alloy steel needles (#21 to #25)'
    ],
    recommendedMachines: ['ASM-UMB-950', 'ASM-CB-335'],
    caseStudy: {
      clientType: 'Industrial Tarpaulin & Transport Cover Fabrication Unit',
      solution: 'Equipped production lines with ASM-UMB-950 Heavy Umbrella series.',
      result: 'Eliminated needle deflection breakage and maintained zero seam leakage in high-stress outdoor tests.'
    },
    imageUrl: '/images/novel/95-T-10-INDUSTRIAL-1.png'
  },
  {
    id: 'leather-footwear',
    slug: 'leather-footwear',
    title: 'Leather Goods, Footwear & Accessories',
    iconName: 'Briefcase',
    description: 'Cylinder bed compound walking foot machines tailored for 3D curved seams, heavy shoe uppers, belts, equestrian tack, and luxury leather handbags.',
    keyRequirements: [
      'Slender 50mm cylinder arm for tight curved seams and closed bag corners',
      'Triple synchronized feed preventing surface marks on delicate top-grain hides',
      'High needle puncture power at low speeds for precision hand-guided sewing',
      'Heavy bonded nylon thread handling up to size V-138'
    ],
    recommendedMachines: ['ASM-CB-335', 'ASM-ZZ-450'],
    caseStudy: {
      clientType: 'Handcrafted Leather Footwear & Goods Workshop',
      solution: 'Integrated ASM-CB-335 Cylinder Arm Compound Feed units with low-RPM high-torque servo drives.',
      result: 'Achieved 100% seam alignment on difficult boot uppers with zero leather slippage.'
    },
    imageUrl: '/images/novel/31-K-15-LEATHER-MASTER-1.png'
  },
  {
    id: 'packaging-agro-sacks',
    slug: 'packaging-agro-sacks',
    title: 'Agro Packaging, Grain Mills & Sugar Factories',
    iconName: 'Package',
    description: 'High-speed portable and conveyor-mounted bag closers designed to withstand abrasive, dusty environments while sealing woven PP, paper, and jute sacks.',
    keyRequirements: [
      'Continuous 1,800 SPM chainstitch that secures 50kg contents without leakage',
      'Sealed bearings and internal oil pump to repel sugar and grain dust',
      'Quick hand-pull unraveling mechanism for end-user convenience',
      'Safety insulated handles for round-the-clock operator protection'
    ],
    recommendedMachines: ['ASM-BC-26'],
    caseStudy: {
      clientType: 'Western Maharashtra Sugar Processing Plant',
      solution: 'Supplied fleet of 12 ASM-BC-26 High-Tensile Bag Closers with ceiling spring balancers.',
      result: 'Achieved reliable closing rates of 250 bags per hour per station with zero bag bursts during transit.'
    },
    imageUrl: '/images/novel/TA-1-INDUSTRIAL.png'
  },
  {
    id: 'automotive-upholstery',
    slug: 'automotive-upholstery',
    title: 'Automotive Upholstery & Transport Seating',
    iconName: 'Car',
    description: 'High-precision heavy-duty stitching solutions for automotive seat covers, steering wheel wraps, headliners, and vibration-damped interior trims.',
    keyRequirements: [
      'Flawless twin-stitch decorative lines with exact stitch distance',
      'Heavy synthetic thread tensioning for airbag seam safety compliance',
      'Compound feed capable of gliding over foam-backed vinyls',
      'Long-duty mechanical resilience under continuous shift demands'
    ],
    recommendedMachines: ['ASM-CB-335', 'ASM-UMB-950', 'ASM-DD-9000'],
    caseStudy: {
      clientType: 'Tier-2 Automotive Interior Seating Supplier',
      solution: 'Customized heavy-duty walking foot workstations with digital stitch count feedback.',
      result: 'Passed automotive tensile test parameters on heavy vinyl and leather seat seams.'
    },
    imageUrl: '/images/novel/31-K-15-LEATHER-MASTER-1.png'
  },
  {
    id: 'home-furnishing',
    slug: 'home-furnishing',
    title: 'Home Furnishings, Curtains & Quilts',
    iconName: 'Home',
    description: 'Extended bed and high-clearance sewing workstations designed for heavy curtains, upholstery drapes, mattress borders, and quilted bedspreads.',
    keyRequirements: [
      'Spacious work area under the arm for bulky drapery bundles',
      'Smooth differential feed preventing ripples across sheer and jacquard weaves',
      'Heavy-duty table platforms with zero vibration at elevated speeds',
      'Versatile zig-zag and straight-stitch switching capabilities'
    ],
    recommendedMachines: ['ASM-TM-101', 'ASM-ZZ-450', 'ASM-TB-200'],
    caseStudy: {
      clientType: 'Commercial Curtain & Upholstery Contractor',
      solution: 'Standardized factory floor on ASM-TM-101 units mounted on ASM-TB-200 vibration-damped stands.',
      result: 'Doubled daily curtain hem production with consistently straight seam tension.'
    },
    imageUrl: '/images/novel/Frame-37.png'
  }
];

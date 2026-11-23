export interface InfrastructureFacility {
  id: string;
  name: string;
  area: string;
  purpose: string;
  keyEquipment: string[];
  imageUrl: string;
}

export const infrastructureFacilities: InfrastructureFacility[] = [
  {
    id: 'assembly-floor',
    name: 'Main Machinery Assembly Floor',
    area: '6,500 Sq. Ft.',
    purpose: 'Precision staging and assembly lines for Umbrella, Lockstitch, Zig-Zag, and Overlock machine heads.',
    keyEquipment: [
      'Ergonomic pneumatic lift assembly benches',
      'High-speed air-powered calibrated torque drivers',
      'Overhead pressurized lubrication distribution system',
      'Dual optical timing stations with digital dial gauges'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'testing-bays',
    name: 'Automated 72-Hour Testing & Burn-In Bays',
    area: '2,800 Sq. Ft.',
    purpose: 'Continuous load simulation and thermal diagnostics for newly assembled and overhauled industrial machines.',
    keyEquipment: [
      'Automated cyclic speed testing rigs (up to 7,000 SPM)',
      'FLIR infrared thermal imaging cameras for bearing heat analysis',
      'Digital acoustic sound meters and vibration spectrum analyzers',
      'Calibrated seam tensile pull testers'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'parts-warehouse',
    name: 'Precision Spare Parts & Component Warehouse',
    area: '3,200 Sq. Ft.',
    purpose: 'Stocking over 12,000 genuine components, rotary hooks, bobbins, carbon steel gears, motors, and needle plates.',
    keyEquipment: [
      'Vertical multi-tier cataloged industrial shelving',
      'Moisture-controlled climate zones for precision steel gears',
      'Rapid barcoded inventory retrieval system',
      'Emergency same-day dispatch staging area'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'motor-lab',
    name: 'Servo Drive & Electrical Diagnostics Lab',
    area: '1,500 Sq. Ft.',
    purpose: 'Assembly, testing, and microcontroller flashing for energy-saving brushless industrial servo motors.',
    keyEquipment: [
      'Stator coil surge testers and insulation breakdown analyzers',
      'Digital dynamometer motor torque measurement benches',
      'DSP firmware programming & calibration stations',
      'Burn-in load resistance banks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'demo-center',
    name: 'Customer Demonstration & Training Center',
    area: '1,200 Sq. Ft.',
    purpose: 'Hands-on client trials, material test stitching, operator training, and technical workshop consultations.',
    keyEquipment: [
      'Active demonstration workstations for all 8 machine families',
      'Fabric trial library (denims, silks, canvas, leathers, geotextiles)',
      'Audiovisual maintenance projection screen',
      'Dedicated engineering consultation desk'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80'
  }
];

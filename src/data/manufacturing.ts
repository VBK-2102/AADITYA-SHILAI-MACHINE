export interface ManufacturingCapability {
  id: string;
  phase: string;
  title: string;
  description: string;
  specifications: string[];
  equipmentUsed: string;
  qualityTolerance: string;
}

export const manufacturingCapabilities: ManufacturingCapability[] = [
  {
    id: 'precision-machining',
    phase: 'Phase 01',
    title: 'Precision CNC Machining & Gear Milling',
    description: 'Every arm casting, shuttle housing, and helical gear is machined with micron-level tolerances to guarantee vibration-free kinematics and long-term durability.',
    specifications: [
      'Multi-axis CNC horizontal machining centers for cast-iron machine beds',
      'High-precision hobbing and gear shaping machines for hardened bevel gears',
      'Tungsten carbide reaming for main drive shaft bushing bores',
      'Surface grinding with mirror finish on needle plate surfaces'
    ],
    equipmentUsed: 'CNC Lathes, Automated Gear Hobbers, Surface Grinding Rigs',
    qualityTolerance: '± 0.005 mm mechanical runout'
  },
  {
    id: 'heat-treatment',
    phase: 'Phase 02',
    title: 'Thermal Metallurgy & Induction Hardening',
    description: 'Crucial friction points—including needle bars, rotary hook tips, cam gears, and stitch cams—undergo computer-controlled vacuum carbonization and oil quenching.',
    specifications: [
      'Induction case hardening reaching 58 - 62 HRC Rockwell hardness',
      'Stress-relieving heat cycles on iron arm castings to eliminate structural warping',
      'Wear-resistant nitride chemical coating on shuttle hooks and feed dogs',
      'Deep cryogenic stabilization treatment for high-stress needles bars'
    ],
    equipmentUsed: 'Induction Hardening Stations, Controlled Atmospheric Furnaces',
    qualityTolerance: 'HRC 60 ± 2 hardness verification'
  },
  {
    id: 'motor-assembly',
    phase: 'Phase 03',
    title: 'Copper Servo Motor Winding & Microcontroller Calibration',
    description: 'Our in-house motor engineering bay winds 99.9% oxygen-free pure copper coils, installs neodymium permanent magnets, and programs digital DSP drive controllers.',
    specifications: [
      'Automated high-tension armature winding machines with insulation varnish bath',
      'Digital dynamic rotor balancing for zero vibrational resonance up to 5,000 RPM',
      'Optical encoder and Hall-effect sensor precision synchronization testing',
      'Thermal overload protection circuit diagnostics under 120% load conditions'
    ],
    equipmentUsed: 'Automatic Coil Winders, Stator Surge Testers, Laser Tachometers',
    qualityTolerance: 'Zero harmonic vibration (< 25 dB ambient idle)'
  },
  {
    id: 'precision-assembly',
    phase: 'Phase 04',
    title: 'Clean-Room Hand Assembly & Timing Synchronization',
    description: 'Senior technicians with decades of sewing machine craftsmanship hand-assemble every machine head, calibrating needle-to-hook clearance with feeler gauges.',
    specifications: [
      'Needle-to-hook clearance fine-tuned to exactly 0.05 mm - 0.1 mm',
      'Feed dog pitch and stroke timing calibrated for zero fabric drag',
      'Thread tension spring dynamic pull rate calibration',
      'Oil pump impeller pressure flow audit with illuminated sight gauge'
    ],
    equipmentUsed: 'Dial Micrometers, Feeler Gauges, Optical Timing Scopes',
    qualityTolerance: '0.05 mm timing clearance tolerance'
  },
  {
    id: 'burn-in-testing',
    phase: 'Phase 05',
    title: '72-Hour Continuous Run-In & Load Testing',
    description: 'Every manufactured and serviced machine undergoes an automated high-speed burn-in protocol, stitching across multi-layer denims, leather, and synthetic canvas.',
    specifications: [
      'Automated cyclic speed bursts from 1,000 to 5,500 SPM',
      'Thermal imaging audit monitoring bearing and gear temperature rises',
      'Tensile seam burst test verifying stitch tensile strength',
      'Acoustic decibel monitoring against international workshop benchmarks'
    ],
    equipmentUsed: 'Automated Test Benches, FLIR Thermal Cameras, Decibel Meters',
    qualityTolerance: '100% Zero-Defect Dispatch Sign-off'
  },
  {
    id: 'customization-engineering',
    phase: 'Phase 06',
    title: 'Custom Machinery Modification & Attachment Fabrication',
    description: 'Tailored engineering modifications for specific industrial client workflows: custom binder brackets, synchronized puller rollers, pneumatic lifters, and specialized folders.',
    specifications: [
      'Custom needle gauge sets (double needle spacing from 3.2 mm to 38.1 mm)',
      'Fabric puller roller synchronized attachments for large tarpaulins',
      'Pneumatic presser foot lifting and auto-suction thread disposal rigs',
      'Bespoke jig and clamp design for automated garment reinforcement'
    ],
    equipmentUsed: 'Toolroom Milling, Wire EDM, Laser Cutting, TIG Welding',
    qualityTolerance: 'Custom OEM CAD Specifications'
  }
];

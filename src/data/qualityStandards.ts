import { QualityStep } from '../types';

export const qualitySteps: QualityStep[] = [
  {
    step: 1,
    title: 'Raw Material & Metallurgical Verification',
    description: 'Spectrometric analysis of iron castings, alloy tool steels, and copper windings to guarantee tensile strength and structural purity.',
    standard: 'ASTM A48 Class 30 Grey Iron & 20CrMnTi Alloy Gear Steels',
    icon: 'ShieldCheck'
  },
  {
    step: 2,
    title: 'Micron-Tolerance Dimensional Inspection',
    description: 'Coordinate measuring machines (CMM) and digital dial gauges verify bushing alignment, needle bar concentricity, and shaft parallelism.',
    standard: 'DIN ISO 2768-m Precision Standard',
    icon: 'Compass'
  },
  {
    step: 3,
    title: 'Shuttle & Rotary Hook Synchronized Timing',
    description: 'Needle-to-hook distance, hook point entrance timing, and thread loop expansion dynamics audited under 10x optical magnification.',
    standard: 'Clearance: 0.05 mm - 0.10 mm with zero needle scrape',
    icon: 'Clock'
  },
  {
    step: 4,
    title: 'Dynamic Vibration & Acoustic Resonance Analysis',
    description: 'Precision digital vibration probes measure harmonic balance at full RPM to ensure quiet, stable operation that will not fatigue workshop operators.',
    standard: 'Vibration velocity < 1.8 mm/s; Noise < 68 dBA at 4,000 SPM',
    icon: 'Activity'
  },
  {
    step: 5,
    title: 'Continuous 72-Hour Load & Burn-In Audit',
    description: 'Automated test rigs run machines continuously through thousands of seam cycles across heavyweight canvas, 14-oz denim, and multi-ply leather.',
    standard: 'Zero thread breakage, zero skipped stitches, oil temp < 48°C',
    icon: 'Flame'
  },
  {
    step: 6,
    title: 'Seam Tensile Strength & Stitch Integrity Validation',
    description: 'Calibrated dynamometer tension pull tests ensure consistent loop formation, uniform top/bottom knot lock, and zero puckering.',
    standard: 'ISO 4915 Stitch Classification Standards',
    icon: 'CheckCircle2'
  },
  {
    step: 7,
    title: 'Final Dispatch Quality Certificate & Serial Tagging',
    description: 'Every machine is assigned a unique tamper-proof serial number, inspection passport signed by the lead QA engineer, and factory test swatch.',
    standard: '100% Quality Pass Tagged with Aaditya Certificate',
    icon: 'Award'
  }
];

export const certificationsList = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management Systems',
    authority: 'Certified Industrial Manufacturing & Repair Facility',
    description: 'Audited standard covering precision assembly, machinery maintenance, quality verification, and customer technical service.'
  },
  {
    code: 'CE Machinery Directive',
    title: 'European Conformity Standards',
    authority: '2006/42/EC Safety Compliance',
    description: 'Compliant finger guards, eye protectors, electrical insulation, and emergency cut-off circuitry.'
  },
  {
    code: 'Bureau of Indian Standards',
    title: 'IS 1610 / IS 6903 Compliance',
    authority: 'National Quality Benchmark for Sewing Machines',
    description: 'Strict conformance to domestic and industrial sewing machine dimensional, metallurgical, and endurance criteria.'
  }
];

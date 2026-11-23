export interface SpecificationItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  modelNumber: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  specifications: Record<string, string>;
  keyFeatures: string[];
  applications: string[];
  materialsSupported: string[];
  advantages: string[];
  operatingCapabilities: {
    maxSpeed: string;
    stitchLength: string;
    needleType: string;
    lubrication: string;
    presserFootLift: string;
    motorPower: string;
    voltage: string;
    weight: string;
    bedSize: string;
  };
  warrantyYears: number;
  brochureAvailable: boolean;
  brochureDownloadUrl?: string;
  inStock: boolean;
  featured: boolean;
  isDemoConfig?: boolean; // Required by prompt: clearly identifies demo/configurable structure
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  iconName: string;
  productCount: number;
  imageUrl: string;
  popularApplications: string[];
}

export interface QuoteRequest {
  id: string;
  referenceNumber: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productModel: string;
  requiredQuantity: number;
  application: string;
  powerOption: string;
  technicalRequirements: string;
  city: string;
  state: string;
  status: 'pending' | 'in_review' | 'quoted' | 'closed';
  createdAt: string;
}

export interface ContactEnquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  category: 'Sales' | 'Service & Repairs' | 'Spare Parts' | 'Dealership' | 'General';
  status: 'new' | 'in_progress' | 'resolved';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'machinery' | 'facility' | 'assembly' | 'quality' | 'projects';
  imageUrl: string;
  description: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  description: string;
  keyRequirements: string[];
  recommendedMachines: string[];
  caseStudy: {
    clientType: string;
    solution: string;
    result: string;
  };
  imageUrl: string;
}

export interface QualityStep {
  step: number;
  title: string;
  description: string;
  standard: string;
  icon: string;
}

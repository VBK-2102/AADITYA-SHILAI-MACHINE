import { Product, QuoteRequest, ContactEnquiry, Category } from '../types';
import { products as defaultProducts } from '../data/products';
import { categories as defaultCategories } from '../data/categories';

const PRODUCTS_KEY = 'aaditya_products_v1';
const QUOTES_KEY = 'aaditya_quotes_v1';
const ENQUIRIES_KEY = 'aaditya_enquiries_v1';
const CATEGORIES_KEY = 'aaditya_categories_v1';

// Seed initial quote requests if empty
const seedQuoteRequests: QuoteRequest[] = [
  {
    id: 'rfq-seed-1',
    referenceNumber: 'RFQ-2026-8492',
    fullName: 'Rajesh Patil',
    companyName: 'Patil Garments & Exports',
    email: 'rajesh@patilgarments.co.in',
    phone: '+91 98220 12345',
    productModel: 'ASM-DD-9000',
    requiredQuantity: 15,
    application: 'Export Shirt & Trouser Stitching',
    powerOption: '220V Single Phase 550W Direct Drive Servo',
    technicalRequirements: 'Need automatic thread trimmer and double reverse tack. Require delivery within 10 days to Ichalkaranji cluster.',
    city: 'Ichalkaranji',
    state: 'Maharashtra',
    status: 'in_review',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 'rfq-seed-2',
    referenceNumber: 'RFQ-2026-8511',
    fullName: 'Sunil Kulkarni',
    companyName: 'Sahyadri Sugar Agro Mill',
    email: 'sunil.kulkarni@sahyadrisugar.com',
    phone: '+91 94230 88765',
    productModel: 'ASM-BC-26',
    requiredQuantity: 6,
    application: '50kg Sugar Sack Sealing',
    powerOption: '220V Standard with overhead balancer hook',
    technicalRequirements: 'Require heavy duty chainstitch looper with 10 spare needles and 50 spools of polyester bag closing thread.',
    city: 'Kolhapur',
    state: 'Maharashtra',
    status: 'pending',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString()
  },
  {
    id: 'rfq-seed-3',
    referenceNumber: 'RFQ-2026-8470',
    fullName: 'Anand Shinde',
    companyName: 'Shinde Canvas & Awnings',
    email: 'anand@shindecanvas.com',
    phone: '+91 99750 33441',
    productModel: 'ASM-UMB-950',
    requiredQuantity: 4,
    application: 'Multi-layer Canvas Tarpaulin & Tent Stitching',
    powerOption: '750W Heavy High-Torque Servo Motor',
    technicalRequirements: 'Need heavy-gauge needle plates for #24 needles and large bobbins.',
    city: 'Sangli',
    state: 'Maharashtra',
    status: 'quoted',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
  }
];

// Seed initial contact enquiries if empty
const seedEnquiries: ContactEnquiry[] = [
  {
    id: 'enq-seed-1',
    fullName: 'Vikram Jadhav',
    email: 'vikram.jadhav@gmail.com',
    phone: '+91 98810 55432',
    subject: 'Urgent Servicing & Timing Calibration for Umbrella Machine',
    message: 'We have 3 heavy umbrella machines experiencing thread bunching during denim sewing. Need an on-site technician visit in Kolhapur.',
    category: 'Service & Repairs',
    status: 'in_progress',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString()
  },
  {
    id: 'enq-seed-2',
    fullName: 'Deepak More',
    email: 'deepak.more@moreapparel.in',
    phone: '+91 97650 99881',
    subject: 'Bulk Spare Parts & Servo Motor Retrofit Enquiry',
    message: 'Interested in converting 20 clutch motor machines to ASM-SM-550 energy saving servo units. Please share pricing and bulk installation support.',
    category: 'Spare Parts',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
  }
];

export const storage = {
  // PRODUCTS
  getProducts(): Product[] {
    try {
      const stored = localStorage.getItem(PRODUCTS_KEY);
      if (!stored) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
        return defaultProducts;
      }
      return JSON.parse(stored);
    } catch {
      return defaultProducts;
    }
  },

  getProductBySlug(slug: string): Product | undefined {
    const products = this.getProducts();
    return products.find(p => p.slug === slug || p.id === slug);
  },

  getProductById(id: string): Product | undefined {
    const products = this.getProducts();
    return products.find(p => p.id === id);
  },

  saveProduct(product: Product): Product {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === product.id);
    let updatedProducts: Product[];

    if (index >= 0) {
      updatedProducts = [...products];
      updatedProducts[index] = product;
    } else {
      updatedProducts = [product, ...products];
    }

    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
    return product;
  },

  deleteProduct(id: string): boolean {
    const products = this.getProducts();
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(filtered));
    return true;
  },

  resetProducts(): void {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(defaultProducts));
  },

  // CATEGORIES
  getCategories(): Category[] {
    try {
      const stored = localStorage.getItem(CATEGORIES_KEY);
      if (!stored) {
        localStorage.setItem(CATEGORIES_KEY, JSON.stringify(defaultCategories));
        return defaultCategories;
      }
      return JSON.parse(stored);
    } catch {
      return defaultCategories;
    }
  },

  getCategoryBySlug(slug: string): Category | undefined {
    const categories = this.getCategories();
    return categories.find(c => c.slug === slug || c.id === slug);
  },

  // QUOTE REQUESTS
  getQuoteRequests(): QuoteRequest[] {
    try {
      const stored = localStorage.getItem(QUOTES_KEY);
      if (!stored) {
        localStorage.setItem(QUOTES_KEY, JSON.stringify(seedQuoteRequests));
        return seedQuoteRequests;
      }
      return JSON.parse(stored);
    } catch {
      return seedQuoteRequests;
    }
  },

  submitQuoteRequest(data: Omit<QuoteRequest, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): QuoteRequest {
    const quotes = this.getQuoteRequests();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `RFQ-2026-${randomDigits}`;
    
    const newQuote: QuoteRequest = {
      ...data,
      id: `rfq-${Date.now()}`,
      referenceNumber,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const updated = [newQuote, ...quotes];
    localStorage.setItem(QUOTES_KEY, JSON.stringify(updated));
    return newQuote;
  },

  updateQuoteStatus(id: string, status: QuoteRequest['status']): QuoteRequest | null {
    const quotes = this.getQuoteRequests();
    const index = quotes.findIndex(q => q.id === id);
    if (index === -1) return null;

    quotes[index].status = status;
    localStorage.setItem(QUOTES_KEY, JSON.stringify(quotes));
    return quotes[index];
  },

  deleteQuoteRequest(id: string): boolean {
    const quotes = this.getQuoteRequests();
    const filtered = quotes.filter(q => q.id !== id);
    localStorage.setItem(QUOTES_KEY, JSON.stringify(filtered));
    return true;
  },

  // CONTACT ENQUIRIES
  getEnquiries(): ContactEnquiry[] {
    try {
      const stored = localStorage.getItem(ENQUIRIES_KEY);
      if (!stored) {
        localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(seedEnquiries));
        return seedEnquiries;
      }
      return JSON.parse(stored);
    } catch {
      return seedEnquiries;
    }
  },

  submitEnquiry(data: Omit<ContactEnquiry, 'id' | 'status' | 'createdAt'>): ContactEnquiry {
    const enquiries = this.getEnquiries();
    const newEnquiry: ContactEnquiry = {
      ...data,
      id: `enq-${Date.now()}`,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    const updated = [newEnquiry, ...enquiries];
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(updated));
    return newEnquiry;
  },

  updateEnquiryStatus(id: string, status: ContactEnquiry['status']): ContactEnquiry | null {
    const enquiries = this.getEnquiries();
    const index = enquiries.findIndex(e => e.id === id);
    if (index === -1) return null;

    enquiries[index].status = status;
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(enquiries));
    return enquiries[index];
  },

  deleteEnquiry(id: string): boolean {
    const enquiries = this.getEnquiries();
    const filtered = enquiries.filter(e => e.id !== id);
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(filtered));
    return true;
  },

  // EXPORT UTILITIES
  exportQuotesCSV(): void {
    const quotes = this.getQuoteRequests();
    const headers = ['Reference Number', 'Full Name', 'Company Name', 'Email', 'Phone', 'Product Model', 'Quantity', 'Application', 'Power Option', 'Status', 'Date', 'Requirements'];
    
    const rows = quotes.map(q => [
      q.referenceNumber,
      `"${q.fullName.replace(/"/g, '""')}"`,
      `"${q.companyName.replace(/"/g, '""')}"`,
      q.email,
      q.phone,
      q.productModel,
      q.requiredQuantity,
      `"${q.application.replace(/"/g, '""')}"`,
      `"${q.powerOption.replace(/"/g, '""')}"`,
      q.status,
      new Date(q.createdAt).toLocaleDateString(),
      `"${(q.technicalRequirements || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Aaditya_Quote_Requests_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  exportEnquiriesCSV(): void {
    const enquiries = this.getEnquiries();
    const headers = ['Enquiry ID', 'Full Name', 'Email', 'Phone', 'Category', 'Subject', 'Status', 'Date', 'Message'];
    
    const rows = enquiries.map(e => [
      e.id,
      `"${e.fullName.replace(/"/g, '""')}"`,
      e.email,
      e.phone,
      e.category,
      `"${e.subject.replace(/"/g, '""')}"`,
      e.status,
      new Date(e.createdAt).toLocaleDateString(),
      `"${e.message.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Aaditya_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

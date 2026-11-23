import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  FileText, 
  ArrowRight, 
  Lock,
  ChevronRight
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { categories } from '../../data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 font-heading relative overflow-hidden transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand & Verification Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 p-0.5 border border-brand-400 shadow-sm">
                <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-700" viewBox="0 0 100 100" fill="none">
                    <path d="M22 68H78C81 68 83 66 83 63V58C83 55 81 53 78 53H68V38C68 31.3726 62.6274 26 56 26H28C24.6863 26 22 28.6863 22 32V68Z" fill="#f3e8ff" stroke="currentColor" strokeWidth="4"/>
                    <line x1="36" y1="48" x2="36" y2="62" stroke="#475569" strokeWidth="4"/>
                    <ellipse cx="76" cy="38" rx="4" ry="9" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="2.5"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl text-slate-900 tracking-tight font-heading">
                  AADITYA <span className="text-brand-600">SHILAI</span> MACHINE
                </span>
                <p className="text-xs text-brand-700 font-mono font-medium">
                  Kolhapur, Maharashtra{' '}
                  <span className="font-caveat text-sm text-brand-700 font-bold">~ Since 2005</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              Established in 2005. Western India's premier specialist in industrial heavy-duty umbrella sewing machines, computerized lockstitch units, zig-zag embroidery systems, overlock machines, and certified machinery overhaul services.
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-2.5 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-slate-900">ISO 9001:2015</span>
                  <span className="text-[10px] text-slate-500">Quality Certified Hub</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center space-x-2.5 shadow-sm">
                <Award className="w-5 h-5 text-brand-600 shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-slate-900">Since 2005</span>
                  <span className="text-[10px] text-slate-500">2,500+ Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Quote Action Box */}
            <div className="pt-2">
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-700 hover:text-white bg-purple-50 hover:bg-brand-600 border border-purple-200 px-3.5 py-2 rounded-lg transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-brand-600 group-hover:text-white" />
                <span>Submit Detailed RFQ / Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Column 3: Machinery Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold border-b border-slate-200 pb-2">
              Machinery Families
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/category/${cat.slug}`}
                    className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-500" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-xs text-brand-700 hover:underline inline-block pt-1 font-semibold">
                  View All Models &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Engineering Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold border-b border-slate-200 pb-2">
              Company & Technical
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>About Our Legacy</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>Manufacturing Capabilities</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>Industries Served</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>7-Stage Quality Standards</span>
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>Plant Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>Factory & Machine Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-brand-700 transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-brand-500" />
                  <span>Contact & Factory Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Factory Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold border-b border-slate-200 pb-2">
              Factory Location
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Kolhapur Facility</strong>
                  <span className="text-xs leading-relaxed text-slate-600">
                    Opposite Kalamba Jail, Kalamba Road, Kolhapur - 416007, Maharashtra, India
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-brand-700 font-mono text-xs font-semibold text-slate-800">
                    {companyInfo.contact.primaryPhone}
                  </a>
                  <span className="text-[10px] text-slate-500 block font-sans">Direct Engineering Desk</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-brand-700 text-xs truncate max-w-[210px] text-slate-800 font-medium">
                  {companyInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start space-x-3 pt-1 border-t border-slate-200">
                <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-slate-800 font-medium">Mon - Sat: 9:00 AM - 8:30 PM</span>
                  <span className="text-slate-500 block text-[11px]">Sunday by Emergency Request</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Aaditya Shilai Machine. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 font-mono text-[11px]">
            <span>ENGINEERING &bull; INDUSTRIAL SEWING &bull; REPAIR</span>
            <span className="text-slate-300">|</span>
            <Link to="/admin/login" className="flex items-center space-x-1 text-slate-500 hover:text-brand-700 transition-colors">
              <Lock className="w-3 h-3" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

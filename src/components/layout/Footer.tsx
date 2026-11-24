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
    <footer className="bg-[#2A1A0E] text-[#E8D4BE] font-heading relative overflow-hidden transition-colors duration-300 border-t border-[#4D3420]">
      {/* Decorative subtle ambient pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4AE52_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1 & 2: Brand & Verification Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-[14px] bg-[#1E1108] p-1 border border-[#4D3420] shadow-sm">
                <div className="w-full h-full bg-[#D4621A] rounded-[10px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#F4AE52]" viewBox="0 0 100 100" fill="none">
                    <path d="M22 68H78C81 68 83 66 83 63V58C83 55 81 53 78 53H68V38C68 31.3726 62.6274 26 56 26H28C24.6863 26 22 28.6863 22 32V68Z" fill="#382212" stroke="#F4AE52" strokeWidth="4" />
                    <line x1="36" y1="48" x2="36" y2="62" stroke="#F0DEC9" strokeWidth="4" />
                    <ellipse cx="76" cy="38" rx="4" ry="9" fill="#D4621A" stroke="#F4AE52" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight font-heading">
                  NOVEL <span className="text-[#D4621A]">SEWING</span> MACHINE
                </span>
                <p className="text-xs text-[#D4621A] font-mono font-medium">
                  Kolhapur, Maharashtra{' '}
                  <span className="font-caveat text-sm text-[#F4AE52] font-bold">~ Since 2005</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-[#E8D4BE]/80 font-sans leading-relaxed">
              Established in 2005. Western India's premier specialist in industrial heavy-duty umbrella sewing machines, computerized lockstitch units, zig-zag embroidery systems, overlock machines, and certified machinery overhaul services.
            </p>

            {/* Quality Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#382212]/80 border border-[#4D3420] rounded-2xl p-3 flex items-center space-x-2.5 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#F4AE52] shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-white">ISO 9001:2015</span>
                  <span className="text-[10px] text-[#E8D4BE]/70">Quality Certified Hub</span>
                </div>
              </div>

              <div className="bg-[#382212]/80 border border-[#4D3420] rounded-2xl p-3 flex items-center space-x-2.5 shadow-sm">
                <Award className="w-5 h-5 text-[#F4AE52] shrink-0" />
                <div className="text-xs">
                  <span className="block font-semibold text-white">Since 2005</span>
                  <span className="text-[10px] text-[#E8D4BE]/70">2,500+ Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Quote Action Box */}
            <div className="pt-2">
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#D4621A] bg-[#F4AE52] hover:bg-[#bbf058] px-5 py-2.5 rounded-full transition-all shadow-md font-sans"
              >
                <FileText className="w-4 h-4 text-[#D4621A]" />
                <span>Submit Detailed RFQ / Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Column 3: Machinery Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4AE52] font-bold border-b border-[#4D3420] pb-2">
              Machinery Families
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/category/${cat.slug}`}
                    className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products" className="text-xs text-[#F4AE52] hover:underline inline-block pt-1 font-semibold">
                  View All Models &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Engineering Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4AE52] font-bold border-b border-[#4D3420] pb-2">
              Company & Technical
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>About Our Legacy</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>Manufacturing Capabilities</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>Industries Served</span>
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>7-Stage Quality Standards</span>
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>Plant Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>Factory & Machine Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#E8D4BE]/80 hover:text-white transition-colors flex items-center space-x-1.5">
                  <ChevronRight className="w-3 h-3 text-[#F4AE52]" />
                  <span>Contact & Factory Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Factory Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F4AE52] font-bold border-b border-[#4D3420] pb-2">
              Factory Location
            </h4>
            <div className="space-y-3 text-sm text-[#E8D4BE]/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#F4AE52] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Kolhapur Facility</strong>
                  <span className="text-xs leading-relaxed text-[#E8D4BE]/70">
                    Industrial Machinery Hub, Kolhapur - 416007, Maharashtra, India
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#F4AE52] shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#F4AE52] font-mono text-xs font-semibold text-white">
                    {companyInfo.contact.primaryPhone}
                  </a>
                  <span className="text-[10px] text-[#E8D4BE]/60 block font-sans">Direct Engineering Desk</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#F4AE52] shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-[#F4AE52] text-xs truncate max-w-[210px] text-white font-medium">
                  {companyInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start space-x-3 pt-1 border-t border-[#4D3420]">
                <Clock className="w-4 h-4 text-[#F4AE52] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-white font-medium">Mon - Sat: 9:00 AM - 8:30 PM</span>
                  <span className="text-[#E8D4BE]/60 block text-[11px]">Sunday by Emergency Request</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="mt-12 pt-6 border-t border-[#4D3420] flex flex-col md:flex-row items-center justify-between text-xs text-[#E8D4BE]/60 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Novel Sewing Machine Co. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 font-mono text-[11px]">
            <span>ENGINEERING &bull; INDUSTRIAL SEWING &bull; REPAIR</span>
            <span className="text-[#4D3420]">|</span>
            <Link to="/admin/login" className="flex items-center space-x-1 text-[#E8D4BE]/60 hover:text-[#F4AE52] transition-colors">
              <Lock className="w-3 h-3" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

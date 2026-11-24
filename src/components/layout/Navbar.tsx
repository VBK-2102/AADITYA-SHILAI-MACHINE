import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  FileText,
  Lock,
  Factory,
  ShieldCheck,
  Building2,
  Briefcase,
  Image as ImageIcon
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { categories } from '../../data/categories';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
    setCapabilitiesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isCapabilitiesActive = () => {
    return (
      location.pathname.startsWith('/manufacturing') ||
      location.pathname.startsWith('/quality') ||
      location.pathname.startsWith('/infrastructure') ||
      location.pathname.startsWith('/industries') ||
      location.pathname.startsWith('/gallery')
    );
  };

  return (
    <>
        {/* Main Navigation Bar: Warm Beige Background (#FEF3E2) */}
      <nav
        className={`sticky top-0 z-50 font-heading transition-all duration-300 ${scrolled
            ? 'bg-[#FEF3E2]/95 backdrop-blur-md border-b border-[#E8D4BE] shadow-sm'
            : 'bg-[#FEF3E2] border-b border-[#E8D4BE]/80'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative w-11 h-11 rounded-[14px] bg-white p-1 border border-[#E8D4BE] shadow-sm group-hover:border-[#D4621A] transition-all duration-300">
                      <div className="w-full h-full bg-[#FAF0E0] rounded-[10px] flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#D4621A] group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
                          <path d="M22 68H78C81 68 83 66 83 63V58C83 55 81 53 78 53H68V38C68 31.3726 62.6274 26 56 26H28C24.6863 26 22 28.6863 22 32V68Z" fill="#FEF3E2" stroke="#D4621A" strokeWidth="4" strokeLinejoin="round" />
                          <line x1="36" y1="48" x2="36" y2="62" stroke="#5C4533" strokeWidth="4" strokeLinecap="round" />
                          <polygon points="36,66 32,59 40,59" fill="#D4621A" />
                          <ellipse cx="76" cy="38" rx="4" ry="9" fill="#F4AE52" stroke="#D4621A" strokeWidth="2.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#2A1A0E] group-hover:text-[#D4621A] transition-colors font-heading">
                          AADITYA <span className="text-[#D4621A]">SHILAI</span> MACHINE
                        </span>
                          <span className="text-[10px] font-mono tracking-wider text-[#5C4533] -mt-0.5 flex items-center space-x-1.5">
                            <span className="text-[#D4621A] font-semibold">PRECISION INDUSTRIAL MACHINERY</span>
                            <span className="font-caveat text-sm text-[#F4AE52] font-bold hidden xl:inline">~ Precision Craftsmanship</span>
                          </span>
                        </div>
                      </Link>

                      {/* Desktop Navigation Links */}
                      <div className="hidden lg:flex items-center space-x-1.5">
                        <Link
                          to="/"
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive('/') && location.pathname === '/'
                            ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold'
                            : 'text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FAF0E0]/70'
                            }`}
                        >
                          Home
                        </Link>

                        {/* Machinery Dropdown */}
                        <div
                          className="relative"
                          onMouseEnter={() => setProductsOpen(true)}
                          onMouseLeave={() => setProductsOpen(false)}
                        >
                          <Link
                            to="/products"
                            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 transition-all duration-200 ${isActive('/products') || isActive('/categories')
                              ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold'
                              : 'text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FAF0E0]/70'
                              }`}
                          >
                            <span>Machinery</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#D4621A]' : ''}`} />
                          </Link>

                          {productsOpen && (
                            <div className="absolute top-full left-0 w-80 bg-white border border-[#E8D4BE] rounded-[24px] shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4621A] px-3 py-1.5 border-b border-[#F0DEC9] flex justify-between items-center font-bold">
                                <span>Machinery Families</span>
                                <Link to="/categories" className="text-[#D4621A] hover:text-[#D4621A] lowercase text-[10px] font-sans underline">view all</Link>
                              </div>
                              <div className="mt-2 space-y-1">
                                {categories.slice(0, 6).map((cat) => (
                                  <Link
                                    key={cat.id}
                                    to={`/products/category/${cat.slug}`}
                                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FEF3E2] border border-transparent hover:border-[#E8D4BE] transition-colors"
                                  >
                                    <span className="font-medium">{cat.name}</span>
                                    <span className="text-[10px] font-mono text-[#D4621A] bg-[#FAF0E0] px-2 py-0.5 rounded-full border border-[#E8D4BE]">
                                      {cat.productCount} models
                                    </span>
                                  </Link>
                                ))}
                              </div>
                              <div className="pt-2 mt-2 border-t border-[#F0DEC9] flex items-center justify-between px-2">
                                <Link to="/products" className="text-xs text-[#D4621A] hover:text-[#382212] font-semibold flex items-center space-x-1">
                                  <span>Browse Complete Catalogue &rarr;</span>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Capabilities Dropdown */}
                        <div
                          className="relative"
                          onMouseEnter={() => setCapabilitiesOpen(true)}
                          onMouseLeave={() => setCapabilitiesOpen(false)}
                        >
                          <button
                            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 transition-all duration-200 ${isCapabilitiesActive()
                              ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold'
                              : 'text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FAF0E0]/70'
                              }`}
                          >
                            <span>Capabilities</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${capabilitiesOpen ? 'rotate-180 text-[#D4621A]' : ''}`} />
                          </button>

                          {capabilitiesOpen && (
                            <div className="absolute top-full left-0 w-64 bg-white border border-[#E8D4BE] rounded-[24px] shadow-xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                              <div className="space-y-1">
                                <Link
                                  to="/manufacturing"
                                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FEF3E2] transition-colors"
                                >
                                  <Factory className="w-4 h-4 text-[#D4621A]" />
                                  <div>
                                    <span className="font-semibold block text-[#2A1A0E]">Manufacturing</span>
                                    <span className="text-[10px] text-[#5C4533] block font-mono">6-Phase Tooling Pipeline</span>
                                  </div>
                                </Link>

                                <Link
                                  to="/quality"
                                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FEF3E2] transition-colors"
                                >
                                  <ShieldCheck className="w-4 h-4 text-[#D4621A]" />
                                  <div>
                                    <span className="font-semibold block text-[#2A1A0E]">Quality Assurance</span>
                                    <span className="text-[10px] text-[#5C4533] block font-mono">7-Stage QC Protocol</span>
                                  </div>
                                </Link>

                                <Link
                                  to="/infrastructure"
                                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FEF3E2] transition-colors"
                                >
                                  <Building2 className="w-4 h-4 text-[#D4621A]" />
                                  <div>
                                    <span className="font-semibold block text-[#2A1A0E]">Plant Infrastructure</span>
                                    <span className="text-[10px] text-[#5C4533] block font-mono">15,000 Sq. Ft. Facility</span>
                                  </div>
                                </Link>

                                <Link
                                  to="/industries"
                                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FEF3E2] transition-colors"
                                >
                                  <Briefcase className="w-4 h-4 text-[#D4621A]" />
                                  <div>
                                    <span className="font-semibold block text-[#2A1A0E]">Industries Served</span>
                                    <span className="text-[10px] text-[#5C4533] block font-mono">Commercial Sectors</span>
                                  </div>
                                </Link>

                                <Link
                                  to="/gallery"
                                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FEF3E2] transition-colors"
                                >
                                  <ImageIcon className="w-4 h-4 text-[#D4621A]" />
                                  <div>
                                    <span className="font-semibold block text-[#2A1A0E]">Factory Gallery</span>
                                    <span className="text-[10px] text-[#5C4533] block font-mono">Machinery & Plants</span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>

                        <Link
                          to="/about"
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive('/about')
                            ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold'
                            : 'text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FAF0E0]/70'
                            }`}
                        >
                          About Us
                        </Link>

                        <Link
                          to="/contact"
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive('/contact')
                            ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold'
                            : 'text-[#2A1A0E] hover:text-[#D4621A] hover:bg-[#FAF0E0]/70'
                            }`}
                        >
                          Contact
                        </Link>
                      </div>

                      {/* Right Action: Request a Quote CTA */}
                      <div className="hidden lg:flex items-center space-x-3">
                        <a
                          href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`}
                          className="flex items-center space-x-1.5 text-xs font-mono text-[#2A1A0E] hover:text-[#D4621A] px-3.5 py-2 rounded-full border border-[#E8D4BE] bg-white transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#D4621A]" />
                          <span>{companyInfo.contact.primaryPhone}</span>
                        </a>
                        <Link
                          to="/request-quote"
                          className="btn-metallic text-white font-semibold text-sm px-6 py-2.5 rounded-full flex items-center space-x-2 shadow-md hover:shadow-lg transition-all"
                        >
                          <FileText className="w-4 h-4 text-[#F4AE52]" />
                          <span>Request a Quote</span>
                        </Link>
                      </div>

                      {/* Mobile menu button */}
                      <div className="flex lg:hidden items-center space-x-2">
                        <Link
                          to="/request-quote"
                          className="btn-metallic text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center space-x-1"
                        >
                          <span>RFQ</span>
                        </Link>
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="p-2 rounded-xl bg-white border border-[#E8D4BE] text-[#2A1A0E] hover:text-[#D4621A]"
                          aria-label="Toggle navigation menu"
                        >
                          {isOpen ? <X className="w-6 h-6 text-[#D4621A]" /> : <Menu className="w-6 h-6" />}
                        </button>
                      </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu: Warm Ivory Surface */}
                {isOpen && (
                  <div className="lg:hidden bg-[#FEF3E2] border-b border-[#E8D4BE] px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-xl">
                    <Link
                      to="/"
                      className={`block px-3.5 py-2.5 rounded-2xl text-base font-medium ${isActive('/') && location.pathname === '/' ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold' : 'text-[#2A1A0E] hover:bg-[#FAF0E0]'
                        }`}
                    >
                      Home
                    </Link>

                    <Link
                      to="/products"
                      className={`block px-3.5 py-2.5 rounded-2xl text-base font-medium ${isActive('/products') ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold' : 'text-[#2A1A0E] hover:bg-[#FAF0E0]'
                        }`}
                    >
                      Machinery Catalogue
                    </Link>

                    <div className="pl-3 py-1 space-y-1 border-l-2 border-[#E8D4BE] ml-2">
                      <Link to="/manufacturing" className="block px-3 py-1.5 text-xs text-[#5C4533] hover:text-[#D4621A] font-medium">
                        &bull; Manufacturing Capabilities
                      </Link>
                      <Link to="/quality" className="block px-3 py-1.5 text-xs text-[#5C4533] hover:text-[#D4621A] font-medium">
                        &bull; Quality Assurance
                      </Link>
                      <Link to="/infrastructure" className="block px-3 py-1.5 text-xs text-[#5C4533] hover:text-[#D4621A] font-medium">
                        &bull; Plant Infrastructure
                      </Link>
                      <Link to="/industries" className="block px-3 py-1.5 text-xs text-[#5C4533] hover:text-[#D4621A] font-medium">
                        &bull; Industries Served
                      </Link>
                      <Link to="/gallery" className="block px-3 py-1.5 text-xs text-[#5C4533] hover:text-[#D4621A] font-medium">
                        &bull; Machinery Gallery
                      </Link>
                    </div>

                    <Link
                      to="/about"
                      className={`block px-3.5 py-2.5 rounded-2xl text-base font-medium ${isActive('/about') ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold' : 'text-[#2A1A0E] hover:bg-[#FAF0E0]'
                        }`}
                    >
                      About Us
                    </Link>

                    <Link
                      to="/contact"
                      className={`block px-3.5 py-2.5 rounded-2xl text-base font-medium ${isActive('/contact') ? 'text-[#D4621A] bg-[#FAF0E0] border border-[#E8D4BE] font-semibold' : 'text-[#2A1A0E] hover:bg-[#FAF0E0]'
                        }`}
                    >
                      Contact & Location
                    </Link>

                    <div className="pt-4 border-t border-[#E8D4BE] space-y-3">
                      <Link
                        to="/request-quote"
                        className="w-full btn-metallic text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center space-x-2 text-center"
                      >
                        <FileText className="w-5 h-5 text-[#F4AE52]" />
                        <span>Submit Quotation Request</span>
                      </Link>
                      <a
                        href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`}
                        className="w-full btn-dark-metallic py-2.5 px-4 rounded-full flex items-center justify-center space-x-2 text-sm text-center font-medium"
                      >
                        <Phone className="w-4 h-4 text-[#D4621A]" />
                        <span>Call: {companyInfo.contact.primaryPhone}</span>
                      </a>
                      <div className="text-center pt-2">
                        <Link to="/admin/login" className="text-xs text-[#5C4533] hover:text-[#D4621A] flex items-center justify-center space-x-1">
                          <Lock className="w-3 h-3" />
                          <span>Admin Management Login</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            </>
            );
};

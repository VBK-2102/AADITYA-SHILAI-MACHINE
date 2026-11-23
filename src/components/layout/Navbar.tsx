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
      {/* Top Engineering Micro-Bar with smooth transition (Clean Light Slate) */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-600 py-1.5 px-4 sm:px-6 hidden md:block transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-brand-700 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm"></span>
              <span>EST. 2005 &bull; KOLHAPUR MANUFACTURING & REPAIR HUB</span>
            </span>
            <span className="text-slate-500">
              Opp. Kalamba Jail, Kalamba Road, Kolhapur
            </span>
          </div>

          <div className="flex items-center space-x-5 font-mono">
            <a 
              href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1.5 text-slate-800 hover:text-brand-700 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{companyInfo.contact.primaryPhone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <Link 
              to="/admin/login" 
              className="flex items-center space-x-1 text-slate-600 hover:text-brand-700 transition-colors"
              title="Staff & Management Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with background transition (White Background) */}
      <nav 
        className={`sticky top-0 z-50 font-heading transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md' 
            : 'bg-white border-b border-slate-200/80 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 rounded-lg bg-purple-50 p-0.5 border border-brand-400 shadow-sm group-hover:border-brand-600 transition-all duration-300">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <svg className="w-7 h-7 text-brand-700 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="none">
                    <path d="M22 68H78C81 68 83 66 83 63V58C83 55 81 53 78 53H68V38C68 31.3726 62.6274 26 56 26H28C24.6863 26 22 28.6863 22 32V68Z" fill="#f3e8ff" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                    <line x1="36" y1="48" x2="36" y2="62" stroke="#475569" strokeWidth="4" strokeLinecap="round"/>
                    <polygon points="36,66 32,59 40,59" fill="#475569"/>
                    <ellipse cx="76" cy="38" rx="4" ry="9" fill="#e9d5ff" stroke="#7e22ce" strokeWidth="2.5"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors font-heading">
                  AADITYA <span className="text-brand-600">SHILAI</span> MACHINE
                </span>
                <span className="text-[10px] font-mono tracking-wider text-slate-500 -mt-0.5 flex items-center space-x-1.5">
                  <span className="text-brand-700 font-semibold">PRECISION INDUSTRIAL MACHINERY</span>
                  <span className="font-caveat text-sm text-brand-700 font-bold hidden xl:inline">~ Kolhapur Original</span>
                </span>
              </div>
            </Link>

            {/* Reduced, Clean Desktop Navigation Links (5 concise items) */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
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
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-all duration-200 ${
                    isActive('/products') || isActive('/categories')
                      ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>Machinery</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-brand-600' : ''}`} />
                </Link>

                {productsOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-brand-700 px-3 py-1.5 border-b border-slate-100 flex justify-between items-center font-bold">
                      <span>Machinery Families</span>
                      <Link to="/categories" className="text-slate-600 hover:text-brand-700 lowercase text-[10px] underline">all</Link>
                    </div>
                    <div className="mt-2 space-y-1">
                      {categories.slice(0, 6).map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/products/category/${cat.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-700 hover:text-brand-800 hover:bg-purple-50 border border-transparent hover:border-purple-200 transition-colors"
                        >
                          <span className="font-medium">{cat.name}</span>
                          <span className="text-[10px] font-mono text-brand-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                            {cat.productCount} models
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between px-2">
                      <Link to="/products" className="text-xs text-brand-700 hover:text-brand-900 font-semibold flex items-center space-x-1">
                        <span>Browse Full Catalogue &rarr;</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Capabilities Dropdown (Grouping Manufacturing, Quality, Infrastructure, Industries, Gallery) */}
              <div 
                className="relative"
                onMouseEnter={() => setCapabilitiesOpen(true)}
                onMouseLeave={() => setCapabilitiesOpen(false)}
              >
                <button
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-all duration-200 ${
                    isCapabilitiesActive()
                      ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span>Capabilities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${capabilitiesOpen ? 'rotate-180 text-brand-600' : ''}`} />
                </button>

                {capabilitiesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="space-y-1">
                      <Link
                        to="/manufacturing"
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-slate-700 hover:text-brand-800 hover:bg-purple-50 transition-colors"
                      >
                        <Factory className="w-4 h-4 text-brand-600" />
                        <div>
                          <span className="font-semibold block text-slate-900">Manufacturing</span>
                          <span className="text-[10px] text-slate-500 block font-mono">6-Phase Tooling Pipeline</span>
                        </div>
                      </Link>

                      <Link
                        to="/quality"
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-slate-700 hover:text-brand-800 hover:bg-purple-50 transition-colors"
                      >
                        <ShieldCheck className="w-4 h-4 text-brand-600" />
                        <div>
                          <span className="font-semibold block text-slate-900">Quality Assurance</span>
                          <span className="text-[10px] text-slate-500 block font-mono">7-Stage QC Protocol</span>
                        </div>
                      </Link>

                      <Link
                        to="/infrastructure"
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-slate-700 hover:text-brand-800 hover:bg-purple-50 transition-colors"
                      >
                        <Building2 className="w-4 h-4 text-brand-600" />
                        <div>
                          <span className="font-semibold block text-slate-900">Plant Infrastructure</span>
                          <span className="text-[10px] text-slate-500 block font-mono">15,000 Sq. Ft. Facility</span>
                        </div>
                      </Link>

                      <Link
                        to="/industries"
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-slate-700 hover:text-brand-800 hover:bg-purple-50 transition-colors"
                      >
                        <Briefcase className="w-4 h-4 text-brand-600" />
                        <div>
                          <span className="font-semibold block text-slate-900">Industries Served</span>
                          <span className="text-[10px] text-slate-500 block font-mono">Commercial Sectors</span>
                        </div>
                      </Link>

                      <Link
                        to="/gallery"
                        className="flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs text-slate-700 hover:text-brand-800 hover:bg-purple-50 transition-colors"
                      >
                        <ImageIcon className="w-4 h-4 text-brand-600" />
                        <div>
                          <span className="font-semibold block text-slate-900">Factory Gallery</span>
                          <span className="text-[10px] text-slate-500 block font-mono">Machinery & Plants</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/about')
                    ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive('/contact')
                    ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Right Action: Request a Quote CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/request-quote"
                className="btn-metallic text-white font-semibold text-sm px-5 py-2.5 rounded-lg flex items-center space-x-2 shadow-md hover:shadow-lg"
              >
                <FileText className="w-4 h-4 text-purple-100" />
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Link
                to="/request-quote"
                className="btn-metallic text-white text-xs font-semibold px-3 py-1.5 rounded-md flex items-center space-x-1"
              >
                <span>RFQ</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6 text-brand-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Reduced & Clean White) */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <Link
              to="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/') && location.pathname === '/' ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/products"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/products') ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Machinery Catalogue
            </Link>

            <div className="pl-3 py-1 space-y-1 border-l-2 border-purple-200 ml-2">
              <Link to="/manufacturing" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-700 font-medium">
                &bull; Manufacturing Capabilities
              </Link>
              <Link to="/quality" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-700 font-medium">
                &bull; Quality Assurance
              </Link>
              <Link to="/infrastructure" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-700 font-medium">
                &bull; Plant Infrastructure
              </Link>
              <Link to="/industries" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-700 font-medium">
                &bull; Industries Served
              </Link>
              <Link to="/gallery" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-brand-700 font-medium">
                &bull; Machinery Gallery
              </Link>
            </div>

            <Link
              to="/about"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/about') ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive('/contact') ? 'text-brand-700 bg-purple-50 border border-purple-200 font-semibold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Contact & Location
            </Link>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link
                to="/request-quote"
                className="w-full btn-metallic text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-center"
              >
                <FileText className="w-5 h-5 text-purple-100" />
                <span>Submit Quotation Request</span>
              </Link>
              <a
                href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full btn-dark-metallic py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm text-center font-medium"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call: {companyInfo.contact.primaryPhone}</span>
              </a>
              <div className="text-center pt-2">
                <Link to="/admin/login" className="text-xs text-slate-500 hover:text-brand-700 flex items-center justify-center space-x-1">
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

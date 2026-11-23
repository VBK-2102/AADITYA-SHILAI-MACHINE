import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { BackToTop } from './components/common/BackToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Lazy loaded pages for performance & code-splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage').then(m => ({ default: m.CategoriesPage })));
const CategoryDetailPage = lazy(() => import('./pages/CategoryDetailPage').then(m => ({ default: m.CategoryDetailPage })));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage').then(m => ({ default: m.ManufacturingPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const QualityPage = lazy(() => import('./pages/QualityPage').then(m => ({ default: m.QualityPage })));
const InfrastructurePage = lazy(() => import('./pages/InfrastructurePage').then(m => ({ default: m.InfrastructurePage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const RequestQuotePage = lazy(() => import('./pages/RequestQuotePage').then(m => ({ default: m.RequestQuotePage })));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage').then(m => ({ default: m.AdminLoginPage })));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage').then(m => ({ default: m.AdminDashboardPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Industrial Loading Fallback
const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shadow-md animate-pulse">
      <svg className="w-6 h-6 text-brand-600 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
    <span className="text-xs font-mono text-brand-700 tracking-wider uppercase font-semibold">
      Loading Engineering Data...
    </span>
  </div>
);

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-600 selection:text-white relative">
      <ScrollProgressBar />
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      <main className="flex-1 relative z-10">
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/products/category/:categorySlug" element={<CategoryDetailPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            
            {/* Admin portal */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {!isAdminRoute && <Footer />}
      <BackToTop />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  FileText, 
  Package, 
  MessageSquare, 
  Download, 
  Plus, 
  Trash2, 
  Edit3, 
  RotateCcw, 
  LogOut, 
  Eye, 
  Search, 
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { storage } from '../services/storage';
import { Product, QuoteRequest, ContactEnquiry } from '../types';
import { categories } from '../data/categories';

export const AdminDashboardPage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect if unauthenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const [activeTab, setActiveTab] = useState<'quotes' | 'enquiries' | 'products'>('quotes');

  // State data
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [enquiries, setEnquiries] = useState<ContactEnquiry[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);

  // Filter states
  const [quoteFilter, setQuoteFilter] = useState<string>('all');
  const [enquiryFilter, setEnquiryFilter] = useState<string>('all');
  const [productSearch, setProductSearch] = useState<string>('');

  // Selected Quote for Details Modal
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  // Product Editing / Creation Modal
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  // Load data
  const loadData = () => {
    setQuotes(storage.getQuoteRequests());
    setEnquiries(storage.getEnquiries());
    setProductList(storage.getProducts());
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!isAuthenticated) return null;

  // Handlers for Quotes
  const handleUpdateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    storage.updateQuoteStatus(id, status);
    loadData();
    if (selectedQuote && selectedQuote.id === id) {
      setSelectedQuote({ ...selectedQuote, status });
    }
  };

  const handleDeleteQuote = (id: string) => {
    if (confirm('Are you sure you want to delete this quote request?')) {
      storage.deleteQuoteRequest(id);
      loadData();
      if (selectedQuote?.id === id) setSelectedQuote(null);
    }
  };

  // Handlers for Enquiries
  const handleUpdateEnquiryStatus = (id: string, status: ContactEnquiry['status']) => {
    storage.updateEnquiryStatus(id, status);
    loadData();
  };

  const handleDeleteEnquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      storage.deleteEnquiry(id);
      loadData();
    }
  };

  // Handlers for Products
  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to remove this product from the catalogue?')) {
      storage.deleteProduct(id);
      loadData();
    }
  };

  const handleSaveProduct = (product: Product) => {
    storage.saveProduct(product);
    setEditingProduct(null);
    setIsNewProductModalOpen(false);
    loadData();
  };

  const handleResetCatalogue = () => {
    if (confirm('Reset entire catalogue to factory default configuration? All modifications will be restored.')) {
      storage.resetProducts();
      loadData();
    }
  };

  // Filtered views
  const filteredQuotes = quoteFilter === 'all'
    ? quotes
    : quotes.filter(q => q.status === quoteFilter);

  const filteredEnquiries = enquiryFilter === 'all'
    ? enquiries
    : enquiries.filter(e => e.status === enquiryFilter);

  const filteredProducts = productList.filter(p => 
    p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.modelNumber.toLowerCase().includes(productSearch.toLowerCase())
  );

  return (
    <div className="bg-transparent min-h-screen text-[#2A1A0E] pb-20">
      
      {/* Admin Top Navigation */}
      <header className="bg-white border-b border-[#E8D4BE] py-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-extrabold text-[#2A1A0E] text-lg font-display">
              NOVEL <span className="text-[#D4621A]">ADMIN</span> PORTAL
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-[#D4621A] bg-[#FAF0E0] px-2.5 py-1 rounded-full border border-[#E8D4BE] font-semibold">
              Operations Desk
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              target="_blank"
              className="text-xs font-mono text-[#5C4533] hover:text-[#2A1A0E] flex items-center space-x-1"
            >
              <span>Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => {
                logout();
                navigate('/admin/login');
              }}
              className="bg-[#FAF0E0] hover:bg-rose-50 text-rose-700 border border-[#E8D4BE] text-xs px-3 py-1.5 rounded-lg flex items-center space-x-1 font-semibold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        
        {/* Overview Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="bg-white border border-[#E8D4BE] p-5 rounded-2xl space-y-1 shadow-sm">
            <span className="text-xs text-[#5C4533] uppercase font-medium">Total Quote Requests (RFQ)</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-[#2A1A0E]">{quotes.length}</span>
              <FileText className="w-6 h-6 text-brand-700" />
            </div>
            <span className="text-[11px] text-amber-700 font-semibold block">
              {quotes.filter(q => q.status === 'pending').length} Pending Action
            </span>
          </div>

          <div className="bg-white border border-[#E8D4BE] p-5 rounded-2xl space-y-1 shadow-sm">
            <span className="text-xs text-[#5C4533] uppercase font-medium">Contact Enquiries</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-[#2A1A0E]">{enquiries.length}</span>
              <MessageSquare className="w-6 h-6 text-brand-700" />
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold block">
              {enquiries.filter(e => e.status === 'new').length} New Unread Messages
            </span>
          </div>

          <div className="bg-white border border-[#E8D4BE] p-5 rounded-2xl space-y-1 shadow-sm">
            <span className="text-xs text-[#5C4533] uppercase font-medium">Active Machinery Models</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-[#2A1A0E]">{productList.length}</span>
              <Package className="w-6 h-6 text-brand-700" />
            </div>
            <span className="text-[11px] text-brand-700 font-semibold block">Across 8 Specialized Categories</span>
          </div>

          <div className="bg-white border border-[#E8D4BE] p-5 rounded-2xl space-y-1 shadow-sm">
            <span className="text-xs text-[#5C4533] uppercase font-medium">System Status</span>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-emerald-700">Online</span>
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="text-[11px] text-[#5C4533] block font-mono">
              Central Ledger Synchronized
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center space-x-2 border-b border-[#E8D4BE] pb-4">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'quotes'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-[#5C4533] hover:text-[#2A1A0E] border border-[#E8D4BE] shadow-sm'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Quote Requests ({quotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'enquiries'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-[#5C4533] hover:text-[#2A1A0E] border border-[#E8D4BE] shadow-sm'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Messages ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'products'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-[#5C4533] hover:text-[#2A1A0E] border border-[#E8D4BE] shadow-sm'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Machinery Catalogue ({productList.length})</span>
          </button>
        </div>

        {/* TAB 1: QUOTE REQUESTS */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E8D4BE] shadow-sm">
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className="text-[#5C4533]">Filter Status:</span>
                {['all', 'pending', 'in_review', 'quoted', 'closed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setQuoteFilter(st)}
                    className={`px-2.5 py-1 rounded capitalize ${
                      quoteFilter === st
                        ? 'bg-brand-600 text-white font-bold'
                        : 'bg-[#FAF0E0] text-[#5C4533] hover:text-[#2A1A0E] border border-[#E8D4BE]'
                    }`}
                  >
                    {st.replace('_', ' ')}
                  </button>
                ))}
              </div>

              <button
                onClick={() => storage.exportQuotesCSV()}
                className="bg-[#FAF0E0] hover:bg-[#E8D4BE] text-[#2A1A0E] border border-[#E8D4BE] text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 shrink-0 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-brand-700" />
                <span>Export RFQs to CSV</span>
              </button>
            </div>

            <div className="bg-white border border-[#E8D4BE] rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#FAF0E0] border-b border-[#E8D4BE] font-mono text-brand-700 uppercase">
                    <tr>
                      <th className="py-3 px-4">Ref Code</th>
                      <th className="py-3 px-4">Client / Company</th>
                      <th className="py-3 px-4">Model & Qty</th>
                      <th className="py-3 px-4">Application</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-mono">
                    {filteredQuotes.map((q) => (
                      <tr key={q.id} className="hover:bg-[#FAF0E0] transition-colors">
                        <td className="py-3 px-4 font-bold text-[#2A1A0E]">{q.referenceNumber}</td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-[#2A1A0E] block">{q.fullName}</span>
                          <span className="text-[#5C4533] block text-[11px]">{q.companyName} &bull; {q.phone}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-brand-700 font-bold block">{q.productModel}</span>
                          <span className="text-[#5C4533] text-[11px]">Qty: {q.requiredQuantity} Units</span>
                        </td>
                        <td className="py-3 px-4 text-[#5C4533] truncate max-w-[180px]">{q.application}</td>
                        <td className="py-3 px-4 text-[#5C4533]">{new Date(q.createdAt).toLocaleDateString()}</td>
                        <td className="py-3 px-4">
                          <select
                            value={q.status}
                            onChange={(e) => handleUpdateQuoteStatus(q.id, e.target.value as any)}
                            aria-label={`Update status for quote ${q.referenceNumber}`}
                            className={`px-2 py-1 rounded text-[11px] font-bold border ${
                              q.status === 'pending'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : q.status === 'in_review'
                                ? 'bg-blue-50 text-blue-800 border-blue-300'
                                : q.status === 'quoted'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : 'bg-[#FAF0E0] text-[#5C4533] border-[#E8D4BE]'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="in_review">In Review</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedQuote(q)}
                            className="p-1.5 text-[#5C4533] hover:text-[#2A1A0E] rounded hover:bg-[#FAF0E0] transition-colors"
                            title="Inspect Details"
                          >
                            <Eye className="w-4 h-4 text-brand-700" />
                          </button>
                          <button
                            onClick={() => handleDeleteQuote(q.id)}
                            className="p-1.5 text-[#5C4533] hover:text-rose-600 rounded hover:bg-[#FAF0E0] transition-colors"
                            title="Delete Quote"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredQuotes.length === 0 && (
                <div className="text-center py-10 text-xs text-[#5C4533]">
                  No quote requests found matching this filter.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: CONTACT ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E8D4BE] shadow-sm">
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className="text-[#5C4533]">Filter Status:</span>
                {['all', 'new', 'in_progress', 'resolved'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setEnquiryFilter(st)}
                    className={`px-2.5 py-1 rounded capitalize ${
                      enquiryFilter === st
                        ? 'bg-brand-600 text-white font-bold'
                        : 'bg-[#FAF0E0] text-[#5C4533] hover:text-[#2A1A0E] border border-[#E8D4BE]'
                    }`}
                  >
                    {st.replace('_', ' ')}
                  </button>
                ))}
              </div>

              <button
                onClick={() => storage.exportEnquiriesCSV()}
                className="bg-[#FAF0E0] hover:bg-[#E8D4BE] text-[#2A1A0E] border border-[#E8D4BE] text-xs font-semibold px-4 py-2 rounded-lg flex items-center space-x-1.5 shrink-0 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-brand-700" />
                <span>Export Enquiries to CSV</span>
              </button>
            </div>

            <div className="space-y-3">
              {filteredEnquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="bg-white border border-[#E8D4BE] rounded-xl p-5 space-y-3 hover:border-brand-500 transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs font-bold text-[#2A1A0E]">{enq.fullName}</span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] font-semibold">
                        {enq.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-mono">
                      <span className="text-[#5C4533]">{new Date(enq.createdAt).toLocaleString()}</span>
                      <select
                        value={enq.status}
                        onChange={(e) => handleUpdateEnquiryStatus(enq.id, e.target.value as any)}
                        aria-label={`Update status for enquiry from ${enq.fullName}`}
                        className="bg-white border border-[#E8D4BE] rounded px-2 py-1 text-[11px] text-[#2A1A0E]"
                      >
                        <option value="new">New</option>
                        <option value="in_progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                      <button
                        onClick={() => handleDeleteEnquiry(enq.id)}
                        className="text-[#8C7565] hover:text-rose-600 p-1 transition-colors"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#2A1A0E] font-display">{enq.subject}</div>
                    <p className="text-[#5C4533] leading-relaxed font-sans">{enq.message}</p>
                    <div className="text-[11px] font-mono text-[#5C4533] pt-1">
                      Phone: <a href={`tel:${enq.phone}`} className="text-brand-700 font-semibold hover:underline">{enq.phone}</a> &bull; Email: {enq.email}
                    </div>
                  </div>
                </div>
              ))}

              {filteredEnquiries.length === 0 && (
                <div className="text-center py-10 bg-white rounded-xl text-xs text-[#5C4533] border border-[#E8D4BE]">
                  No contact enquiries found matching this filter.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: MACHINERY CATALOGUE CRUD */}
        {activeTab === 'products' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E8D4BE] shadow-sm">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-[#8C7565] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter machinery by name or model..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full bg-white border border-[#E8D4BE] rounded-xl pl-9 pr-3 py-2 text-xs text-[#2A1A0E] placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleResetCatalogue}
                  className="bg-[#FAF0E0] hover:bg-[#E8D4BE] text-[#2A1A0E] border border-[#E8D4BE] text-xs font-semibold px-3 py-2 rounded-lg flex items-center space-x-1 transition-colors"
                  title="Reset to Factory Catalogue"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>

                <button
                  onClick={() => setIsNewProductModalOpen(true)}
                  className="btn-metallic text-xs font-bold text-white px-4 py-2 rounded-full flex items-center space-x-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#E8D4BE] rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#FAF0E0] border-b border-[#E8D4BE] font-mono text-brand-700 uppercase">
                    <tr>
                      <th className="py-3 px-4">Photo</th>
                      <th className="py-3 px-4">Model & Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Max Speed</th>
                      <th className="py-3 px-4">Motor Power</th>
                      <th className="py-3 px-4">Warranty</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-mono">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-[#FAF0E0] transition-colors">
                        <td className="py-3 px-4">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded-lg bg-[#FAF0E0] border border-[#E8D4BE]"
                          />
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-[#2A1A0E] block">{p.modelNumber}</span>
                          <span className="text-[#5C4533] block text-[11px] truncate max-w-xs">{p.name}</span>
                        </td>
                        <td className="py-3 px-4 text-brand-700 font-semibold">{p.categoryName}</td>
                        <td className="py-3 px-4 text-[#2A1A0E] font-bold">{p.operatingCapabilities.maxSpeed}</td>
                        <td className="py-3 px-4 text-[#5C4533]">{p.operatingCapabilities.motorPower}</td>
                        <td className="py-3 px-4 text-[#5C4533]">{p.warrantyYears} Years</td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <Link
                            to={`/products/${p.slug}`}
                            target="_blank"
                            className="p-1.5 text-[#5C4533] hover:text-[#2A1A0E] inline-block transition-colors"
                            title="View Public Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => setEditingProduct(p)}
                            className="p-1.5 text-[#5C4533] hover:text-brand-700 inline-block transition-colors"
                            title="Edit Product"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.id)}
                            className="p-1.5 text-[#5C4533] hover:text-rose-600 inline-block transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MODAL: Quote Details View */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8D4BE] rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8D4BE]">
              <div>
                <span className="text-[10px] font-mono uppercase text-brand-700 block font-bold">RFQ Inspection</span>
                <h3 className="text-lg font-bold text-[#2A1A0E] font-display">{selectedQuote.referenceNumber}</h3>
              </div>
              <button onClick={() => setSelectedQuote(null)} className="p-1.5 text-[#8C7565] hover:text-[#2A1A0E]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE]">
                <span className="text-[#5C4533] block text-[10px]">CLIENT NAME</span>
                <span className="text-[#2A1A0E] font-bold">{selectedQuote.fullName}</span>
              </div>
              <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE]">
                <span className="text-[#5C4533] block text-[10px]">COMPANY</span>
                <span className="text-[#2A1A0E] font-bold">{selectedQuote.companyName}</span>
              </div>
              <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE]">
                <span className="text-[#5C4533] block text-[10px]">PHONE</span>
                <a href={`tel:${selectedQuote.phone}`} className="text-brand-700 font-bold hover:underline">{selectedQuote.phone}</a>
              </div>
              <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE]">
                <span className="text-[#5C4533] block text-[10px]">EMAIL</span>
                <span className="text-[#2A1A0E]">{selectedQuote.email}</span>
              </div>
              <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE]">
                <span className="text-[#5C4533] block text-[10px]">MODEL REQUESTED</span>
                <span className="text-brand-700 font-bold">{selectedQuote.productModel}</span>
              </div>
              <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE]">
                <span className="text-[#5C4533] block text-[10px]">QUANTITY</span>
                <span className="text-[#2A1A0E] font-bold">{selectedQuote.requiredQuantity} Units</span>
              </div>
            </div>

            <div className="bg-[#FAF0E0] p-3 rounded-lg border border-[#E8D4BE] space-y-1 text-xs">
              <span className="text-[10px] font-mono text-brand-700 block font-bold">APPLICATION & POWER</span>
              <div className="text-[#2A1A0E] font-medium">{selectedQuote.application} &bull; {selectedQuote.powerOption}</div>
              <p className="text-[#5C4533] pt-1 font-mono text-[11px]">{selectedQuote.technicalRequirements}</p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#E8D4BE]">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-[#5C4533]">Update Status:</span>
                <select
                  value={selectedQuote.status}
                  onChange={(e) => handleUpdateQuoteStatus(selectedQuote.id, e.target.value as any)}
                  aria-label="Update quote status in details view"
                  className="bg-white border border-[#E8D4BE] rounded px-2 py-1 text-xs font-mono text-[#2A1A0E]"
                >
                  <option value="pending">Pending</option>
                  <option value="in_review">In Review</option>
                  <option value="quoted">Quoted</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <button
                onClick={() => setSelectedQuote(null)}
                className="btn-metallic text-xs text-white px-4 py-2 rounded-lg font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Product Add / Edit */}
      {(editingProduct || isNewProductModalOpen) && (
        <ProductFormModal
          product={editingProduct}
          isOpen={!!editingProduct || isNewProductModalOpen}
          onClose={() => {
            setEditingProduct(null);
            setIsNewProductModalOpen(false);
          }}
          onSave={handleSaveProduct}
        />
      )}

    </div>
  );
};

// Subcomponent for Product Form (Add/Edit)
const ProductFormModal: React.FC<{
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}> = ({ product, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<Product>>(() => {
    if (product) return { ...product };
    return {
      id: `asm-custom-${Date.now()}`,
      slug: `asm-custom-model-${Date.now().toString().slice(-4)}`,
      name: '',
      modelNumber: 'ASM-',
      categoryId: categories[0].id,
      categoryName: categories[0].name,
      shortDescription: '',
      fullDescription: '',
      images: ['/images/novel/Frame-35.png'],
      specifications: {
        'Model Number': 'ASM-',
        'Max Speed': '3,000 SPM',
        'Stitch Length': '0 - 6 mm',
        'Needle System': 'DPx5',
        'Lubrication': 'Automatic Rotary Pump',
        'Motor Requirement': '550W Servo Motor'
      },
      keyFeatures: ['Hardened steel oscillating hook', 'Low vibration operation'],
      applications: ['Heavy Garments', 'Canvas Work'],
      materialsSupported: ['Denim', 'Cotton', 'Twill'],
      advantages: ['High durability', 'Standard spare parts availability'],
      operatingCapabilities: {
        maxSpeed: '3,000 SPM',
        stitchLength: '0 - 6 mm',
        needleType: 'DPx5',
        lubrication: 'Automatic',
        presserFootLift: '13 mm',
        motorPower: '550W',
        voltage: '220V',
        weight: '30 kg',
        bedSize: '476 mm x 178 mm'
      },
      warrantyYears: 2,
      brochureAvailable: true,
      inStock: true,
      featured: false,
      isDemoConfig: false
    };
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.modelNumber) {
      alert('Please enter a product name and model number.');
      return;
    }

    const categoryObj = categories.find(c => c.id === formData.categoryId);
    const completeProduct: Product = {
      ...formData as Product,
      categoryName: categoryObj?.name || 'Industrial Stitchers',
      slug: formData.slug || formData.modelNumber.toLowerCase().replace(/[^a-z0-9]/g, '-')
    };

    onSave(completeProduct);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-[#E8D4BE] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        <div className="p-4 bg-[#FAF0E0] border-b border-[#E8D4BE] flex items-center justify-between">
          <h3 className="font-bold text-[#2A1A0E] text-sm font-display">
            {product ? `Edit Product: ${product.modelNumber}` : 'Add New Machinery Model'}
          </h3>
          <button onClick={onClose} className="p-1 text-[#8C7565] hover:text-[#2A1A0E]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[#5C4533] font-medium block">Model Number *</label>
              <input
                type="text"
                required
                value={formData.modelNumber}
                onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#5C4533] font-medium block">Category *</label>
              <select
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[#5C4533] font-medium block">Product Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#5C4533] font-medium block">Image URL *</label>
            <input
              type="url"
              required
              value={formData.images?.[0] || ''}
              onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
              className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#5C4533] font-medium block">Short Description *</label>
            <textarea
              rows={2}
              required
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] font-sans text-xs focus:outline-none focus:border-brand-600"
            ></textarea>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[#5C4533] font-medium block">Max Speed (SPM)</label>
              <input
                type="text"
                value={formData.operatingCapabilities?.maxSpeed}
                onChange={(e) => setFormData({
                  ...formData,
                  operatingCapabilities: { ...formData.operatingCapabilities!, maxSpeed: e.target.value }
                })}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#5C4533] font-medium block">Motor Power</label>
              <input
                type="text"
                value={formData.operatingCapabilities?.motorPower}
                onChange={(e) => setFormData({
                  ...formData,
                  operatingCapabilities: { ...formData.operatingCapabilities!, motorPower: e.target.value }
                })}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#5C4533] font-medium block">Warranty (Years)</label>
              <input
                type="number"
                value={formData.warrantyYears}
                onChange={(e) => setFormData({ ...formData, warrantyYears: parseInt(e.target.value) || 1 })}
                className="w-full bg-white border border-[#E8D4BE] rounded-xl px-3 py-2 text-[#2A1A0E] focus:outline-none focus:border-brand-600"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6 pt-2">
            <label className="flex items-center space-x-2 text-[#2A1A0E] cursor-pointer">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded border-[#E8D4BE] text-brand-600 focus:ring-0"
              />
              <span>Featured on Homepage</span>
            </label>

            <label className="flex items-center space-x-2 text-[#2A1A0E] cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isDemoConfig}
                onChange={(e) => setFormData({ ...formData, isDemoConfig: e.target.checked })}
                className="rounded border-[#E8D4BE] text-brand-600 focus:ring-0"
              />
              <span>Mark as Custom Config Demo</span>
            </label>
          </div>

          <div className="pt-4 border-t border-[#E8D4BE] flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#FAF0E0] hover:bg-[#E8D4BE] text-[#2A1A0E] border border-[#E8D4BE] text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-metallic text-xs font-bold text-white px-5 py-2 rounded-xl"
            >
              Save Product Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

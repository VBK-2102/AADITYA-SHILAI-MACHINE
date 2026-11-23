import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Printer, 
  ArrowLeft,
  Building2,
  Package
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { storage } from '../services/storage';
import { products } from '../data/products';
import { companyInfo } from '../data/companyInfo';
import { QuoteRequest } from '../types';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedModel = searchParams.get('model') || '';
  const preselectedApp = searchParams.get('application') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productModel: preselectedModel || 'ASM-UMB-950',
    requiredQuantity: 1,
    application: preselectedApp || 'Heavy Garment / Denim Manufacturing',
    powerOption: '220V Single Phase 550W Servo Motor',
    technicalRequirements: '',
    city: 'Kolhapur',
    state: 'Maharashtra'
  });

  const [loading, setLoading] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedModel) {
      setFormData(prev => ({ ...prev, productModel: preselectedModel }));
    }
    if (preselectedApp) {
      setFormData(prev => ({ ...prev, application: preselectedApp }));
    }
  }, [preselectedModel, preselectedApp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Company, Email, Phone).');
      return;
    }

    if (formData.requiredQuantity < 1) {
      setErrorMessage('Please specify a valid quantity of 1 or more.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        const saved = storage.submitQuoteRequest({
          fullName: formData.fullName.trim(),
          companyName: formData.companyName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          productModel: formData.productModel,
          requiredQuantity: Number(formData.requiredQuantity),
          application: formData.application.trim(),
          powerOption: formData.powerOption,
          technicalRequirements: formData.technicalRequirements.trim() || 'Standard factory configuration required.',
          city: formData.city.trim() || 'Kolhapur',
          state: formData.state.trim() || 'Maharashtra'
        });

        setSubmittedQuote(saved);
      } catch (err) {
        setErrorMessage('Failed to submit quote request. Please retry or contact technical sales.');
      } finally {
        setLoading(false);
      }
    }, 700);
  };

  const handlePrintQuote = () => {
    window.print();
  };

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Request a Quote' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                B2B Commercial Quotation & Technical Sizing
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Fast 4-hour turn-around
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Request a Formal Price <span className="font-serif italic font-normal text-brand-600">Quotation</span> (RFQ)
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Submit your required machinery model, intended production volume, and technical parameters. All inquiries are saved to our central engineering ledger with automated staff notification.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Success View */}
        {submittedQuote ? (
          <ScrollReveal>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-8 shadow-sm print:border-none print:shadow-none print:p-0">
              
              {/* Top Success Badge (Hidden in Print) */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 flex items-center space-x-4 print:hidden">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Quotation Request Logged & Staff Alerted</h3>
                  <p className="text-xs text-brand-700">
                    Your reference ID is <strong className="text-slate-900 font-mono text-sm">{submittedQuote.referenceNumber}</strong>. An authorized engineering sales specialist has received your commercial requisition.
                  </p>
                </div>
              </div>

              {/* Formal Printable Quotation Sheet */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 print:bg-white print:text-black print:border-none space-y-6">
                
                {/* Header */}
                <div className="border-b-2 border-purple-700 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                      Commercial RFQ Confirmation Sheet
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 print:text-black font-display">
                      AADITYA SHILAI MACHINE
                    </h2>
                    <p className="text-xs text-slate-600 print:text-gray-600 font-mono">
                      {companyInfo.address.fullAddress} &bull; Ph: {companyInfo.contact.primaryPhone}
                    </p>
                  </div>

                  <div className="text-left sm:text-right font-mono">
                    <span className="text-xs px-3 py-1 rounded bg-white text-brand-700 border border-purple-300 font-bold shadow-sm">
                      {submittedQuote.referenceNumber}
                    </span>
                    <span className="block text-xs text-slate-500 print:text-gray-600 mt-1">
                      Date: {new Date(submittedQuote.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Client & Product Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="space-y-2 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    <span className="text-brand-700 font-bold uppercase block text-[10px]">Client Requisition Details:</span>
                    <div className="text-slate-900 print:text-black font-bold text-sm">{submittedQuote.fullName}</div>
                    <div className="text-slate-700 print:text-gray-700">{submittedQuote.companyName}</div>
                    <div className="text-slate-700 print:text-gray-700">Phone: {submittedQuote.phone}</div>
                    <div className="text-slate-700 print:text-gray-700">Email: {submittedQuote.email}</div>
                    <div className="text-slate-600 print:text-gray-600">Location: {submittedQuote.city}, {submittedQuote.state}</div>
                  </div>

                  <div className="space-y-2 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    <span className="text-brand-700 font-bold uppercase block text-[10px]">Machinery Specifications:</span>
                    <div className="text-slate-900 print:text-black font-bold text-sm">Model: {submittedQuote.productModel}</div>
                    <div className="text-slate-700 print:text-gray-700">Requested Quantity: <strong className="text-slate-900 print:text-black">{submittedQuote.requiredQuantity} Units</strong></div>
                    <div className="text-slate-700 print:text-gray-700">Application: {submittedQuote.application}</div>
                    <div className="text-slate-700 print:text-gray-700">Drive Configuration: {submittedQuote.powerOption}</div>
                    <div className="text-emerald-700 print:text-gray-600 font-semibold">Status: Commercial Review In-Progress</div>
                  </div>
                </div>

                {/* Special Technical Requirements */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-1.5 text-xs">
                  <span className="text-brand-700 font-mono font-bold uppercase text-[10px] block">
                    Specified Technical Directives:
                  </span>
                  <p className="text-slate-700 print:text-gray-800 leading-relaxed font-mono">
                    {submittedQuote.technicalRequirements}
                  </p>
                </div>

                {/* Factory Assurance Footer */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-500 gap-2">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-brand-700" />
                    <span>ISO 9001:2015 QA Certified Factory Supply</span>
                  </div>
                  <div className="font-mono text-brand-700 font-semibold">
                    Response SLA: Standard Quote issued within 4 hours
                  </div>
                </div>

              </div>

              {/* Actions (Hidden in Print) */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 print:hidden">
                <button
                  onClick={() => setSubmittedQuote(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Submit Another Requisition</span>
                </button>

                <div className="flex space-x-3">
                  <button
                    onClick={handlePrintQuote}
                    className="btn-metallic text-xs font-bold text-white px-5 py-2.5 rounded-xl flex items-center space-x-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print RFQ Summary</span>
                  </button>

                  <Link
                    to="/products"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <span>Continue Browsing &rarr;</span>
                  </Link>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ) : (
          /* Requisition Form View */
          <ScrollReveal>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm relative">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2 font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Section 1: Machine Selection & Quantity */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
                  <Package className="w-4 h-4 text-brand-700" />
                  <h3 className="text-sm font-mono uppercase text-brand-700 font-bold">
                    01. Machinery Model & Technical Configuration
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Product Model of Interest <span className="text-brand-700">*</span>
                    </label>
                    <select
                      value={formData.productModel}
                      onChange={(e) => setFormData({ ...formData, productModel: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.modelNumber}>
                          {p.modelNumber} — {p.name}
                        </option>
                      ))}
                      <option value="Custom Project / Plant Setup">
                        Custom Turnkey Plant Setup / Multiple Models
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Required Quantity (Units) <span className="text-brand-700">*</span>
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      required
                      value={formData.requiredQuantity}
                      onChange={(e) => setFormData({ ...formData, requiredQuantity: Math.max(1, parseInt(e.target.value) || 1) })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Intended Production Application <span className="text-brand-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 14oz Denim jeans, heavy canvas tarpaulins, 50kg sugar sacks..."
                      value={formData.application}
                      onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Motor / Power Drive Option
                    </label>
                    <select
                      value={formData.powerOption}
                      onChange={(e) => setFormData({ ...formData, powerOption: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
                    >
                      <option value="220V Single Phase 550W Servo Motor">
                        550W Energy-Saving Servo Motor (Single Phase 220V)
                      </option>
                      <option value="220V 750W Heavy-Torque Servo Motor">
                        750W Ultra High-Torque Servo Motor (For Leather/Canvas)
                      </option>
                      <option value="Integrated Direct Drive Servo">
                        Direct-Drive Integrated Motor (Built into Machine Head)
                      </option>
                      <option value="Machine Head Only (No Motor / Stand)">
                        Head Only (Retrofit onto Existing Table)
                      </option>
                      <option value="Complete Unit with Stand & Table">
                        Complete Workstation with Stand, Table & Motor
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Company & Contact Information */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
                  <Building2 className="w-4 h-4 text-brand-700" />
                  <h3 className="text-sm font-mono uppercase text-brand-700 font-bold">
                    02. Enterprise & Authorized Purchaser Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Authorized Contact Name <span className="text-brand-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patil"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Company / Workshop Name <span className="text-brand-700">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patil Garments Pvt Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Email Address <span className="text-brand-700">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@patilgarments.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Phone Number <span className="text-brand-700">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98220 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Delivery City / Cluster
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ichalkaranji / Kolhapur / Sangli"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Technical Directives & Remarks */}
              <div className="space-y-2 pt-4">
                <label className="text-xs font-mono text-slate-700 font-medium block">
                  Specific Technical Directives / Target Timeline / Custom Attachments
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail any needle gauge preferences, synchronized puller requirements, target dispatch timeframe, or GST invoicing notes..."
                  value={formData.technicalRequirements}
                  onChange={(e) => setFormData({ ...formData, technicalRequirements: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono leading-relaxed"
                ></textarea>
              </div>

              {/* Submission Submit */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-metallic text-white font-bold text-sm py-4 rounded-xl shadow-purple-glow-lg flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Logging Quotation in Central Ledger...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Commercial Quotation Requisition (RFQ)</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-center text-slate-500">
                  Transmitted directly to Aaditya Shilai Machine Operations Desk &bull; Confidential Commercial Data
                </p>
              </div>

            </form>

          </div>
          </ScrollReveal>
        )}

      </div>
    </div>
  );
};

import React from 'react';
import { X, Printer, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { Product } from '../../types';
import { companyInfo } from '../../data/companyInfo';

interface BrochureModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Modal Controls (Hidden in Print) */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-brand-600" />
            <span className="font-semibold text-slate-900 text-sm font-display">
              Technical Specification Sheet & Product Brochure
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="btn-metallic text-xs font-semibold text-white px-3.5 py-1.5 rounded-lg flex items-center space-x-1.5 shadow"
            >
              <Printer className="w-3.5 h-3.5 text-purple-100" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Technical Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 bg-white print:bg-white print:text-black">
          
          {/* Document Header */}
          <div className="border-b-2 border-purple-600 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Official Engineering Specification Sheet
              </span>
              <h2 className="text-2xl font-black text-slate-900 print:text-black font-display">
                AADITYA SHILAI MACHINE
              </h2>
              <p className="text-xs text-slate-500 print:text-gray-600 font-mono">
                {companyInfo.address.fullAddress} &bull; Ph: {companyInfo.contact.primaryPhone}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-purple-50 text-brand-700 border border-purple-200 font-bold">
                DOC ID: SPEC-{product.modelNumber}
              </span>
              <span className="block text-xs text-slate-500 print:text-gray-600 mt-1 font-mono">
                ISO 9001:2015 QA Compliant
              </span>
            </div>
          </div>

          {/* Model Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="mt-3 text-center">
                <span className="text-xs font-mono text-brand-700 font-bold block">{product.modelNumber}</span>
                <span className="block text-xs text-slate-600 font-semibold">{product.categoryName}</span>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h3 className="text-xl font-bold text-slate-900 print:text-black">{product.name}</h3>
              <p className="text-xs text-slate-600 print:text-gray-700 leading-relaxed">
                {product.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">MAX SPEED</span>
                  <span className="text-slate-900 font-bold">{product.operatingCapabilities.maxSpeed}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">STITCH LENGTH</span>
                  <span className="text-slate-900 font-bold">{product.operatingCapabilities.stitchLength}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">LUBRICATION</span>
                  <span className="text-slate-900 font-bold">{product.operatingCapabilities.lubrication}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">WARRANTY</span>
                  <span className="text-brand-700 font-bold">{product.warrantyYears} Years Factory Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold">
              Engineering Technical Specifications
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr 
                      key={key} 
                      className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                    >
                      <td className="py-2.5 px-4 font-mono font-medium text-slate-600 w-1/3">
                        {key}
                      </td>
                      <td className="py-2.5 px-4 text-slate-900 font-mono font-semibold">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications & Materials Supported */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold mb-2">
                Verified Industrial Applications
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-mono uppercase tracking-wider text-brand-700 font-bold mb-2">
                Compatible Fabrics & Materials
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {product.materialsSupported.map((mat, i) => (
                  <li key={i} className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verification & Stamp */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-500 gap-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-brand-600" />
              <span>Certified Original Specification Document &bull; Aaditya Shilai Machine</span>
            </div>
            <div className="text-[11px] font-mono text-brand-700 font-semibold">
              Technical Support: +91 79729 60490
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

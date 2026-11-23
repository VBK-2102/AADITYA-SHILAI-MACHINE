import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { companyInfo } from '../data/companyInfo';
import { storage } from '../services/storage';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'Sales' as const,
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('Please provide your full name, phone number, and enquiry details.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      try {
        const saved = storage.submitEnquiry({
          fullName: formData.fullName.trim(),
          email: formData.email.trim() || 'N/A',
          phone: formData.phone.trim(),
          category: formData.category,
          subject: formData.subject.trim() || 'General Technical Enquiry',
          message: formData.message.trim()
        });

        setSubmittedRef(saved.id);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          category: 'Sales',
          subject: '',
          message: ''
        });
      } catch (err) {
        setErrorMessage('Unable to process enquiry. Please call our direct helpline.');
      } finally {
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="bg-transparent min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
                Kolhapur Facility & Customer Desk
              </span>
              <span className="font-caveat text-base text-brand-700 font-bold -rotate-1 select-none">
                ~ Direct technical support desk
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 font-heading">
              Contact & Plant <span className="font-serif italic font-normal text-brand-600">Location</span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Reach our engineering desk, schedule a trial stitching appointment, or request on-site servicing for your machinery.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5">
            <ScrollReveal className="space-y-6">
              {/* Address Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
                <div className="flex items-center space-x-3 text-brand-700">
                  <MapPin className="w-6 h-6 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 font-display">Verified Plant Address</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {companyInfo.address.fullAddress}
                </p>
                <div className="pt-2 text-xs font-mono text-brand-700 font-semibold">
                  Opposite Kalamba Jail, Kolhapur, Maharashtra - 416007
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center space-x-3 text-brand-700">
                  <Phone className="w-6 h-6 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 font-display">Direct Phone Helplines</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block font-mono">Primary Engineering Desk:</span>
                      <a 
                        href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`}
                        className="font-mono text-slate-900 font-bold hover:text-brand-700 text-base"
                      >
                        {companyInfo.contact.primaryPhone}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                      Live
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block font-mono">Technical Support Line:</span>
                      <a 
                        href={`tel:${companyInfo.contact.secondaryPhone.replace(/\s+/g, '')}`}
                        className="font-mono text-slate-900 font-bold hover:text-brand-700 text-base"
                      >
                        {companyInfo.contact.secondaryPhone}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-brand-700 border border-purple-200 font-semibold">
                      Direct
                    </span>
                  </div>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center space-x-3 text-brand-700">
                  <Mail className="w-6 h-6 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 font-display">Email Communication</h3>
                </div>

                <div className="space-y-1 text-sm text-slate-600">
                  <span className="text-xs text-slate-500 block font-mono">Official Inquiries:</span>
                  <a href={`mailto:${companyInfo.contact.email}`} className="text-slate-900 hover:text-brand-700 font-mono text-xs block font-semibold">
                    {companyInfo.contact.email}
                  </a>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600">
                    <span className="text-slate-900 font-semibold block">{companyInfo.operatingHours.weekdays}</span>
                    <span className="text-slate-500 block mt-0.5">{companyInfo.operatingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Working Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative">
              
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase text-brand-700 font-bold block">
                  Direct Inquiries & Technical Assistance
                </span>
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Send Technical Enquiry or Service Request
                </h2>
                <p className="text-xs text-slate-600">
                  Submissions are logged into our system and responded to by certified machinery technicians within 4 hours.
                </p>
              </div>

              {submittedRef ? (
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 font-display">Enquiry Logged Successfully</h3>
                    <p className="text-xs text-brand-700 font-mono font-semibold">
                      Your Reference Code: <strong className="text-slate-900 text-sm">{submittedRef}</strong>
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Our technical manager has received your inquiry. We will contact you at your provided phone number shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="btn-metallic text-xs text-white px-5 py-2.5 rounded-xl font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-medium block">
                        Your Full Name <span className="text-brand-700">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Shinde"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-medium block">
                        Contact Phone <span className="text-brand-700">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-medium block">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="client@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 font-medium block">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 font-mono"
                      >
                        <option value="Sales">New Machinery Purchase</option>
                        <option value="Service & Repairs">Machinery Overhaul / Repair Service</option>
                        <option value="Spare Parts">Spare Parts & Accessories</option>
                        <option value="Dealership">Dealership / Reseller Inquiries</option>
                        <option value="General">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Quotation for 5 Units Umbrella Machine with Servo Drive"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 font-medium block">
                      Enquiry & Requirements <span className="text-brand-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your machine model requirements, fabric materials, current issues or delivery timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-600 font-mono leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-metallic text-white font-bold text-xs py-3.5 rounded-xl shadow-purple-glow flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Saving & Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Technical Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Embedded Google Maps Visualizer */}
        <ScrollReveal>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm space-y-4 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono text-brand-700 uppercase font-bold block">Kolhapur Facility Map</span>
                <h3 className="text-lg font-bold text-slate-900 font-display">Aaditya Shilai Machine on Kalamba Road</h3>
              </div>
              <a
                href="https://maps.google.com/?q=Kalamba+Jail+Road+Kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center space-x-1 shrink-0 transition-colors"
              >
                <span>Open in Google Maps &rarr;</span>
              </a>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[21/9] min-h-[320px] bg-slate-100 border border-slate-200">
              <iframe
                src={companyInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aaditya Shilai Machine Location Map"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

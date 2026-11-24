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
      <div className="bg-[#FAF0E0] border-b border-[#E8D4BE] py-12 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          
          <div className="max-w-3xl space-y-3 mt-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4621A] font-bold block">
                Kolhapur Facility & Customer Desk
              </span>
              <span className="font-caveat text-base text-[#D4621A] font-bold -rotate-1 select-none">
                ~ Direct technical support desk
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#2A1A0E] font-heading">
              Contact & Plant <span className="font-serif italic font-normal text-[#D4621A]">Location</span>
            </h1>
            <p className="text-base text-[#5C4533] leading-relaxed font-sans">
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
              <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-3 shadow-sm">
                <div className="flex items-center space-x-3 text-[#D4621A]">
                  <MapPin className="w-6 h-6 shrink-0" />
                  <h3 className="text-base font-bold text-[#2A1A0E] font-display">Verified Plant Address</h3>
                </div>
                <p className="text-sm text-[#5C4533] leading-relaxed font-sans">
                  {companyInfo.address.fullAddress}
                </p>
                <div className="pt-2 text-xs font-mono text-[#D4621A] font-semibold">
                  Industrial Machinery Hub, Kolhapur - 416007
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-4 shadow-sm">
                <div className="flex items-center space-x-3 text-[#D4621A]">
                  <Phone className="w-6 h-6 shrink-0" />
                  <h3 className="text-base font-bold text-[#2A1A0E] font-display">Direct Phone Helplines</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FEF3E2] border border-[#E8D4BE]">
                    <div>
                      <span className="text-xs text-[#5C4533] block font-mono">Primary Engineering Desk:</span>
                      <a 
                        href={`tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, '')}`}
                        className="font-mono text-[#2A1A0E] font-bold hover:text-[#D4621A] text-base"
                      >
                        {companyInfo.contact.primaryPhone}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] font-semibold flex items-center space-x-1">
                      <span className="dot-neon"></span>
                      <span>Live</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FEF3E2] border border-[#E8D4BE]">
                    <div>
                      <span className="text-xs text-[#5C4533] block font-mono">Technical Support Line:</span>
                      <a 
                        href={`tel:${companyInfo.contact.secondaryPhone.replace(/\s+/g, '')}`}
                        className="font-mono text-[#2A1A0E] font-bold hover:text-[#D4621A] text-base"
                      >
                        {companyInfo.contact.secondaryPhone}
                      </a>
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#FAF0E0] text-[#D4621A] border border-[#E8D4BE] font-semibold">
                      Direct
                    </span>
                  </div>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 space-y-4 shadow-sm">
                <div className="flex items-center space-x-3 text-[#D4621A]">
                  <Mail className="w-6 h-6 shrink-0" />
                  <h3 className="text-base font-bold text-[#2A1A0E] font-display">Email Communication</h3>
                </div>

                <div className="space-y-1 text-sm text-[#5C4533]">
                  <span className="text-xs text-[#5C4533] block font-mono">Official Inquiries:</span>
                  <a href={`mailto:${companyInfo.contact.email}`} className="text-[#2A1A0E] hover:text-[#D4621A] font-mono text-xs block font-semibold">
                    {companyInfo.contact.email}
                  </a>
                </div>

                <div className="pt-3 border-t border-[#F0DEC9] flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#D4621A] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#5C4533]">
                    <span className="text-[#2A1A0E] font-semibold block">{companyInfo.operatingHours.weekdays}</span>
                    <span className="text-[#5C4533] block mt-0.5">{companyInfo.operatingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Working Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-[#E8D4BE] rounded-[28px] p-7 sm:p-9 shadow-sm relative">
              
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase text-[#D4621A] font-bold block">
                  Direct Inquiries & Technical Assistance
                </span>
                <h2 className="text-2xl font-bold text-[#2A1A0E] font-display">
                  Send Technical Enquiry or Service Request
                </h2>
                <p className="text-xs text-[#5C4533]">
                  Submissions are logged into our system and responded to by certified machinery technicians within 4 hours.
                </p>
              </div>

              {submittedRef ? (
                <div className="bg-[#FAF0E0] border border-[#E8D4BE] rounded-[24px] p-7 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#D4621A] text-white mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-7 h-7 text-[#F4AE52]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#2A1A0E] font-display">Enquiry Logged Successfully</h3>
                    <p className="text-xs text-[#D4621A] font-mono font-semibold">
                      Your Reference Code: <strong className="text-[#2A1A0E] text-sm">{submittedRef}</strong>
                    </p>
                  </div>
                  <p className="text-xs text-[#5C4533] max-w-md mx-auto">
                    Our technical manager has received your inquiry. We will contact you at your provided phone number shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="btn-metallic text-xs text-white px-6 py-3 rounded-full font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#2A1A0E] font-medium block">
                        Your Full Name <span className="text-[#D4621A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Shinde"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#FEF3E2] border border-[#E8D4BE] rounded-full px-4 py-2.5 text-xs text-[#2A1A0E] placeholder-[#5C4533] focus:outline-none focus:border-[#D4621A] font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#2A1A0E] font-medium block">
                        Contact Phone <span className="text-[#D4621A]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FEF3E2] border border-[#E8D4BE] rounded-full px-4 py-2.5 text-xs text-[#2A1A0E] placeholder-[#5C4533] focus:outline-none focus:border-[#D4621A] font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#2A1A0E] font-medium block">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="client@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FEF3E2] border border-[#E8D4BE] rounded-full px-4 py-2.5 text-xs text-[#2A1A0E] placeholder-[#5C4533] focus:outline-none focus:border-[#D4621A] font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#2A1A0E] font-medium block">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                        className="w-full bg-[#FEF3E2] border border-[#E8D4BE] rounded-full px-4 py-2.5 text-xs text-[#2A1A0E] focus:outline-none focus:border-[#D4621A] font-mono"
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
                    <label className="text-xs font-mono text-[#2A1A0E] font-medium block">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Quotation for 5 Units Umbrella Machine with Servo Drive"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#FEF3E2] border border-[#E8D4BE] rounded-full px-4 py-2.5 text-xs text-[#2A1A0E] placeholder-[#5C4533] focus:outline-none focus:border-[#D4621A] font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#2A1A0E] font-medium block">
                      Enquiry & Requirements <span className="text-[#D4621A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your machine model requirements, fabric materials, current issues or delivery timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FEF3E2] border border-[#E8D4BE] rounded-2xl px-4 py-3 text-xs text-[#2A1A0E] placeholder-[#5C4533] focus:outline-none focus:border-[#D4621A] font-mono leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-metallic text-white font-bold text-xs py-3.5 rounded-full shadow-md flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Saving & Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#F4AE52]" />
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
          <div className="bg-white border border-[#E8D4BE] rounded-[28px] overflow-hidden shadow-sm space-y-4 p-5 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F0DEC9]">
              <div>
                <span className="text-xs font-mono text-[#D4621A] uppercase font-bold block">Kolhapur Facility Map</span>
                <h3 className="text-lg font-bold text-[#2A1A0E] font-display">Novel Sewing Machine Co. Facility</h3>
              </div>
              <a
                href="https://maps.google.com/?q=Kolhapur+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF0E0] hover:bg-[#E8D4BE] text-[#D4621A] border border-[#E8D4BE] text-xs font-semibold px-4 py-2 rounded-full flex items-center space-x-1 shrink-0 transition-colors"
              >
                <span>Open in Google Maps &rarr;</span>
              </a>
            </div>

            <div className="rounded-[24px] overflow-hidden aspect-[21/9] min-h-[320px] bg-[#FEF3E2] border border-[#E8D4BE]">
              <iframe
                src={companyInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Novel Sewing Machine Co. Location Map"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

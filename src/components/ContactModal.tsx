import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Building2, User, Phone } from 'lucide-react';
import type { Language, CommercialPackage } from '../data/presentationData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedPackage?: CommercialPackage | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedPackage
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'retail',
    packageId: selectedPackage ? selectedPackage.id : 'full-social-media',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageId: selectedPackage.id }));
    }
  }, [selectedPackage]);

  if (!isOpen) return null;

  const isAr = lang === 'ar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const pkgName = selectedPackage ? (isAr ? selectedPackage.nameAr : selectedPackage.nameEn) : (isAr ? 'الشراكة الإعلانية' : 'Advertising Partnership');
    const text = encodeURIComponent(
      isAr
        ? `مرحباً ProMedia، أنا مهتم بباقة ${pkgName} الخاصة بمعاذ عدلي. أريد معرفة المزيد من التفاصيل.\nالاسم: ${formData.name || 'عميل'}\nالشركة: ${formData.company || 'علامة تجارية'}`
        : `Hello ProMedia, I'm interested in the ${pkgName} package for Moaz Adly. Please provide more details.\nName: ${formData.name || 'Client'}\nCompany: ${formData.company || 'Brand'}`
    );
    return `https://wa.me/201110070072?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative z-10 w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#E24A4A]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                {isAr ? 'طلب بطاقة الأسعار وحجز الحملة' : 'Request Rate Card & Partnership'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isAr ? 'القناة الرسمية المعتمدة — بروميديا (ProMedia)' : 'Official Commercial Channel — ProMedia'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200/60 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
              <h4 className="text-xl font-black text-slate-950 mb-2">
                {isAr ? 'تم استلام طلبكم بنجاح!' : 'Partnership Request Received!'}
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                {isAr 
                  ? 'سيتواصل معكم ممثل المبيعات والشراكات في بروميديا خلال 24 ساعة لتزويدكم ببطاقة الأسعار وتفاصيل حجز الحملة.' 
                  : 'A ProMedia commercial partnership specialist will reach out within 24 hours with the tailored rate card and scheduling options.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
                >
                  <MessageSquare className="w-4 h-4" />
                  {isAr ? 'محادثة سريعة عبر واتساب' : 'Fast Connect via WhatsApp'}
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm min-h-[48px] touch-manipulation"
                >
                  {isAr ? 'إغلاق النافذة' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedPackage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#E24A4A] font-bold block">
                      {isAr ? 'الباقة المحددة' : 'Selected Tier'}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {isAr ? selectedPackage.nameAr : selectedPackage.nameEn}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white text-[#E24A4A] border border-red-200">
                    {isAr ? selectedPackage.priceDisplayAr : selectedPackage.priceDisplayEn}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isAr ? 'مثال: أحمد محمود' : 'e.g. Sarah Jenkins'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E24A4A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    {isAr ? 'اسم العلامة أو الشركة *' : 'Company / Brand Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder={isAr ? 'مثال: علامة تجارية / مطعم' : 'e.g. Retail Brand Inc.'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E24A4A] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    {isAr ? 'البريد الإلكتروني للعمل *' : 'Corporate Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder={isAr ? 'name@company.com' : 'name@brand.com'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E24A4A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 / +20 / +966..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E24A4A] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isAr ? 'مجال النشاط التجاري' : 'Industry Focus'}
                </label>
                <select
                  value={formData.industry}
                  onChange={e => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#E24A4A] focus:bg-white transition-colors"
                >
                  <option value="retail">{isAr ? 'قطاع التجزئة والعلامات التجارية (Retail)' : 'Retail & Consumer Goods'}</option>
                  <option value="tourism">{isAr ? 'السياحة والضيافة والوجهات (Tourism)' : 'Tourism, Hospitality & Travel'}</option>
                  <option value="restaurants">{isAr ? 'المطاعم والأغذية والمشروبات (Restaurants)' : 'Restaurants & Food & Beverage'}</option>
                  <option value="other">{isAr ? 'قطاع آخر (تقنية، بنوك، فعاليات...)' : 'Other (Tech, Fintech, Events...)'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isAr ? 'ملاحظات أو أهداف الحملة' : 'Campaign Goals & Specific Timing (Optional)'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isAr ? 'اذكر موعد الإطلاق المتوقع وأهداف الحملة...' : 'Mention target launch dates, key deliverables, or questions...'}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E24A4A] focus:bg-white transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E24A4A] to-[#C93B3B] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E24A4A]/25 transition-all min-h-[48px] touch-manipulation"
                >
                  <Send className="w-4 h-4" />
                  {isAr ? 'إرسال الطلب لفريق مبيعات بروميديا' : 'Submit Request to ProMedia Sales'}
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-slate-500 block">
                  {isAr 
                    ? 'أو تواصل فوراً عبر واتساب المباشر:' 
                    : 'Or connect immediately via direct sales WhatsApp:'}
                </span>
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-bold mt-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  {isAr ? 'فتح محادثة واتساب الرسمية' : 'Open Official WhatsApp Chat'}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Mail, Globe, ArrowRight, Sparkles, ShieldCheck, MessageCircle } from 'lucide-react';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface ContactSectionProps {
  lang: Language;
  onOpenModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenModal }) => {
  const isAr = lang === 'ar';
  const { contactSection, meta } = presentationData;

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-14 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (7 cols): Headline & Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#E24A4A] mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>07 • {isAr ? 'بدء التعاون التجاري' : 'Take Action'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight editorial-title mb-4">
                {isAr ? contactSection.titleAr : contactSection.titleEn}
              </h2>

              <p className="text-lg sm:text-xl font-bold text-[#E24A4A] mb-4">
                {isAr ? contactSection.subtitleAr : contactSection.subtitleEn}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8">
                {isAr ? contactSection.actionPromptAr : contactSection.actionPromptEn}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenModal}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E24A4A] via-[#E93B3B] to-[#C92929] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-3 shadow-xl shadow-[#E24A4A]/25 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[48px] touch-manipulation"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isAr ? contactSection.ctaButtonAr : contactSection.ctaButtonEn}</span>
                  <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href="https://wa.me/201110070072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[48px] touch-manipulation"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{isAr ? 'واتساب مباشر: +20 11 10070072' : 'WhatsApp: +20 11 10070072'}</span>
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): ProMedia Representation Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                
                {/* Agency Brand Block */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="h-12 w-auto bg-slate-50 p-2 rounded-xl border border-slate-200 flex items-center justify-center">
                    <img
                      src={meta.agencyLogo}
                      alt="ProMedia"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {isAr ? 'وكالة بروميديا (ProMedia)' : 'ProMedia Official Agency'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {isAr ? meta.contact.salesOfficeAr : meta.contact.salesOfficeEn}
                    </p>
                  </div>
                </div>

                {/* Direct Channel Items */}
                <div className="space-y-3 text-xs sm:text-sm">
                  
                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/201110070072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 flex items-center justify-between text-emerald-900 transition-colors group min-h-[44px]"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span className="font-mono font-bold">+20 11 10070072</span>
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform ${isAr ? 'rotate-180' : ''}`} />
                  </a>

                  {/* Website */}
                  <a
                    href={`https://${meta.agencyWebsite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-slate-700 hover:text-slate-950 transition-colors group min-h-[44px]"
                  >
                    <span className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-[#E24A4A]" />
                      <span className="font-mono font-semibold">{meta.agencyWebsite}</span>
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 ${isAr ? 'rotate-180' : ''}`} />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${meta.contact.email}?subject=Moaz%20Adly%20Partnership%20Inquiry`}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-slate-700 hover:text-slate-950 transition-colors group min-h-[44px]"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#B8860B]" />
                      <span className="font-mono font-semibold">{meta.contact.email}</span>
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 ${isAr ? 'rotate-180' : ''}`} />
                  </a>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    {isAr 
                      ? 'التمثيل التجاري الرسمي معتمد مباشرة من إدارة صناع المحتوى.' 
                      : 'Authorized representation and certified commercial partnership desk.'}
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowDown, Sparkles, Building2, Award, Users } from 'lucide-react';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface AgencyIntroProps {
  lang: Language;
  onContinue: () => void;
}

export const AgencyIntro: React.FC<AgencyIntroProps> = ({ lang, onContinue }) => {
  const isAr = lang === 'ar';
  const { meta } = presentationData;

  return (
    <section 
      id="promedia" 
      className="relative min-h-[95vh] pt-28 pb-20 flex items-center justify-center bg-white overflow-hidden border-b border-slate-200"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#E24A4A]/5 via-amber-50/40 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-slate-100/70 blur-[100px] pointer-events-none rounded-full" />
      
      {/* Subtle Light Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        
        {/* Presenting Agency Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-xs mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E24A4A] animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
            {isAr ? 'الوكالة الإعلانية والتمثيل الحصري' : 'Official Commercial Agency Representation'}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-xs text-[#B8860B] font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            {isAr ? 'شراكة حصرية معتمدة' : 'Exclusive Partnership'}
          </span>
        </div>

        {/* Large Prominent ProMedia Official Logo Showcase */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40 max-w-[340px] sm:max-w-[420px] w-full flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform duration-300">
          <img 
            src={meta.agencyLogo} 
            alt="ProMedia" 
            className="h-20 sm:h-24 w-auto object-contain"
          />
          <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-500">
            <span>{meta.agencyWebsite}</span>
          </div>
        </div>

        {/* Mandatory Headings: PROMEDIA PRESENTS — MOAZ ADLY */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="text-sm sm:text-base font-extrabold text-[#E24A4A] uppercase tracking-[0.25em] mb-3">
            {isAr ? 'بروميديا تُقدّم' : 'PROMEDIA PRESENTS'}
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-950 tracking-tight editorial-title mb-4">
            {isAr ? 'معاذ عدلي' : 'MOAZ ADLY'}
          </h1>

          {/* Mandatory Supporting Statement: Connecting Brands With Influential Creators. */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 mb-6">
            {isAr ? 'نربط العلامات التجارية بأبرز صناع المحتوى المؤثرين.' : 'Connecting Brands With Influential Creators.'}
          </p>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {isAr 
              ? 'بصفتها الوكالة الرائدة في إنتاج المحتوى الرقمي والتمثيل التجاري، تفتح بروميديا آفاقاً تسويقية استثنائية لعلامتك التجارية مع صانع المحتوى المتميز معاذ عدلي بقاعدة وصول تتجاوز 50 مليون مشاهدة.'
              : 'As a leading digital media and talent management agency, ProMedia orchestrates high-impact influencer campaigns and brand partnerships with Moaz Adly, reaching over 50M+ quarterly views.'}
          </p>
        </div>

        {/* Agency Trust & Scale Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl w-full mb-10">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-3">
            <Award className="w-5 h-5 text-[#E24A4A] flex-shrink-0" />
            <div className="text-start">
              <span className="text-xs font-bold text-slate-900 block">
                {isAr ? 'تمثيل رسمي حصري' : 'Exclusive Agency'}
              </span>
              <span className="text-[11px] text-slate-500">
                {isAr ? 'تعاقد وإنتاج مباشر' : 'Direct Booking Desk'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
            <div className="text-start">
              <span className="text-xs font-bold text-slate-900 block">
                {isAr ? '50M+ مشاهدة ربع سنوية' : '50M+ Quarterly Views'}
              </span>
              <span className="text-[11px] text-slate-500">
                {isAr ? 'وصول جماهيري قياسي' : 'Verified Social Velocity'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-3">
            <Building2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div className="text-start">
              <span className="text-xs font-bold text-slate-900 block">
                {isAr ? 'تغطية 4 قطاعات كبرى' : '4 Core Industry Pillars'}
              </span>
              <span className="text-[11px] text-slate-500">
                {isAr ? 'رياضة • تجزئة • سياحة • مطاعم' : 'Sports • Retail • Tourism • Food'}
              </span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onContinue}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E24A4A] via-[#E93B3B] to-[#C92929] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-3 shadow-xl shadow-[#E24A4A]/25 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[48px] touch-manipulation"
          >
            <span>{isAr ? 'استكشف ملف معاذ عدلي والأرقام' : 'Explore Moaz Adly Creator Deck'}</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <a
            href="#packages"
            className="px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base flex items-center gap-2 transition-all min-h-[48px] touch-manipulation"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{isAr ? 'استعراض باقات الرعاية والأسعار' : 'View Sponsorship Packages'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

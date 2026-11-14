import React from 'react';
import { Film, Sparkles, TrendingUp, Users, Award, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface OpportunitiesProps {
  lang: Language;
  onSelectOpportunity: (title: string) => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ lang, onSelectOpportunity }) => {
  const isAr = lang === 'ar';
  const { opportunities } = presentationData;

  const getDeliverableIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-6 h-6 text-[#E24A4A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <section 
      id="opportunities" 
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#E24A4A] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>05 • {isAr ? 'فرص التعاون التجاري' : 'Partnership Deliverables'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {isAr ? 'حوّل أنظار الملايين إلى فرص تجارية حقيقية' : 'TURN ATTENTION INTO OPPORTUNITY'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {isAr 
              ? 'مخرجات تسويقية متكاملة صُممت لتمنح علامتك التجارية أقصى درجات الانتشار والتأثير.' 
              : 'Versatile commercial deliverables engineered to maximize brand engagement, recall, and conversions.'}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header Icon + Strategic Focus */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getDeliverableIcon(opp.icon)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200 text-right">
                    {isAr ? opp.focusAr : opp.focusEn}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2 group-hover:text-[#E24A4A] transition-colors">
                  {isAr ? opp.titleAr : opp.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {isAr ? opp.subtitleAr : opp.subtitleEn}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {isAr ? 'المخرجات المشمولة:' : 'Deliverable Scope:'}
                  </span>
                  {(isAr ? opp.deliverablesAr : opp.deliverablesEn).map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectOpportunity(isAr ? opp.titleAr : opp.titleEn)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#E24A4A] text-slate-800 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all border border-slate-200 hover:border-transparent min-h-[44px] touch-manipulation"
                >
                  <span>{isAr ? 'طلب تفاصيل هذا النموذج' : 'Inquire About Deliverable'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

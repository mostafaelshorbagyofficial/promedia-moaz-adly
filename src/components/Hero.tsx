import React from 'react';
import { TrendingUp, Sparkles, ArrowDown, ChevronRight, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './Icons';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface HeroProps {
  lang: Language;
  onExplore: () => void;
  onOpenOpportunities: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExplore, onOpenOpportunities, onOpenContact }) => {
  const isAr = lang === 'ar';
  const { hero, meta } = presentationData;

  return (
    <section 
      id="overview" 
      className="relative min-h-[90vh] py-20 lg:py-28 flex items-center justify-center overflow-hidden bg-white"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E24A4A]/5 via-[#D4AF37]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-100/60 blur-[100px] pointer-events-none rounded-full" />
      
      {/* Subtle Light Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Presentation Messaging (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Overtitle / Brand Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 border border-slate-200/80 w-fit mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E24A4A] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                {isAr ? hero.overtitleAr : hero.overtitleEn}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-[#B8860B] font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                {isAr ? 'شراكة إعلانية رسمية' : 'Official Partnership'}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-slate-950 tracking-tight editorial-title mb-4">
              <span>{isAr ? hero.titleAr : hero.titleEn}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 text-3xl sm:text-5xl xl:text-6xl mt-2 font-black">
                {isAr ? 'قوة التأثير وصناعة الفارق' : 'A POWERFUL CREATOR PRESENCE'}
              </span>
            </h2>

            {/* Supporting Statement */}
            <div className="text-base sm:text-lg font-bold text-[#E24A4A] tracking-wide uppercase mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-[#E24A4A]" />
              <span>{isAr ? 'ملايين الفرص التسويقية لعلامتك' : 'MILLIONS OF OPPORTUNITIES'}</span>
            </div>

            {/* Supporting Description */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {isAr ? hero.supportingAr : hero.supportingEn}
            </p>

            {/* Key Hero Metric Callout: 200M+ VIEWS */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border border-slate-200/90 shadow-xl shadow-slate-200/50 mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E24A4A]/5 rounded-full blur-2xl group-hover:bg-[#E24A4A]/10 transition-colors" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E24A4A] to-[#B92F2F] flex items-center justify-center text-white shadow-lg shadow-[#E24A4A]/25 flex-shrink-0">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-sans">
                        {hero.viewsHighlight.number}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#E24A4A] uppercase tracking-wider">
                        {isAr ? hero.viewsHighlight.labelAr : hero.viewsHighlight.labelEn}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">
                      {isAr ? hero.viewsHighlight.subtextAr : hero.viewsHighlight.subtextEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-semibold w-fit sm:self-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{isAr ? hero.viewsHighlight.periodAr : hero.viewsHighlight.periodEn}</span>
                </div>
              </div>
            </div>

            {/* Presentation Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExplore}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#E24A4A] via-[#E93B3B] to-[#C92929] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-3 shadow-xl shadow-[#E24A4A]/25 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[48px] touch-manipulation"
              >
                <span>{isAr ? hero.ctaPrimaryAr : hero.ctaPrimaryEn}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onOpenOpportunities}
                className="px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all hover:border-slate-300 flex items-center gap-2 min-h-[48px] touch-manipulation"
              >
                <span>{isAr ? hero.ctaSecondaryAr : hero.ctaSecondaryEn}</span>
                <ChevronRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-950 underline underline-offset-4 transition-colors min-h-[44px] flex items-center touch-manipulation"
              >
                {isAr ? 'طلب بطاقة الأسعار المباشرة' : 'Direct Rate Card Request'}
              </button>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">
                {isAr ? 'الحسابات الرسمية:' : 'Official Profiles:'}
              </span>
              <a
                href={meta.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-[#E24A4A] font-medium transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram (454K)</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={meta.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-[#1877F2] font-medium transition-colors"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Facebook (629K)</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={meta.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>TikTok (40K)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Editorial Visual Showcase (Featuring Photo 01 with dignified prominence) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#E24A4A]/30 via-[#D4AF37]/20 to-[#E24A4A]/10 rounded-3xl blur-md opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl p-4 sm:p-5">
                
                {/* Photo 01: Primary Portrait with Balanced Aspect Ratio & No Distortion */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 mb-4 group shadow-sm">
                  <img
                    src={meta.creatorPhotos.photo1}
                    alt="Moaz Adly"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Floating Tags on Photo */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-slate-900 border border-white/50 flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      {isAr ? 'صانع محتوى موثّق' : 'Official Verified Creator'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#E24A4A] text-white shadow-sm">
                      MOAZ ADLY
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5">
                    <div className="text-white font-black text-lg sm:text-xl drop-shadow-md">
                      {isAr ? 'معاذ عدلي — حضور يصنع الفارق' : 'Moaz Adly — Impact & Authenticity'}
                    </div>
                    <div className="text-xs text-slate-100 drop-shadow mt-0.5">
                      {isAr ? 'شغف رياضي، أسلوب حياة راقٍ، وتأثير جماهيري واسع' : 'Athletic discipline, authentic lifestyle & massive reach'}
                    </div>
                  </div>
                </div>

                {/* Bottom Reach & Agency Verification Strip */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-[#B8860B]">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">
                        {isAr ? 'إجمالي القاعدة' : 'Combined Reach'}
                      </span>
                      <span className="text-lg font-black text-slate-950 font-sans">
                        1.1M+ {isAr ? 'متابع' : 'Followers'}
                      </span>
                    </div>
                  </div>

                  <div className="text-end">
                    <span className="text-[10px] text-slate-400 font-medium block">
                      {isAr ? 'التمثيل التجاري' : 'Agency Representation'}
                    </span>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ProMedia
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

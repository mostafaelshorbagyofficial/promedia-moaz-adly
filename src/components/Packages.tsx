import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons';
import type { Language, CommercialPackage } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface PackagesProps {
  lang: Language;
  onSelectPackage: (pkg: CommercialPackage) => void;
}

export const Packages: React.FC<PackagesProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const { packages } = presentationData;

  const renderPlatformBadge = (platform: 'facebook' | 'instagram' | 'tiktok') => {
    switch (platform) {
      case 'facebook':
        return (
          <span 
            key="facebook"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold"
          >
            <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>{isAr ? 'فيسبوك (Facebook)' : 'Facebook'}</span>
          </span>
        );
      case 'instagram':
        return (
          <span 
            key="instagram"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 text-[#C13584] border border-pink-200 text-xs font-bold"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
            <span>{isAr ? 'إنستغرام (Instagram)' : 'Instagram'}</span>
          </span>
        );
      case 'tiktok':
        return (
          <span 
            key="tiktok"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold"
          >
            <TikTokIcon className="w-3.5 h-3.5 text-slate-800" />
            <span>{isAr ? 'تيك توك (TikTok)' : 'TikTok'}</span>
          </span>
        );
    }
  };

  const getWhatsAppPackageLink = (pkg: CommercialPackage) => {
    const pkgName = isAr ? pkg.nameAr : pkg.nameEn;
    const message = isAr
      ? `مرحباً ProMedia، أنا مهتم بباقة ${pkgName} الخاصة بمعاذ عدلي. أريد معرفة المزيد من التفاصيل.`
      : `Hello ProMedia, I'm interested in the ${pkgName} package for Moaz Adly. Please provide more details.`;
    
    return `https://wa.me/201110070072?text=${encodeURIComponent(message)}`;
  };

  return (
    <section 
      id="packages" 
      className="py-20 lg:py-32 bg-slate-50/70 border-t border-b border-slate-200 relative overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#E24A4A] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>06 • {isAr ? 'الأسعار والباقات الرسمية' : 'Official Pricing & Packages'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {isAr ? 'باقات التعاون والشراكات الرسمية' : 'COLLABORATION PACKAGES'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {isAr 
              ? 'الأسعار الرسمية المعتمدة لحملات معاذ عدلي الإعلانية عبر بروميديا (بالجنيه المصري).' 
              : 'Official confirmed commercial rates for Moaz Adly advertising campaigns through ProMedia (in EGP).'}
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {packages.map((pkg) => {
            const isFeatured = pkg.recommended;
            const waLink = getWhatsAppPackageLink(pkg);

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white border-2 border-[#E24A4A] shadow-2xl shadow-[#E24A4A]/15 lg:-translate-y-3 ring-4 ring-[#E24A4A]/10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Visual Prominence Badge for Package 01 */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E24A4A] via-[#FF5E5E] to-[#E24A4A] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#E24A4A]/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{isAr ? 'الباقة الشاملة — أعلى وصول وتأثير' : 'Most Popular • Full Reach'}</span>
                  </div>
                )}

                <div>
                  {/* Tier Subtitle */}
                  <span className="text-xs uppercase font-bold tracking-wider text-[#B8860B] block mb-2">
                    {isAr ? pkg.tierAr : pkg.tierEn}
                  </span>

                  {/* Package Title */}
                  <h3 className="text-2xl font-black text-slate-950 mb-4">
                    {isAr ? pkg.nameAr : pkg.nameEn}
                  </h3>

                  {/* Price Block */}
                  <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {isAr ? 'السعر الرسمي المعتمد' : 'Official Package Rate'}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-sans">
                        {pkg.priceAmount.toLocaleString()}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#E24A4A]">
                        {isAr ? pkg.currencyAr : pkg.currencyEn}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {isAr ? pkg.descriptionAr : pkg.descriptionEn}
                  </p>

                  {/* Included Platforms Block */}
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-3">
                      {isAr ? 'المنصات المشمولة في الباقة:' : 'Included Platforms:'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pkg.platforms.map((platform) => renderPlatformBadge(platform))}
                    </div>
                  </div>

                  {/* Platform Count Summary Note */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      {isAr 
                        ? `نشر المحتوى الإعلاني عبر ${pkg.platforms.length === 3 ? 'كافة المنصات الثلاث (فيسبوك، إنستغرام، تيك توك)' : pkg.platforms.length === 2 ? 'منصتي إنستغرام وتيك توك' : 'منصة إنستغرام'}`
                        : `Content published on ${pkg.platforms.length === 3 ? 'all 3 platforms (Facebook, Instagram, TikTok)' : pkg.platforms.length === 2 ? 'Instagram & TikTok' : 'Instagram'}`}
                    </span>
                  </div>

                </div>

                {/* Direct WhatsApp Booking Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all min-h-[50px] touch-manipulation ${
                      isFeatured
                        ? 'bg-[#25D366] hover:bg-[#20ba59] text-black shadow-lg shadow-[#25D366]/30 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-900" />
                    <span>
                      {isAr 
                        ? `حجز ${pkg.nameAr} عبر واتساب` 
                        : `Book ${pkg.nameEn} via WhatsApp`}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                  </a>

                  <div className="mt-2 text-center text-[11px] text-slate-400 font-mono">
                    WhatsApp: +20 11 10070072
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Policy Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isAr ? 'التمثيل والتعاقد الرسمي عبر وكالة بروميديا' : 'Official Agency Booking via ProMedia'}</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isAr
              ? 'الأسعار الموضحة أعلاه هي الأسعار الرسمية المعتمدة بالجنيه المصري (EGP). يتم حجز الحملات والجدولة الزمنية مباشرة عبر واتساب المبيعات الرسمي: +20 11 10070072.'
              : 'All rates shown above are official and confirmed in Egyptian Pounds (EGP). Inquiries and campaign scheduling are handled directly through official WhatsApp: +20 11 10070072.'}
          </p>
        </div>

      </div>
    </section>
  );
};

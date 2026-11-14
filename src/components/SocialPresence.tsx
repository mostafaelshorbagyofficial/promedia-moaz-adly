import React from 'react';
import { Users, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck, BarChart3 } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface SocialPresenceProps {
  lang: Language;
}

export const SocialPresence: React.FC<SocialPresenceProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const { hero, meta } = presentationData;

  return (
    <section 
      id="social" 
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#E24A4A] mb-3 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-[#E24A4A]" />
            <span>03 • {isAr ? 'القوة الرقمية ومعدلات الوصول' : 'Audience Reach & Metrics'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {isAr ? 'حضور رقمي استثنائي وأرقام قياسية' : 'A POWERFUL DIGITAL PRESENCE'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {isAr 
              ? 'أرقام مؤكدة وجمهور بالملايين يضمن انتشار علامتك التجارية عبر أقوى المنصات التفاعلية.' 
              : 'Verified performance data and multi-million creator reach across the three largest social platforms.'}
          </p>
        </div>

        {/* HERO METRIC BANNER: 200M+ VIDEO VIEWS (Refined White / Light-Theme Editorial Card) */}
        <div className="mb-16 relative rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-lg shadow-slate-200/50 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#E24A4A] mb-4 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{isAr ? 'إحصائية موثقة رسمياً من بروميديا' : 'ProMedia Official Performance Metric'}</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-4 mb-3">
                <span className="text-6xl sm:text-8xl font-black text-slate-950 tracking-tight font-sans">
                  {hero.viewsHighlight.number}
                </span>
                <span className="text-2xl sm:text-4xl font-extrabold text-[#E24A4A]">
                  {isAr ? hero.viewsHighlight.labelAr : hero.viewsHighlight.labelEn}
                </span>
              </div>

              <p className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                {isAr ? hero.viewsHighlight.subtextAr : hero.viewsHighlight.subtextEn}
              </p>
              
              <p className="text-sm text-slate-500 font-medium">
                {isAr ? hero.viewsHighlight.periodAr : hero.viewsHighlight.periodEn}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                {isAr ? 'الأثر التجاري للرقم:' : 'What This Means for Brands:'}
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E24A4A] mt-1.5 flex-shrink-0" />
                  <span>{isAr ? 'انتشار فيروسي غير مسبوق في مصر ودول الخليج' : 'Massive regional viral velocity in Egypt & the GCC'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span>{isAr ? 'تكرار المشاهدة ومعدلات إكمال فيديو مرتفعة' : 'High retention and organic video replay frequency'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                  <span>{isAr ? 'عائد استثماري مضاعف مقارنة بالإعلانات التقليدية' : 'Significantly higher CPM efficiency than conventional ads'}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* PLATFORMS BREAKDOWN CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1: Facebook (Verified) */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <FacebookIcon className="w-6 h-6 text-[#1877F2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {isAr ? 'فيسبوك' : 'Facebook'}
                    </h3>
                    <span className="text-xs text-slate-500">معاذ عدلي</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isAr ? 'موثّق' : 'Official'}</span>
                </span>
              </div>

              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight font-sans">
                  629K
                </div>
                <div className="text-sm font-bold text-slate-700 mt-1">
                  {isAr ? 'متابع (صفحة رسمية معتمدة)' : 'Official Followers'}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">
                {isAr 
                  ? 'الصفحة الرسمية المعتمدة لمعاذ عدلي على فيسبوك (629,000+ متابع). تفاعل عالي ومجتمع متفاعل بقوة مع المنشورات واليوميات.' 
                  : 'Official verified Facebook page (629K+ followers). High community engagement and broad demographic reach.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={meta.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 transition-colors min-h-[44px] touch-manipulation"
              >
                <span>{isAr ? 'زيارة صفحة فيسبوك الرسمية' : 'Visit Official Facebook'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Card 2: TikTok (Verified) */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                    <TikTokIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {isAr ? 'تيك توك' : 'TikTok'}
                    </h3>
                    <span className="text-xs text-slate-500">@moazadly8</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isAr ? 'موثّق' : 'Official'}</span>
                </span>
              </div>

              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight font-sans">
                  40K
                </div>
                <div className="text-sm font-bold text-slate-700 mt-1">
                  {isAr ? 'متابع (حساب رسمي)' : 'Official Followers'}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">
                {isAr 
                  ? 'الحساب الرسمي لمعاذ عدلي على تيك توك (@moazadly8). نمو متسارع ومحتوى شبابي رياضي ويومي جذاب.' 
                  : 'Official TikTok profile (@moazadly8). Rapid organic velocity and viral short-form video engagement.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={meta.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 transition-colors min-h-[44px] touch-manipulation"
              >
                <span>{isAr ? 'الاطلاع على حساب تيك توك' : 'Check TikTok Profile'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Card 3: Instagram (Verified) */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-pink-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                    <InstagramIcon className="w-6 h-6 text-[#E4405F]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {isAr ? 'إنستغرام' : 'Instagram'}
                    </h3>
                    <span className="text-xs text-slate-500">@moaz.adly</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isAr ? 'موثّق' : 'Official'}</span>
                </span>
              </div>

              <div className="mb-2">
                <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight font-sans">
                  454K
                </div>
                <div className="text-sm font-bold text-slate-700 mt-1">
                  {isAr ? 'متابع (حساب رسمي)' : 'Official Followers'}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">
                {isAr 
                  ? 'المصدر: الحساب الرسمي لمعاذ عدلي على إنستغرام (@moaz.adly). المنصة الأساسية للتفاعل اليومي، الريلز، والرياضة واللايف ستايل.' 
                  : 'Source: Official Instagram profile (@moaz.adly). Primary platform for vertical Reels, active sports, padel, and stories.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={meta.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 transition-colors min-h-[44px] touch-manipulation"
              >
                <span>{isAr ? 'زيارة حساب إنستغرام' : 'Visit Official Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Total Audience Bar */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-[#9B8136]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">
                {isAr ? 'إجمالي القاعدة الجماهيرية المجمعة:' : 'Estimated Combined Social Footprint:'}
              </div>
              <div className="text-xl sm:text-2xl font-black text-slate-950">
                ~1.1M+ {isAr ? 'متابع رسمي عبر كافة القنوات' : 'Total Official Community Reach'}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 max-w-xl text-center md:text-start leading-relaxed">
            <span className="font-bold text-slate-700 block mb-0.5">
              {isAr ? 'تنويه مهني لمعايير الشفافية:' : 'Professional Disclosure Standard:'}
            </span>
            {isAr 
              ? 'تلتزم بروميديا بأعلى معايير الدقة؛ لذا يتم تمييز البيانات الموثقة من لقطات الشاشة عن التقديرات الخارجية الأولية، والتي تخضع للمراجعة الدورية.' 
              : 'ProMedia clearly distinguishes verified platform data from preliminary external estimates to ensure absolute commercial transparency.'}
          </div>
        </div>

      </div>
    </section>
  );
};

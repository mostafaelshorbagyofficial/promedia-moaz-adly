import React from 'react';
import { ArrowUp, Globe, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const { meta } = presentationData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 text-xs py-12 relative" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          
          {/* Brand Presentation Identity */}
          <div className="flex items-center gap-4">
            <img
              src={meta.agencyLogo}
              alt="ProMedia"
              className="h-8 w-auto object-contain"
            />
            <div className="h-6 w-[1px] bg-slate-200" />
            <div className="text-left" dir="ltr">
              <span className="text-slate-900 font-bold block text-sm">PROMEDIA × MOAZ ADLY</span>
              <span className="text-[10px] text-slate-500 font-medium">Official Interactive Business Presentation</span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={meta.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#E24A4A] text-slate-700 hover:text-white border border-slate-200 transition-colors shadow-xs min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
              title="Official Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={meta.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#1877F2] text-slate-700 hover:text-white border border-slate-200 transition-colors shadow-xs min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
              title="Official Facebook"
            >
              <FacebookIcon className="w-4 h-4 text-blue-600 group-hover:text-white" />
            </a>

            <a
              href={`https://${meta.agencyWebsite}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors shadow-xs min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
              title="ProMedia Agency Website"
            >
              <Globe className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-800 transition-colors ml-2 min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
              title={isAr ? 'العودة لأعلى الصفحة' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Notice & Confidentiality */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} ProMedia. {isAr ? 'كافة الحقوق محفوظة. تم تطوير هذا العرض الرقمي لشركاء الأعمال والعملاء التجاريين.' : 'All rights reserved. Official commercial presentation engineered for ProMedia sales and client partnerships.'}
          </p>

          <div className="flex items-center gap-3 text-slate-500 font-medium">
            <span className="flex items-center gap-1 text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isAr ? 'وثيقة مبيعات رسمية معتمدة' : 'Official Sales Deck & Proposal'}</span>
            </span>
            <span>•</span>
            <span className="font-mono text-slate-700 font-semibold">{meta.agencyWebsite}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { X, ExternalLink, Share2, Sparkles, Check } from 'lucide-react';
import { InstagramIcon } from './Icons';
import type { PortfolioItem, Language } from '../data/presentationData';

interface ReelModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReelModal: React.FC<ReelModalProps> = ({ item, isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !item) return null;

  const isAr = lang === 'ar';
  const embedUrl = `https://www.instagram.com/reel/${item.reelId}/embed`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative z-10 w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-all shadow-md min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Embed Column */}
        <div className="w-full lg:w-1/2 bg-slate-950 flex flex-col items-center justify-center p-3 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200">
          <div className="relative w-full max-w-[340px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              scrolling="no"
              loading="lazy"
              title={isAr ? item.titleAr : item.titleEn}
            />
            {/* Direct Open Bar */}
            <div className="bg-slate-900 px-3 py-2.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-200">
              <span className="flex items-center gap-1.5 font-bold">
                <InstagramIcon className="w-4 h-4 text-[#E24A4A]" />
                Instagram Reel
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E24A4A] hover:underline flex items-center gap-1 font-bold py-1"
              >
                {isAr ? 'فتح في إنستغرام' : 'Open in App'}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Details Column */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 text-[#E24A4A] border border-red-200">
                {item.category.toUpperCase()}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                {isAr ? item.highlightAr : item.highlightEn}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3">
              {isAr ? item.titleAr : item.titleEn}
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
              {isAr ? item.descriptionAr : item.descriptionEn}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
              <div className="text-xs text-slate-500 font-bold mb-1">
                {isAr ? 'المحتوى المنشور بواسطة' : 'Published on Official Profile'}
              </div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#E24A4A]" />
                @moaz.adly (معاذ عدلي)
              </div>
              <div className="text-xs text-slate-500 mt-2">
                {isAr 
                  ? 'تم اختياره كعينة تمثيلية للمحتوى التجاري الناجح ضمن هذا القطاع.' 
                  : 'Selected as a verified portfolio showcase for commercial performance in this sector.'}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#E24A4A] to-[#C93B3B] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E24A4A]/25 transition-all min-h-[48px] touch-manipulation"
            >
              <InstagramIcon className="w-4 h-4" />
              {isAr ? 'مشاهدة الفيديو على إنستغرام مباشرة' : 'Watch Original Reel on Instagram'}
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyLink}
              className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-200 transition-all min-h-[44px] touch-manipulation"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{isAr ? 'تم نسخ الرابط للحافظة' : 'Reel Link Copied to Clipboard'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>{isAr ? 'نسخ رابط الفيديو لمشاركته' : 'Copy Reel Link for Sharing'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Film, Play, ExternalLink, Sparkles, ShoppingBag, Palmtree, UtensilsCrossed, Share2, Check, Trophy } from 'lucide-react';
import { InstagramIcon } from './Icons';
import type { Language, PortfolioItem } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface PortfolioProps {
  lang: Language;
  onSelectReel: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ lang, onSelectReel }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sports' | 'retail' | 'tourism' | 'restaurants'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const isAr = lang === 'ar';
  const { portfolioCategories } = presentationData;

  const handleCopyLink = (e: React.MouseEvent, item: PortfolioItem) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const allSports = portfolioCategories.sports?.items || [];
  const allRetail = portfolioCategories.retail.items;
  const allTourism = portfolioCategories.tourism.items;
  const allRestaurants = portfolioCategories.restaurants.items.filter(item => !item.isDuplicate);

  const getFilteredItems = (): PortfolioItem[] => {
    switch (activeCategory) {
      case 'sports':
        return allSports;
      case 'retail':
        return allRetail;
      case 'tourism':
        return allTourism;
      case 'restaurants':
        return allRestaurants;
      case 'all':
      default:
        return [...allSports, ...allRetail, ...allTourism, ...allRestaurants];
    }
  };

  const currentItems = getFilteredItems();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'sports':
        return <Trophy className="w-3.5 h-3.5 text-blue-600" />;
      case 'retail':
        return <ShoppingBag className="w-3.5 h-3.5 text-[#E24A4A]" />;
      case 'tourism':
        return <Palmtree className="w-3.5 h-3.5 text-emerald-600" />;
      case 'restaurants':
        return <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <Film className="w-3.5 h-3.5 text-slate-700" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sports':
        return 'border-blue-200 text-blue-700 bg-blue-50';
      case 'retail':
        return 'border-[#E24A4A]/20 text-[#E24A4A] bg-red-50';
      case 'tourism':
        return 'border-emerald-200 text-emerald-700 bg-emerald-50';
      case 'restaurants':
        return 'border-amber-200 text-amber-800 bg-amber-50';
      default:
        return 'border-slate-200 text-slate-700 bg-slate-100';
    }
  };

  const getCategoryBadgeLabel = (category: string) => {
    switch (category) {
      case 'sports':
        return isAr ? 'الرياضة واللياقة والبادل' : 'SPORTS & FITNESS';
      case 'retail':
        return isAr ? 'التجزئة والتسوق' : 'RETAIL';
      case 'tourism':
        return isAr ? 'السياحة والوجهات' : 'TOURISM';
      case 'restaurants':
        return isAr ? 'المطاعم والضيافة' : 'RESTAURANTS';
      default:
        return category.toUpperCase();
    }
  };

  return (
    <section 
      id="sports" 
      className="py-20 lg:py-32 bg-slate-50/70 border-t border-b border-slate-200 relative overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div id="retail" className="absolute top-1/4" />
      <div id="tourism" className="absolute top-2/4" />
      <div id="restaurants" className="absolute top-3/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#E24A4A] mb-3 shadow-xs">
            <Film className="w-3.5 h-3.5 text-[#E24A4A]" />
            <span>04 • {isAr ? 'معرض الأعمال والنماذج المصورة' : 'Portfolio Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {isAr ? 'استكشف نماذج المحتوى الإبداعي' : 'EXPLORE MOAZ\'S CONTENT'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            {isAr 
              ? 'محتوى إبداعي متخصص يغطي قطاعات الرياضة والبادل واللياقة، التجزئة، السياحة، وتجارب المطاعم بنجاحات موثقة.' 
              : 'Creative content across Sports & Fitness, Retail, Tourism, and Restaurants with verified viral performance.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          
          {/* All */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 min-h-[44px] touch-manipulation ${
              activeCategory === 'all'
                ? 'bg-slate-950 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'كافة القطاعات' : 'All Categories'}</span>
            <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-white/20 font-bold">
              {allSports.length + allRetail.length + allTourism.length + allRestaurants.length}
            </span>
          </button>

          {/* Sports */}
          <button
            onClick={() => setActiveCategory('sports')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 min-h-[44px] touch-manipulation ${
              activeCategory === 'sports'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-blue-500" />
            <span>{isAr ? `الرياضة والبادل (${allSports.length})` : `Sports & Fitness (${allSports.length})`}</span>
          </button>

          {/* Retail */}
          <button
            onClick={() => setActiveCategory('retail')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 min-h-[44px] touch-manipulation ${
              activeCategory === 'retail'
                ? 'bg-[#E24A4A] text-white shadow-md shadow-[#E24A4A]/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#E24A4A]" />
            <span>{isAr ? `التجزئة والتسوق (${allRetail.length})` : `Retail (${allRetail.length})`}</span>
          </button>

          {/* Tourism */}
          <button
            onClick={() => setActiveCategory('tourism')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 min-h-[44px] touch-manipulation ${
              activeCategory === 'tourism'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Palmtree className="w-3.5 h-3.5 text-emerald-300" />
            <span>{isAr ? `السياحة والوجهات (${allTourism.length})` : `Tourism (${allTourism.length})`}</span>
          </button>

          {/* Restaurants */}
          <button
            onClick={() => setActiveCategory('restaurants')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 min-h-[44px] touch-manipulation ${
              activeCategory === 'restaurants'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-300" />
            <span>{isAr ? `المطاعم والضيافة (${allRestaurants.length})` : `Restaurants (${allRestaurants.length})`}</span>
          </button>

        </div>

        {/* Video Grid with Real Video Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentItems.map((item, index) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onSelectReel(item)}
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Header / REAL Video Thumbnail Preview */}
                <div className="relative aspect-[9/11] bg-slate-900 overflow-hidden flex flex-col justify-between p-4">
                  
                  {/* Real Frame Image */}
                  {item.thumbnailUrl ? (
                    <img
                      src={item.thumbnailUrl}
                      alt={isAr ? item.titleAr : item.titleEn}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : null}

                  {/* Gradient Overlay for Readable Badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-xs flex items-center gap-1 ${getCategoryColor(item.category)}`}>
                      {getCategoryIcon(item.category)}
                      <span>{getCategoryBadgeLabel(item.category)}</span>
                    </span>

                    <span className="text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Centered Pulsing Play Button */}
                  <div className="relative z-10 self-center flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#E24A4A] flex items-center justify-center text-white shadow-xl shadow-[#E24A4A]/50 mb-2">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                    <span className="text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {isAr ? 'تشغيل الفيديو' : 'Play Video'}
                    </span>
                  </div>

                  {/* Bottom Highlight Strip */}
                  <div className="relative z-10">
                    <span className="text-[11px] font-semibold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5 w-fit">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>{isAr ? item.highlightAr : item.highlightEn}</span>
                    </span>
                  </div>

                </div>

                {/* Card Content & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-950 mb-2 group-hover:text-[#E24A4A] transition-colors line-clamp-1">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {isAr ? item.descriptionAr : item.descriptionEn}
                    </p>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-[#E24A4A] hover:text-[#C93B3B] font-bold flex items-center gap-1.5 transition-colors py-1 min-h-[36px]"
                      title={isAr ? 'فتح على إنستغرام' : 'Open in Instagram'}
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>{isAr ? 'رابط إنستغرام المباشر' : 'Instagram Reel'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={(e) => handleCopyLink(e, item)}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center touch-manipulation"
                      title={isAr ? 'نسخ الرابط' : 'Copy link'}
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-600 shadow-xs">
          <p>
            {isAr 
              ? 'ملاحظة توثيقية: تم تضمين معاينة بصرية حقيقية لكافة الروابط الرسمية الموردة بما فيها قسم الرياضة والسباحة الجديد، لتوفير تجربة عرض تفاعلية استثنائية للعلامات التجارية.' 
              : 'Documentation note: Real frame previews are retrieved for all supplied Reel showcases, including the new dedicated Sports & Swimming section.'}
          </p>
        </div>

      </div>
    </section>
  );
};

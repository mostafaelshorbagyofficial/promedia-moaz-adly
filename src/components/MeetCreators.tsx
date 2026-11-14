import React from 'react';
import { Sparkles, CheckCircle2, ArrowUpRight, Compass, HeartHandshake, Film } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface MeetCreatorsProps {
  lang: Language;
}

export const MeetCreators: React.FC<MeetCreatorsProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const { meetCreators, meta } = presentationData;

  return (
    <section 
      id="meet" 
      className="py-20 lg:py-32 bg-slate-50/70 border-t border-b border-slate-200 relative overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#E24A4A] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>02 • {isAr ? 'الملف التعريفي' : 'Creator Profile'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {isAr ? meetCreators.titleAr : meetCreators.titleEn}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {isAr ? meetCreators.subtitleAr : meetCreators.subtitleEn}
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Photo 02 Full Editorial Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Photo 2: Full Body Outdoor Shot with Proper Proportions and Breathing Room */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-white border border-slate-200 shadow-xl group">
              <img
                src={meta.creatorPhotos.photo2}
                alt="Moaz Adly Outdoor Lifestyle Shot"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 border border-white/40 flex items-center gap-1.5 shadow-sm">
                  <Compass className="w-3.5 h-3.5 text-emerald-600" />
                  {isAr ? 'حضور ميداني ورياضي' : 'Lifestyle, Travel & Athletic Drive'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-sm">
                  ORIGINAL
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-sm font-bold block drop-shadow-md">
                  {isAr ? 'حضور واقعي وتأثير ميداني ورياضي واسع' : 'Real-World Presence & High Retention'}
                </span>
                <span className="text-xs text-slate-200 drop-shadow mt-0.5 block">
                  {isAr ? 'تغطيات واسعة للرياضة، البادل، اللياقة البدنية، الوجهات السياحية، والتجارب التجارية' : 'Multi-industry activations across Sports, Padel, Fitness, Tourism & Retail'}
                </span>
              </div>
            </div>

            {/* Social Profile Verification Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium block">
                  {isAr ? 'الهوية الرقمية المعتمدة' : 'Official Social Handle'}
                </span>
                <span className="text-sm font-bold text-slate-900 font-mono flex items-center gap-1.5">
                  @moaz.adly
                  <CheckCircle2 className="w-4 h-4 text-[#3897f0]" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={meta.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#E24A4A] text-slate-700 hover:text-white transition-colors"
                  title="Visit Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={meta.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-700 hover:text-white transition-colors"
                  title="Visit Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-4 mb-8">
              {(isAr ? meetCreators.bioParagraphsAr : meetCreators.bioParagraphsEn).map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Official Social Profile Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10 pt-4 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 w-full sm:w-auto">
                {isAr ? 'الوصول المباشر للملفات الشخصية:' : 'Direct Profile Destinations:'}
              </span>

              {/* Instagram Button */}
              <a
                href={meta.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#E24A4A]/10 hover:bg-[#E24A4A]/20 border border-[#E24A4A]/30 text-[#E24A4A] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all min-h-[44px] touch-manipulation"
              >
                <InstagramIcon className="w-4 h-4 text-[#E24A4A]" />
                <span>Instagram (1.0M)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Facebook Button */}
              <a
                href={meta.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all min-h-[44px] touch-manipulation"
              >
                <FacebookIcon className="w-4 h-4 text-blue-600" />
                <span>Facebook (1.2M)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* TikTok Button */}
              <a
                href={meta.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all min-h-[44px] touch-manipulation"
              >
                <span>TikTok (634K)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Core Audience Resonance Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(isAr ? meetCreators.corePillarsAr : meetCreators.corePillarsEn).map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E24A4A]" />
                    <h4 className="text-sm font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

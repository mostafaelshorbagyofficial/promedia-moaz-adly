import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import type { Language } from '../data/presentationData';
import { presentationData } from '../data/presentationData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenContact }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('promedia');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navItems = [
    { id: 'promedia', num: '01', labelEn: 'ProMedia', labelAr: 'بروميديا' },
    { id: 'overview', num: '02', labelEn: 'Meet Moaz', labelAr: 'عن معاذ عدلي' },
    { id: 'meet', num: '03', labelEn: 'Creator Story', labelAr: 'قصة صانع المحتوى' },
    { id: 'social', num: '04', labelEn: 'Social Reach', labelAr: 'الحضور الرقمي' },
    { id: 'sports', num: '05', labelEn: 'Sports', labelAr: 'الرياضة' },
    { id: 'retail', num: '06', labelEn: 'Retail', labelAr: 'التجزئة' },
    { id: 'tourism', num: '07', labelEn: 'Tourism', labelAr: 'السياحة' },
    { id: 'restaurants', num: '08', labelEn: 'Restaurants', labelAr: 'المطاعم' },
    { id: 'opportunities', num: '09', labelEn: 'Opportunities', labelAr: 'فرص الإعلان' },
    { id: 'packages', num: '10', labelEn: 'Packages', labelAr: 'الباقات والأسعار' },
    { id: 'contact', num: '11', labelEn: 'Contact', labelAr: 'تواصل معنا' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm transition-all duration-300">
      {/* Top Presentation Progress Indicator */}
      <div className="w-full h-[3px] bg-slate-100 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#E24A4A] via-[#FF5E5E] to-[#D4AF37] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(226,74,74,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Identity / Co-Branding */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a 
            href="#promedia" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => { e.preventDefault(); scrollToSection('promedia'); }}
          >
            {/* ProMedia Official Logo */}
            <div className="h-10 sm:h-11 flex items-center">
              <img 
                src={presentationData.meta.agencyLogo} 
                alt="ProMedia" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            {/* Subtle Divider */}
            <div className="h-6 w-[1px] bg-slate-200" />

            {/* Creator Tag */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 group-hover:text-[#E24A4A] transition-colors flex items-center gap-1">
                MOAZ ADLY
                <span className="text-[10px] text-slate-500 font-normal">معاذ عدلي</span>
              </span>
              <span className="text-[10px] text-[#E24A4A] uppercase tracking-wider font-semibold">
                Official Presentation
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Presentation Navigation Pills */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-xs border border-slate-200/90 font-bold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-[#E24A4A] font-bold' : 'text-slate-400'}`}>
                  {item.num}
                </span>
                <span>{isAr ? item.labelAr : item.labelEn}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Desk: Language Selector & Partnership CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-800 transition-colors flex items-center gap-1.5 min-h-[44px] touch-manipulation"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-slate-600" />
            <span className="uppercase">{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Primary Partnership Button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E24A4A] to-[#C92929] hover:from-[#FF5E5E] hover:to-[#E24A4A] text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-[#E24A4A]/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px] touch-manipulation"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'حجز حملة إعلانية' : 'Book Campaign'}</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-xl text-start text-xs font-medium transition-colors flex items-center gap-2 min-h-[44px] touch-manipulation ${
                    isActive 
                      ? 'bg-red-50 text-[#E24A4A] font-bold border border-red-200' 
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-400">{item.num}</span>
                  <span>{isAr ? item.labelAr : item.labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E24A4A] to-[#C92929] text-white text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-md min-h-[44px] touch-manipulation"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'حجز حملة إعلانية مع معاذ عدلي' : 'Book Campaign with Moaz Adly'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

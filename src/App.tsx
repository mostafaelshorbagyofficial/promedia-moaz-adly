import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AgencyIntro } from './components/AgencyIntro';
import { Hero } from './components/Hero';
import { MeetCreators } from './components/MeetCreators';
import { SocialPresence } from './components/SocialPresence';
import { Portfolio } from './components/Portfolio';
import { Opportunities } from './components/Opportunities';
import { Packages } from './components/Packages';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReelModal } from './components/ReelModal';
import { ContactModal } from './components/ContactModal';
import type { Language, PortfolioItem, CommercialPackage } from './data/presentationData';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedReel, setSelectedReel] = useState<PortfolioItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<CommercialPackage | null>(null);

  // Sync HTML lang and dir attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithPackage = (pkg: CommercialPackage) => {
    setSelectedPackage(pkg);
    setIsContactModalOpen(true);
  };

  const handleOpenContactWithOpportunity = (_opportunityTitle: string) => {
    setSelectedPackage(null);
    setIsContactModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 selection:bg-[#E24A4A] selection:text-white ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Sticky Header Navigation */}
      <Navbar 
        lang={lang} 
        onToggleLang={toggleLanguage} 
        onOpenContact={() => setIsContactModalOpen(true)} 
      />

      {/* Main Presentation Sections */}
      <main className="relative bg-white">
        {/* Section 01: Official ProMedia Agency Introduction Opening Slide */}
        <AgencyIntro
          lang={lang}
          onContinue={() => scrollToSection('overview')}
        />

        {/* Section 02: Hero / Moaz Adly Spotlight Presentation */}
        <Hero 
          lang={lang} 
          onExplore={() => scrollToSection('meet')}
          onOpenOpportunities={() => scrollToSection('opportunities')}
          onOpenContact={() => setIsContactModalOpen(true)}
        />

        {/* Section 03: Meet Moaz Adly (Creator Story & Athletic Drive) */}
        <MeetCreators lang={lang} />

        {/* Section 04: Social Media Presence & 50M+ Views */}
        <SocialPresence lang={lang} />

        {/* Section 05: Content Portfolio (Sports, Retail, Tourism, Restaurants) */}
        <Portfolio 
          lang={lang} 
          onSelectReel={(item) => setSelectedReel(item)} 
        />

        {/* Section 06: Advertising Opportunities */}
        <Opportunities 
          lang={lang} 
          onSelectOpportunity={handleOpenContactWithOpportunity} 
        />

        {/* Section 07: Commercial Packages & Official EGP Pricing */}
        <Packages 
          lang={lang} 
          onSelectPackage={handleOpenContactWithPackage} 
        />

        {/* Section 08: Contact & Official WhatsApp Partnership Desk */}
        <ContactSection 
          lang={lang} 
          onOpenModal={() => setIsContactModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Reel Viewer Modal */}
      <ReelModal 
        item={selectedReel} 
        isOpen={!!selectedReel} 
        onClose={() => setSelectedReel(null)} 
        lang={lang} 
      />

      {/* Commercial Inquiry & Rate Card Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        lang={lang} 
        selectedPackage={selectedPackage} 
      />

    </div>
  );
}

export default App;

import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { FeaturedMachinerySection } from '../components/home/FeaturedMachinerySection';
import { 
  CategoriesGridSection, 
  ManufacturingCapabilitiesSection, 
  IndustriesServedSection, 
  QualityCommitmentSection, 
  TestimonialsSection, 
  CallToActionBanner 
} from '../components/home/HomeOtherSections';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ScrollReveal>
        <CompanyIntroSection />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedMachinerySection />
      </ScrollReveal>

      <ScrollReveal>
        <CategoriesGridSection />
      </ScrollReveal>

      <ScrollReveal>
        <ManufacturingCapabilitiesSection />
      </ScrollReveal>

      <ScrollReveal>
        <IndustriesServedSection />
      </ScrollReveal>

      <ScrollReveal>
        <QualityCommitmentSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <CallToActionBanner />
      </ScrollReveal>
    </div>
  );
};

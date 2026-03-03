import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { AcademicPrograms } from '../components/AcademicPrograms';
import { StatsSection } from '../components/StatsSection';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { CampusLifeSection } from '../components/CampusLifeSection';
import { ResearchSection } from '../components/ResearchSection';
import { AdmissionsSection } from '../components/AdmissionsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { AlumniSection } from '../components/AlumniSection';
import { PartnersSection } from '../components/PartnersSection';
import { StoriesSection } from '../components/StoriesSection';
import { CTABanner } from '../components/CTABanner';
import { FAQSection } from '../components/FAQSection';
import { NewsletterSection } from '../components/NewsletterSection';
export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <AcademicPrograms />
      <StatsSection />
      <NewsEventsSection />
      <CampusLicfeSection />
      <ResearchSection />
      <AdmissionsSection />
      <TestimonialsSection />
      <AlumniSection />
      <PartnersSection />
      <StoriesSection />
      <CTABanner />
      <FAQSection />
      <NewsletterSection />
    </>);

}
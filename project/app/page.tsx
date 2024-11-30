"use client";

import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { PricePerformanceGraph } from '@/components/sections/price-performance';
import { ProblemsSolutions } from '@/components/sections/problems-solutions';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemsSolutions />
      <ServicesSection />
      <PricePerformanceGraph />
    </main>
  );
}
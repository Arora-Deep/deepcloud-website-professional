"use client";

import { useParams } from 'next/navigation';
import { ServiceHero } from '@/components/services/hero';
import { ServiceFeatures } from '@/components/services/features';
import { TechnicalSpecs } from '@/components/services/technical-specs';
import { ServiceContactSection } from '@/components/services/contact-section';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero slug={slug} />
      <ServiceFeatures slug={slug} />
      <TechnicalSpecs slug={slug} />
      <ServiceContactSection />
    </div>
  );
}
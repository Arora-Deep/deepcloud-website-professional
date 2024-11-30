"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HeroIllustration } from './hero-illustration';

interface ServiceHeroProps {
  slug: string;
}

const serviceData = {
  vps: {
    badge: "Enterprise-Grade",
    title: "Virtual Private Servers",
    description: "High-performance VPS with guaranteed resources and enterprise-level security. Perfect for mission-critical applications.",
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "100%", label: "NVMe Storage" },
      { value: "24/7", label: "Expert Support" }
    ]
  }
};

export function ServiceHero({ slug }: ServiceHeroProps) {
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return null;
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="text-primary font-medium">{service.badge}</span>
              <div className="mx-2 h-4 w-[1px] bg-border" />
              <span className="text-muted-foreground">High Performance</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Enterprise-Grade{' '}
              <span className="text-primary">{service.title}</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>

            <Button size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center gap-8 text-sm">
              {service.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl font-bold text-primary">{metric.value}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted/50">
              <HeroIllustration slug={slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
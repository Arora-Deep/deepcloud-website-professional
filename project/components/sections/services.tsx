"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { services } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Enterprise-Grade <span className="text-primary">Cloud Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business with our cutting-edge cloud services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <div className="group relative h-full">
                <div className="relative h-full rounded-3xl border bg-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <div className="text-lg font-semibold text-primary mt-1">
                        {service.pricing.starting}/{service.pricing.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div 
                        key={feature}
                        className="flex items-center p-3 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="absolute bottom-8 right-8">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/pricing">
              View Detailed Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
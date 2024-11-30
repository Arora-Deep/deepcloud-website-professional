"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Monitor, Database, Layout } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              <span>Power Your Future with{' '}</span>
              <span className="text-primary">Cloud Innovation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Experience the next evolution of cloud computing with
              enterprise-grade performance and security
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              {[
                { value: "99.99%", label: "Uptime SLA" },
                { value: "24/7", label: "Expert Support" },
                { value: "70%", label: "Cost Savings" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: <Server className="h-6 w-6" />, title: "Virtual Servers" },
              { icon: <Monitor className="h-6 w-6" />, title: "Cloud Desktops" },
              { icon: <Database className="h-6 w-6" />, title: "Cloud Storage" },
              { icon: <Layout className="h-6 w-6" />, title: "App Publishing" }
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl bg-muted border"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-3">
                  {card.icon}
                </div>
                <h3 className="font-semibold">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
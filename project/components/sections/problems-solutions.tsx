"use client";

import { Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProblemsSolutions() {
  const items = [
    {
      problem: "High Capital Expenditure",
      impact: "40% of budget locked in hardware",
      solution: "Fixed Monthly Pricing",
      benefit: "Predictable costs",
      details: "Simple, transparent pricing with no hidden fees. Fixed monthly rates help you plan your IT budget with confidence."
    },
    {
      problem: "Free Limited Support",
      impact: "48+ hours average response time",
      solution: "24/7 Support Included",
      benefit: "15-minute response time",
      details: "Round-the-clock access to certified cloud experts included with every plan. No additional support fees or hidden costs."
    },
    {
      problem: "Resource Contention",
      impact: "40% performance variability",
      solution: "Dedicated Resources",
      benefit: "100% guaranteed resources",
      details: "Fully dedicated CPU, RAM, and storage resources with no noisy neighbors, ensuring consistent and reliable performance for your workloads."
    },
    {
      problem: "Complex Management",
      impact: "20+ hours per week on maintenance",
      solution: "Simplified Operations",
      benefit: "80% less management time",
      details: "Our managed platform handles infrastructure maintenance, updates, and monitoring, letting you focus on your core business."
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Unlock Your Capital Expenditure for{' '}
            <span className="text-primary">Other Business Needs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free up your capital expenditure and invest in growing your business
          </p>
        </div>

        <div className="space-y-12">
          {items.map((item, index) => (
            <div
              key={item.problem}
              className="relative grid md:grid-cols-2 gap-8 items-stretch"
            >
              {/* Challenge Card */}
              <div className="p-8 rounded-3xl border bg-card">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <div className="text-2xl font-bold mb-4">{item.problem}</div>
                <div className="text-primary">Current Impact: {item.impact}</div>
              </div>

              {/* Solution Card */}
              <div className="p-8 rounded-3xl border bg-card">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <div className="text-2xl font-bold mb-4">{item.solution}</div>
                <div className="text-primary mb-4">Result: {item.benefit}</div>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Transform Your Infrastructure <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
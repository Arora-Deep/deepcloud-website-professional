"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServiceContactSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground">
                  Contact our team for a personalized demo or to discuss how we can help transform your infrastructure.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <div>Email: info@deepcloud.in</div>
                  <div>Phone: +91 9141414242</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What you'll get:</h3>
                  <ul className="space-y-2">
                    {[
                      "Personalized product demonstration",
                      "Custom solution architecture",
                      "Detailed pricing breakdown",
                      "Implementation roadmap",
                      "Free consultation with our experts"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
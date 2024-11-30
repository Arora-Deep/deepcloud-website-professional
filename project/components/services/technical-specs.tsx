"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Server, Database, Network, Shield } from 'lucide-react';

interface TechnicalSpecsProps {
  slug: string;
}

export function TechnicalSpecs({ slug }: TechnicalSpecsProps) {
  const specs = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Compute",
      details: [
        "Up to 96 vCPU cores",
        "Up to 384GB RAM",
        "Latest Gen Intel/AMD processors",
        "Dedicated CPU mode"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Storage",
      details: [
        "NVMe SSD storage",
        "Up to 7.68TB per volume",
        "RAID 10 configuration",
        "Automated backups"
      ]
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network",
      details: [
        "40Gbps network interfaces",
        "Private networking",
        "IPv4 and IPv6 support",
        "DDoS protection"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security",
      details: [
        "Enterprise firewall",
        "Encrypted storage",
        "Access controls",
        "Security monitoring"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure built for performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec) => (
            <Card key={spec.title} className="h-full">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PricePerformanceGraph() {
  const instanceTypes = [
    {
      title: "2 vCPU, 4GB RAM",
      providers: [
        { name: "DeepCloud", price: 12, originalPrice: 20, color: "bg-primary" },
        { name: "Azure", price: 29, color: "bg-blue-500" },
        { name: "AWS", price: 32, color: "bg-orange-500" },
        { name: "Google Cloud", price: 35, color: "bg-red-500" }
      ]
    },
    {
      title: "4 vCPU, 16GB RAM",
      providers: [
        { name: "DeepCloud", price: 33, originalPrice: 55, color: "bg-primary" },
        { name: "Azure", price: 121, color: "bg-blue-500" },
        { name: "AWS", price: 130, color: "bg-orange-500" },
        { name: "Google Cloud", price: 158, color: "bg-red-500" }
      ]
    },
    {
      title: "8 vCPU, 16GB RAM",
      providers: [
        { name: "DeepCloud", price: 40, originalPrice: 67, color: "bg-primary" },
        { name: "Azure", price: 145, color: "bg-blue-500" },
        { name: "AWS", price: 156, color: "bg-orange-500" },
        { name: "Google Cloud", price: 189, color: "bg-red-500" }
      ]
    },
    {
      title: "32 vCPU, 128GB RAM",
      providers: [
        { name: "DeepCloud", price: 242, originalPrice: 403, color: "bg-primary" },
        { name: "Azure", price: 870, color: "bg-blue-500" },
        { name: "AWS", price: 936, color: "bg-orange-500" },
        { name: "Google Cloud", price: 1134, color: "bg-red-500" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Limited Time Offer</Badge>
          <h2 className="text-3xl font-bold mb-4">Cloud Provider Price Comparison</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get more value with our transparent, competitive pricing
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-primary">
            <ArrowDown className="h-4 w-4" />
            Lower is better
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instanceTypes.map((instance) => {
            const maxPrice = Math.max(...instance.providers.map(p => p.price));
            
            return (
              <Card key={instance.title}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-6">{instance.title}</h3>
                  <div className="space-y-6">
                    {instance.providers.map((provider) => {
                      const ratio = (provider.price / maxPrice) * 100;
                      
                      return (
                        <div key={provider.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{provider.name}</span>
                            <div className="flex items-center gap-2">
                              {provider.originalPrice && (
                                <span className="text-muted-foreground line-through">
                                  ${provider.originalPrice}/mo
                                </span>
                              )}
                              <span className="text-muted-foreground">
                                ${provider.price}/mo
                              </span>
                              {provider.originalPrice && (
                                <Badge variant="destructive" className="ml-2">
                                  40% OFF
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="relative h-3 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className={`absolute inset-y-0 left-0 ${provider.color} rounded-full`}
                              style={{ width: `${ratio}%` }}
                            />
                          </div>
                          {provider.name === "DeepCloud" && provider.originalPrice && (
                            <div className="text-xs text-primary">
                              Special introductory price - Save 40% for a limited time!
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
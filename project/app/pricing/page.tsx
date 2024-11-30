"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 no-scrollbar">
          <Button variant="outline" asChild>
            <a href="#standard-vps">Standard VPS</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#premium-vps">Premium VPS</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#windows-vps">Windows VPS</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#daas">DaaS</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#storage">Storage</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#app-publishing">App Publishing</a>
          </Button>
        </div>

        {/* Standard VPS Pricing */}
        <Card className="mb-8" id="standard-vps">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Standard VPS Plans</h2>
            <p className="text-sm text-muted-foreground mb-4">Powered by EPYC and ZEON processors and NVME storage for your basic workloads</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CPU (vCores)</TableHead>
                    <TableHead>RAM (GB)</TableHead>
                    <TableHead>Storage (GB)</TableHead>
                    <TableHead>Price (USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { cpu: 1, ram: 0.5, storage: 20, price: 1.99 },
                    { cpu: 1, ram: 1, storage: 25, price: 3.99 },
                    { cpu: 1, ram: 2, storage: 30, price: 5.99 },
                    { cpu: 2, ram: 4, storage: 50, price: 12 },
                    { cpu: 2, ram: 8, storage: 50, price: 17 },
                    { cpu: 2, ram: 16, storage: 75, price: 28 },
                    { cpu: 4, ram: 8, storage: 75, price: 22 },
                    { cpu: 4, ram: 16, storage: 100, price: 33 },
                    { cpu: 4, ram: 32, storage: 150, price: 56 },
                    { cpu: 6, ram: 12, storage: 100, price: 32 },
                    { cpu: 6, ram: 24, storage: 125, price: 48 },
                    { cpu: 6, ram: 48, storage: 160, price: 79 },
                    { cpu: 8, ram: 16, storage: 100, price: 40 },
                    { cpu: 8, ram: 32, storage: 150, price: 63 },
                    { cpu: 8, ram: 64, storage: 180, price: 103 },
                    { cpu: 12, ram: 24, storage: 160, price: 61 },
                    { cpu: 12, ram: 48, storage: 180, price: 91 },
                    { cpu: 16, ram: 32, storage: 200, price: 81 },
                    { cpu: 16, ram: 64, storage: 250, price: 123 },
                    { cpu: 16, ram: 128, storage: 300, price: 202 },
                    { cpu: 24, ram: 48, storage: 250, price: 118 },
                    { cpu: 24, ram: 96, storage: 350, price: 182 },
                    { cpu: 24, ram: 192, storage: 450, price: 304 },
                    { cpu: 32, ram: 64, storage: 350, price: 158 },
                    { cpu: 32, ram: 128, storage: 450, price: 242 },
                    { cpu: 32, ram: 192, storage: 500, price: 321 },
                    { cpu: 32, ram: 256, storage: 650, price: 408 },
                    { cpu: 48, ram: 96, storage: 600, price: 243 },
                    { cpu: 48, ram: 192, storage: 700, price: 364 },
                    { cpu: 64, ram: 128, storage: 650, price: 313 },
                    { cpu: 64, ram: 256, storage: 800, price: 476 },
                    { cpu: 64, ram: 512, storage: 1000, price: 795 },
                    { cpu: 96, ram: 192, storage: 1200, price: 486 },
                    { cpu: 96, ram: 384, storage: 1500, price: 736 },
                    { cpu: 96, ram: 768, storage: 3000, price: 1300 }
                  ].map((plan) => (
                    <TableRow key={`${plan.cpu}-${plan.ram}-${plan.storage}`}>
                      <TableCell>{plan.cpu}</TableCell>
                      <TableCell>{plan.ram}</TableCell>
                      <TableCell>{plan.storage}</TableCell>
                      <TableCell>${plan.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Premium VPS Pricing */}
        <Card className="mb-8" id="premium-vps">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Premium VPS Plans</h2>
            <p className="text-sm text-muted-foreground mb-4">Powered by latest processors and 100%NVME storage for your critical and heavy workloads that require the best</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CPU (vCores)</TableHead>
                    <TableHead>RAM (GB)</TableHead>
                    <TableHead>Storage (GB)</TableHead>
                    <TableHead>Price (USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { cpu: 1, ram: 0.5, storage: 20, price: 2.99 },
                    { cpu: 1, ram: 1, storage: 25, price: 5.99 },
                    { cpu: 1, ram: 2, storage: 30, price: 9.99 },
                    { cpu: 2, ram: 4, storage: 50, price: 19.99 },
                    { cpu: 2, ram: 8, storage: 50, price: 30 },
                    { cpu: 2, ram: 16, storage: 75, price: 49 },
                    { cpu: 4, ram: 8, storage: 75, price: 40 },
                    { cpu: 4, ram: 16, storage: 100, price: 59 },
                    { cpu: 4, ram: 32, storage: 150, price: 99 },
                    { cpu: 6, ram: 12, storage: 100, price: 59 },
                    { cpu: 6, ram: 24, storage: 125, price: 89 },
                    { cpu: 6, ram: 48, storage: 160, price: 143 },
                    { cpu: 8, ram: 16, storage: 100, price: 73 },
                    { cpu: 8, ram: 32, storage: 150, price: 114 },
                    { cpu: 8, ram: 64, storage: 180, price: 186 },
                    { cpu: 12, ram: 24, storage: 160, price: 111 },
                    { cpu: 12, ram: 48, storage: 180, price: 165 },
                    { cpu: 16, ram: 32, storage: 200, price: 146 },
                    { cpu: 16, ram: 64, storage: 250, price: 221 },
                    { cpu: 16, ram: 128, storage: 300, price: 364 },
                    { cpu: 24, ram: 48, storage: 250, price: 212 },
                    { cpu: 24, ram: 96, storage: 350, price: 328 },
                    { cpu: 24, ram: 192, storage: 450, price: 546 },
                    { cpu: 32, ram: 64, storage: 350, price: 285 },
                    { cpu: 32, ram: 128, storage: 450, price: 435 },
                    { cpu: 32, ram: 192, storage: 500, price: 579 },
                    { cpu: 32, ram: 256, storage: 650, price: 735 },
                    { cpu: 48, ram: 96, storage: 600, price: 437 },
                    { cpu: 48, ram: 192, storage: 700, price: 656 },
                    { cpu: 64, ram: 128, storage: 650, price: 564 },
                    { cpu: 64, ram: 256, storage: 800, price: 857 },
                    { cpu: 64, ram: 512, storage: 1000, price: 1431 },
                    { cpu: 96, ram: 192, storage: 1200, price: 874 },
                    { cpu: 96, ram: 384, storage: 1500, price: 1324 },
                    { cpu: 96, ram: 768, storage: 3000, price: 2340 }
                  ].map((plan) => (
                    <TableRow key={`${plan.cpu}-${plan.ram}-${plan.storage}`}>
                      <TableCell>{plan.cpu}</TableCell>
                      <TableCell>{plan.ram}</TableCell>
                      <TableCell>{plan.storage}</TableCell>
                      <TableCell>${plan.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Windows VPS Pricing */}
        <Card className="mb-8" id="windows-vps">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Windows VPS Plans</h2>
            <p className="text-sm text-muted-foreground mb-4">Super High performance VPS for windows requirements</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CPU (vCores)</TableHead>
                    <TableHead>RAM (GB)</TableHead>
                    <TableHead>Storage (GB)</TableHead>
                    <TableHead>Price (USD)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { cpu: 2, ram: 4, storage: 50, price: 29 },
                    { cpu: 2, ram: 8, storage: 75, price: 49 },
                    { cpu: 4, ram: 8, storage: 80, price: 59 },
                    { cpu: 4, ram: 16, storage: 120, price: 89 },
                    { cpu: 6, ram: 12, storage: 150, price: 91 },
                    { cpu: 6, ram: 24, storage: 200, price: 138 },
                    { cpu: 8, ram: 16, storage: 250, price: 126 },
                    { cpu: 8, ram: 32, storage: 300, price: 187 },
                    { cpu: 16, ram: 32, storage: 400, price: 243 },
                    { cpu: 16, ram: 64, storage: 500, price: 365 },
                    { cpu: 32, ram: 64, storage: 700, price: 477 },
                    { cpu: 32, ram: 128, storage: 850, price: 718 },
                    { cpu: 64, ram: 128, storage: 1000, price: 921 },
                    { cpu: 64, ram: 256, storage: 1200, price: 1395 },
                    { cpu: 96, ram: 384, storage: 1500, price: 2068 }
                  ].map((plan) => (
                    <TableRow key={`${plan.cpu}-${plan.ram}-${plan.storage}`}>
                      <TableCell>{plan.cpu}</TableCell>
                      <TableCell>{plan.ram}</TableCell>
                      <TableCell>{plan.storage}</TableCell>
                      <TableCell>${plan.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* DaaS Pricing */}
        <Card className="mb-8" id="daas">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Desktop as a Service Plans</h2>
            <p className="text-sm text-muted-foreground mb-4">Enable your workforce to work remotely with monitoring</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Instance Type</TableHead>
                    <TableHead>Start-up (0-15)</TableHead>
                    <TableHead>Company (15-50)</TableHead>
                    <TableHead>Enterprise (50-200)</TableHead>
                    <TableHead>Behemoth (200+)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { instance: "2vCPU/4GB", startup: 39, company: 34, enterprise: 29, behemoth: "speak to us" },
                    { instance: "4vCPU/8GB", startup: 69, company: 65, enterprise: 59, behemoth: "speak to us" },
                    { instance: "4vCPU/16GB", startup: 99, company: 95, enterprise: 89, behemoth: "speak to us" },
                    { instance: "8vCPU/16GB", startup: 149, company: 145, enterprise: 139, behemoth: "speak to us" },
                    { instance: "12vCPU/24GB", startup: 219, company: 209, enterprise: 199, behemoth: "speak to us" },
                    { instance: "16vCPU/32GB", startup: 299, company: 289, enterprise: 279, behemoth: "speak to us" },
                    { instance: "32vCPU/64GB", startup: 529, company: 514, enterprise: 499, behemoth: "speak to us" }
                  ].map((plan) => (
                    <TableRow key={plan.instance}>
                      <TableCell>{plan.instance}</TableCell>
                      <TableCell>${plan.startup}</TableCell>
                      <TableCell>${plan.company}</TableCell>
                      <TableCell>${plan.enterprise}</TableCell>
                      <TableCell>{plan.behemoth}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Storage Pricing */}
        <Card className="mb-8" id="storage">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Storage Plans</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Standard Storage */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Standard Storage</h3>
                <p className="text-sm text-muted-foreground mb-4">Fast and reliable storage for your business needs</p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Storage (GB)</TableHead>
                        <TableHead>Price (USD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { storage: 200, price: 0.7 },
                        { storage: 500, price: 1.5 },
                        { storage: 2000, price: 10 },
                        { storage: 3000, price: 14 },
                        { storage: 5000, price: 24 },
                        { storage: 10000, price: 49 },
                        { storage: 20000, price: 99 },
                        { storage: 50000, price: 160 }
                      ].map((plan) => (
                        <TableRow key={plan.storage}>
                          <TableCell>{plan.storage}</TableCell>
                          <TableCell>${plan.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* NVMe Storage */}
              <div>
                <h3 className="text-xl font-semibold mb-4">NVMe Storage</h3>
                <p className="text-sm text-muted-foreground mb-4">100% nvme storage for superfast requirements</p>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Storage (GB)</TableHead>
                        <TableHead>Price (USD)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { storage: 200, price: 1.2 },
                        { storage: 500, price: 3 },
                        { storage: 2000, price: 17 },
                        { storage: 3000, price: 25 },
                        { storage: 5000, price: 42 },
                        { storage: 10000, price: 85 },
                        { storage: 20000, price: 169 },
                        { storage: 50000, price: 287 }
                      ].map((plan) => (
                        <TableRow key={plan.storage}>
                          <TableCell>{plan.storage}</TableCell>
                          <TableCell>${plan.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Publishing */}
        <Card id="app-publishing">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Application Publishing</h2>
            <div className="text-center p-8 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Us for Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Our application publishing solutions are customized to your specific needs.
                Please contact our sales team for a detailed quote.
              </p>
              <Button size="lg" className="gradient-bg" asChild>
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
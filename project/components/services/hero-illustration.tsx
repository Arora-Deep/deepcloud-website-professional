"use client";

import { Monitor, Layout, Database, Server } from 'lucide-react';

interface HeroIllustrationProps {
  slug: string;
}

export function HeroIllustration({ slug }: HeroIllustrationProps) {
  switch (slug) {
    case 'vps':
      return <ServerIllustration />;
    case 'daas':
      return <DesktopIllustration />;
    case 'storage':
      return <StorageIllustration />;
    case 'publishing':
      return <ApplicationIllustration />;
    default:
      return <ServerIllustration />;
  }
}

function ServerIllustration() {
  return (
    <div className="w-full h-full relative grid place-items-center">
      <div className="relative w-full max-w-[500px] aspect-square">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-xl" />
        <div className="absolute inset-4 bg-card rounded-lg border shadow-2xl">
          <div className="p-4 flex items-center justify-between border-b">
            <Server className="h-6 w-6 text-primary" />
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="flex-1 h-2 bg-primary/20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Similar simplified versions for other illustrations...
function DesktopIllustration() {
  return <div className="grid place-items-center h-full"><Monitor className="h-16 w-16 text-primary" /></div>;
}

function StorageIllustration() {
  return <div className="grid place-items-center h-full"><Database className="h-16 w-16 text-primary" /></div>;
}

function ApplicationIllustration() {
  return <div className="grid place-items-center h-full"><Layout className="h-16 w-16 text-primary" /></div>;
}
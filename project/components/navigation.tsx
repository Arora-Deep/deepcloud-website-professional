"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/deepcloud-logo.png"
              alt="DeepCloud Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <span className="font-bold text-lg">DeepCloud</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 hover:bg-muted rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
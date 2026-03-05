'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Image src="/Logo.png" alt="VegInn Logo" width={120} height={40} className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Connecting farmers to modern markets
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition">
                About Us
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition">
                Careers
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+250123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                <Phone size={16} />
                +250 123 456 789
              </a>
              <a href="mailto:info@veginn.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                <Mail size={16} />
                info@veginn.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                Kigali, Rwanda
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VegInn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

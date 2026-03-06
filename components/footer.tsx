// /components/footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

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
              <a href="tel:+250786866111" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                <Phone size={16} />
                +250 786 866 111
              </a>
              <a href="mailto:info@veginn.rw" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition">
                <Mail size={16} />
                info@veginn.rw
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
              <a href="https://www.instagram.com/veg__inn?igsh=YXc4aTRuZG91aHp5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/veginn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="https://www.tiktok.com/@veg_inn?_r=1&_t=ZS-94QyxC6xVeK" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                </svg>
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

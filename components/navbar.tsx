'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="VegInn Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About Us</Link>
          <Link href="/partners" className="hover:text-primary transition">Partners</Link>
          <Link href="/careers" className="hover:text-primary transition">Careers</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-4 text-sm">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/about" className="hover:text-primary transition">About Us</Link>
            <Link href="/partners" className="hover:text-primary transition">Partners</Link>
            <Link href="/careers" className="hover:text-primary transition">Careers</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

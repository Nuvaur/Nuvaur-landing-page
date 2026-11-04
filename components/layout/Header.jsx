"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-obsidian/80 backdrop-blur-md border-b border-stone/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-gold-highlight flex items-center justify-center font-serif text-obsidian font-bold text-lg shadow-gold-glow group-hover:scale-105 transition-transform">
            N
          </div>
          <span className="font-sans text-xl font-bold tracking-wider text-ivory">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-stone hover:text-ivory transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#waitlist"
            className="text-sm text-stone hover:text-ivory transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-gold text-obsidian font-semibold text-sm hover:bg-gold-highlight transition-all shadow-gold-glow"
          >
            Get Early Access
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone hover:text-ivory focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-light border-b border-stone/10 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-stone hover:text-ivory py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone/10 flex flex-col gap-3">
            <Link
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-stone hover:text-ivory text-sm"
            >
              Sign In
            </Link>
            <Link
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-gold text-obsidian font-semibold text-sm hover:bg-gold-highlight transition-all"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

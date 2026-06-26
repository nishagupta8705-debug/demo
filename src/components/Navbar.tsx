/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Leaf, Menu, X, Globe, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onCartToggle: () => void;
}

export default function Navbar({ cartCount, onCartToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'nav-home', name: 'Home', path: '/' },
    { id: 'nav-about', name: 'About Us', path: '/about' },
    { id: 'nav-products', name: 'Products', path: '/products' },
    { id: 'nav-blog', name: 'Blog', path: '/blog' },
    { id: 'nav-contact', name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      id="main-navigation"
      className="sticky top-0 z-50 w-full border-b border-brand-soft bg-brand-cream/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            id="brand-logo-container"
            className="flex cursor-pointer items-center space-x-2"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-forest/10 text-brand-forest">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide text-brand-forest">
              HerbsBloom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div id="desktop-nav-menu" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={item.id}
                  className={`relative font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 py-2 cursor-pointer ${
                    isActive ? 'text-brand-forest' : 'text-brand-dark/60 hover:text-brand-forest'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Accent Section */}
          <div id="nav-cta-section" className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-xs font-medium uppercase tracking-widest text-brand-sage border-r border-brand-soft pr-4">
              <Globe className="h-4.5 w-4.5 text-brand-clay" />
              <span>Dermatologist Approved</span>
            </div>

            {/* Shopping Cart Button */}
            <button
              id="desktop-cart-toggle"
              onClick={onCartToggle}
              className="relative p-2.5 rounded-full bg-brand-soft text-brand-forest hover:bg-brand-forest hover:text-brand-cream hover:shadow-md transition-all cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent text-[10px] font-bold text-brand-cream border border-brand-cream animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Cart and Menu Button Container */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Shopping Cart Button */}
            <button
              id="mobile-cart-toggle"
              onClick={onCartToggle}
              className="relative p-2 rounded-full text-brand-forest hover:bg-brand-soft transition-all cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-accent text-[8px] font-bold text-brand-cream border border-brand-cream">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-forest hover:bg-brand-soft focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-brand-cream border-b border-brand-soft px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`${item.id}-mobile`}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`block w-full text-left font-sans text-base font-semibold tracking-wide uppercase px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-brand-forest/10 text-brand-forest'
                    : 'text-brand-dark/70 hover:bg-brand-soft hover:text-brand-forest'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-brand-soft px-4 flex items-center space-x-2 text-xs font-medium uppercase tracking-widest text-brand-sage">
            <Leaf className="h-4 w-4 text-brand-clay" />
            <span>100% Botanical Skincare</span>
          </div>
        </div>
      )}
    </nav>
  );
}

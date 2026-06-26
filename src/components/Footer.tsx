/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-brand-dark text-brand-cream pt-16 pb-8 border-t border-brand-forest/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div id="footer-col-brand" className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 block">
              <Leaf className="h-6 w-6 text-brand-clay" />
              <span className="font-serif text-2xl font-bold tracking-wider text-brand-cream">
                HerbsBloom
              </span>
            </Link>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-clay/80">
              Nature's Touch for Healthy, Radiant Skin
            </p>
            <p className="font-sans text-sm text-brand-cream/60 leading-relaxed font-light">
              We combine traditional herbal wisdom with modern skincare science to create clean, botanically rich solutions that empower your natural beauty.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={CONTACT_INFO.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-brand-clay hover:text-brand-accent" />
              </a>
              <a
                href={CONTACT_INFO.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-brand-clay hover:text-brand-accent" />
              </a>
              <a
                href={CONTACT_INFO.socials[2].url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-accent transition-colors duration-200"
                aria-label="Pinterest"
              >
                <Compass className="h-5 w-5 text-brand-clay hover:text-brand-accent" />
              </a>
            </div>
          </div>

          {/* Quick Menu */}
          <div id="footer-col-menu" className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-cream tracking-wide">
              Quick Menu
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-brand-cream/70 font-light">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-accent transition-all duration-200 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-accent transition-all duration-200 block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-brand-accent transition-all duration-200 block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-brand-accent transition-all duration-200 block"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-accent transition-all duration-200 block"
                >
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support & Hours */}
          <div id="footer-col-hours" className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-cream tracking-wide">
              Business Hours
            </h4>
            <div className="space-y-2.5 font-sans text-sm text-brand-cream/75 font-light">
              {CONTACT_INFO.businessHours.map((bh, idx) => (
                <div key={idx} className="flex justify-between border-b border-brand-forest/10 pb-1">
                  <span className="text-brand-cream/60">{bh.day}</span>
                  <span className="font-medium text-brand-cream">{bh.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div id="footer-col-contact" className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-cream tracking-wide">
              Corporate Office
            </h4>
            <div className="space-y-3 font-sans text-sm text-brand-cream/70 font-light">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  <strong>{CONTACT_INFO.address.companyName}</strong>
                  <br />
                  {CONTACT_INFO.address.street}
                  <br />
                  {CONTACT_INFO.address.cityStateZip}
                  <br />
                  {CONTACT_INFO.address.country}
                </span>
              </div>
              <div className="flex items-center space-x-2 pt-2 border-t border-brand-forest/15">
                <Phone className="h-4 w-4 text-brand-accent" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-accent" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div id="footer-bottom" className="mt-12 pt-8 border-t border-brand-soft/10 text-center font-sans text-xs text-brand-cream/40 font-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 HerbsBloom. All rights reserved. Nature's touch, scientific formulation.</p>
          <div className="flex space-x-6">
            <span className="hover:text-brand-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

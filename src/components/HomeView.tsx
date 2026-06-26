/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, ShieldCheck, HeartPulse, Sparkles, Award, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import useSEO from '../hooks/useSEO';

interface HomeViewProps {
  onPageChange: (page: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomeView({ onPageChange, onSelectProduct, onAddToCart }: HomeViewProps) {
  useSEO({
    title: "HerbsBloom | Organic Skincare & Botanical Serums",
    description: "Discover botanical skincare inspired by plant intelligence. Explore HerbsBloom's hand-harvested organic serums, creams, and dermatologist-tested face cleansers."
  });
  // Extract the featured products specified in the user request
  const featuredNames = [
    'Herbal Glow Face Serum',
    'Aloe Fresh Moisturizer',
    'Green Tea Purifying Cleanser',
  ];

  const featured = PRODUCTS.filter((p) => featuredNames.includes(p.name));

  const whyChooseUs = [
    {
      id: 'why-natural',
      icon: <span className="text-3xl">🌱</span>,
      title: '100% Natural Ingredients',
      desc: 'Selected premium botanicals direct from certified organic herb farms.',
    },
    {
      id: 'why-cruelty',
      icon: <span className="text-3xl">🐰</span>,
      title: 'Cruelty-Free Products',
      desc: 'Formulations created ethically and never tested on animals.',
    },
    {
      id: 'why-eco',
      icon: <span className="text-3xl">♻️</span>,
      title: 'Eco-Friendly Packaging',
      desc: 'Biodegradable bottles and recyclable glass jars that preserve the planet.',
    },
    {
      id: 'why-skin',
      icon: <span className="text-3xl">✨</span>,
      title: 'Suitable for All Skin Types',
      desc: 'Scientifically balanced pH profiles that respect sensitive facial areas.',
    },
    {
      id: 'why-test',
      icon: <span className="text-3xl">🧪</span>,
      title: 'Dermatologically Tested',
      desc: 'Verified by leading skin experts to support optimal skin health and vitality.',
    },
  ];

  const testimonials = [
    {
      id: 'testimonial-1',
      text: "My skin has never felt this soft and refreshed! The difference was apparent is just under a single week.",
      author: 'Sarah M.',
      role: 'Verified Herbalist & Customer',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      text: "The Herbal Glow Face Serum transformed my skincare routine. My dull blemishes are completely gone.",
      author: 'Emily T.',
      role: 'Skincare Enthusiast',
      rating: 5,
    },
  ];

  return (
    <div id="home-view-container" className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section
        id="hero-banner"
        className="relative overflow-hidden bg-gradient-to-br from-brand-forest/5 via-transparent to-brand-accent/5 px-4 pt-16 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div id="hero-text-block" className="lg:col-span-7 space-y-6 text-left animate-fade-in">
              <div className="inline-flex items-center space-x-2 rounded-full bg-brand-forest/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand-forest uppercase">
                <Sparkles className="h-4 w-4" />
                <span>NATURE'S HIGHEST QUALITY FORMULATION</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark leading-tight">
                Welcome to <br />
                <span className="text-brand-forest">HerbsBloom</span>
              </h1>
              <p className="font-serif text-lg sm:text-2xl text-brand-sage italic font-light">
                Nature's Touch for Healthy, Radiant Skin
              </p>
              <p className="font-sans text-base sm:text-lg text-brand-dark/70 max-w-2xl leading-relaxed">
                At HerbsBloom, we believe that healthy skin begins with the power of nature. Our
                skincare products are crafted with carefully selected botanical ingredients to
                nourish, protect, and rejuvenate your skin without any harsh chemical shortcuts.
              </p>
              <div id="hero-ctas" className="flex flex-wrap gap-4 pt-4">
                <button
                  id="hero-btn-products"
                  onClick={() => onPageChange('products')}
                  className="inline-flex items-center space-x-2 bg-brand-forest text-brand-cream hover:bg-brand-olive font-medium px-8 py-4 rounded-full transition-all hover:shadow-lg cursor-pointer text-sm tracking-wider uppercase"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  id="hero-btn-about"
                  onClick={() => onPageChange('about')}
                  className="border border-brand-forest/20 text-brand-forest hover:bg-brand-soft hover:border-brand-forest/45 px-8 py-4 rounded-full transition-all cursor-pointer text-sm font-medium tracking-wider uppercase"
                >
                  Our Philosophy
                </button>
              </div>
            </div>

            {/* Right Aesthetics / Imagery */}
            <div id="hero-image-block" className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative blob behind */}
                <div className="absolute -inset-4 rounded-full bg-brand-accent/10 blur-3xl opacity-60" />
                <div className="relative overflow-hidden rounded-2xl border border-brand-soft bg-brand-cream shadow-2xl transition-all duration-500 hover:scale-[1.01] p-2">
                  <img
                    id="hero-main-image"
                    className="w-full h-[450px] object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?fm=png&fit=crop&q=80&w=800"
                    alt="HerbsBloom skincare ingredients close-up"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-brand-cream/80 p-4 backdrop-blur-md border border-brand-soft shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono tracking-wider text-brand-sage uppercase">NEW LAUNCH</p>
                      <p className="font-serif text-lg font-bold text-brand-dark">Rosehip Restorative Serum</p>
                    </div>
                    <span className="font-sans text-sm font-semibold text-brand-accent">$24.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section id="why-choose-us-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-forest">
            Why Choose HerbsBloom?
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent mx-auto" />
          <p className="font-sans text-sm tracking-wider uppercase text-brand-sage">
            Botanical Integrity & Scientific Balance
          </p>
        </div>

        <div
          id="why-choose-us-grid"
          className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="group rounded-2xl border border-brand-soft bg-brand-cream p-6 hover:bg-brand-soft/50 hover:shadow-lg hover:border-brand-accent/30 transition-all duration-300 text-center flex flex-col items-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-forest/5 group-hover:bg-brand-forest/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-dark">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-brand-dark/60 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS */}
      <section id="featured-products-section" className="bg-brand-soft/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-brand-soft pb-6">
            <div className="text-left">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
                Featured Products
              </h2>
              <p className="font-sans text-sm text-brand-sage tracking-wider uppercase mt-1">
                HerbsBloom Customer Favorites
              </p>
            </div>
            <button
              id="goto-all-products"
              onClick={() => onPageChange('products')}
              className="mt-4 sm:mt-0 inline-flex items-center space-x-1 text-sm font-semibold tracking-wider text-brand-forest hover:text-brand-accent uppercase transition-colors"
            >
              <span>View Full Collection</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div
            id="featured-products-grid"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featured.map((product) => (
              <div
                key={product.id}
                id={`featured-card-${product.id}`}
                className="group rounded-2xl overflow-hidden border border-brand-soft bg-brand-cream relative transition-all duration-300 hover:shadow-xl hover:border-brand-clay p-3"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden rounded-xl">
                  <img
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-soft text-[10px] font-semibold tracking-widest text-brand-forest py-1 px-3.5 rounded-full uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-xl font-bold text-brand-dark line-clamp-1 group-hover:text-brand-forest transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-sans font-semibold text-brand-accent text-sm shrink-0">
                      ${product.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-brand-dark/50 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button
                      id={`btn-view-${product.id}`}
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center justify-center space-x-1 border border-brand-forest/20 hover:border-brand-forest/50 hover:bg-brand-soft/50 transition-all duration-300 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-brand-forest cursor-pointer"
                    >
                      <span>Quick View</span>
                    </button>
                    <button
                      id={`btn-add-cart-${product.id}`}
                      onClick={() => onAddToCart(product)}
                      className="inline-flex items-center justify-center space-x-1.5 bg-brand-forest hover:bg-brand-dark text-brand-cream transition-all duration-300 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <ShoppingBag className="h-3 w-3" />
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER FAVORITES */}
      <section id="customer-favorites-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-forest">
            Customer Favorites
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent mx-auto" />
          <p className="font-sans text-sm tracking-wider uppercase text-brand-sage">
            What our community says about their transformation
          </p>
        </div>

        <div id="favorites-testimonials-grid" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((test) => (
            <div
              key={test.id}
              id={test.id}
              className="rounded-2xl border border-brand-soft bg-brand-soft/20 p-8 relative space-y-4 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl text-brand-dark leading-relaxed italic">
                  "{test.text}"
                </blockquote>
              </div>
              <div className="pt-4 border-t border-brand-soft flex items-center space-x-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-forest/10 font-bold text-sm text-brand-forest">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <cite className="block font-sans text-sm font-semibold text-brand-dark not-italic">
                    {test.author}
                  </cite>
                  <span className="block font-sans text-xs text-brand-sage font-light uppercase tracking-wider">
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

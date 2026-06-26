/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Recycle, Lightbulb, Users, HeartHandshake, Leaf, Milestone } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export default function AboutView() {
  useSEO({
    title: "About Us | Our Botanical Philosophy | HerbsBloom",
    description: "Learn about the HerbsBloom skincare mission. We design ethical, 100% plant-based organic skincare with full botanical transparency and sustainable practices based in Austin."
  });
  const coreValues = [
    {
      id: 'value-quality',
      icon: <ShieldCheck className="h-6 w-6 text-brand-accent" />,
      title: 'Quality and Transparency',
      desc: 'We list every botanical ingredient proudly. No hidden fillers, fake dyes, or artificial foaming agents.',
    },
    {
      id: 'value-sustainability',
      icon: <Recycle className="h-6 w-6 text-brand-accent" />,
      title: 'Sustainability',
      desc: 'From solar-powered processing to biodegradable glass packaging, we reduce systemic manufacturing footprint.',
    },
    {
      id: 'value-innovation',
      icon: <Lightbulb className="h-6 w-6 text-brand-accent" />,
      title: 'Innovation',
      desc: 'Combining ancient herbal compound studies with advanced clinical skin barrier science for proven longevity.',
    },
    {
      id: 'value-customer',
      icon: <Users className="h-6 w-6 text-brand-accent" />,
      title: 'Customer Satisfaction',
      desc: 'We test on all skin complexions via dermatologists to ensure clean, soothing, non-allergenic skincare experience.',
    },
    {
      id: 'value-sourcing',
      icon: <HeartHandshake className="h-6 w-6 text-brand-accent" />,
      title: 'Ethical Sourcing',
      desc: 'We source flora directly from small, independent organic farms, ensuring fair wages and healthy soil farming.',
    },
  ];

  return (
    <div id="about-us-view" className="space-y-24 pb-24">
      {/* Editorial Header */}
      <section id="about-hero" className="mx-auto max-w-5xl px-4 pt-16 text-center space-y-4">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-sage font-semibold">
          OUR PHILOSOPHY
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-black text-brand-dark tracking-tight leading-tight">
          Crafting Skincare Inspired <br />By Plant Intelligence
        </h1>
        <div className="h-0.5 w-16 bg-brand-accent mx-auto mt-4" />
      </section>

      {/* Story Section */}
      <section id="about-story" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
              Our Story
            </h2>
            <p className="font-serif text-lg text-brand-dark/80 italic font-light leading-relaxed">
              "Plants spent millenia evolving active shields to protect themselves from climate, oxidation, and heat. We simply capture that biological genius for your skin."
            </p>
            <p className="font-sans text-base text-brand-dark/70 leading-relaxed font-light">
              HerbsBloom was founded with a simple, unifying mission: to provide safe, natural, and effective skincare solutions inspired directly by the healing properties of plants.
            </p>
            <p className="font-sans text-base text-brand-dark/70 leading-relaxed font-light">
              We combine traditional herbal wisdom with modern skincare science to create premium, bio-backed products that promote healthy, glowing skin without harsh chemicals, preservatives, or artificial detergents.
            </p>
          </div>

          {/* Visual block */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-brand-soft bg-brand-soft/20 p-2 shadow-xl">
              <img
                id="about-story-img"
                className="w-full h-[400px] object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?fm=png&fit=crop&q=80&w=800"
                alt="Formulating organic skincare with nature"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="about-mission-vision" className="bg-brand-soft/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Component */}
            <div
              id="mission-card"
              className="bg-brand-cream border border-brand-soft rounded-2xl p-10 flex flex-col items-start text-left space-y-4 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-forest/10 text-brand-forest">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-forest">
                Our Mission
              </h3>
              <p className="font-sans text-base text-brand-dark/70 leading-relaxed font-light">
                To empower individuals with clean, sustainable, and high-quality skincare products that actively enhance natural beauty, while teaching a lifestyle of mindful self-care and environmental reciprocity.
              </p>
            </div>

            {/* Vision Component */}
            <div
              id="vision-card"
              className="bg-brand-cream border border-brand-soft rounded-2xl p-10 flex flex-col items-start text-left space-y-4 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                <Milestone className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark">
                Our Vision
              </h3>
              <p className="font-sans text-base text-brand-dark/70 leading-relaxed font-light">
                To become a trusted global brand known for environmentally conscious and naturally derived skincare solutions, leading the entire cosmetic industry towards carbon-negative manufacturing and complete ingredient transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="about-core-values" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark">
            Our Core Values
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent mx-auto" />
          <p className="font-sans text-sm tracking-wider uppercase text-brand-sage">
            The principles that anchor HerbsBloom
          </p>
        </div>

        <div
          id="values-list-grid"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {coreValues.map((val) => (
            <div
              key={val.id}
              id={val.id}
              className="rounded-xl border border-brand-soft bg-brand-cream p-6 text-left hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between space-y-4 h-full hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft">
                  {val.icon}
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-dark leading-snug">
                  {val.title}
                </h4>
              </div>
              <p className="font-sans text-xs text-brand-dark/60 leading-relaxed font-light">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, BlogArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'product-1',
    name: 'Herbal Glow Face Serum',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?fm=png&fit=crop&q=80&w=800',
    category: 'Serum',
    keyIngredients: ['Rosehip Oil', 'Vitamin E', 'Jojoba Oil'],
    benefits: ['Brightens dull skin', 'Reduces fine lines', 'Provides intense hydration'],
    description: 'A luxurious, lightweight serum enriched with premium rosehip oil and antioxidant vitamin E. Specially crafted to absorb deeply and restore natural luminescence to your everyday skincare routine.'
  },
  {
    id: 'product-2',
    name: 'Aloe Fresh Moisturizer',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?fm=png&fit=crop&q=80&w=800',
    category: 'Moisturizer',
    keyIngredients: ['Aloe Vera', 'Cucumber Extract', 'Shea Butter'],
    benefits: ['Deeply moisturizes', 'Soothes irritated skin', 'Improves skin texture'],
    description: 'A rich, soothing cream that delivers deep epidermal hydration with refreshing aloe vera and crisp cucumber distillate. Gently cools sensitive skin barriers while locking in natural moisture with premium organic shea butter.'
  },
  {
    id: 'product-3',
    name: 'Green Tea Purifying Cleanser',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?fm=png&fit=crop&q=80&w=800',
    category: 'Cleanser',
    keyIngredients: ['Green Tea Extract', 'Chamomile', 'Tea Tree Oil'],
    benefits: ['Cleanses impurities', 'Controls excess oil', 'Refreshes and revitalizes'],
    description: 'A gentle, foaming daily wash designed to dissolve oils, urban pollution, and daily makeup without stripping away vital moisture resources. Rich in calming chamomile and purifying tea tree botanicals.'
  },
  {
    id: 'product-4',
    name: 'Lavender Night Cream',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?fm=png&fit=crop&q=80&w=800',
    category: 'Cream',
    keyIngredients: ['Lavender Oil', 'Hyaluronic Acid', 'Cocoa Butter'],
    benefits: ['Repairs skin overnight', 'Locks in moisture', 'Promotes smoother skin'],
    description: 'An overnight restorative balm that harnesses the tranquil scent of organic lavender blossoms and deep power of pharmaceutical hyaluronic acid. Works during sleep cycles to rebuild healthy skin elasticity.'
  },
  {
    id: 'product-5',
    name: 'Vitamin C Radiance Toner',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?fm=png&fit=crop&q=80&w=800',
    category: 'Toner',
    keyIngredients: ['Vitamin C', 'Witch Hazel', 'Orange Peel Extract'],
    benefits: ['Tightens pores', 'Brightens complexion', 'Refreshes skin'],
    description: 'A clarifying mist containing active Vitamin C and soothing witch hazel. Elevates dermal cell renewal, firms the skin, and protects against chemical pollutants with a refreshing spritz.'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    title: '5 Natural Ingredients That Your Skin Will Love',
    excerpt: 'Discover the benefits of aloe vera, green tea, rosehip oil, chamomile, and shea butter for maintaining healthy and glowing skin.',
    date: 'June 15, 2026',
    readTime: '5 min read',
    category: 'Ingredients',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?fm=png&fit=crop&q=80&w=800',
    content: [
      'Aloe Vera: Globally celebrated for cool hydration, aloe contains active glycoproteins that heal superficial wounds, relieve irritation, and infuse vitamins A and C directly into deep dermal layers.',
      'Green Tea Extract: Imbued with epigallocatechin gallate (EGCG), green tea is a potent anti-inflammatory agent. It neutralizes systemic free radicals and minimizes sebum production in acne-prone facial zones.',
      'Rosehip Oil: Derived from wild rose bushes, it has high ratios of linoleic acid and skin-brightening vitamin C. Perfect for fading superficial acne markings and soothing patches of eczema.',
      'Chamomile: Possesses bisabolol, which acts as a gentle shield to quiet redness and protect sensitive facial cells from dry winds or climate fluctuations.',
      'Shea Butter: Extracted from African Shea trees, it delivers concentrated oleic and stearic acids that build a robust atmospheric guard, restoring softness instantly.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Daily Skincare Routine for Beginners',
    excerpt: 'A simple four-step routine: Cleanse, Tone, Moisturize, and Protect with SPF. Consistency is key to achieving healthier skin.',
    date: 'June 10, 2026',
    readTime: '4 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?fm=png&fit=crop&q=80&w=800',
    content: [
      'Step 1 - Cleanse: Wash away dead cells, micro-grime, and sweat. Always select a balanced pH, non-stripping botanical base like our Green Tea Purifying Cleanser.',
      'Step 2 - Tone: Apply a light layer of toner to sweep away residual hard water minerals, rebalance facial natural acidity, and gently firm open pores.',
      'Step 3 - Moisturize: Hydrate cell walls. Use an emulsion that reinforces lipids, such as our Aloe Fresh Moisturizer, preventing environmental moisture draw-out.',
      'Step 4 - Protect (SPF): Essential for every skin color. Apply a broad-spectrum botanical shield daily to keep collagen cells strong and resilient.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Benefits of Herbal Skincare Products',
    excerpt: 'Natural skincare products are gentle, rich in antioxidants, and free from harsh chemicals, making them suitable for sensitive skin.',
    date: 'June 05, 2026',
    readTime: '6 min read',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?fm=png&fit=crop&q=80&w=800',
    content: [
      'Gentle & Compatible: Synthetic chemicals often prompt an immune response leading to redness. Organic plants share organic chemistry ratios that your skin assimilates without flare-ups.',
      'True Antioxidant Shielding: Herbal compounds retain high concentrations of pure vitamins E and C that work directly to strengthen inner cellular membranes against urban exhaust fumes.',
      'Chemical-Free Safety: Standard products often contain cheap parabens, artificial dyes, and phthalates. HerbsBloom relies purely on organic plant derivatives, promoting physical safety and ultimate peace of mind.'
    ]
  },
  {
    id: 'blog-4',
    title: 'How to Keep Your Skin Hydrated During Summer',
    excerpt: 'Simple steps: Drink plenty of water, use lightweight moisturizers, apply sunscreen daily, and avoid excessive sun exposure.',
    date: 'May 28, 2026',
    readTime: '4 min read',
    category: 'Summer Care',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?fm=png&fit=crop&q=80&w=800',
    content: [
      'Water Intake First: Cellular moisture thrives on basic bodily fluid counts. Ensure you log at least 2-3 liters of spring water throughout hot summer periods.',
      'Opt for Light Formulations: Heavy oils can trap sweat and bacteria during humid months. A gentle gel-cream like Aloe Fresh Moisturizer provides airy, breathing comfort.',
      'Persistent SPF Reapplication: Sunburn actively breaks the outer lipid barrier, allowing hydration to evaporate rapidly. Keep SPF 30+ layered and active.',
      'Seek Midday Shade: When standard solar indices climb to extreme heights between 11 AM and 3 PM, seek leafy covers or use breathable cotton hats.'
    ]
  }
];

export const CONTACT_INFO = {
  email: 'hello@herbsbloom.com',
  phone: '+1 (800) 456-7890',
  address: {
    companyName: 'HerbsBloom Wellness Pvt. Ltd.',
    street: '245 Green Valley Avenue',
    cityStateZip: 'Austin, Texas 78701',
    country: 'United States'
  },
  businessHours: [
    { day: 'Monday - Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  socials: [
    { name: 'Instagram', handle: '@HerbsBloom', url: 'https://instagram.com' },
    { name: 'Facebook', handle: 'HerbsBloom Official', url: 'https://facebook.com' },
    { name: 'Pinterest', handle: 'HerbsBloom Beauty', url: 'https://pinterest.com' }
  ]
};

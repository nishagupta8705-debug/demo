/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { Search, Info, X, Check, Eye, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import useSEO from '../hooks/useSEO';

interface ProductsViewProps {
  selectedProduct: Product | null;
  onClearSelectedProduct: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductsView({
  selectedProduct,
  onClearSelectedProduct,
  onSelectProduct,
  onAddToCart,
}: ProductsViewProps) {
  useSEO({
    title: "Our Collection | Premium Organic Serums & Creams | HerbsBloom",
    description: "Explore the complete medicinal plant skincare collection of HerbsBloom: natural facial cleansers, pH-balanced toners, premium aloe moisturizers, and cellular renewal serums."
  });
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Serum', 'Moisturizer', 'Cleanser', 'Toner', 'Cream'];

  // Filter products based on search and category tab selection
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keyIngredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div id="products-view-container" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-10">
      {/* Page Title & Narrative */}
      <div id="products-header" className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-sage font-semibold">
          BOTANICAL FORMULATIONS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Our Collection
        </h1>
        <div className="h-0.5 w-16 bg-brand-accent mx-auto" />
        <p className="font-sans text-sm text-brand-dark/70 font-light leading-relaxed">
          Nourish your skin barrier daily with chemical-free formulas harvested ethically and combined with modern skincare chemistry.
        </p>
      </div>

      {/* Interactive Toolbar: Search & Categories */}
      <div id="products-toolbar" className="flex flex-col md:flex-row gap-6 justify-between items-center bg-brand-soft/30 p-4 rounded-2xl border border-brand-soft/80 mb-12">
        {/* Category Tab buttons */}
        <div id="product-category-filters" className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-forest text-brand-cream shadow-sm'
                    : 'bg-brand-cream border border-brand-soft text-brand-dark/75 hover:bg-brand-soft hover:text-brand-forest'
                }`}
              >
                {cat}s
              </button>
            );
          })}
        </div>

        {/* Filter search bar */}
        <div id="product-search-block" className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-sage pointer-events-none">
            <Search className="h-4 w-4" />
          </span>
          <input
            id="product-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products or ingredients..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-brand-cream border border-brand-soft text-sm text-brand-dark placeholder-brand-sage/60 focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-brand-sage hover:text-brand-dark"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredProducts.length > 0 ? (
        <div id="products-list-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group rounded-2xl overflow-hidden border border-brand-soft bg-brand-cream transition-all duration-300 hover:shadow-xl hover:border-brand-clay p-3.5 relative flex flex-col justify-between"
            >
              {/* Product Badge and Image Container */}
              <div className="relative h-72 w-full overflow-hidden rounded-xl bg-brand-soft/20">
                <img
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-soft text-[10px] font-semibold tracking-widest text-brand-forest py-1 px-3.5 rounded-full uppercase">
                  {product.category}
                </span>
              </div>

              {/* Text, Ingredients, Price Body details */}
              <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-forest transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="font-sans font-semibold text-brand-accent text-lg shrink-0">
                      ${product.price}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-brand-dark/60 leading-relaxed font-light line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Ingredients preview pill */}
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-sage block mb-1">
                      Key Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.keyIngredients.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-brand-soft border border-brand-soft/40 px-2 py-0.5 rounded text-[11px] text-brand-dark/80 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call-to-action view details & add to cart buttons */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      id={`view-details-${product.id}`}
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center justify-center space-x-1 hover:bg-brand-soft text-brand-forest transition-all duration-300 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer border border-brand-soft"
                    >
                      <span>Quick View</span>
                    </button>
                    <button
                      id={`add-cart-${product.id}`}
                      onClick={() => onAddToCart(product)}
                      className="inline-flex items-center justify-center space-x-1.5 bg-brand-forest hover:bg-brand-dark text-brand-cream transition-all duration-300 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div id="no-products-found" className="text-center py-20 bg-brand-soft/20 rounded-2xl border border-dashed border-brand-soft">
          <p className="font-serif text-2xl text-brand-sage italic">No products matched your search.</p>
          <p className="font-sans text-sm text-brand-dark/50 mt-2">Try clearing your filters or testing another query.</p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="mt-6 border border-brand-forest text-brand-forest hover:bg-brand-soft px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* -------------------- DETAILS POPUP OVERLAY MODAL -------------------- */}
      {selectedProduct && (
        <div
          id="product-details-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/60 p-4 backdrop-blur-sm animate-fade-in"
          onClick={onClearSelectedProduct}
        >
          <div
            id="modal-card"
            className="relative w-full max-w-4xl bg-brand-cream rounded-3xl border border-brand-soft overflow-hidden shadow-2xl transition-all max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button absolute */}
            <button
              id="close-details-modal"
              onClick={onClearSelectedProduct}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-cream/80 backdrop-blur-sm hover:bg-brand-cream text-brand-dark border border-brand-soft/60 shadow-sm transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Image half */}
            <div className="w-full md:w-1/2 h-80 md:h-auto min-h-[350px] relative bg-brand-soft/10">
              <img
                className="w-full h-full object-cover"
                src={selectedProduct.image}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-soft text-[10px] font-semibold tracking-widest text-brand-forest py-1 px-3.5 rounded-full uppercase shadow-xs">
                {selectedProduct.category}
              </span>
            </div>

            {/* Right details content half */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-brand-dark">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="font-sans text-2xl font-bold text-brand-accent">
                      ${selectedProduct.price}
                    </span>
                    <span className="inline-flex items-center space-x-1 uppercase text-[10px] font-semibold tracking-wider text-brand-sage px-2 py-0.5 rounded bg-brand-forest/10">
                      <Check className="h-3 w-3 text-brand-forest" />
                      <span>In Stock</span>
                    </span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-brand-soft bg-opacity-70" />

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage block mb-1">
                    PRODUCT STATEMENT
                  </span>
                  <p className="font-sans text-sm text-brand-dark/70 leading-relaxed font-light">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Key Ingredients Pill grid */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage block mb-2">
                    KEY INGREDIENTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.keyIngredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-soft border border-brand-soft px-3 py-1 rounded-full text-xs text-brand-dark font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits Check List */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-sage block mb-2">
                    PROVEN BENEFITS
                  </span>
                  <ul className="space-y-1.5">
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-brand-dark/85 font-light">
                        <Check className="h-4.5 w-4.5 text-brand-forest bg-brand-forest/10 p-1 rounded-full shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-soft/70">
                <button
                  id="checkout-trigger-btn"
                  onClick={() => {
                    onAddToCart(selectedProduct);
                    onClearSelectedProduct();
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-forest hover:bg-brand-dark text-brand-cream text-xs font-semibold uppercase tracking-widest py-4 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="h-4.5 w-4.5" />
                  <span>Add To Botanical Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

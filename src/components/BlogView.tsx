/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { Calendar, Clock, ArrowRight, X, Heart, ShieldAlert } from 'lucide-react';
import { BLOG_ARTICLES } from '../data';
import { BlogArticle } from '../types';
import useSEO from '../hooks/useSEO';

export default function BlogView() {
  useSEO({
    title: "Botanical Skincare Guides & Journal | HerbsBloom Blog",
    description: "Dive into the HerbsBloom Botanical Skincare Journal. Learn morning routines, summer uv skin protection techniques, organic herb extractions, and certified skin barrier nourishment guides."
  });
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="blog-view-container" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-10">
      {/* Blog Page Journal Header */}
      <div id="blog-header" className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-sage font-semibold">
          HERBSBLOOM JOURNAL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          Latest Articles
        </h1>
        <div className="h-0.5 w-16 bg-brand-accent mx-auto" />
        <p className="font-sans text-sm text-brand-dark/70 font-light leading-relaxed">
          Expert botanist essays, step-by-step beauty tutorials, and clinical wisdom for maintaining balanced and radiant cell structures organically.
        </p>
      </div>

      {/* Articles Grid layout */}
      <div id="blog-articles-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {BLOG_ARTICLES.map((article) => (
          <article
            key={article.id}
            id={`blog-card-${article.id}`}
            onClick={() => setSelectedArticle(article)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-brand-soft bg-brand-cream hover:border-brand-clay transition-all duration-300 hover:shadow-xl p-3 flex flex-col justify-between"
          >
            {/* Header image cover */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-brand-soft/20">
              <img
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                src={article.image}
                alt={article.title}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-brand-cream/90 backdrop-blur-sm border border-brand-soft text-[10px] font-semibold tracking-widest text-brand-forest py-1 px-3 rounded uppercase">
                {article.category}
              </span>

              {/* Aesthetic Like overlay element */}
              <button
                onClick={(e) => toggleLike(article.id, e)}
                className="absolute bottom-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-brand-cream/80 hover:bg-brand-cream backdrop-blur-sm shadow-sm transition-colors border border-brand-soft/30 cursor-pointer"
                aria-label="Like article"
              >
                <Heart
                  className={`h-4 w-4 transition-all ${
                    likedArticles[article.id] ? 'fill-red-500 text-red-500 scale-110' : 'text-brand-dark/60'
                  }`}
                />
              </button>
            </div>

            {/* Snippet Meta, Title, Excerpt details */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2 text-left">
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-xs text-brand-sage font-medium font-sans">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-soft/80" />
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Name Title */}
                <h3 className="font-serif text-2xl font-bold text-brand-dark group-hover:text-brand-forest transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h3>

                {/* Blurb excerpt text description */}
                <p className="font-sans text-sm text-brand-dark/60 leading-relaxed font-light line-clamp-3 pt-1">
                  {article.excerpt}
                </p>
              </div>

              {/* Call-to-action Read more footer button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest group-hover:text-brand-accent transition-colors flex items-center space-x-1.5">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs font-mono text-brand-clay/70">HerbsBloom Lib</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* -------------------- INTERACTIVE READING MODAL -------------------- */}
      {selectedArticle && (
        <div
          id="article-read-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/65 p-4 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            id="reader-modal-card"
            className="w-full max-w-3xl bg-brand-cream rounded-3xl border border-brand-soft overflow-hidden shadow-2xl transition-all max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header cover hero */}
            <div className="relative h-72 sm:h-96 w-full bg-brand-soft/20">
              <img
                className="w-full h-full object-cover"
                src={selectedArticle.image}
                alt={selectedArticle.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />

              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 right-6 text-left text-brand-cream space-y-3">
                <span className="bg-brand-accent text-brand-cream text-[10px] font-bold tracking-widest py-1 px-3.5 rounded uppercase inline-block">
                  {selectedArticle.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center space-x-4 text-xs text-brand-cream/80 font-medium">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5 text-brand-clay" />
                    <span>{selectedArticle.date}</span>
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-cream/40" />
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5 text-brand-clay" />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Absolute Close button */}
              <button
                id="close-reader"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-dark/45 text-white hover:bg-brand-dark cursor-pointer shadow-md transition-all border border-brand-cream/10"
                aria-label="Close reading view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Reading text body */}
            <div className="p-8 sm:p-12 text-left space-y-6">
              {/* First paragraph bold dropcap accent */}
              <p className="font-sans text-base text-brand-dark leading-relaxed font-light border-l-4 border-brand-accent pl-4 italic">
                {selectedArticle.excerpt}
              </p>

              <div className="h-[1px] w-full bg-brand-soft my-6" />

              {/* Article core list contents */}
              <div className="space-y-6">
                {selectedArticle.content.map((paragraph, index) => {
                  // If it contains a colon, we can separate into bold heading and textbody for nice formatting
                  const parts = paragraph.split(': ');
                  if (parts.length > 1) {
                    return (
                      <div key={index} className="space-y-1.5">
                        <h4 className="font-serif text-xl font-bold text-brand-forest">
                          {parts[0]}
                        </h4>
                        <p className="font-sans text-sm text-brand-dark/75 leading-relaxed font-light">
                          {parts[1]}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="font-sans text-sm text-brand-dark/75 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <div className="pt-10 border-t border-brand-soft/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-2 text-xs text-brand-sage">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Statements have not been evaluated by the FDA.</span>
                </div>
                <button
                  id="close-reader-footer-btn"
                  onClick={() => setSelectedArticle(null)}
                  className="bg-brand-forest hover:bg-brand-dark text-brand-cream font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer"
                >
                  Finished Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

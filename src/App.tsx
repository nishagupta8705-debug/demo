/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem } from './types';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart Management States
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('herbsbloom_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Keep localStorage perfectly synced
  useEffect(() => {
    localStorage.setItem('herbsbloom_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
    // Toggle cart open automatically for visual instant affirmation
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    navigate('/products');
  };

  const handlePageChange = (page: string) => {
    if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  // Compute total elements in cart to show on badges
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream text-brand-dark overflow-x-hidden selection:bg-brand-forest/20 selection:text-brand-forest">
      {/* Scroll Manager */}
      <ScrollToTop />

      {/* Sticky Premium Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
      />

      {/* Main viewport area with animated exits & entries */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <HomeView
                    onPageChange={handlePageChange}
                    onSelectProduct={handleSelectProduct}
                    onAddToCart={handleAddToCart}
                  />
                }
              />
              <Route path="/about" element={<AboutView />} />
              <Route
                path="/products"
                element={
                  <ProductsView
                    selectedProduct={selectedProduct}
                    onClearSelectedProduct={() => setSelectedProduct(null)}
                    onSelectProduct={(p) => setSelectedProduct(p)}
                    onAddToCart={handleAddToCart}
                  />
                }
              />
              <Route path="/blog" element={<BlogView />} />
              <Route path="/contact" element={<ContactView />} />
              {/* Fallback route */}
              <Route
                path="*"
                element={
                  <HomeView
                    onPageChange={handlePageChange}
                    onSelectProduct={handleSelectProduct}
                    onAddToCart={handleAddToCart}
                  />
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sustainable Brand Footer */}
      <Footer />

      {/* Sliding Organic Cart Drawer overlay */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'completed'>('cart');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Subtotal calculations
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * promoDiscount;
  const deliveryFee = subtotal > 40 || subtotal === 0 ? 0 : 4.99;
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.trim().toUpperCase() === 'HERBSBLOOM20') {
      setPromoDiscount(0.2); // 20% off
      setPromoSuccess('Promo code applied successfully! 20% discount applied.');
    } else if (promoCode.trim() === '') {
      setPromoError('Please enter a promo code.');
    } else {
      setPromoError('Invalid promo code. Try "HERBSBLOOM20"');
    }
  };

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !address.trim()) {
      alert('Please fill in all checkout fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setCheckoutStep('completed');
      onClearCart();
    }, 1500);
  };

  const resetCheckout = () => {
    setCheckoutStep('cart');
    setName('');
    setEmail('');
    setAddress('');
    setPromoCode('');
    setPromoDiscount(0);
    setPromoError('');
    setPromoSuccess('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur overlay */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (checkoutStep !== 'completed') {
                onClose();
              } else {
                resetCheckout();
                onClose();
              }
            }}
            className="fixed inset-0 z-50 bg-brand-dark/50 backdrop-blur-xs cursor-pointer"
          />

          {/* Sliding Drawer element */}
          <motion.div
            id="cart-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-brand-cream border-l border-brand-soft shadow-2xl"
          >
            {/* Header */}
            <div className="flex h-20 items-center justify-between border-b border-brand-soft px-6">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5 text-brand-forest" />
                <h2 className="font-serif text-2xl font-bold text-brand-dark">
                  {checkoutStep === 'cart' && 'Your Cart'}
                  {checkoutStep === 'checkout' && 'Secure Checkout'}
                  {checkoutStep === 'completed' && 'Order Placed!'}
                </h2>
                {checkoutStep === 'cart' && cartItems.length > 0 && (
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-forest/10 text-xs font-semibold text-brand-forest">
                    {cartItems.reduce((acc, current) => acc + current.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                id="close-cart-btn"
                onClick={() => {
                  if (checkoutStep === 'completed') {
                    resetCheckout();
                  }
                  onClose();
                }}
                className="rounded-full p-1.5 text-brand-dark hover:bg-brand-soft transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Drawer Bodies */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* STEP 1: CART DIRECT VIEW */}
              {checkoutStep === 'cart' && (
                <>
                  {cartItems.length === 0 ? (
                    <div id="cart-empty-view" className="flex h-[60%] flex-col items-center justify-center space-y-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-sage">
                        <ShoppingBag className="h-8 w-8" />
                      </div>
                      <p className="font-serif text-lg font-medium text-brand-dark">Is your skin thirsty?</p>
                      <p className="font-sans text-xs text-brand-dark/50 max-w-xs leading-relaxed">
                        Add botanical serums, moisturizers, or botanical cleansers to begin your revitalizing skincare routine journey.
                      </p>
                      <button
                        id="cart-shop-now-btn"
                        onClick={onClose}
                        className="mt-2 border border-brand-forest text-brand-forest hover:bg-brand-soft px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
                      >
                        Shop Collection Now
                      </button>
                    </div>
                  ) : (
                    /* Cart list */
                    <div id="cart-items-list" className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center space-x-4 border-b border-brand-soft/60 pb-4"
                        >
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-brand-soft">
                            <img
                              className="h-full w-full object-cover"
                              src={item.product.image}
                              alt={item.product.name}
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex-1 text-left min-w-0">
                            <h4 className="font-serif text-md font-bold text-brand-dark truncate">
                              {item.product.name}
                            </h4>
                            <p className="font-sans text-xs text-brand-sage capitalize">
                              {item.product.category}
                            </p>
                            <span className="font-sans text-sm font-semibold text-brand-accent mt-0.5 block">
                              ${item.product.price}
                            </span>
                          </div>

                          {/* Quantities stepper and delete */}
                          <div className="flex items-center space-x-3 shrink-0">
                            <div className="flex items-center rounded-lg border border-brand-soft bg-brand-cream overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1 px-2 text-brand-dark hover:bg-brand-soft transition-colors cursor-pointer"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-2 font-mono text-xs text-brand-dark font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 px-2 text-brand-dark hover:bg-brand-soft transition-colors cursor-pointer"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-brand-clay hover:text-red-500 transition-colors p-1 cursor-pointer"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}

                      {/* Promo Code Accent Section */}
                      <div className="pt-4 mt-6 border-t border-brand-soft text-left space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-brand-sage">
                          Value Promo Code
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            placeholder='Try "HERBSBLOOM20"'
                            className="bg-brand-soft border border-brand-soft text-xs text-brand-dark rounded-lg px-3 py-2 flex-grow focus:outline-none focus:bg-brand-cream focus:ring-1 focus:ring-brand-accent uppercase"
                          />
                          <button
                            onClick={handleApplyPromo}
                            className="bg-brand-forest hover:bg-brand-dark text-brand-cream text-xs font-semibold uppercase tracking-wider px-4 rounded-lg transition-colors cursor-pointer"
                          >
                            Apply
                          </button>
                        </div>
                        {promoError && (
                          <p className="text-[11px] text-red-500 font-medium">{promoError}</p>
                        )}
                        {promoSuccess && (
                          <p className="text-[11px] text-green-600 font-medium">{promoSuccess}</p>
                        )}
                        {promoDiscount === 0 && (
                          <p className="text-[10px] text-brand-clay italic">
                            💡 Use code <strong>HERBSBLOOM20</strong> to get 20% off your order.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* STEP 2: CHECKOUT INFO FORM */}
              {checkoutStep === 'checkout' && (
                <form id="cart-checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4 text-left">
                  <div className="p-4 rounded-xl bg-brand-soft border border-brand-soft/60 space-y-2 mb-4">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-sage">
                      Order Summary
                    </p>
                    <div className="flex justify-between font-sans text-xs text-brand-dark/80">
                      <span>Subtotal:</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    {promoDiscount > 0 && (
                      <div className="flex justify-between font-sans text-xs text-green-600">
                        <span>Discount (20%):</span>
                        <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-sans text-xs text-brand-dark/80">
                      <span>Botanical Delivery:</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="h-[1px] bg-brand-soft my-1" />
                    <div className="flex justify-between font-sans text-sm text-brand-dark font-bold">
                      <span>Estimated Total:</span>
                      <span className="text-brand-accent">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-brand-dark border-b border-brand-soft pb-2 mb-3">
                    Shipping Details
                  </h3>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-sage">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-brand-soft border border-brand-soft rounded-xl px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:bg-brand-cream focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-sage">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full bg-brand-soft border border-brand-soft rounded-xl px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:bg-brand-cream focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-brand-sage">
                      Shipping Address *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Botanist lane, Austin, TX 78701"
                      className="w-full bg-brand-soft border border-brand-soft rounded-xl px-4 py-2.5 text-sm text-brand-dark resize-none focus:outline-none focus:bg-brand-cream focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  <div className="p-3.5 bg-brand-forest/5 rounded-xl text-[11px] text-brand-sage italic border border-brand-forest/10 mt-2">
                    🔒 Secure SSL sandbox order simulation. No actual payment credentials will be requested.
                  </div>

                  <div className="pt-4 flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="border border-brand-forest/20 text-brand-forest hover:bg-brand-soft px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer flex-1"
                    >
                      Back To Cart
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-forest hover:bg-brand-dark text-brand-cream text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer flex-1 flex justify-center items-center space-x-1.5"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Lock className="h-3.5 w-3.5" />
                          <span>Place Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: TRANSACTION SUCCESS PREVIEW */}
              {checkoutStep === 'completed' && (
                <div id="cart-completed-view" className="flex flex-col items-center justify-center space-y-5 text-center pt-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-brand-forest">Botanical Order Placed!</h3>
                    <p className="font-sans text-xs text-brand-dark/75 leading-relaxed max-w-xs mx-auto">
                      Thank you for choosing HerbsBloom! Your sandbox order transaction succeeded. A confirmation email has been sent to your address.
                    </p>
                  </div>
                  <div className="bg-brand-soft p-4 rounded-xl text-left border border-brand-soft text-[11px] text-brand-dark/80 font-light space-y-1 font-sans w-full">
                    <p><strong>Deliver To:</strong> {name}</p>
                    <p><strong>Reply Notice:</strong> {email}</p>
                    <p><strong>Shipment Zone:</strong> {address}</p>
                    <p><strong>Estimated Arrival:</strong> 2-3 Business Days</p>
                  </div>
                  <button
                    id="close-completed-btn"
                    onClick={() => {
                      resetCheckout();
                      onClose();
                    }}
                    className="w-full bg-brand-forest hover:bg-brand-dark text-brand-cream text-xs font-semibold uppercase tracking-wider py-3 rounded-xl cursor-pointer"
                  >
                    Continue Exploring
                  </button>
                </div>
              )}
            </div>

            {/* Footer Summary (Only visible when items present in step 1) */}
            {checkoutStep === 'cart' && cartItems.length > 0 && (
              <div id="cart-drawer-footer" className="border-t border-brand-soft bg-brand-cream p-6 text-left space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between font-sans text-xs text-brand-dark/70">
                    <span>Subtotal:</span>
                    <span className="font-semibold text-brand-dark">${subtotal.toFixed(2)}</span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between font-sans text-xs text-green-600">
                      <span>Discount (Promo Code):</span>
                      <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-sans text-xs text-brand-dark/70">
                    <span>Botanical Delivery:</span>
                    <span className="font-semibold text-brand-dark">
                      {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="h-[1px] bg-brand-soft/70 my-1" />
                  <div className="flex justify-between font-sans text-base text-brand-dark font-bold">
                    <span>Estimated Total:</span>
                    <span className="text-brand-accent">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    id="clear-all-cart-btn"
                    onClick={() => {
                      if (confirm('Clear all items from your cart?')) {
                        onClearCart();
                      }
                    }}
                    className="border border-brand-forest/20 text-brand-forest hover:bg-brand-soft/80 font-sans text-xs font-semibold uppercase tracking-wider p-3 rounded-xl transition-all cursor-pointer"
                    aria-label="Clear all items"
                  >
                    Clear Cart
                  </button>
                  <button
                    id="trigger-checkout-step-btn"
                    onClick={() => setCheckoutStep('checkout')}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-brand-forest hover:bg-brand-dark text-brand-cream font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Proceed To Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-[10px] text-center text-brand-sage font-light">
                  🍀 Free Shipping on organic orders above $40!
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

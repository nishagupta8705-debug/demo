/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Compass, Send, CheckCircle, RefreshCw } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { ContactInquiry } from '../types';
import useSEO from '../hooks/useSEO';

export default function ContactView() {
  useSEO({
    title: "Contact Our Botanical Team | Austin Wellness | HerbsBloom",
    description: "Connect directly with the HerbsBloom skin health customer experience team in Austin, Texas. Ask about plant-based ingredients, package delivery tracking, or retail consulting."
  });
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ContactInquiry | null>(null);

  const [pastInquiries, setPastInquiries] = useState<ContactInquiry[]>(() => {
    try {
      const stored = localStorage.getItem('herbsbloom_inquiries');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field-level clean validations
    if (!fullName.trim()) {
      setErrorMsg('Please specify your full name.');
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please supply a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setErrorMsg('Please write an inquiry subject.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg('Inquiry message should be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);

    // Simulate pleasant botanical secure database submission transaction delay
    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        fullName: fullName.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      };

      setSubmittedInquiry(newInquiry);
      const updatedList = [...pastInquiries, newInquiry];
      setPastInquiries(updatedList);
      try {
        localStorage.setItem('herbsbloom_inquiries', JSON.stringify(updatedList));
      } catch (err) {
        console.error('Local Storage error writing inquiry:', err);
      }

      setIsSubmitting(false);
      // Reset state inputs
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmittedInquiry(null);
  };

  const handleClearHistory = () => {
    if (confirm('Clear your local submission history?')) {
      setPastInquiries([]);
      localStorage.removeItem('herbsbloom_inquiries');
    }
  };

  return (
    <div id="contact-view-container" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-10">
      {/* Editorial Header */}
      <div id="contact-header" className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <span className="font-sans text-xs uppercase tracking-widest text-brand-sage font-semibold">
          GET IN TOUCH
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">
          We'd Love to Hear From You!
        </h1>
        <div className="h-0.5 w-16 bg-brand-accent mx-auto" />
        <p className="font-sans text-sm text-brand-dark/70 font-light leading-relaxed">
          Inquire about botanic shipments, organic consultations, or bulk wholesale purchase opportunities with our Texas team.
        </p>
      </div>

      {/* Main Two-Column split frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Contact channels support details */}
        <div id="contact-info-panel" className="lg:col-span-5 space-y-8 text-left">
          {/* Customer Support channel */}
          <div className="rounded-2xl border border-brand-soft bg-brand-cream p-8 space-y-4 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-brand-forest">
              Customer Support
            </h3>
            <p className="font-sans text-sm text-brand-dark/60 font-light leading-relaxed">
              For digital order updates, ingredient consultation, or standard returns support:
            </p>
            <div className="space-y-3 font-sans text-sm">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 text-brand-dark hover:text-brand-accent transition-colors py-1 cursor-pointer"
              >
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center space-x-3 text-brand-dark hover:text-brand-accent transition-colors py-1 cursor-pointer"
              >
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Business Hours Panel */}
          <div className="rounded-2xl border border-brand-soft bg-brand-cream p-8 space-y-4 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-brand-forest flex items-center space-x-2">
              <Clock className="h-6 w-6 text-brand-accent" />
              <span>Business Hours</span>
            </h3>
            <div className="space-y-2.5 font-sans text-sm border-t border-brand-soft pt-3">
              {CONTACT_INFO.businessHours.map((bh, idx) => (
                <div key={idx} className="flex justify-between pb-1 text-brand-dark/80">
                  <span className="font-light">{bh.day}</span>
                  <span className="font-medium text-brand-dark">{bh.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Channels Panel */}
          <div className="rounded-2xl border border-brand-soft bg-brand-cream p-8 space-y-4 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-brand-forest">
              Follow Us
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {CONTACT_INFO.socials.map((sc, idx) => (
                <a
                  key={idx}
                  href={sc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-brand-soft hover:bg-brand-soft/80 border border-brand-soft/40 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 text-brand-dark">
                    {sc.name === 'Instagram' && <Instagram className="h-5 w-5 text-brand-accent" />}
                    {sc.name === 'Facebook' && <Facebook className="h-5 w-5 text-brand-accent" />}
                    {sc.name === 'Pinterest' && <Compass className="h-5 w-5 text-brand-accent" />}
                    <span className="font-sans text-sm font-medium">{sc.name}</span>
                  </div>
                  <span className="font-sans text-xs text-brand-sage group-hover:text-brand-accent font-light">
                    {sc.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form Container */}
        <div id="contact-form-panel" className="lg:col-span-7">
          {!submittedInquiry ? (
            <div className="rounded-2xl border border-brand-soft bg-brand-cream p-8 sm:p-10 shadow-lg text-left relative">
              <h3 className="font-serif text-3xl font-bold text-brand-dark mb-6">
                Send a Message
              </h3>

              {errorMsg && (
                <div id="contact-form-error" className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 font-sans text-xs flex items-center space-x-2 animate-fade-in">
                  <span className="font-bold">Error:</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                {/* Full name input */}
                <div className="space-y-1.5ClassName">
                  <label htmlFor="full-name" className="block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                    Full Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-brand-soft focus:outline-none focus:ring-1 focus:ring-brand-accent focus:bg-brand-cream transition-all text-sm text-brand-dark"
                    required
                  />
                </div>

                {/* Email input */}
                <div className="space-y-1.5">
                  <label htmlFor="email-address" className="block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                    Email Address *
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-brand-soft focus:outline-none focus:ring-1 focus:ring-brand-accent focus:bg-brand-cream transition-all text-sm text-brand-dark"
                    required
                  />
                </div>

                {/* Subject input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-brand-soft focus:outline-none focus:ring-1 focus:ring-brand-accent focus:bg-brand-cream transition-all text-sm text-brand-dark"
                    required
                  />
                </div>

                {/* Message input */}
                <div className="space-y-1.5">
                  <label htmlFor="message-body" className="block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                    Your Message *
                  </label>
                  <textarea
                    id="message-body"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry in detail (min. 10 characters)..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-soft border border-brand-soft focus:outline-none focus:ring-1 focus:ring-brand-accent focus:bg-brand-cream transition-all text-sm text-brand-dark resize-none"
                    required
                  />
                </div>

                {/* Secure submit button */}
                <button
                  id="submit-contact-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-forest hover:bg-brand-dark disabled:bg-brand-sage text-brand-cream text-xs font-semibold uppercase tracking-widest py-4 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-4.5 w-4.5 animate-spin" />
                      <span>transmitting securely...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Contact Form Success view state replacement */
            <div
              id="submission-success-card"
              className="rounded-2xl border border-brand-soft bg-brand-cream p-8 sm:p-10 shadow-lg text-center space-y-6 animate-fade-in"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100">
                <CheckCircle className="h-10 w-10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-3xl font-bold text-brand-forest">Thank you, {submittedInquiry.fullName}!</h3>
                <p className="font-sans text-sm text-brand-dark/70 font-light max-w-md mx-auto leading-relaxed">
                  Your message regarding "<strong className="text-brand-dark font-medium">{submittedInquiry.subject}</strong>" was received successfully by our corporate dispatch office.
                </p>
              </div>

              <div className="bg-brand-soft/50 p-5 rounded-xl text-left border border-brand-soft text-xs text-brand-dark/85 font-light space-y-2 font-sans max-w-md mx-auto">
                <p><strong>Reply Channel:</strong> {submittedInquiry.email}</p>
                <div className="h-[1px] w-full bg-brand-soft" />
                <p><strong>Transmitted Text:</strong> "{submittedInquiry.message}"</p>
              </div>

              <p className="font-sans text-xs text-brand-sage">
                A botanical representative will reply directly via email within 24 working hours.
              </p>

              <div>
                <button
                  id="reset-form-btn"
                  onClick={handleResetForm}
                  className="inline-flex items-center space-x-1 border border-brand-forest text-brand-forest hover:bg-brand-soft px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Corporate address card details */}
      <section id="corporate-address-map" className="mt-16 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-brand-soft bg-brand-cream flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 p-8 sm:p-12 text-left space-y-4 flex flex-col justify-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-forest/10 text-brand-forest">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-dark">
              Austin Wellness HQ
            </h3>
            <p className="font-sans text-sm text-brand-dark/70 leading-relaxed font-light">
              Our formulation laboratory and customer relations center rests in the core of Texas. Feel free to request organic laboratory tours by appointments.
            </p>
            <div className="pt-2 font-sans text-sm text-brand-dark/90 leading-relaxed space-y-1">
              <p className="font-semibold">{CONTACT_INFO.address.companyName}</p>
              <p>{CONTACT_INFO.address.street}</p>
              <p>{CONTACT_INFO.address.cityStateZip}</p>
              <p>{CONTACT_INFO.address.country}</p>
            </div>
          </div>

          {/* Aesthetic Mock map canvas segment */}
          <div className="w-full md:w-1/2 bg-brand-soft relative min-h-[250px] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1c2714_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative text-center p-6 space-y-2 z-10">
              <span className="inline-block p-3 rounded-full bg-brand-forest text-brand-cream shadow-md animate-bounce">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="font-serif text-lg font-bold text-brand-forest">GPS: Austin, Texas</p>
              <span className="inline-block font-sans text-[10px] uppercase font-bold tracking-widest text-brand-sage rounded-full bg-brand-cream px-3 py-1 border border-brand-soft">
                245 Green Valley Ave
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* User Inquiry History list - Persistent storage tracker */}
      {pastInquiries.length > 0 && (
        <section id="user-inquiry-history" className="mt-16 max-w-6xl mx-auto text-left space-y-4">
          <div className="flex justify-between items-center border-b border-brand-soft pb-2">
            <h4 className="font-serif text-xl font-bold text-brand-dark">
              Your Sent Messages (Local History)
            </h4>
            <button
              onClick={handleClearHistory}
              className="text-xs font-semibold text-brand-sage hover:text-red-500 uppercase tracking-wider cursor-pointer"
            >
              Clear Log
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastInquiries.map((inq, idx) => (
              <div
                key={idx}
                className="bg-brand-cream border border-brand-soft p-5 rounded-xl space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-serif text-base font-bold text-brand-forest leading-tight truncate">
                      {inq.subject}
                    </span>
                    <span className="text-[10px] uppercase font-bold bg-brand-soft px-2 py-0.5 rounded text-brand-dark/70 shrink-0">
                      Dispatched
                    </span>
                  </div>
                  <p className="font-sans text-xs text-brand-dark/70 leading-relaxed font-light line-clamp-2 mt-1">
                    "{inq.message}"
                  </p>
                </div>
                <div className="text-[10px] font-sans text-brand-sage flex justify-between pt-2 border-t border-brand-soft/50">
                  <span>From: {inq.fullName}</span>
                  <span>Cc: {inq.email}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

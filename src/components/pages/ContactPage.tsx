import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Send, Mail, Linkedin, Instagram, Facebook, CheckCircle, Clock, Phone } from 'lucide-react';
import { RevealOnScroll } from '../ui/effects';

export default function ContactPage() {
  // Step 5e — SEO useEffect
  useEffect(() => {
    document.title = 'Contact PRUXIN | Talk to a UX Designer';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prev = meta?.getAttribute('content') || '';
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Get in touch with PRUXIN. Tell us about your product and what you need to fix. We respond within 24 hours.');
    return () => {
      document.title = 'PRUXIN | Clarity-First UX Design for SaaS & Enterprise';
      if (meta) meta.setAttribute('content', prev);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  // Step 5a — error state
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Step 5b — real Web3Forms fetch
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const data = new FormData();
      data.append('access_key', '4c9dec39-6838-45d9-9e95-0df8f4086157');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('company', formData.company);
      data.append('message', formData.message);
      data.append('subject', 'New enquiry from pruxin.com');
      data.append('from_name', 'PRUXIN Contact Form');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please email pranav@pruxin.com directly.');
      }
    } catch {
      setError('Could not send your message. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/pruxin/', icon: Linkedin, color: '#0A66C2' },
    { name: 'Instagram', href: 'https://www.instagram.com/pruxin_studio/', icon: Instagram, color: '#E4405F' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553274152903', icon: Facebook, color: '#1877F2' },
    { name: 'Medium', href: 'https://medium.com/@pranavraval87', icon: null, color: '#000' },
  ];

  const inputClass = (field: string) =>
    `w-full px-5 rounded-2xl border bg-[var(--color-gray-50)] text-[var(--color-black)] type-body-small focus:outline-none transition-all duration-300 ${
      focusedField === field
        ? 'border-blue-400 ring-[3px] ring-blue-400/10 shadow-[0_0_20px_rgba(37,99,235,0.08)]'
        : 'border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.15)]'
    }`;

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-[60px] px-6 bg-[var(--color-gray-50)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-[960px] mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="type-display-small text-[var(--color-black)] mb-6"
          >
            Let's <span className="gradient-text-blue-purple">talk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="type-body-large text-[var(--color-gray-600)] max-w-2xl mx-auto"
          >
            Tell me about your product and what you're trying to fix. I'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-[64px] px-6 bg-white relative">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-16">
          {/* Form */}
          <RevealOnScroll delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[var(--color-gray-50)] rounded-[28px] p-12 text-center border border-[rgba(0,0,0,0.06)]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={32} className="text-green-600" />
                </motion.div>
                <h3 className="type-headline-medium text-[var(--color-black)] mb-4">Message sent!</h3>
                <p className="type-body-medium text-[var(--color-gray-600)]">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step 5c — honeypot */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" readOnly />

                {[
                  { id: 'name', label: 'Name *', type: 'text', placeholder: 'Your name', required: true },
                  { id: 'email', label: 'Email *', type: 'email', placeholder: 'you@company.com', required: true },
                  { id: 'company', label: 'Company / Product Name', type: 'text', placeholder: 'Optional', required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block type-label text-[var(--color-gray-600)] mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={(formData as any)[field.id]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass(field.id)} h-[52px]`}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block type-label text-[var(--color-gray-600)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClass('message')} py-4 resize-none`}
                    placeholder="Tell me about your product: what's working, what's not, and what you're trying to improve."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative inline-flex items-center justify-center gap-2 h-[56px] px-10 bg-[var(--color-black)] text-white text-[length:var(--text-md)] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {sending ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </button>

                {/* Step 5d — error message */}
                {error && (
                  <p className="text-sm text-red-500 text-center mt-3">{error}</p>
                )}

                {/* Step 5d — GDPR copy */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to our{' '}
                  <Link to="/privacy" className="underline hover:text-gray-600 transition-colors">
                    Privacy Policy
                  </Link>
                  . Your data is securely processed to handle your enquiry.
                </p>
              </form>
            )}
          </RevealOnScroll>

          {/* Contact Info */}
          <RevealOnScroll delay={0.2}>
            <div className="space-y-8">
              {/* Phone card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 blur-sm" />
                <div className="relative bg-[var(--color-gray-50)] rounded-2xl p-6 border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-400/5 flex items-center justify-center">
                      <Phone size={18} className="text-teal-500" />
                    </div>
                    <h3 className="type-headline-small text-[var(--color-black)]">Call us directly</h3>
                  </div>
                  <a
                    href="tel:+441313815821"
                    className="type-body-medium text-[var(--color-electric-blue)] hover:underline block mb-1"
                  >
                    +44 131 381 5821
                  </a>
                  <p className="type-body-small text-[var(--color-gray-500)]">
                    Or speak to Clara, our AI receptionist — available 24/7.
                  </p>
                </div>
              </div>

              {/* Email card with gradient accent */}
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-sm" />
                <div className="relative bg-[var(--color-gray-50)] rounded-2xl p-6 border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-400/5 flex items-center justify-center">
                      <Mail size={18} className="text-blue-500" />
                    </div>
                    <h3 className="type-headline-small text-[var(--color-black)]">Email directly</h3>
                  </div>
                  <a
                    href="mailto:pranav@pruxin.com"
                    className="type-body-medium text-[var(--color-electric-blue)] hover:underline"
                  >
                    pranav@pruxin.com
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="type-headline-small text-[var(--color-black)] mb-4">Connect</h3>
                <div className="space-y-2.5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 type-body-small text-[var(--color-gray-700)] hover:text-[var(--color-black)] transition-all group/social rounded-xl p-2.5 -mx-2.5 hover:bg-[var(--color-gray-50)]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-gray-100)] flex items-center justify-center group-hover/social:scale-105 transition-all duration-300"
                        style={{ '--hover-color': link.color } as React.CSSProperties}
                      >
                        {link.icon ? (
                          <link.icon size={18} className="text-[var(--color-gray-600)]" />
                        ) : (
                          <span className="font-bold text-[length:var(--text-sm)] text-[var(--color-gray-600)]">M</span>
                        )}
                      </div>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 blur-sm" />
                <div className="relative bg-[var(--color-gray-50)] rounded-2xl p-6 border border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/15 to-emerald-400/5 flex items-center justify-center">
                      <Clock size={18} className="text-teal-500" />
                    </div>
                    <div>
                      <p className="type-label text-[var(--color-gray-500)]">RESPONSE TIME</p>
                      <p className="type-body-medium text-[var(--color-black)] font-semibold">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="type-body-small text-[var(--color-gray-600)]">
                    I typically reply same-day during UK business hours.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
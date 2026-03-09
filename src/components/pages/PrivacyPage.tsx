import React, { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | PRUXIN';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'PRUXIN Privacy Policy. How we collect, use, and protect your data in accordance with UK GDPR.');
    return () => { document.title = 'PRUXIN | Clarity-First UX Design for SaaS & Enterprise'; };
  }, []);

  return (
    <section className="pt-[140px] pb-[120px] px-6 bg-[var(--color-gray-50)] min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <h1 className="type-display-small text-[var(--color-black)] mb-4">Privacy Policy</h1>
        <p className="type-body-small text-[var(--color-gray-500)] mb-16">Last updated: March 2026</p>

        <div className="space-y-12 type-body-medium text-[var(--color-gray-700)]">

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">1. Who we are</h2>
            <p>PRUXIN is a UX and product design consultancy operated by Pranav Raval, based in Glasgow, United Kingdom. We can be reached at <a href="mailto:pranav@pruxin.com" className="text-[var(--color-electric-blue)] hover:underline">pranav@pruxin.com</a>.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">2. What data we collect</h2>
            <p>When you submit the contact form on pruxin.com, we collect your name, email address, company name (optional), and the message you write. We do not collect any other personal data unless you provide it directly.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">3. How we use your data</h2>
            <p>We use the information you submit solely to respond to your enquiry. We do not sell, share, or rent your data to any third party. We do not add you to any mailing list without your explicit consent.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">4. How your data is processed</h2>
            <p>Contact form submissions are routed securely via Web3Forms, a third-party serverless form handling service. Your data passes through their infrastructure before being delivered to our inbox. You can review their privacy practices at <a href="https://web3forms.com/privacy" className="text-[var(--color-electric-blue)] hover:underline" target="_blank" rel="noreferrer">web3forms.com/privacy</a>.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">5. Data retention</h2>
            <p>We retain your contact details only for as long as necessary to respond to your enquiry or fulfil any agreed work. You may request deletion of your data at any time by emailing us directly.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">6. Your rights under UK GDPR</h2>
            <p>You have the right to access, correct, or delete any personal data we hold about you. You also have the right to restrict or object to processing, and the right to data portability. To exercise any of these rights, contact us at <a href="mailto:pranav@pruxin.com" className="text-[var(--color-electric-blue)] hover:underline">pranav@pruxin.com</a>.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">7. Cookies</h2>
            <p>This site uses Google Analytics to understand visitor behaviour. This may set cookies on your device. No personally identifiable information is collected via analytics. You can opt out via your browser settings or the Google Analytics opt-out extension.</p>
          </div>

          <div>
            <h2 className="type-headline-small text-[var(--color-black)] mb-4">8. Contact</h2>
            <p>For any privacy-related questions, email <a href="mailto:pranav@pruxin.com" className="text-[var(--color-electric-blue)] hover:underline">pranav@pruxin.com</a>.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

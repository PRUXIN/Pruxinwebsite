import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-[var(--color-gray-50)] border-t border-[rgba(0,0,0,0.06)]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        <a href="/" className="text-[21px] font-semibold tracking-tight text-[var(--color-black)] mb-8">
          PRUXIN
        </a>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#services" className="type-caption text-[var(--color-gray-600)] hover:text-[var(--color-black)] transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="type-caption text-[var(--color-gray-600)] hover:text-[var(--color-black)] transition-colors">
            Process
          </a>
          <a href="mailto:pranavdesigns2020@gmail.com" className="type-caption text-[var(--color-gray-600)] hover:text-[var(--color-black)] transition-colors">
            Contact
          </a>
        </div>

        <p className="type-caption text-[var(--color-gray-500)] mb-8 text-center">
          Questions? <a href="mailto:pranavdesigns2020@gmail.com" className="text-[var(--color-electric-blue)] hover:underline">pranav@pruxin.com</a>
        </p>

        <div className="w-full border-t border-[rgba(0,0,0,0.06)] mb-8" />

        <p className="type-label text-[var(--color-gray-400)] text-center">
          © {currentYear} ContentFlow by Pruxin. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

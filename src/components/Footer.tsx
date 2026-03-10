import React from 'react';
import { Linkedin, Instagram, Facebook, Mail, Youtube, Music, Phone } from 'lucide-react';
import pruxinLogo from 'figma:asset/ed230e65ec8d7b6452e7e9e65ae016b014fa4be0.png';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/pruxin/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/pruxin_studio/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61553274152903', icon: Facebook },
    { name: 'Medium', href: 'https://medium.com/@pranavraval87', icon: null },
    { name: 'YouTube', href: 'https://www.youtube.com/@pruxin_Clarity_in_every_click', icon: Youtube },
    { name: 'Spotify', href: 'https://open.spotify.com/show/7JyafgYs0C5CXZTGksngVe', icon: Music },
    { name: 'Email', href: 'mailto:pranav@pruxin.com', icon: Mail },
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Content', href: '/content' },
    { name: 'Contact', href: '/contact' },
    { name: 'Clara', href: '/clara' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="relative py-16 px-6 text-white overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--color-surface-dark) 0%, #020617 100%)' }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px animate-gradient-x"
        style={{
          background: 'var(--gradient-animated-border)',
          backgroundSize: '200% 100%',
        }}
      />

      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="block mb-4 group">
              <img src={pruxinLogo} alt="PRUXIN" className="h-7 w-auto transition-transform group-hover:scale-105" />
            </a>
            <p className="type-body-small text-slate-400 max-w-xs">
              AI automation and clarity-first design. Built for businesses that can't afford to lose a client to a missed call or a confusing experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="type-label text-slate-500 mb-4">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="type-body-small text-slate-400 hover:text-white transition-colors relative w-fit group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="type-label text-slate-500 mb-4">Get in Touch</p>
            <a
              href="mailto:pranav@pruxin.com"
              className="type-body-small text-slate-400 hover:text-white transition-colors block mb-3"
            >
              pranav@pruxin.com
            </a>
            <a
              href="tel:+441313815821"
              className="inline-flex items-center gap-2 type-body-small text-slate-400 hover:text-white transition-colors mb-6"
            >
              <Phone size={14} className="shrink-0" />
              +44 131 381 5821
            </a>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.12] hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  {social.icon ? (
                    <social.icon size={17} className="text-slate-400 group-hover:text-white transition-colors" />
                  ) : (
                    <span className="text-slate-400 group-hover:text-white font-bold text-[13px] transition-colors">M</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="type-caption text-slate-500 text-center md:text-left">
            &copy; 2026 PRUXIN. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {socialLinks
              .filter((s) => s.name !== 'Email')
              .map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption text-slate-500 hover:text-white transition-colors relative group"
                >
                  {social.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
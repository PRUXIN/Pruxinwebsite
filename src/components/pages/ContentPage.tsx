import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Youtube, Music } from 'lucide-react';
import { RevealOnScroll, MagneticWrap, StaggerContainer, StaggerItem } from '../ui/effects';
import { MagicCard } from '../magicui/magic-card';

export default function ContentPage() {
  useEffect(() => {
    document.title = 'Content & Insights | UX Articles, Videos, Podcast';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'UX design articles on usability heuristics and user research methods. Watch product design walkthroughs and listen to Clarity in Every Click podcast.'
      );
    }
  }, []);

  const mediumArticles = [
    {
      id: 'article-1',
      title: 'Remote Moderated Testing vs Remote Unmoderated Testing',
      publication: 'Design Bootcamp',
      excerpt: 'Understanding the differences between remote moderated and unmoderated usability testing methods, and when to use each approach for effective user research.',
      link: 'https://medium.com/design-bootcamp/remote-moderated-testing-vs-remote-unmoderated-testing-20592a6ec78c',
      gradient: '#2563EB',
    },
    {
      id: 'article-2',
      title: 'Understand 10 Usability Heuristics for User Interface Design (Part II)',
      publication: 'Design Bootcamp',
      excerpt: "Continuing the exploration of Nielsen's usability heuristics with practical examples and applications for creating better user interfaces.",
      link: 'https://medium.com/design-bootcamp/understand-10-usability-heuristics-for-user-interface-design-part-ii-bd83af4b719f',
      gradient: '#7C3AED',
    },
    {
      id: 'article-3',
      title: 'Understand 10 Usability Heuristics for User Interface Design (Part I)',
      publication: 'Design Bootcamp',
      excerpt: "Breaking down Nielsen's 10 usability heuristics with real-world examples to improve your interface design decisions and UX quality.",
      link: 'https://medium.com/design-bootcamp/understand-10-usability-heuristics-for-user-interface-design-part-i-334a86b4ab0d',
      gradient: '#0D9488',
    },
    {
      id: 'article-4',
      title: 'What People in the UK Like to Do with Scrap Items',
      publication: 'Medium',
      excerpt: 'Exploring how people in the UK approach recycling, upcycling, and creative reuse of scrap materials through user research and behavioral insights.',
      link: 'https://medium.com/@pranavraval87/what-people-in-the-uk-like-to-do-with-scrap-items-4372a325250f',
      gradient: '#EC4899',
    },
  ];

  const youtubeVideos = [
    { id: 'uWa1Skjqgoc', title: 'UX Design Walkthrough: Product Clarity' },
    { id: 'YXEpUI4Ur94', title: 'SaaS Onboarding Teardown' },
    { id: 'oOC9mo2geGA', title: 'Usability Heuristics in Practice' },
    { id: 'u9gLafLa4cU', title: 'Design Process & Flow Simplification' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-[80px] px-6 bg-[#F9FAFB] relative overflow-hidden">
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
            Insights &{' '}
            <span className="gradient-text-blue-purple">Content</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="type-body-large text-[var(--color-gray-600)] max-w-2xl mx-auto"
          >
            Thoughts on UX design, usability principles, and product clarity. Read articles, watch
            walkthroughs, or listen to the podcast.
          </motion.p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-[96px] px-6 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-12">Articles</h2>
          </RevealOnScroll>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            {mediumArticles.map((article) => (
              <StaggerItem key={article.id}>
                <MagicCard
                  className="h-full rounded-[24px] bg-[#F9FAFB] border-[rgba(0,0,0,0.06)] p-0 hover:-translate-y-1 transition-all duration-400"
                  gradientColor={`${article.gradient}18`}
                  gradientSize={280}
                >
                  <div className="p-8 flex flex-col h-full">
                    <span className="inline-flex items-center gap-1.5 type-label text-[var(--color-gray-500)] mb-3">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: article.gradient }} />
                      {article.publication}
                    </span>
                    <h3 className="type-headline-small text-[var(--color-black)] mb-4">{article.title}</h3>
                    <p className="type-body-small text-[var(--color-gray-600)] mb-6 flex-1">{article.excerpt}</p>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-electric-blue)] group/link"
                    >
                      Read on Medium
                      <ExternalLink size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </MagicCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll>
            <div className="text-center">
              <MagneticWrap strength={0.1}>
                <a
                  href="https://medium.com/@pranavraval87"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 h-[56px] px-10 bg-[var(--color-black)] text-white text-[17px] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.01]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View All Articles on Medium <ArrowRight size={18} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </a>
              </MagneticWrap>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-[96px] px-6 bg-[#F9FAFB] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)' }}
        />
        <div className="max-w-[1280px] mx-auto relative">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-12">Videos</h2>
          </RevealOnScroll>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.1}>
            {youtubeVideos.map((video) => (
              <StaggerItem key={video.id}>
                <div className="rounded-[24px] overflow-hidden bg-white border border-[rgba(0,0,0,0.06)] shadow-light hover:shadow-strong transition-all duration-400 group">
                  <div className="aspect-video relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="type-body-medium text-[var(--color-black)] font-semibold">{video.title}</h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll>
            <div className="text-center">
              <MagneticWrap strength={0.1}>
                <a
                  href="https://www.youtube.com/@pruxin_Clarity_in_every_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 h-[56px] px-10 bg-[var(--color-black)] text-white text-[17px] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.01]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Youtube size={20} /> Subscribe on YouTube
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </a>
              </MagneticWrap>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-[96px] px-6 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)' }}
        />
        <div className="max-w-[800px] mx-auto relative">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="type-headline-large text-[var(--color-black)] mb-6">Podcast</h2>
              <p className="type-body-large text-[var(--color-gray-600)]">
                Clarity in Every Click — A podcast exploring UX problems, usability principles, and
                design decisions that impact product success.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="relative">
              {/* Glassmorphism glow behind */}
              <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-teal-500/5 blur-xl" />
              <div className="relative rounded-[24px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-light bg-white">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/show/7JyafgYs0C5CXZTGksngVe?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <div className="text-center mt-12">
              <MagneticWrap strength={0.1}>
                <a
                  href="https://open.spotify.com/show/7JyafgYs0C5CXZTGksngVe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 h-[56px] px-10 bg-[var(--color-black)] text-white text-[17px] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.01]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Music size={20} /> Listen on Spotify
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </a>
              </MagneticWrap>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

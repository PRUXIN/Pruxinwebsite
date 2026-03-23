import React from 'react';
import { motion } from 'motion/react';
import { Layers, ShoppingBag, Search } from 'lucide-react';

export default function BeyondFreeSection() {
  const cards = [
    {
      title: "SaaS Product Design",
      accent: "var(--color-electric-blue)",
      icon: <Layers size={32} className="text-white" />,
      items: [
        "User flows that make sense",
        "Dashboard clarity",
        "Onboarding optimization",
        "Component systems"
      ],
      link: "Learn more →"
    },
    {
      title: "Marketplace Development",
      accent: "var(--color-coral-orange)",
      icon: <ShoppingBag size={32} className="text-white" />,
      items: [
        "Payment integration",
        "Multi-party systems",
        "Verification flows",
        "Review management"
      ],
      link: "Learn more →"
    },
    {
      title: "UX Audits & Strategy",
      accent: "var(--color-lime-green)",
      icon: <Search size={32} className="text-white" />,
      items: [
        "Friction analysis",
        "Flow optimization",
        "Support ticket review",
        "Roadmap planning"
      ],
      link: "Learn more →"
    }
  ];

  return (
    <section className="py-[160px] px-6" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FEF3C7 100%)' }}>
      <div className="max-w-[1280px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="type-display-small text-[var(--color-black)] mb-6">
            Need more than a website?
          </h2>
          <p className="type-body-large text-[var(--color-gray-600)]">
            PRUXIN handles complex product work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-md rounded-[24px] p-8 md:p-12 shadow-medium relative overflow-hidden group hover:shadow-strong transition-shadow duration-300"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1" 
                style={{ backgroundColor: card.accent }}
              />
              
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
                style={{ backgroundColor: card.accent }}
              >
                {card.icon}
              </div>

              <h3 className="type-headline-small text-[var(--color-black)] mb-6">
                {card.title}
              </h3>

              <ul className="space-y-3 mb-8">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 type-body-small text-[var(--color-gray-700)]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-gray-400)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="#" 
                className="text-[length:var(--text-base)] font-medium hover:underline"
                style={{ color: card.accent }}
              >
                {card.link}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
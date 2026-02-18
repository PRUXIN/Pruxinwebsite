import React from 'react';
import arInsightsLogo from 'figma:asset/ba2a2376ac72f7b57517cef10cdc11737a66d6fe.png';
import colorful3Logo from 'figma:asset/e4a4f2d431f319cfd9aa27e3ab02e87168cb9c6c.png';
import recruitingDoneRightLogo from 'figma:asset/30e492ba3812d39de02bffb866f37e5b386101a4.png';
import logo4 from 'figma:asset/c3d466fe245de53c5be517170e7501ca64cb19ca.png';
import newCompanyLogo from 'figma:asset/d0efb904b121e18809cb286723542fae3db989b4.png';
import logo6 from 'figma:asset/c5a2c6c5e8bc018767761392833abf2131501e56.png';
import mobilePhoneLogo from 'figma:asset/4b4e8438473a59b5f1998a72c4ac025029abaa65.png';
import alohaTechnologyLogo from 'figma:asset/8115461f29605560b8b9d65a1981550e82551d6a.png';

export default function SimpleLogoMarquee() {
  const logos = [
    {
      src: arInsightsLogo,
      alt: 'AR Insights',
      name: 'AR Insights'
    },
    {
      src: colorful3Logo,
      alt: 'Colorful 3',
      name: 'Colorful 3'
    },
    {
      src: recruitingDoneRightLogo,
      alt: 'Recruiting Done Right',
      name: 'Recruiting Done Right'
    },
    {
      src: logo4,
      alt: 'Company Logo 4',
      name: 'Company Logo 4'
    },
    {
      src: newCompanyLogo,
      alt: 'New Company Logo',
      name: 'New Company Logo'
    },
    {
      src: logo6,
      alt: 'Company Logo 6',
      name: 'Company Logo 6'
    },
    {
      src: mobilePhoneLogo,
      alt: 'Mobile Technology',
      name: 'Mobile Technology'
    },
    {
      src: alohaTechnologyLogo,
      alt: 'Aloha Technology',
      name: 'Aloha Technology'
    }
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-48"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
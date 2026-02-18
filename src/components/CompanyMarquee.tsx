import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CompanyLogo = ({ company, index }: { company: any; index: number }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32">
      <div className="opacity-60 flex items-center justify-center w-full h-full">
        {!imageError ? (
          <ImageWithFallback
            src={company.logo}
            alt={`${company.name} logo`}
            className="max-h-12 max-w-full object-contain filter brightness-0 invert"
            onError={handleImageError}
          />
        ) : (
          <span className="text-white text-sm font-medium text-center px-2">
            {company.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default function CompanyMarquee() {
  const companies = [
    {
      name: 'HokuApps',
      logo: 'https://hokuapps.com/wp-content/uploads/2023/05/hokuapps-logo-white.png'
    },
    {
      name: 'Aloha Technology',
      logo: 'https://www.alohatechnology.com/wp-content/uploads/2020/02/aloha-technology-logo-white.png'
    },
    {
      name: 'AML RightSource',
      logo: 'https://www.amlrightsource.com/wp-content/uploads/2021/03/aml-rightsource-logo-white.png'
    },
    {
      name: 'iPlace USA',
      logo: 'https://iplaceusa.com/wp-content/uploads/2020/01/iplace-usa-logo-white.png'
    },
    {
      name: 'Smaato',
      logo: 'https://www.smaato.com/wp-content/uploads/2021/01/smaato-logo-white.svg'
    },
    {
      name: 'Skills Development Scotland',
      logo: 'https://www.skillsdevelopmentscotland.co.uk/media/47784/sds-logo-white.png'
    },
    {
      name: 'Threecolts',
      logo: 'https://www.threecolts.com/wp-content/uploads/2023/01/threecolts-logo-white.png'
    }
  ];

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-wide">
          Trusted by companies I've worked with
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {companies.map((company, index) => (
            <CompanyLogo key={`first-${index}`} company={company} index={index} />
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {companies.map((company, index) => (
            <CompanyLogo key={`second-${index}`} company={company} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
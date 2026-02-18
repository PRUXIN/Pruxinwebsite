import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCarouselProps {
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  onImageClick?: (index: number) => void;
}

export default function ProjectCarousel({ images, onImageClick }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Carousel Container */}
      <div className="relative mb-8 flex items-center gap-8">
        {/* Left Arrow */}
        {images.length > 1 && (
          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0 bg-white hover:bg-slate-50 border-slate-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}

        {/* Image Container */}
        <div className="flex-1">
          <Card className="overflow-hidden border border-slate-200">
            <CardContent className="p-0">
              <div 
                className="relative h-[500px] cursor-pointer bg-slate-50"
                onClick={() => onImageClick?.(currentIndex)}
              >
                <img 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 hover:bg-black/5 transition-colors duration-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Arrow */}
        {images.length > 1 && (
          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0 bg-white hover:bg-slate-50 border-slate-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Dot Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-3 mb-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-slate-900' 
                  : 'bg-slate-300 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Current Image Caption */}
      <div className="text-center">
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          {images[currentIndex]?.caption}
        </p>
      </div>
    </div>
  );
}
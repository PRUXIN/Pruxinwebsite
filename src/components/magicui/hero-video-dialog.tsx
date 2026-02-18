import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { Play, X } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroVideoDialogProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  animationStyle?: 'from-center' | 'from-top' | 'from-bottom';
  className?: string;
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = 'Video thumbnail',
  animationStyle = 'from-center',
  className = '',
}: HeroVideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationVariants = () => {
    const variants = {
      'from-center': {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.5, opacity: 0 },
      },
      'from-top': {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
      },
      'from-bottom': {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 100, opacity: 0 },
      },
    };
    return variants[animationStyle];
  };

  return (
    <>
      {/* Thumbnail with play button */}
      <div className={`relative cursor-pointer ${className}`}>
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Thumbnail Image */}
          <div className="relative w-full h-full bg-gray-900">
            <img
              src={thumbnailSrc}
              alt={thumbnailAlt}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Play Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/30"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Play button */}
                <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.div>
            
            {/* Watch Video Text */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-medium text-lg backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full">
                Watch Video
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-[90vw] md:max-w-6xl p-0 bg-black border-0 overflow-hidden">
          <DialogTitle className="sr-only">{thumbnailAlt}</DialogTitle>
          <DialogDescription className="sr-only">
            Video player displaying {thumbnailAlt}
          </DialogDescription>
          <motion.div
            className="relative w-full aspect-video"
            {...getAnimationVariants()}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 z-50 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 transition-all duration-200"
              aria-label="Close video"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video iframe */}
            <iframe
              src={`${videoSrc}${videoSrc.includes('?') ? '&' : '?'}autoplay=1`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title="Video player"
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}

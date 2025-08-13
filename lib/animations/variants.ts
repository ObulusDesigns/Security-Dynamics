import { Variants } from 'framer-motion';

// Fade in animations
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Item variants for stagger children
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Floating animation for decorative elements
export const float: Variants = {
  initial: {
    y: 0,
    x: 0,
  },
  animate: {
    y: [-10, 10, -10],
    x: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Optimized viewport settings
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-50px',
};

export const viewportSettingsMobile = {
  once: true,
  amount: 0.1,
  margin: '-20px',
};

// Animation config for different device types
export const getAnimationConfig = (isMobile: boolean) => ({
  variants: isMobile ? fadeIn : fadeInUp,
  viewport: isMobile ? viewportSettingsMobile : viewportSettings,
  transition: {
    duration: isMobile ? 0.4 : 0.6,
    ease: 'easeOut',
  },
});

// Reduced motion variants
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

// Hero section specific animations
export const heroContent: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const heroFloatingElement: Variants = {
  initial: {
    opacity: 0.3,
  },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Service card animations
export const serviceCard: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Stats counter animation
export const statsItem: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'backOut',
    },
  },
};

// Testimonial card animation
export const testimonialCard: Variants = {
  hidden: { 
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};
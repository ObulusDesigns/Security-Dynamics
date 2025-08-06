// Core Web Vitals monitoring and optimization utilities

interface WebVitalsMetric {
  name: string;
  value: number;
  label?: string;
  id: string;
}

export const reportWebVitals = (metric: WebVitalsMetric) => {
  if (metric.label === 'web-vital') {
    console.log(metric);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
};

// Lazy load images that are below the fold
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return;
  
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, _observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src!;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
};

// Preconnect to critical third-party origins
export const preconnectOrigins = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.googletagmanager.com',
  'https://www.google-analytics.com',
];

// Resource hints for critical resources
export const resourceHints = {
  preconnect: preconnectOrigins,
  dnsPrefetch: [
    'https://www.google.com',
    'https://maps.googleapis.com',
  ],
  prefetch: [
    '/api/contact',
    '/api/quote',
  ],
};

// Optimize Largest Contentful Paint (LCP)
export const optimizeLCP = () => {
  // Preload hero images
  const heroImage = document.querySelector('[data-hero-image]');
  if (heroImage) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = (heroImage as HTMLImageElement).src;
    document.head.appendChild(link);
  }
  
  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.type = 'font/woff2';
  fontPreload.href = '/fonts/inter-var.woff2';
  fontPreload.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreload);
};

// Optimize Interaction to Next Paint (INP)
export const optimizeINP = () => {
  // Debounce expensive operations
  let debounceTimer: NodeJS.Timeout;
  
  const debounce = <T extends unknown[]>(func: (...args: T) => void, delay: number) => {
    return (...args: T) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    };
  };
  
  // Add passive listeners for scroll and touch events
  document.addEventListener('touchstart', () => {}, { passive: true });
  document.addEventListener('scroll', () => {}, { passive: true });
  
  return debounce;
};

// Optimize Cumulative Layout Shift (CLS)
export const optimizeCLS = () => {
  // Reserve space for dynamic content
  const images = document.querySelectorAll('img:not([width]):not([height])');
  images.forEach((img: Element) => {
    const imgElement = img as HTMLImageElement;
    if (imgElement.naturalWidth && imgElement.naturalHeight) {
      imgElement.width = imgElement.naturalWidth;
      imgElement.height = imgElement.naturalHeight;
    }
  });
  
  // Set dimensions for video embeds
  const videos = document.querySelectorAll('video, iframe');
  videos.forEach((video: Element) => {
    if (!video.getAttribute('width')) {
      video.setAttribute('width', '100%');
      video.setAttribute('height', 'auto');
    }
  });
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;
  
  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages();
      optimizeLCP();
      optimizeINP();
      optimizeCLS();
    });
  } else {
    lazyLoadImages();
    optimizeLCP();
    optimizeINP();
    optimizeCLS();
  }
};

// Performance monitoring configuration
export const performanceConfig = {
  // Good thresholds based on Core Web Vitals
  thresholds: {
    LCP: 2500, // 2.5 seconds
    FID: 100,  // 100 milliseconds
    INP: 200,  // 200 milliseconds
    CLS: 0.1,  // 0.1 score
    FCP: 1800, // 1.8 seconds
    TTFB: 800, // 800 milliseconds
  },
  
  // Monitor and report performance issues
  monitor: true,
  
  // Send reports to analytics
  reportToAnalytics: true,
};
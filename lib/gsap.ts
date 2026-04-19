'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function registerGSAP() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  // Default ScrollTrigger settings
  ScrollTrigger.defaults({
    toggleActions: 'play none none none',
    once: true,
  });
}

export { gsap, ScrollTrigger };

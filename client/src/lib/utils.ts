import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Random number generation utilities
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Icon utilities for services
export const serviceIcons = {
  seo: "fa-search",
  design: "fa-paint-brush",
  development: "fa-code",
  ecommerce: "fa-shopping-cart",
  redesign: "fa-sync",
  responsive: "fa-mobile-alt",
  marketing: "fa-bullhorn",
  support: "fa-headset",
};

// Contact page icon utilities
export const contactIcons = {
  email: "fas fa-envelope",
  phone: "fas fa-phone",
  location: "fas fa-map-marker-alt",
  hours: "fas fa-clock",
};

export const socialIcons = {
  twitter: "fab fa-twitter",
  instagram: "fab fa-instagram",
  linkedin: "fab fa-linkedin-in",
  github: "fab fa-github",
  facebook: "fab fa-facebook-f",
  youtube: "fab fa-youtube",
};

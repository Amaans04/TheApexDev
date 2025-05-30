import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React from "react"

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
  seo: <i className="fas fa-search text-2xl" />,
  landing: <i className="fas fa-paint-brush text-2xl" />,
  development: <i className="fas fa-code text-2xl" />,
  ecommerce: <i className="fas fa-shopping-cart text-2xl" />,
  redesign: <i className="fas fa-sync text-2xl" />,
  responsive: <i className="fas fa-mobile-alt text-2xl" />,
  marketing: <i className="fas fa-bullhorn text-2xl" />,
  support: <i className="fas fa-headset text-2xl" />,
  logo: <i className="fas fa-pencil-ruler text-2xl" />
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
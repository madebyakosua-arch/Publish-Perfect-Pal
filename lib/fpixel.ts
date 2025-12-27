// Type definitions for window.fbq
declare global {
  interface Window {
    fbq: any;
  }
}

export const FB_PIXEL_ID = '25762191216738439'; 

export const pageview = () => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView');
  }
};

// Log specific events (Lead, InitiateCheckout, etc.)
export const event = (name: string, options = {}) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', name, options);
  }
};

// Helper to get cookies for CAPI (fbp and fbc)
export const getCookie = (name: string): string => {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
  return '';
};
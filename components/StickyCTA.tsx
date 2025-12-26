import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 300px (lowered threshold for better mobile visibility)
      const show = window.scrollY > 300;
      setIsVisible(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 p-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Text hidden on mobile to save space for the badge and button */}
        <div className="hidden md:flex flex-col">
          <span className="font-bold text-slate-900">Ready to fix your book?</span>
          <span className="text-xs text-slate-500">Get 100% KDP compliant today.</span>
        </div>
        
        {/* Container: Stacked on mobile, Row on desktop */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
          
          {/* Guarantee Badge - Now visible on mobile */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100 shadow-sm whitespace-nowrap">
            <Icons.ShieldCheck size={14} className="text-green-600" />
            <span>7-Day Guarantee <span className="opacity-75">(Full Access Bundle)</span></span>
          </div>

          <button 
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Start Free Trial <Icons.ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
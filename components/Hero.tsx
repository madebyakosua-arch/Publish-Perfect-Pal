import React from 'react';
import { Icons } from './Icons';
import { useNavigation } from '../context/NavigationContext';

export const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Replace this with your actual Stripe Trial Link
  const STRIPE_TRIAL_LINK = "REPLACE_WITH_STRIPE_TRIAL_LINK";

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      // Manual scroll calculation due to Sticky Header handled in Navbar, duplicating simple version here or using ID
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single column, centered layout */}
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Text Content */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Make your book <span className="text-brand-500">Amazon KDP</span> ready before you hit publish.
          </h1>
          <p className="text-base sm:text-xl text-slate-600 mb-8 leading-relaxed">
            Publish Perfect Pal scans your manuscript and book cover, finds hidden issues, and shows you how to fix them so Amazon KDP doesn't reject your book.
          </p>
          
          {/* List needs to be wrapped to be left-aligned within a centered block for readability */}
          <div className="inline-block text-left mb-8">
            <ul className="space-y-4">
              {[
                "Supports Paperback, Hardback, and Kindle formats.",
                "See Amazon KDP errors explained in plain language.",
                "Fix page numbering and layout before you upload."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <Icons.Check size={14} className="text-green-600" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button 
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
            >
              Get Started Now
            </button>
          </div>
          
          {/* Trust/Authority Strip */}
          <div className="border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Compatible with</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Styled text to look more like logos */}
               <div className="text-slate-800 font-serif font-black text-lg sm:text-xl tracking-tighter">Kindle<span className="font-light">Direct</span></div>
               <div className="text-slate-800 font-sans font-bold text-base sm:text-lg italic">IngramSpark</div>
               <div className="text-slate-800 font-serif font-bold text-lg sm:text-xl tracking-widest">Lulu</div>
               <div className="text-slate-800 font-mono font-bold text-base sm:text-lg">Draft2Digital</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
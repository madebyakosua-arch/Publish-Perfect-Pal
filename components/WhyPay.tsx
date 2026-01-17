import React from 'react';
import { Icons } from './Icons';

export const WhyPay: React.FC = () => {

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      // Manual scroll calculation to account for sticky navbar
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Why pay $300+ for a book formatter?
          </h2>
          <p className="text-lg text-slate-600">
            Get the same professional, Amazon KDP-approved results in minutes, not weeks, and keep creative control without the hefty price tag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Cost */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Icons.DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Save Money</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Formatters charge per book. Our lifetime plan is a one-time fee for all your future books.
            </p>
          </div>
          {/* Card 2: Speed */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Icons.Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Publish Faster</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Get your scan results in minutes, not waiting weeks for a freelancer's schedule to open up.
            </p>
          </div>
          {/* Card 3: Revisions */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
              <Icons.Repeat className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Unlimited Revisions</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Made a last-minute change? Scan again instantly without paying extra for revisions.
            </p>
          </div>
          {/* Card 4: Control */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow hover:-translate-y-1">
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
              <Icons.SlidersHorizontal className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Maintain Control</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You know your book best. Make your own fixes and maintain full creative control over your final product.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button
            onClick={scrollToPricing}
            className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            See Plans & Pricing
          </button>
        </div>
      </div>
    </section>
  );
};
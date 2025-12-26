import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export const EmotionalClose: React.FC = () => {
  const { navigateTo } = useNavigation();
  const STRIPE_TRIAL_LINK = "REPLACE_WITH_STRIPE_TRIAL_LINK";

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-500 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to publish with confidence?
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          Stop guessing why KDP rejects your files. Let Publish Perfect Pal check your book before you upload.
        </p>
        <a 
          href="#pricing"
          onClick={scrollToPricing}
          className="inline-block bg-white text-brand-600 hover:bg-brand-50 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
};
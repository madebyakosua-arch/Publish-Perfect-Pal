import React from 'react';
import { Icons } from './Icons';

export const BundleGuarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm">
          <div className="flex-shrink-0 bg-brand-500/10 p-6 rounded-2xl">
            <Icons.ShieldCheck className="text-brand-500 w-16 h-16" strokeWidth={1.5} />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
              7-Day Risk-Free Guarantee
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We're so confident that the <span className="font-bold text-slate-900">All Access Publish Perfect Pal Bundle</span> will transform your publishing process that we offer a full 7-day money-back guarantee.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              If you're not 100% satisfied with the tools, the community, or the results, just email us at <span className="font-semibold text-brand-600">hello@madebyakosua.com</span> and we'll refund every penny. No questions asked. <span className="font-bold text-slate-700 underline decoration-brand-500/30">This guarantee applies specifically to our All Access Bundle ONLY.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

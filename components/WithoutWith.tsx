import React from 'react';
import { Icons } from './Icons';

export const WithoutWith: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            The difference is clear
          </h2>
          <p className="text-lg text-slate-600">
            Why struggle with Amazon KDP when you can publish perfectly the first time?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-600 mb-6 flex items-center gap-2">
              <div className="p-2 bg-red-100 rounded-full">
                <Icons.X className="text-red-500 w-6 h-6" />
              </div>
              Without Publish Perfect Pal
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-600 items-start">
                <Icons.X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Confusing "bleed" and "margin" error messages from Amazon KDP</span>
              </li>
              <li className="flex gap-3 text-slate-600 items-start">
                <Icons.X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Waiting 24-72 hours for a review just to get rejected again</span>
              </li>
              <li className="flex gap-3 text-slate-600 items-start">
                <Icons.X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Guessing which page has the problem with no visual guide</span>
              </li>
              <li className="flex gap-3 text-slate-600 items-start">
                <Icons.X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Risking negative reader reviews due to poor formatting</span>
              </li>
            </ul>
          </div>

          {/* With */}
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 relative overflow-hidden shadow-lg transform md:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 relative z-10">
              <div className="p-2 bg-brand-500 rounded-full text-white">
                <Icons.Check className="w-6 h-6" />
              </div>
              With Publish Perfect Pal
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex gap-3 text-slate-800 font-medium items-start">
                <Icons.Check className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>Plain English instructions on how to fix errors instantly</span>
              </li>
              <li className="flex gap-3 text-slate-800 font-medium items-start">
                <Icons.Check className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>Know your file is 100% ready before you upload to Amazon KDP</span>
              </li>
              <li className="flex gap-3 text-slate-800 font-medium items-start">
                <Icons.Check className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>Visual overlays highlight exact problem areas on your pages</span>
              </li>
              <li className="flex gap-3 text-slate-800 font-medium items-start">
                <Icons.Check className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>Publish with total confidence and zero stress</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
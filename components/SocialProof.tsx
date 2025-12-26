import React from 'react';
import { Icons } from './Icons';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Supported Formats Strip - Builds trust without fake stats */}
        <div className="mb-12 border-b border-slate-50 pb-8">
            <p className="text-center text-slate-400 font-semibold uppercase tracking-wider text-xs mb-6">Fully compatible with all book formats</p>
            {/* Adjusted gap for mobile responsiveness */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12">
                <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                    <Icons.FileText className="text-brand-600 w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-slate-700 whitespace-nowrap">Paperback PDF</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                    <Icons.FileText className="text-brand-600 w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-slate-700 whitespace-nowrap">Hardback PDF</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                    <Icons.Image className="text-brand-600 w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-slate-700 whitespace-nowrap">Kindle eBooks</span>
                </div>
            </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-slate-500 font-medium uppercase tracking-wider text-sm mb-2">The Reality of Publishing</p>
          <h2 className="text-2xl font-bold text-slate-900">Don't let these common Amazon KDP errors block your book</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4">
             <div className="bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
               <Icons.ScanLine size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-sm mb-1">Bleed & Margin Errors</h3>
               <p className="text-xs text-slate-600 leading-relaxed">
                 The #1 reason for rejection. Elements outside the safe zone will trigger an instant block from Amazon KDP bots.
               </p>
             </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4">
             <div className="bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
               <Icons.Image size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-sm mb-1">Low Resolution Images</h3>
               <p className="text-xs text-slate-600 leading-relaxed">
                 Images under 300 DPI look blurry in print. We flag these instantly so your book looks professional.
               </p>
             </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4">
             <div className="bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
               <Icons.FileText size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-sm mb-1">Incorrect Trim Size</h3>
               <p className="text-xs text-slate-600 leading-relaxed">
                 If your Book PDF pages size doesn't match your Amazon KDP selection exactly, your upload will fail.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
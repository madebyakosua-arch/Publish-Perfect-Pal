import React from 'react';
import { Icons } from './Icons';

export const FounderNote: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">
          I Know Exactly How You Feel
        </h2>
        
        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <p>
            I'm Stephanie, and I've successfully published 13 books on Amazon KDP. I know the stress that hits when you receive an email like this:
          </p>

          {/* Inline Email Replica */}
          <div className="my-8 transform hover:scale-[1.02] transition-transform duration-500">
             <div className="relative bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden max-w-xl mx-auto">
                {/* Email Header */}
                <div className="border-b border-slate-100 p-4 bg-slate-50 flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 flex-shrink-0">
                      <Icons.User size={20} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-slate-900">Kindle Direct Publishing</div>
                      <div className="text-xs text-slate-500">To: Stephanie</div>
                   </div>
                </div>

                {/* Email Body */}
                <div className="p-6 sm:p-8 font-sans text-slate-800 text-base">
                   <div className="mb-6">
                      <span className="text-2xl font-bold tracking-tighter block">amazon</span>
                   </div>

                   <p className="text-sm mb-4 font-medium">Hi!</p>
                   <p className="text-sm mb-6">
                      We checked your files and found issues you need to fix before your book can be published on KDP:
                   </p>

                   <div className="bg-red-50 p-4 rounded-md border border-red-100 mb-6">
                      <h4 className="font-bold text-sm mb-2 text-red-700 flex items-center gap-2">
                        <Icons.AlertTriangle size={16} /> Interior
                      </h4>
                      <ul className="list-disc pl-5 text-sm space-y-2 text-slate-800">
                         <li>
                            <span className="font-medium">Your file contains insufficient bleed.</span> See examples PDF page(s) 37 - 40.
                         </li>
                         <li className="list-none pl-0 mt-1 text-xs text-slate-600 italic">
                            1. Ensure the page(s) are sized correctly for bleed. Interiors with bleed should have 0.125" (3.2 mm) added to the width and 0.25" (6.4 mm) to the page height.
                         </li>
                      </ul>
                   </div>
                   
                   <div className="h-px bg-slate-100 my-4"></div>
                   <p className="text-xs text-slate-400">
                      © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
                   </p>
                </div>
             </div>
          </div>
          
          <div className="border-l-4 border-brand-500 pl-6 py-2 italic text-slate-800 font-medium text-xl">
            "That sinking feeling. The confusion. The panic about your launch date. I've been there more times than I care to admit."
          </div>

          <p>
            That's why I created <span className="font-bold text-slate-900">Publish Perfect Pal</span>.
          </p>
          
          <p>
            I got tired of the guesswork, the wasted hours, and the anxiety that comes with every upload. 
            This software is built by an author, for authors because I understand exactly what you're going through and I don't want you to go through the process of continuously editing your book file.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col items-center justify-center">
           <div className="text-center">
              <div className="font-bold text-slate-900 text-2xl">Stephanie</div>
              <div className="text-sm text-brand-600 font-bold uppercase tracking-wide">Founder, Publish Perfect Pal</div>
           </div>
        </div>
      </div>
    </section>
  );
};
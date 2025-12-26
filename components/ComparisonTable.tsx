import React from 'react';
import { Icons } from './Icons';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Why pay $300+ for a formatter?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how Publish Perfect Pal stacks up against the alternatives.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-slate-100"></th>
                  <th className="p-4 border-b-2 border-brand-500 bg-brand-50 rounded-t-xl text-center w-1/4">
                    <div className="text-brand-600 font-bold text-lg">Publish Perfect Pal</div>
                  </th>
                  <th className="p-4 border-b-2 border-slate-200 text-center w-1/4">
                    <div className="text-slate-800 font-bold">Hiring a Pro</div>
                    <div className="text-slate-400 text-sm font-normal">Fiverr / Upwork</div>
                  </th>
                  <th className="p-4 border-b-2 border-slate-200 text-center w-1/4">
                    <div className="text-slate-800 font-bold">DIY</div>
                    <div className="text-slate-400 text-sm font-normal">Word / InDesign</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm sm:text-base">
                {/* Row 1: Cost */}
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold text-slate-700">Cost</td>
                  <td className="p-4 border-b border-slate-100 bg-brand-50/30 text-center font-bold text-green-600">
                    $19.99
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    $100 - $500+
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    Free <span className="text-xs block text-slate-400">(but costs time)</span>
                  </td>
                </tr>
                {/* Row 2: Time */}
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold text-slate-700">Time to Fix</td>
                  <td className="p-4 border-b border-slate-100 bg-brand-50/30 text-center font-bold text-brand-600">
                    &lt; 5 Minutes
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    5 - 14 Days
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    Weeks of frustration
                  </td>
                </tr>
                {/* Row 3: Revisions */}
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold text-slate-700">Revisions</td>
                  <td className="p-4 border-b border-slate-100 bg-brand-50/30 text-center text-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      <Icons.Check className="text-green-500 w-5 h-5" /> Unlimited
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    Cost extra $$$
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    Infinite manual work
                  </td>
                </tr>
                 {/* Row 4: Visual Feedback */}
                 <tr>
                  <td className="p-4 border-b border-slate-100 font-bold text-slate-700">Visual Error Highlighting</td>
                  <td className="p-4 border-b border-slate-100 bg-brand-50/30 text-center text-slate-700">
                    <div className="flex items-center justify-center gap-2">
                      <Icons.Check className="text-green-500 w-5 h-5" /> Instant Overlay
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                     <div className="flex items-center justify-center gap-2 text-slate-400">
                      <Icons.X className="w-5 h-5" /> No
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    <div className="flex items-center justify-center gap-2 text-slate-400">
                      <Icons.X className="w-5 h-5" /> No
                    </div>
                  </td>
                </tr>
                {/* Row 5: Expertise */}
                <tr>
                  <td className="p-4 border-b border-slate-100 font-bold text-slate-700">KDP Expertise Required</td>
                  <td className="p-4 border-b border-slate-100 bg-brand-50/30 text-center text-slate-700 rounded-b-xl">
                    None (Automated)
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    None (Outsourced)
                  </td>
                  <td className="p-4 border-b border-slate-100 text-center text-slate-600">
                    High (Steep learning curve)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Mobile Scroll Hint */}
          <div className="md:hidden text-center text-xs text-slate-400 mt-2 flex items-center justify-center gap-1 animate-pulse">
             <Icons.ArrowRight size={12} /> Swipe to compare <Icons.ArrowRight size={12} />
          </div>
        </div>
      </div>
    </section>
  );
};
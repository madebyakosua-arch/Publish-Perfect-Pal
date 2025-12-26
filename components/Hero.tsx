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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl w-full">
            
            {/* Updated H1: Reduced mobile font size to text-2xl/3xl to prevent cut-off on narrow screens */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 break-words hyphens-auto">
              Make your book <span className="text-brand-500 inline-block">Amazon KDP</span> ready before you hit publish.
            </h1>
            <p className="text-base sm:text-xl text-slate-600 mb-8 leading-relaxed">
              Publish Perfect Pal scans your manuscript and book cover, finds hidden issues, and shows you how to fix them so Amazon KDP doesn't reject your book.
            </p>
            
            <ul className="space-y-4 mb-8">
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

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center flex items-center justify-center whitespace-normal h-auto min-h-[3rem]"
              >
                Start Free Trial
              </button>
            </div>
            
            {/* Trust/Authority Strip - Improves Conversion */}
            <div className="border-t border-slate-100 pt-6">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-3">Compatible with</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Styled text to look more like logos */}
                 <div className="text-slate-800 font-serif font-black text-lg sm:text-xl tracking-tighter">Kindle<span className="font-light">Direct</span></div>
                 <div className="text-slate-800 font-sans font-bold text-base sm:text-lg italic">IngramSpark</div>
                 <div className="text-slate-800 font-serif font-bold text-lg sm:text-xl tracking-widest">Lulu</div>
                 <div className="text-slate-800 font-mono font-bold text-base sm:text-lg">Draft2Digital</div>
              </div>
            </div>
          </div>

          {/* Visual Mockup - CSS/HTML Constructed Dashboard */}
          <div className="relative mt-8 lg:mt-0 w-full max-w-full">
             {/* Background Blob */}
             <div className="absolute top-0 -right-4 -left-4 sm:left-20 h-full bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
             
             {/* Dashboard Container */}
             {/* Changed: Rotate only on large screens (lg:rotate-1) to prevent mobile overflow */}
             <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform lg:rotate-1 transition-transform duration-500 hover:rotate-0 w-full">
                
                {/* Mock Browser Header */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* Truncated for mock visual effect, not real navigation */}
                  <div className="bg-white px-3 py-1 rounded text-xs text-slate-400 flex-1 text-center mx-2 sm:mx-4 font-mono truncate">
                    publishperfectpal.com/dashboard/scan
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-4 sm:p-6 grid gap-4 sm:gap-6">
                  {/* Status Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 gap-2 sm:gap-0">
                    <div className="min-w-0 max-w-full">
                      <h3 className="font-bold text-slate-800 text-lg truncate">My First Novel.pdf</h3>
                      <p className="text-sm text-slate-500">Last scan: Just now</p>
                    </div>
                    <div className="px-3 py-1 bg-red-50 text-red-600 text-sm font-bold rounded-full border border-red-100 flex items-center gap-1 shrink-0">
                      <Icons.AlertTriangle size={14} /> 3 Issues Found
                    </div>
                  </div>

                  {/* Main Visual Area */}
                  <div className="flex flex-col sm:flex-row gap-4">
                     {/* Page Preview with Errors */}
                     <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 p-4 relative min-h-[200px] flex items-center justify-center">
                        <div className="bg-white shadow w-3/4 h-full relative p-4 text-[6px] text-slate-300 overflow-hidden leading-relaxed">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                           <br/><br/>
                           <div className="absolute top-8 right-2 w-8 h-8 border-2 border-red-500 rounded-full animate-pulse opacity-70"></div>
                           <div className="absolute bottom-4 left-4 w-full h-2 bg-red-200/50 border border-red-400"></div>
                           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        
                        {/* Error Tooltip - Fixed positioning for mobile to stay inside container */}
                        <div className="absolute top-10 right-2 bg-slate-900 text-white text-xs p-2 rounded shadow-lg z-10 w-28 sm:w-32">
                          <span className="font-bold block text-red-400 mb-1">Margin Error</span>
                          Text is too close to the trim line.
                        </div>
                     </div>

                     {/* Sidebar Check */}
                     <div className="w-full sm:w-1/3 grid grid-cols-1 gap-3">
                        <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                          <div className="text-xs font-bold text-red-800 mb-1">Critical</div>
                          <div className="text-xs text-slate-600">Page 14: Margin &lt; 0.375"</div>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                          <div className="text-xs font-bold text-yellow-800 mb-1">Warning</div>
                          <div className="text-xs text-slate-600">Image resolution 180dpi</div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500 opacity-50 hidden sm:block">
                          <div className="text-xs font-bold text-green-800 mb-1">Pass</div>
                          <div className="text-xs text-slate-600">Font embedding OK</div>
                        </div>
                     </div>
                  </div>
                </div>
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce hidden lg:flex">
               <div className="bg-green-100 p-2 rounded-full text-green-600">
                 <Icons.CheckCircle2 size={24} />
               </div>
               <div>
                 <div className="text-sm font-bold text-slate-800">Ready for Amazon KDP</div>
                 <div className="text-xs text-slate-500">Verification complete</div>
               </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Icons } from './Icons';
import { useNavigation } from '../context/NavigationContext';

export const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            From upload to KDP ready in three steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-sm mb-6 relative">
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-500 rounded-full text-white font-bold flex items-center justify-center border-4 border-slate-50">1</span>
              <Icons.FileText className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Upload your Book PDF & Book Cover</h3>
            <p className="text-slate-600">
              Drag and drop your interior file and cover PDF. We support files up to 200MB.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-sm mb-6 relative">
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-500 rounded-full text-white font-bold flex items-center justify-center border-4 border-slate-50">2</span>
              <Icons.ScanLine className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">We scan & highlight issues</h3>
            <p className="text-slate-600">
              Our engine finds margin errors, resolution issues, and bleed problems instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center shadow-sm mb-6 relative">
              <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-500 rounded-full text-white font-bold flex items-center justify-center border-4 border-slate-50">3</span>
              <Icons.CheckCircle2 className="w-10 h-10 text-slate-700" />
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-3">Fix & Upload Confidently</h3>
            <p className="text-slate-600">
              Follow our plain-English instructions to fix errors, then upload to KDP without rejection.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
           <a 
             href="#pricing"
             onClick={scrollToPricing}
             className="inline-flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-brand-200 transition-colors"
           >
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             Start your Free Trial and run your first scan in minutes.
           </a>
        </div>
      </div>
    </section>
  );
};
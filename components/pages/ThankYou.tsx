import React from 'react';
import { Icons } from '../Icons';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Main Confirmation Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-center mb-16">
        {/* Header Section */}
        <div className="bg-brand-500 p-10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10 mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
            <Icons.CheckCircle2 className="text-brand-500 w-12 h-12" strokeWidth={3} />
          </div>
          <h1 className="relative z-10 text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight max-w-xl mx-auto">
            Thank you for trusting us with your book journey and trying Publish Perfect Pal.
          </h1>
        </div>
        
        {/* Body Section */}
        <div className="p-8 md:p-12">
          
          {/* Instruction Text */}
          <p className="text-slate-700 text-lg mb-8 font-medium">
            You can access Publish Perfect Pal by clicking the button below.
          </p>

          {/* Requested 3 Benefits List */}
          <div className="bg-slate-50 rounded-xl p-8 mb-10 border border-slate-100 max-w-lg mx-auto">
             <ul className="space-y-4 text-left inline-block">
                <li className="flex items-center gap-4">
                   <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                      <Icons.CheckCircle2 className="text-green-600 w-5 h-5" strokeWidth={3} />
                   </div>
                   <span className="font-bold text-slate-800 text-lg">Catch issues before you publish on Amazon KDP</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                      <Icons.CheckCircle2 className="text-green-600 w-5 h-5" strokeWidth={3} />
                   </div>
                   <span className="font-bold text-slate-800 text-lg">Publish faster with confidence</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                      <Icons.CheckCircle2 className="text-green-600 w-5 h-5" strokeWidth={3} />
                   </div>
                   <span className="font-bold text-slate-800 text-lg">Confidently publish books that meet professional quality expectations</span>
                </li>
             </ul>
          </div>

          {/* Action Button */}
          <div className="mb-10">
            <a 
              href="https://www.publishperfectpal.online"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Access Publish Perfect Pal <Icons.ArrowRight size={20} />
            </a>
            <p className="mt-3 text-xs text-slate-400">
              Click above to access your account immediately
            </p>
          </div>

          {/* Support Section */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Need support?
            </h3>
            <p className="text-slate-600 mb-4">
              If you need support at any time, please contact us at: <a href="mailto:hello@madebyakosua.com" className="text-brand-600 font-bold hover:underline">hello@madebyakosua.com</a>
            </p>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <Icons.Clock size={16} className="text-brand-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">We respond to all support requests in 24hrs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Testimonial Section (Replaces Values) */}
      <div className="max-w-4xl w-full mx-auto mb-16 px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 relative overflow-hidden">
           {/* Quote Icon Background Watermark */}
           <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4">
              <Icons.Quote size={180} className="text-brand-900" />
           </div>

           <div className="relative z-10 flex flex-col items-center text-center">
              <div className="max-w-3xl mx-auto">
                 {/* Star Rating */}
                 <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icons.Star key={star} size={20} fill="currentColor" className="text-yellow-400" />
                    ))}
                 </div>
                 
                 <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-6 font-serif italic">
                   "I wish I had Publish Perfect Pal when I started my self-publishing journey. It would have saved me weeks of frustration deciphering Amazon's error codes. Now, I can publish with total confidence."
                 </blockquote>
                 
                 <div>
                    <div className="font-bold text-slate-900 text-lg">Sarah Jenkins</div>
                    <div className="text-slate-500 text-sm">Indie Author & Self-Publisher</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
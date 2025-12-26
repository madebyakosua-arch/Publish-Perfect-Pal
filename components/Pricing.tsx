import React, { useState } from 'react';
import { Icons } from './Icons';
import { useNavigation } from '../context/NavigationContext';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { navigateTo } = useNavigation();

  // Define your Stripe Links here
  const LINKS = {
    TRIAL: "https://buy.stripe.com/6oU3cv8Uh27i3IbcSHcAo06",
    PRO_MONTHLY: "https://buy.stripe.com/14A14n9YlfY86UncSHcAo04",
    PRO_YEARLY: "https://buy.stripe.com/aFa3cvc6taDO2E7bODcAo02",
    LIFETIME: "https://buy.stripe.com/00w5kD1rP9zK3Ib6ujcAo05"
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Simple pricing for serious self-publishers
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Start with the free 3 day trial, then choose the plan that fits your publishing goals.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-brand-500 rounded-full p-1 transition-colors focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-brand-600 font-bold text-xs ml-1">(Save $40)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8 items-start">
          
          {/* Card 1: Trial */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-slate-900 mb-2">Free Trial</h3>
            <div className="text-3xl font-extrabold text-slate-900 mb-6">Free <span className="text-sm font-normal text-slate-500">for 3 days</span></div>
            <a 
              href={LINKS.TRIAL}
              className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-lg mb-4 transition-colors"
            >
              Start Free Trial
            </a>
            
            {/* Added Disclaimer - Updated to be more clear/visible */}
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 mb-6">
                <p className="text-[11px] text-amber-800 leading-snug">
                   <strong>Please note:</strong> You will not be charged after the 3 days. However, you will lose access to the software unless you upgrade to a Pro or Lifetime plan.
                </p>
            </div>

            <p className="text-xs text-slate-400 mb-6 italic">Each feature can be used once during trial.</p>
            <ul className="space-y-3">
              {[
                "1 Book PDF scan (Paperback, Hardback or Kindle)",
                "1 KDP Fix Finder use",
                "1 Page Perfector auto-format",
                "1 Book Cover Analysis",
                "Trial report stored for 3 days",
                "Email support"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <Icons.Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Pro (Highlighted) */}
          <div className="bg-white rounded-2xl p-8 border-2 border-brand-500 shadow-xl relative transform lg:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">Publish Perfect Pal Pro</h3>
            <div className="flex items-baseline mb-1">
              <span className="text-3xl font-extrabold text-slate-900">{isAnnual ? '$199.99' : '$19.99'}</span>
              <span className="text-slate-500 ml-1">/{isAnnual ? 'year' : 'month'}</span>
            </div>
            <p className={`text-xs font-medium mb-6 h-4 ${isAnnual ? 'text-brand-600' : 'text-slate-500'}`}>
              {isAnnual ? 'Save $40 compared to monthly' : 'Cancel at any time'}
            </p>
            
            <a 
              href={isAnnual ? LINKS.PRO_YEARLY : LINKS.PRO_MONTHLY}
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg mb-6 transition-colors"
            >
              Choose Pro
            </a>
            <ul className="space-y-3">
              {[
                "50 Book PDF scans / month",
                "Supports Paperback, Hardback & Kindle",
                "100 KDP Fix Finder uses / month",
                "30 Page Perfector uses / month",
                "30 Book Cover Analyses / month",
                "Unlimited report history",
                "Priority email support (< 24hr)",
                "Faster processing queue",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                  <Icons.Check size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Lifetime */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-md text-white relative overflow-hidden">
            {/* Savings Ribbon */}
            <div className="absolute top-5 right-5">
               <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                 Best Value
               </span>
            </div>

            <h3 className="font-bold text-xl text-white mb-2">Full Access Bundle</h3>
            <div className="text-3xl font-extrabold text-white mb-2">$197 <span className="text-sm font-normal text-slate-400">one time</span></div>
            
            {/* SAVINGS CALCULATION */}
            <div className="bg-white/10 rounded-lg p-3 mb-6 border border-white/10">
              <div className="text-sm font-medium text-green-400 flex items-center gap-1 mb-1">
                <Icons.CheckCircle2 size={14} />
                Pays for itself in 10 months!
              </div>
              <div className="text-xs text-slate-300">
                  One payment. Use it forever.
              </div>
            </div>

            <a 
              href={LINKS.LIFETIME}
              className="block w-full text-center bg-white hover:bg-brand-50 text-brand-600 font-bold py-3 rounded-lg mb-6 transition-colors border border-transparent hover:border-brand-200"
            >
              Get lifetime access
            </a>
            <ul className="space-y-3">
              {[
                "Unlimited Paperback, Hardback & Kindle scans",
                "All current & future Pro features",
                "Lifetime product access",
                "VIP Priority Support",
                "Exclusive beta features",
                "Private community access",
                "Founding member badge"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Icons.Check size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Money Back Guarantee */}
            <div className="mt-8 pt-6 border-t border-slate-700 flex items-start gap-3">
              <div className="bg-brand-500/20 p-2 rounded-lg text-brand-400 shrink-0">
                <Icons.ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">7-Day Money Back Guarantee</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Not satisfied? Get a full refund on the lifetime bundle within 7 days.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* No Hidden Charges */}
        <div className="text-center mb-16">
          <p className="text-slate-500 text-sm font-semibold flex items-center justify-center gap-2 bg-white inline-block px-6 py-2 rounded-full border border-slate-200 shadow-sm">
            <Icons.Check className="w-4 h-4 text-green-500" strokeWidth={3} />
            No hidden charges. No surprise fees.
          </p>
        </div>

        {/* Risk Reducer */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row items-center gap-6 mb-16 shadow-sm">
          <div className="flex-shrink-0 bg-brand-100 rounded-full p-3">
            <Icons.ShieldCheck className="w-8 h-8 text-brand-600" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg text-slate-900">Start with confidence</h4>
            <p className="text-slate-600 text-sm mt-1">
              Try the full Pro experience with a free 3 day trial. You won't be charged if you cancel before your trial ends. No long-term contracts, cancel anytime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
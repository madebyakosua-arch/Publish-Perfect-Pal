import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { useNavigation } from '../context/NavigationContext';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { navigateTo } = useNavigation();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(10);

  useEffect(() => {
    // Scarcity logic: Fixed to 10 spots as requested
    setSpotsLeft(10);

    const calculateTimeLeft = () => {
      const now = new Date();
      // Target midnight tonight
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Define your Stripe Links here
  const LINKS = {
    TRIAL: "https://buy.stripe.com/6oU3cv8Uh27i3IbcSHcAo06",
    PRO_MONTHLY: "https://buy.stripe.com/14A14n9YlfY86UncSHcAo04",
    PRO_YEARLY: "https://buy.stripe.com/aFa3cvc6taDO2E7bODcAo02",
    LIFETIME: "https://buy.stripe.com/00w5kD1rP9zK3Ib6ujcAo05"
  };

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <section id="pricing" className="py-20 bg-slate-50 overflow-hidden">
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-500 shadow-xl relative transform lg:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide whitespace-nowrap">
              MOST POPULAR
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2 mt-2 lg:mt-0">Publish Perfect Pal Pro</h3>
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

          {/* Card 3: Lifetime (Scarcity Added - Brand Match) */}
          <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-brand-500/50 shadow-md text-white relative overflow-hidden group">
            {/* Scarcity Watermark/Glow - Orange */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Savings Ribbon - Orange */}
            <div className="absolute top-5 right-5">
               <span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider animate-pulse">
                 Limited Time
               </span>
            </div>

            <h3 className="font-bold text-xl text-white mb-2">Full Access Bundle</h3>
            <div className="text-3xl font-extrabold text-white mb-2">$197 <span className="text-sm font-normal text-slate-400">one time</span></div>
            
            {/* SAVINGS CALCULATION (Moved Above Countdown) */}
            <div className="bg-white/10 rounded-lg p-3 mb-4 border border-white/10">
              <div className="text-sm font-medium text-green-400 flex items-center gap-1 mb-1">
                <Icons.CheckCircle2 size={14} />
                Pays for itself in 10 months!
              </div>
              <div className="text-xs text-slate-300">
                  One payment. Use it forever.
              </div>
            </div>

            {/* SCARCITY COUNTER (Fixed to 10 spots as requested) */}
            <div className="bg-slate-800/50 rounded-lg p-3 mb-6 border border-brand-500/30">
               <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-bold text-brand-200 uppercase tracking-wide flex items-center gap-1.5">
                    <Icons.Zap size={12} className="text-brand-400 fill-brand-400" /> 
                    Offer ends in:
                  </span>
                  <div className="font-mono text-sm font-bold text-white tracking-widest">
                     {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                  </div>
               </div>
               
               {/* Spots Left Bar - Orange Gradient */}
               <div className="space-y-1.5">
                 <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    {/* Width logic: (spotsLeft / 15) * 100 to show bar depleting */}
                    <div className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full transition-all duration-1000" style={{ width: `${Math.min(100, (spotsLeft / 15) * 100)}%` }}></div>
                 </div>
                 <div className="text-[10px] text-brand-300 text-right font-medium">
                    Only {spotsLeft} spots left at this price
                 </div>
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

        {/* No Hidden Charges & Guarantee Badge */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-slate-500 text-sm font-semibold flex items-center justify-center gap-2">
            <Icons.ShieldCheck className="text-brand-500" size={18} />
            Secure payment via Stripe • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};
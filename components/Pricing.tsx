import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { useNavigation } from '../context/NavigationContext';
import * as fbq from '../lib/fpixel';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { navigateTo } = useNavigation();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(6);

  useEffect(() => {
    // Scarcity logic: Fixed to 6 spots as requested
    setSpotsLeft(6);

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

  // Define your ClickBank & Stripe Links here
  const LINKS = {
    PRO_MONTHLY: "https://madebyak.pay.clickbank.net/?cbitems=1",
    PRO_YEARLY: "https://madebyak.pay.clickbank.net/?cbitems=3",
    LIFETIME: "https://madebyak.pay.clickbank.net/?cbitems=2"
  };

  const handleCheckout = (planName: string, value: number, url: string) => {
    // Fire Facebook Pixel Event
    fbq.event('InitiateCheckout', {
      content_name: planName,
      currency: 'USD',
      value: value
    });
    
    // Proceed to Checkout
    window.location.href = url;
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
            Choose the plan that fits your publishing goals.
          </p>

          {/* Toggle Switch */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-brand-500 rounded-full p-1 transition-colors focus:outline-none flex-shrink-0"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly <span className="text-brand-600 font-bold text-xs ml-1 whitespace-nowrap">(Save over $37)</span>
            </span>
          </div>
        </div>

        {/* Changed grid to max-w-4xl and 2 columns since trial is removed */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-8 items-start">
          
          {/* Card 1: Pro (Highlighted) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-500 shadow-xl relative z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide whitespace-nowrap">
              MOST POPULAR
            </div>
            <h3 className="font-bold text-xl text-slate-900 mb-2 mt-2">Publish Perfect Pal Pro</h3>
            <div className="flex items-baseline mb-1">
              <span className="text-3xl font-extrabold text-slate-900">{isAnnual ? '$139.99' : '$13.99'}</span>
              <span className="text-slate-500 ml-1">/{isAnnual ? 'year' : 'month'}</span>
            </div>
            <p className={`text-xs font-medium mb-6 h-4 ${isAnnual ? 'text-brand-600' : 'text-slate-500'}`}>
              {isAnnual ? 'Save over $37 compared to monthly' : 'Cancel at any time'}
            </p>
            
            <button 
              onClick={() => handleCheckout(
                isAnnual ? 'Pro Yearly' : 'Pro Monthly', 
                isAnnual ? 139.99 : 13.99,
                isAnnual ? LINKS.PRO_YEARLY : LINKS.PRO_MONTHLY
              )}
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg mb-6 transition-colors"
            >
              Get Pro Access
            </button>
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

          {/* Card 2: All Access Bundle (Scarcity Added - Brand Match) */}
          <div id="all-access-bundle" className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-brand-500/50 shadow-md text-white relative overflow-hidden group">
            {/* Scarcity Watermark/Glow - Orange */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Title and Badge Container - Flexbox for responsiveness */}
            <div className="flex justify-between items-start gap-2 mb-2 relative z-10">
               <h3 className="font-bold text-xl text-white">All Access Publish Perfect Pal Bundle</h3>
               <span className="bg-brand-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider animate-pulse whitespace-nowrap shrink-0 mt-1">
                 Limited Time
               </span>
            </div>

            <div className="text-3xl font-extrabold text-white mb-2 relative z-10">$197 <span className="text-sm font-normal text-slate-400">one time</span></div>
            
            {/* SAVINGS CALCULATION (Moved Above Countdown) */}
            <div className="bg-white/10 rounded-lg p-3 mb-4 border border-white/10 relative z-10">
              <div className="text-sm font-medium text-green-400 flex items-center gap-1 mb-1">
                <Icons.CheckCircle2 size={14} />
                Pays for itself in about 14 months!
              </div>
              <div className="text-xs text-slate-300">
                  One payment. Use it forever.
              </div>
            </div>

            {/* SCARCITY COUNTER (Fixed to 6 spots as requested) */}
            <div className="bg-slate-800/50 rounded-lg p-3 mb-6 border border-brand-500/30 relative z-10">
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

            <button 
              onClick={() => handleCheckout('All Access Bundle', 197.00, LINKS.LIFETIME)}
              className="block w-full text-center bg-white hover:bg-brand-50 text-brand-600 font-bold py-3 rounded-lg mb-6 transition-colors border border-transparent hover:border-brand-200 relative z-10"
            >
              Get All Access
            </button>
            <ul className="space-y-3 relative z-10">
              {[
                "Unlimited Paperback, Hardback & Kindle scans",
                "All current & future Pro features",
                "Permanent product access",
                "VIP Priority Support",
                "Exclusive beta features",
                "Private community access"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Icons.Check size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Money Back Guarantee */}
            <div className="mt-8 pt-6 border-t border-slate-700 flex items-start gap-3 relative z-10">
              <div className="bg-brand-500/20 p-2 rounded-lg text-brand-400 shrink-0">
                <Icons.ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">7-Day Money Back Guarantee</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Not satisfied? Get a full refund on the All Access bundle within 7 days.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* No Hidden Charges & Guarantee Badge */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-slate-500 text-sm font-semibold flex items-center justify-center gap-2">
            <Icons.ShieldCheck className="text-brand-500" size={18} />
            Secure payment via ClickBank • Cancel anytime • No hidden fees
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Prices are in USD. The total will automatically convert to your local currency on the secure checkout page.
          </p>
          
          {/* Payment Logos */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300 pt-4">
            
            {/* ClickBank Logo (Added) */}
            <div className="font-bold text-2xl tracking-tighter text-slate-800" title="ClickBank">
              ClickBank
            </div>

            {/* Amazon Pay Logo */}
            <div className="flex flex-col relative h-8 justify-center" title="Amazon Pay">
              <span className="font-bold text-slate-800 text-xl leading-none tracking-tight">amazon<span className="text-brand-500">pay</span></span>
              {/* Smile arrow */}
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-brand-500" viewBox="0 0 100 20" fill="currentColor">
                  <path d="M10,5 Q50,20 90,5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M85,5 L90,5 L88,10 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Apple Pay Logo */}
            <div className="flex items-center gap-1 font-semibold text-slate-800 text-lg" title="Apple Pay">
              <svg className="h-6 w-5 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-22.1-73.3-64.8-68.3-91.9zm-48.9-153.2c5.6-27.3 37.8-54.7 50.8-54.7 6.2 3.3 13.2 2.7 13.2 2.7-3.4 26.9-23.6 53.6-50.7 54.8-5.1-.2-10-.6-13.3-2.8z"/>
              </svg>
              <span>Pay</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
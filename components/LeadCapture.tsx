import React, { useState } from 'react';
import { Icons } from './Icons';

export const LeadCapture: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // UPDATE THIS CODE WHEN YOU CREATE IT
  const COUPON_CODE = "10DISCOUNTPPP"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mregzqgn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          email: email,
          _subject: "New 10% Off Coupon Request"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setShowModal(true);
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(COUPON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-slate-900 py-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-xl">
            <h3 className="text-white font-bold text-xl mb-2 flex items-center justify-center md:justify-start gap-2">
              <Icons.Star className="text-brand-500 fill-brand-500" />
              Get 10% off your Pro Plan
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Join our newsletter for self-publishing tips and we'll instantly send you a code for <strong>10% off</strong> your first month of Publish Perfect Pal Pro (monthly plan only).
            </p>
          </div>
          
          {submitted ? (
            <div className="w-full md:w-auto bg-slate-800 rounded-xl p-4 border border-green-500/30 flex items-center justify-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                <Icons.CheckCircle2 size={24} />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Code Sent!</p>
                <p className="text-slate-400 text-xs cursor-pointer hover:text-white transition-colors underline" onClick={() => setShowModal(true)}>
                  View code again
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                required
                disabled={isSubmitting}
                className="w-full sm:w-64 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-inner disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get 10% Coupon'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Coupon Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-all animate-in fade-in duration-200">
          {/* Added max-h and overflow for landscape mobile support */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl relative transform scale-100 transition-all max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 p-1 rounded-full hover:bg-slate-100 sticky z-10"
            >
              <Icons.X size={20} />
            </button>
            
            <div className="text-center mt-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.CheckCircle2 className="text-green-600 w-8 h-8" strokeWidth={3} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
              <p className="text-slate-600 mb-6">
                Here is your exclusive coupon code for <strong>10% off</strong> the Pro plan (monthly):
              </p>
              
              <div 
                className="bg-slate-50 border-2 border-dashed border-brand-200 rounded-xl p-6 mb-6 relative group cursor-pointer hover:border-brand-300 transition-colors" 
                onClick={copyToClipboard}
              >
                <span className="font-mono text-3xl font-black text-brand-600 tracking-wider block mb-2">{COUPON_CODE}</span>
                <div className="flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wide">
                  {copied ? (
                    <span className="text-green-600 flex items-center gap-1"><Icons.Check size={12} /> Copied to clipboard</span>
                  ) : (
                    <span className="text-slate-400 group-hover:text-brand-500 transition-colors">Click to copy</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => {
                    setShowModal(false);
                    // Scroll to pricing if not already there
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Use Coupon Now
                </button>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full text-slate-500 hover:text-slate-700 font-medium py-2 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
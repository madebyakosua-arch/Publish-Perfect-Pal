import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import * as fbq from '../lib/fpixel';

export const LeadCapture: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for CAPI cookies
  const [fbp, setFbp] = useState('');
  const [fbc, setFbc] = useState('');

  useEffect(() => {
    // Capture Facebook Browser IDs for CAPI
    setFbp(fbq.getCookie('_fbp'));
    setFbc(fbq.getCookie('_fbc'));
  }, []);

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
          _subject: "New Newsletter Subscription",
          // Pass these to Formspree so you can send them to CAPI via Zapier/Make
          facebook_fbp: fbp,
          facebook_fbc: fbc
        })
      });

      if (response.ok) {
        setIsModalOpen(true);
        
        // Fire Facebook Pixel 'Lead' event
        fbq.event('Lead', {
          content_name: 'Newsletter Signup',
          currency: 'USD',
          value: 0.00
        });

        setEmail('');
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-slate-900 py-16 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-block mb-4 p-3 bg-white/10 rounded-xl border border-white/10">
                <Icons.FileText className="text-white h-6 w-6" />
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                Improve Your Book's Visibility and Conversions
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Join our newsletter for self-publishing tips on Amazon KDP for better visibility and conversions. <strong>No spam, just value.</strong>
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Hidden fields for automation tools */}
              <input type="hidden" name="facebook_fbp" value={fbp} />
              <input type="hidden" name="facebook_fbc" value={fbc} />
              
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
                {isSubmitting ? 'Subscribing...' : 'Get Publishing Tips'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <Icons.X size={24} />
            </button>
            
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5 border-4 border-green-200">
              <Icons.CheckCircle2 className="text-green-600 w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3">Thank you for signing up!</h3>
            
            <p className="text-slate-600 leading-relaxed">
              We promise we won't spam. We will only send you valuable information that can help you in your self-publishing journey.
            </p>

            <button 
              onClick={() => setIsModalOpen(false)} 
              className="mt-6 bg-brand-500 hover:bg-brand-600 text-white font-bold py-2.5 px-8 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
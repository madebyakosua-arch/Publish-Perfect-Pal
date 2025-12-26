import React from 'react';
import { Icons } from './Icons';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael R.",
      role: "Self-Published Scifi Author",
      quote: "I used to spend days fighting with margin errors on KDP. Publish Perfect Pal fixed my 300-page manuscript in 5 minutes. The visual error check is a lifesaver.",
      stars: 5
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "First-time Novelist",
      quote: "I was terrified of the upload process. This tool told me exactly which images were low resolution. I fixed them, uploaded, and got approved on the first try!",
      stars: 5
    },
    {
      id: 3,
      name: "David Chen",
      role: "Non-Fiction Author",
      quote: "The Lifetime deal is a no-brainer. If you value your time at more than $5 an hour, this software pays for itself with one book.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-100 px-4 py-1 rounded-full text-brand-700 font-bold text-sm mb-4">
            <Icons.Star size={16} fill="currentColor" /> 
            Trusted by 500+ Authors
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Don't just take our word for it
          </h2>
          <p className="text-lg text-slate-600">
            Join hundreds of authors who stopped guessing and started publishing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col relative hover:shadow-md transition-shadow">
              <div className="absolute top-6 right-8 text-slate-100">
                <Icons.Quote size={48} />
              </div>
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Icons.Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
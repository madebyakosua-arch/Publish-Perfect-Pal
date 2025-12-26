import React from 'react';
import { BENEFITS } from '../constants';
import { Icons } from './Icons';

export const Benefits: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'clock': return <Icons.Clock className="w-8 h-8 text-brand-500" />;
      case 'shield': return <Icons.ShieldCheck className="w-8 h-8 text-brand-500" />;
      case 'search': return <Icons.Search className="w-8 h-8 text-brand-500" />;
      case 'check': return <Icons.CheckCircle2 className="w-8 h-8 text-brand-500" />;
      default: return <Icons.Star className="w-8 h-8 text-brand-500" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Why self-published authors use Publish Perfect Pal
          </h2>
          <p className="text-lg text-slate-600">
            Stop guessing and start publishing. We turn the technical headache of KDP into a simple checklist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                {getIcon(benefit.iconName)}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
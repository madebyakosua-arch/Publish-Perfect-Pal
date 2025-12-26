import React from 'react';
import { FEATURES } from '../constants';
import { Icons } from './Icons';

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'scan': return <Icons.ScanLine className="w-6 h-6 text-brand-600" />;
      case 'fix': return <Icons.Wrench className="w-6 h-6 text-brand-600" />;
      case 'page': return <Icons.FileText className="w-6 h-6 text-brand-600" />;
      case 'cover': return <Icons.Image className="w-6 h-6 text-brand-600" />;
      case 'eye': return <Icons.Eye className="w-6 h-6 text-brand-600" />;
      case 'history': return <Icons.History className="w-6 h-6 text-brand-600" />;
      default: return <Icons.Star className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Everything you need in one dashboard
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive tools designed specifically to pass Amazon's print requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-brand-100 hover:bg-brand-50/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center">
                {getIcon(feature.iconName)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
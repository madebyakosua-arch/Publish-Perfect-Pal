import React from 'react';

export const VideoDemo: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
          See Publish Perfect Pal in action
        </h2>
        <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/E77CifPO1KU?rel=0" 
            title="Publish Perfect Pal Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          Watch how easy it is to scan, fix, and prepare your manuscript for Amazon KDP in just a few minutes.
        </p>
      </div>
    </section>
  );
};
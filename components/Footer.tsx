import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pb-28 md:pb-0">
      
      {/* Core Values Section */}
      <div className="border-b border-slate-800 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
                <h3 className="text-white font-bold text-lg tracking-wider uppercase mb-2">Our Values</h3>
                <div className="h-1 w-12 bg-brand-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
                <div className="flex flex-col items-center gap-3 group">
                    <div className="p-3 rounded-full bg-slate-800 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Icons.Star size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Customer First</h4>
                        <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">Your success is our priority</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-3 group">
                    <div className="p-3 rounded-full bg-slate-800 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Icons.ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Integrity</h4>
                        <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">Honest in everything we do</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-3 group">
                    <div className="p-3 rounded-full bg-slate-800 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Icons.Eye size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Transparency</h4>
                        <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">No fine print or secrets</p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-3 group">
                    <div className="p-3 rounded-full bg-slate-800 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Icons.CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm mb-1">Professionalism</h4>
                        <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">Excellence in every detail</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <p className="text-sm text-slate-500 italic max-w-lg mx-auto border-t border-slate-800 pt-6">
                   "We are deeply committed to these values. They aren't just words on a page, they guide every decision we make to help you publish your book."
                </p>
            </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="text-left max-w-sm">
               <div 
                 className="font-bold text-white text-lg mb-2 cursor-pointer"
                 onClick={() => navigateTo('home')}
               >
                 Publish Perfect Pal
               </div>
               <p className="text-sm mb-4">
                 © 2025 Publish Perfect Pal. <br/>
                 Proudly created by <span className="text-slate-300 font-semibold">Made By Akosua</span>.
               </p>
               <p className="text-xs text-slate-500 leading-relaxed">
                 Disclaimer: Publish Perfect Pal is an independent software tool developed by Made By Akosua to assist self-publishers. We are not affiliated with, endorsed by, or associated with Amazon.com, Inc. or Kindle Direct Publishing (KDP).
               </p>
               <p className="text-xs text-slate-500 leading-relaxed mt-4">
                 ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
               </p>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-start md:justify-end">
              <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">Terms of Service</button>
              <button onClick={() => navigateTo('refund')} className="hover:text-white transition-colors">Refund Policy</button>
              <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
          
          <div className="text-center text-xs text-slate-600 pt-8 border-t border-slate-800 flex flex-col gap-1">
            <p>Made for self-published authors, by self-published authors.</p>
            <p>Publish Perfect Pal is a product of Made By Akosua.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
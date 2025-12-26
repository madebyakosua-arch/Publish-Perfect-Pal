import React from 'react';
import { Icons } from '../Icons';
import { useNavigation } from '../../context/NavigationContext';

export const ThankYou: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-center">
        <div className="bg-brand-500 p-8">
          <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
            <Icons.CheckCircle2 className="text-brand-500 w-10 h-10" strokeWidth={3} />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Welcome Aboard!</h1>
          <p className="text-brand-100 font-medium">Your subscription has been confirmed.</p>
        </div>
        
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-2">What happens next?</h2>
            <p className="text-slate-600 text-sm mb-6">
              A receipt has been sent to your email address. You now have full access to all Pro features.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 text-left space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                  <Icons.Check size={16} />
                </div>
                <span className="text-sm text-slate-700">Account upgraded successfully</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                  <Icons.Check size={16} />
                </div>
                <span className="text-sm text-slate-700">Instant access to Scan Engine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                  <Icons.Check size={16} />
                </div>
                <span className="text-sm text-slate-700">Priority Support Enabled</span>
              </div>
            </div>
          </div>

          <a 
            href="https://www.publishperfectpal.online"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Access Your Dashboard <Icons.ArrowRight size={20} />
          </a>
          
          <p className="mt-6 text-xs text-slate-400">
            Need help? Contact our support team at any time.
          </p>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { Icons } from '../Icons';

export const Signup: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Create Your Account</h2>
          <p className="text-slate-600 mt-2">Get your book KDP ready in minutes</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Create Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-lg shadow-md transition-all hover:-translate-y-0.5 mt-2">
            Create Account
          </button>
        </form>

        <p className="text-xs text-slate-500 text-center mt-6">
          By signing up, you agree to our <button onClick={() => navigateTo('terms')} className="underline hover:text-brand-600">Terms</button> and <button onClick={() => navigateTo('privacy')} className="underline hover:text-brand-600">Privacy Policy</button>.
        </p>

        <div className="mt-6 text-center text-sm text-slate-600 border-t border-slate-100 pt-6">
          Already have an account?{' '}
          <button 
            onClick={() => navigateTo('login')}
            className="text-brand-600 hover:text-brand-700 font-bold"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};
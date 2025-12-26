import React, { useState } from 'react';
import { Icons } from './Icons';
import { useNavigation } from '../context/NavigationContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo, currentPage } = useNavigation();
  
  // Replace this with your actual Stripe Trial Link
  const STRIPE_TRIAL_LINK = "REPLACE_WITH_STRIPE_TRIAL_LINK";

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for sticky navbar (approx 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    
    if (currentPage !== 'home') {
      navigateTo('home');
      // Wait for navigation to home before scrolling. 
      // Increased timeout ensures DOM is ready after page switch.
      setTimeout(() => {
        scrollToElement(id);
        
        // Retry logic for slower devices
        setTimeout(() => {
           scrollToElement(id);
        }, 300);
      }, 100);
    } else {
      scrollToElement(id);
    }
  };

  const navLinks = [
    { name: 'Our Product', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer min-w-0" onClick={() => navigateTo('home')}>
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
              <Icons.CheckCircle2 size={20} strokeWidth={3} />
            </div>
            {/* Optimized text size for mobile to prevent cut-off */}
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 truncate sm:whitespace-nowrap">
              Publish Perfect Pal
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm whitespace-nowrap"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('#pricing')}
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button 
                onClick={() => {
                  handleNavClick('#pricing');
                  setIsOpen(false);
                }}
                className="w-full text-center bg-brand-500 text-white font-bold py-3 rounded-lg shadow-md block"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Page = 'home' | 'login' | 'signup' | 'privacy' | 'terms' | 'refund' | 'contact' | 'support' | 'thank-you';

interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state based on URL parameters
  // This allows Stripe to redirect to /?page=thank-you
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('page') === 'thank-you') {
        return 'thank-you';
      }
    }
    return 'home';
  });

  const navigateTo = (page: Page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    
    // Optional: Update URL without reloading to keep state clean
    if (page === 'home') {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Login } from './components/pages/Login';
import { Signup } from './components/pages/Signup';
import { LegalContent } from './components/pages/Legal';
import { Contact } from './components/pages/Contact';
import { ThankYou } from './components/pages/ThankYou';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'login': return <Login />;
      case 'signup': return <Signup />;
      case 'privacy': return <LegalContent type="privacy" />;
      case 'terms': return <LegalContent type="terms" />;
      case 'refund': return <LegalContent type="refund" />;
      case 'contact': return <Contact />;
      case 'support': return <Contact />; // Reusing contact page for support
      case 'thank-you': return <ThankYou />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  );
};

export default App;
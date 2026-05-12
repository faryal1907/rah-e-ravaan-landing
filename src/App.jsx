import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Features from './sections/Features';
import InteractivePreview from './sections/InteractivePreview';
import Vision from './sections/Vision';
import Waitlist from './sections/Waitlist';
import Footer from './components/Footer';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  // Initialize analytics
  useAnalytics();

  return (
    <div className="min-h-screen bg-desi-parchment selection:bg-desi-red selection:text-white relative overflow-x-hidden">
      
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <InteractivePreview />
        <Vision />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;

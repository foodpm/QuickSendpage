import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { About } from './About';
import { Footer } from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
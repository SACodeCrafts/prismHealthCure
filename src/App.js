import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import './index.css';
import HeroSection from './components/home/HeroSection';
import IncuranceCompanies from './components/home/IncuranceCompanies';

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <HeroSection />
        <IncuranceCompanies />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import './index.css';
import HeroSection from './components/home/HeroSection';
import InsuranceCompanies from './components/home/InsuranceCompanies';
import Products from './components/home/Products';

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <HeroSection />
        <InsuranceCompanies />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;

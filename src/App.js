import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import './index.css';
import HeroSection from './components/home/HeroSection';
import InsuranceCompanies from './components/home/InsuranceCompanies';
import Products from './components/home/Products';
import Details from './components/home/Details';
import ContactUs from './components/home/ContactUs';

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow ">
        <HeroSection />
        <InsuranceCompanies />
        <Products />
        <Details />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

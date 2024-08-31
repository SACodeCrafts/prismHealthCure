import React from 'react';
import Header from './components/Header';

import Footer from './components/Footer';
import './index.css';
import HeroSection from './components/home/HeroSection';
import InsuranceCompanies from './components/home/InsuranceCompanies';
import Products from './components/home/Products';
import Details from './components/home/Details';
import ContactUs from './components/home/ContactUs';
import ContactUsInfo from './components/home/ContactUsInfo';
import Testimonial from './components/home/Testimonial';
import SuscribeSection from './components/home/SuscribeSection';
import Address from './components/home/Address';

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
        <ContactUsInfo />
        <Testimonial />
        <SuscribeSection />
        <Address />
      </main>
      <Footer />
    </div>
  );
}

export default App;

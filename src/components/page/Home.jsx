import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../home/HeroSection'
import InsuranceCompanies from '../home/InsuranceCompanies'
import Products from '../home/Products'
import Details from '../home/Details'
import ContactUs from '../home/ContactUs'
import ContactUsInfo from '../home/ContactUsInfo'
import Testimonial from '../home/Testimonial'
import SuscribeSection from '../home/SuscribeSection'
import Address from '../home/Address'

const Home = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col ">
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
    </div>
    </>
  )
}

export default Home
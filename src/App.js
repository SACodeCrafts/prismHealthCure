import React from 'react';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/page/Home';
import ContactUs from './components/home/ContactUs';
import ContactUsInfo from './components/home/ContactUsInfo';
import Footer from './components/Footer';
import Products from './components/home/Products';
import Testimonial from './components/home/Testimonial';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<ContactUs/>} />
      <Route path="/ContactUs" element={<ContactUsInfo/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Testimonial" element={<Testimonial/>} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

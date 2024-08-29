import React from 'react';
import logo from '../assets/images/company-logo.png'

const Header = () => {
  return (
    <header className="bg-white shadow py-6 flex justify-center items-center w-full">
      <div className='flex items-center justify-between w-full max-w-[1240px] px-5'>


        <div className="text-xl font-bold">
          <img src={logo} alt='Prism Healthcure' className='w-[161px]' />
        </div>
        <nav className="space-x-10">
          <a href="#" className="text-font-primary-color text-base">Home</a>
          <a href="#" className="text-font-primary-color text-base">About Us</a>
          <a href="#" className="text-font-primary-color text-base">Product</a>
          <a href="#" className="text-font-primary-color text-base">Testimonial</a>
          <a href="#" className="bg-primary text-white px-8 py-2 rounded-md text-[15px]">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

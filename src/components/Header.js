import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">PRISM HEALTHCARE</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Product</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Testimonial</a>
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;

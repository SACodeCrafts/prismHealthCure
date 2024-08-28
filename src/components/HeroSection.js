import React from 'react';
import heroImage from '../assets/images/hero-image.jpg'; // Place your image in the assets/images folder

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Bracing for a healthier tomorrow.</h1>
        <p className="text-lg text-gray-700 mb-6">
          We serve the entire nation with a commitment to enhancing the lives of individuals grappling with various musculoskeletal challenges.
        </p>
        <p className="text-lg text-gray-700">
          Our mission revolves around alleviating pain, promoting mobility, and contributing to an overall improvement in the quality of life for our customers.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={heroImage} alt="Healthcare" className="rounded-lg shadow-lg"/>
      </div>
    </section>
  );
};

export default HeroSection;

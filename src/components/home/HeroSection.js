import React from 'react';
import heroImage from '../../assets/images/hero-image.jpg';
import bgImage from '../../assets/images/diagnostic-lab-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-16 relative md:flex-row items-center w-full pt-16  2xl:px-[370px] m-auto pb-[70px]">

      <img src={bgImage} alt="Healthcare" className="   absolute right-0 -z-10 " />

      <div className="md:w-1/2 text-center md:text-left max-w-[450px]  ">

        <h3 className='text-[#08acf2] pb-10 font-semibold text-[14px]'>
          Welcome to Prism Healthcure Inc
        </h3>
        <h1 className="text-7xl font-semibold mb-4 text-wrap pb-4 text-left leading-tight text-font-primary-color">Bracing for a healthier tomorrow.</h1>
        <p className="text-base text-[#4c5253] mb-6 text-wrap">
          We serve the entire nation with a commitment to enhancing the lives of individuals grappling with various musculoskeletal challenges.
        </p>
        <p className="text-base text-[#4c5253]  text-wrap">
          Our mission revolves around alleviating pain, promoting mobility, and contributing to an overall improvement in the quality of life for our customers.
        </p>
        <div className='flex flex-row gap-4 pt-20'>

          <button className='bg-[#2fc1ff] text-white px-5 py-3 rounded-md text-[14px] hover:bg-[#08429e] duration-200 shadow-custom-blue-sh'>Contact Us</button>
          <button className='bg-[#fff] border border-1 border-[#08acf2] text-[#08acf2] px-5 py-3 rounded-md text-[14px] hover:bg-[#08acf2] hover:text-white duration-200'>learn more</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 lg:w-full" >
        <img src={heroImage} alt="Healthcare" className="rounded-lg shadow-lg" />
      </div>

    </section>
  );
};

export default HeroSection;

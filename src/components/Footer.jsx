import React from 'react';
import logo from "../assets/images/footer-logo.png"

const Footer = () => {
  return (
    <>
      <footer className="text-center ">
        <div className=' bg-white py-20 px-[30px] text-font-primary-color '>
          <div className='flex  md:flex-row max-w-[1200px] justify-between    m-auto items-center py-[30px]   '>
            <img src={logo} alt='logo' />
            <div className='flex justify-between space-x-28'>
              <div className=' flex items-start flex-col space-y-6'>
                <span className='font-semibold text-xl'>
                  Our Main Services
                </span>
                <div className='flex items-start flex-col space-y-1 text-base'>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Product</p>
                  <p>Testimonial</p>
                </div>

              </div>
              <div className=' flex items-start flex-col space-y-6'>
                <span className='font-semibold text-xl'>
                  USEFUL LINKS

                </span>
                <div className='flex items-start flex-col space-y-1 text-base'>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Refund and Returns Policy</p>
                  <p>Contact Us</p>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className='bg-[#9ccb3d] text-white py-6  flex items-center justify-center'>

          <p>Copyright &copy; {new Date().getFullYear()} Prism Healthcare Inc. All rights reserved.</p>
        </div>

      </footer>
    </>

  );
};

export default Footer;

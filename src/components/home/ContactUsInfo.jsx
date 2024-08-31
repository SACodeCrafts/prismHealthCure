import React from 'react';
import ContactUsBg from '../../assets/images/contact-info-bg.jpg';

const ContactUsInfo = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-[1140px]  m-auto py-[104px] space-y-8 md:space-y-0'>

            <div className='relative w-full md:w-1/2  md:h-auto flex items-center justify-end rounded-tl-xl overflow-hidden '>
                <div className='absolute  inset-0 bg-primary opacity-60 -z-10'></div>
                <img src={ContactUsBg} alt='ContactUsBg' className='absolute -z-20 object-cover w-full h-full' />
                <div className=' mt-20 bg-[#4ca9e4] text-white   p-8 md:p-10 max-w-[285px]  max-md:max-w-none '>
                    <div className='flex flex-col space-y-12'>
                        <div className='flex flex-col pb-10'>
                            <span className='pb-3 text-2xl font-bold'>Service</span>
                            <p className='text-left text-base'>
                                Medical products designed to bring relief to those suffering from back, knee, elbow, wrist, shoulder, ankle, and more.
                            </p>
                        </div>
                        <span className='flex items-center gap-2 text-sm'>
                            <p>Learn More</p>
                            <span>--</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex flex-col  md:space-y-0 max-md:flex-row'>
                <div className='flex w-full'>
                    <div className='bg-[#A5CE43] rounded-tr-xl py-8 pl-8 pr-[80px]  flex flex-col justify-between h-full  '>
                        <div className='flex flex-col '>

                            <h2 className='text-white text-2xl font-bold'>Location</h2>
                            <div className='flex flex-col space-y-5  '>

                                <p className='text-white mt-4 text-base '>
                                    430 West Merrick Rd,
                                </p>
                                <p className='text-white mt-4 text-base'>
                                    Suite # 01, Valley Stream,
                                </p>
                                <p className='text-white mt-4 text-base'>
                                    New York  11580
                                </p>
                            </div>
                        </div>
                        <div className='mt-4 '>
                            <a href='#' className='text-white text-sm flex items-center gap-2'>
                                Get Directions <span>--</span>
                            </a>
                        </div>
                    </div>
                    <iframe title='map' className=' w-[50%] p-10 bg-white' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.252789454924!2d-73.71629532384499!3d40.6683987714002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c264706b9c6b83%3A0x4d4425c0912afa16!2s430%20W%20Merrick%20Rd%2C%20Valley%20Stream%2C%20NY%2011580%2C%20USA!5e0!3m2!1sen!2s!4v1724938496556!5m2!1sen!2s" height="364" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>


                <div className='bg-[#08429e] p-8 md:p-10 flex-1 rounded-br-xl'>
                    <div className='flex flex-col mb-14'>

                        <h2 className='text-white text-2xl font-bold'>Contact us</h2>
                        <p className='text-white mt-4'>
                            Our dedicated team is here to answer your questions, provide product recommendations, and support you on your journey to a pain-free and active lifestyle.
                        </p>
                        <p className='text-white mt-4'>
                            Connect with us today and take the first step towards improved well-being
                        </p>

                    </div>
                    <div className='flex items-center space-x-8 '>


                        <button className='hover:bg-white border text-white duration-300 border-white  hover:text-primary py-2 px-4 rounded-md'>
                            Start Now
                        </button>

                        <span className='bg-[#3060ae] w-[1px] block h-10'></span>
                        <div className='flex gap-4 items-center'>
                            <span className='bg-primary w-11 h-11 rounded-full block'></span>
                            <div className='flex flex-col items-start'>
                                <p className='text-[14px] font-semibold text-white'>Book an appoitnment
                                </p>
                                <a href='tel:516-593-1375' className='text-white text-2xl font-bold'>
                                    (516) 593-1375
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUsInfo;

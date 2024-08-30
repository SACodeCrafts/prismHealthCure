import React from 'react'
import bagBgImg from "../../assets/images/bag-bg-img.jpg"
const ContactUs = () => {
    return (
        <div className='relative  overflow-hidden'>
            <div className='w-full h-full  block bg-[#08429E] absolute opacity-10'></div>
            <img src={bagBgImg} alt='bagBgImg' className='absolute    -z-10' />
            <div
                className='max-w-[744px] flex m-auto py-28 '
            >

                <div className='flex flex-col items-center gap-5 px-16'>

                    <h1 className='text-5xl text-white font-bold'>
                        GET ONE STEP AHEAD
                    </h1>
                    <p className='text-center text-base text-white leading-7'>
                        Our dedicated team is here to answer your questions, provide product recommendations, and support you on your journey to a pain-free and active lifestyle. Connect with us today and take the first step towards improved well-being.
                    </p>
                    <button className='bg-primary text-white py-3 px-5  rounded-md text-[15px]'> Contact Us</button>
                </div>

            </div>
        </div>

    )
}

export default ContactUs
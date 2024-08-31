import React from 'react'
import bgLogo from "../../assets/svgs/diagnostic-lab-logo-symbol.svg"
const SuscribeSection = () => {
    return (
        <div className='relative overflow-hidden bg-[#61ce70]'>
            <div className='w-full bg-[#61ce70] opacity-40  absolute left-0 top-0 h-full z-10'></div>
            <img src={bgLogo} className='absolute right-0  w-[540px] ' alt='bgLogo' />
            <div className='flex  md:flex-row max-w-[1140px]  m-auto items-center py-[90px] relative z-20 gap-4 '>

                <span className='bg-[#08acf2] p-5 rounded-full flex justify-center items-center'>
                    <svg aria-hidden="true" fill='#fff' width={30} class="e-font-icon-svg e-fas-envelope-open-text" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
                </span>
                <div className='flex flex-col '>

                    <p className='text-white font-bold text-2xl'>Subsribe to our newsletter
                    </p>
                    <p className='text-base text-white'>Stay in touch with us to get latest news and special offers.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default SuscribeSection
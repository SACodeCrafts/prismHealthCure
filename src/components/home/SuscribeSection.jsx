import React from 'react'
import bgLogo from "../../assets/svgs/diagnostic-lab-logo-symbol.svg"
const SuscribeSection = () => {
    return (
        <div className='relative overflow-hidden bg-[#61ce70]'>
            <div className='w-full bg-[#61ce70] opacity-40  absolute left-0 top-0 h-full z-10'></div>
            <img src={bgLogo} className='absolute right-0  w-[540px] ' alt='bgLogo' />
            <div className='flex  md:flex-row max-w-[1140px]  m-auto items-center py-[90px] relative z-20 gap-4 '>

                <span className='bg-primary w-11 h-11 rounded-full block'></span>
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
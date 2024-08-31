import React from 'react'

const Address = () => {
    return (
        <div className='relative overflow-hidden bg-[#0051c4]'>
            <div className='flex  md:flex-row max-w-[1140px] justify-between  m-auto items-center py-[30px]   '>

                <div className='max-w-[380px] flex gap-4 border-r border-font-secandary-color'>

                    <span className='bg-primary w-11 h-11 rounded-full block'></span>
                    <div className='flex flex-col gap-1'>

                        <p className='text-white font-bold text-xl '>Address
                        </p>
                        <p className='text-[15px] text-white leading-6'>430 West Merrick Rd, Suite # 01, Valley Stream, New York  11580
                        </p>

                    </div>
                </div>

                <div className='max-w-[380px] flex gap-4 border-r px-16 border-font-secandary-color'>

                    <span className='bg-primary w-11 h-11 rounded-full block'></span>
                    <div className='flex flex-col gap-1'>

                        <p className='text-white font-bold text-xl '>Call us

                        </p>
                        <p className='text-[15px] text-white leading-6'>(516) 593-1375
                        </p>

                    </div>
                </div>
                <div className='max-w-[380px] w-full flex gap-4 '>

                    <span className='bg-primary w-11 h-11 rounded-full block'></span>
                    <div className='flex flex-col gap-1'>

                        <p className='text-white font-bold text-xl '>Email us

                        </p>
                        <p className='text-[15px] text-white leading-6'>info@prismhealthcureinc.com
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Address
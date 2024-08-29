import React from 'react'
import AetnaLogo from "../../assets/images/Aetna-logo.png"


const IncuranceCompanies = () => {
    return (
        <div className='flex items-center w-full 2xl:px-[370px] space-x-[56px]'>
            <div className='flex flex-col items-start '>
                <div className='flex items-center  gap-3 '>

                    <p className='text-[15px] '>Insurance companies approved by
                    </p>
                    <span className='block h-[2px] w-14 mt-1 bg-primary'></span>
                </div>
                <img
                    src={AetnaLogo}
                    alt='AetnaLogo'
                    className='w-[151px]'
                />
            </div>

            <img
                src={AetnaLogo}
                alt='AetnaLogo'
                className='w-[151px]'
            />
            <img
                src={AetnaLogo}
                alt='AetnaLogo'
                className='w-[151px]'
            />
            <img
                src={AetnaLogo}
                alt='AetnaLogo'
                className='w-[151px]'
            />
            <img
                src={AetnaLogo}
                alt='AetnaLogo'
                className='w-[151px]'
            />
        </div>
    )
}

export default IncuranceCompanies
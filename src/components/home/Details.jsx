import React from 'react'
import logo from '../../assets/images/details-logo.png'
import bgImg from "../../assets/svgs/diagnostic-lab-content-gradient-bg.svg"

const Details = () => {
    return (

        <div className='relative overflow-hidden pt-[70px] pb-[30px]'>
            <img src={bgImg} alt='bgImg' className='absolute top-0' />
            <div className='flex flex-col max-w-[1140px] m-auto gap-[104px]' >

                <div className=' flex   justify-between '>
                    <div className=''>
                        <img src={logo} alt='logo' className='max-w-[570px] rounded-tr-xl rounded-br-xl' />
                    </div>
                    <div className='flex flex-col pl-16 pr-8'>
                        <h1 className='text-font-primary-color text-5xl font-bold pb-6 leading-tight '>
                            Your partner in enhancing mobility and reclaiming an active lifestyle.
                        </h1>
                        <p className='text-base text-font-secandary-color pb-16 leading-7'>With over 30 million Americans experiencing chronic neck and back pain, our team is committed to offering a range of treatments that are narcotic-free, non-surgical, safe, and effective. Our unique and comprehensive treatment approach, executed by experts from Olympic Spine and Sound Pain Solutions, aims to provide lasting relief.

                        </p>
                        <p className='text-base text-font-secandary-2-color font-semibold'>We empower individuals to regain control over their lives, allowing them to once again enjoy an active and pain-free existence.

                        </p>
                    </div>



                </div>
                <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-4">

                    <div class="flex flex-col items-start justify-center rounded-xl bg-[#9ccb3d] text-white  p-4 pl-8 w-full md:w-1/4">
                        <div class="text-4xl font-bold">4.5</div>
                        <div class="text-sm">of 5</div>
                        <div class="flex space-x-1 mt-2">

                            <div class="bg-yellow-300 h-4 w-4 rounded-full"></div>
                            <div class="bg-yellow-300 h-4 w-4 rounded-full"></div>
                            <div class="bg-yellow-300 h-4 w-4 rounded-full"></div>
                            <div class="bg-yellow-300 h-4 w-4 rounded-full"></div>
                            <div class="bg-yellow-300 h-4 w-4 rounded-full"></div>
                        </div>
                    </div>


                    <div class="flex flex-col md:flex-row justify-around items-center bg-white rounded-lg p-4 w-full md:w-3/4 space-y-4 md:space-y-0">

                        <div class="flex items-center space-x-2">
                            <div class="text-blue-500 text-3xl">G+</div>
                            <div>
                                <div class="font-bold">4.8/5</div>
                                <div class="text-sm text-gray-500">1860 Reviews</div>
                            </div>
                        </div>


                        <div class="flex items-center space-x-2">
                            <div class="text-blue-500 text-3xl">Y</div>
                            <div>
                                <div class="font-bold">4.6/5</div>
                                <div class="text-sm text-gray-500">1630 Reviews</div>
                            </div>
                        </div>


                        <div class="flex items-center space-x-2">
                            <div class="text-blue-600 text-3xl">f</div>
                            <div>
                                <div class="font-bold">4.7/5</div>
                                <div class="text-sm text-gray-500">2100 Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Details
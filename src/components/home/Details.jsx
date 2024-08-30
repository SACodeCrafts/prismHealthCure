import React from 'react'
import logo from '../../assets/images/details-logo.png'
import ladyImg from '../../assets/images/lady-img.jpg'
import bgImg from "../../assets/svgs/diagnostic-lab-content-gradient-bg.svg"

const Details = () => {
    return (

        <div className='relative overflow-hidden pt-[70px] pb-[80px]'>
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
                        <p className='text-base text-font-primary-color font-semibold'>We empower individuals to regain control over their lives, allowing them to once again enjoy an active and pain-free existence.

                        </p>
                    </div>



                </div>
                <div class="flex flex-col md:flex-row bg-white rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-4 ">

                    <div class="flex flex-col items-start justify-center rounded-xl bg-[#9ccb3d] text-white pb-4  pl-8 w-full md:w-1/4">
                        <div class="text-[64px] font-bold">4.5</div>
                        <div class="flex space-x-1 items-center">
                            <div class="text-base pr-2">of 5</div>

                            <div class="border border-yellow-300 h-[10px] w-[10px] "></div>
                            <div class="border border-yellow-300 h-[10px] w-[10px] "></div>
                            <div class="border border-yellow-300 h-[10px] w-[10px] "></div>
                            <div class="border border-yellow-300 h-[10px] w-[10px] "></div>
                            <div class="border border-yellow-300 h-[10px] w-[10px] "></div>

                        </div>
                    </div>


                    <div class="flex flex-col md:flex-row justify-around items-center bg-white rounded-lg p-4 w-full md:w-3/4 space-y-4 md:space-y-0 ">

                        <div class="flex items-center space-x-2">
                            <div class="text-blue-500 text-3xl">G+</div>
                            <div>
                                <div class="font-bold text-2xl text-font-primary-color">4.8/5</div>
                                <div class="text-sm  text-[#4C5253]">1860 Reviews</div>
                            </div>
                        </div>


                        <div class="flex items-center space-x-2">
                            <div class="text-blue-500 text-3xl">Y</div>
                            <div>
                                <div class="font-bold text-2xl text-font-primary-color">4.6/5</div>
                                <div class="text-sm text-[#4C5253]">1630 Reviews</div>
                            </div>
                        </div>


                        <div class="flex items-center space-x-2">
                            <div class="text-blue-600 text-3xl">f</div>
                            <div>
                                <div class="font-bold text-2xl text-font-primary-color">4.7/5</div>
                                <div class="text-sm text-[#4C5253]">2100 Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex'>

                    <img src={ladyImg} alt='ladyImg' className='max-h-[654px] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl' />

                    <div className='flex flex-col pl-[64px] pr-[40px]'>

                        <div className='flex flex-col'>
                            <h1 className='text-font-primary-color text-5xl font-bold pb-6 leading-tight '>
                                WHY PEOPLE TRUST US
                            </h1>
                            <p className='text-base text-font-secandary-color pb-16 leading-7'>We understand the profound impact that spine-related symptoms have on daily life. With over 30 million Americans experiencing chronic neck and back pain, our team is committed to offering a range of  products that are non-surgical, safe, and effective.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-[30px] '>
                            <div className='flex flex-col gap-6 max-w-[300px]'>
                                <div className='rounded-full bg-primary h-14 w-14 block'></div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-2xl text-font-secandary-color leading-7 font-semibold'>
                                        High quality product
                                    </span>
                                    <p className='text-base text-font-secandary-color leading-7 break-words'>
                                        Experience the pinnacle of excellence with our high-quality medical products
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 max-w-[300px]'>
                                <div className='rounded-full bg-primary h-14 w-14 block'></div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-2xl text-font-secandary-color leading-7 font-semibold'>
                                        Fast delivery nation wide
                                    </span>
                                    <p className='text-base text-font-secandary-color leading-7 break-words'>
                                        Swift solutions, nationwide reach – because your well-being shouldn't wait.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 max-w-[300px]'>
                                <div className='rounded-full bg-primary h-14 w-14 block'></div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-2xl text-font-secandary-color leading-7 font-semibold'>
                                        Precise result
                                    </span>
                                    <p className='text-base text-font-secandary-color leading-7 break-words'>
                                        Precision that delivers undeniable results, ensuring your well-being with every use.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 max-w-[300px]'>
                                <div className='rounded-full bg-primary h-14 w-14 block'></div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-2xl text-font-secandary-color leading-7 font-semibold'>
                                        Working Hours
                                    </span>
                                    <p className='text-base text-font-secandary-color leading-7 break-words'>
                                        Monday to Friday - 09:30 Am to 05:00 Pm
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default Details
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

                        <div class="flex items-center space-x-4">
                            <div class="">
                                <svg aria-hidden="true" fill="#08acf2" width={40} class="e-font-icon-svg e-fab-google-plus-g" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>
                            </div>
                            <div>
                                <div class="font-bold text-2xl text-font-primary-color">4.8/5</div>
                                <div class="text-sm  text-[#4C5253]">1860 Reviews</div>
                            </div>
                        </div>


                        <div class="flex items-center space-x-4">
                            <div class="">
                                <svg aria-hidden="true" fill="#08acf2" width={34} class="e-font-icon-svg e-fab-yelp" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"></path></svg>
                            </div>

                            <div>
                                <div class="font-bold text-2xl text-font-primary-color">4.6/5</div>
                                <div class="text-sm text-[#4C5253]">1630 Reviews</div>
                            </div>
                        </div>


                        <div class="flex items-center space-x-4">
                            <div class="">
                                <svg aria-hidden="true" fill="#08acf2" width={40} class="e-font-icon-svg e-fab-facebook-square" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                            </div>
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
                                <div className='rounded-full bg-[#08acf2] w-14 h-14 flex justify-center items-center'>

                                    <svg aria-hidden="true" fill='#fff' width={23} class="e-font-icon-svg e-far-gem" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z"></path></svg>
                                </div>
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
                                <div className='rounded-full bg-[#08acf2] w-14 h-14 flex justify-center items-center'>

                                    <svg aria-hidden="true" fill='#fff' width={23} class="e-font-icon-svg e-fas-shipping-fast" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
                                </div>
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
                                <div className='rounded-full bg-[#08acf2] w-14 h-14 flex justify-center items-center'>

                                    <svg aria-hidden="true" fill='#fff' width={23} class="e-font-icon-svg e-fas-file-invoice" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"></path></svg>
                                </div>
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
                                <div className='rounded-full bg-[#08acf2]  w-14 h-14 flex justify-center items-center'>

                                    <svg aria-hidden="true" fill='#fff' width={23} class="e-font-icon-svg e-far-bell" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path></svg>
                                </div>
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
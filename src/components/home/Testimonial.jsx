import React from 'react'

function Testimonial() {
    return (
        <div className='flex flex-col md:flex-row max-w-[1140px]  m-auto pb-[104px] gap-5 justify-between'>
            <div className='p-10 bg-white flex flex-col max-w-[364px] rounded-tr-xl rounded-tl-xl rounded-br-xl' >
                <div className='flex justify-between items-center w-full mb-8'>
                    <div className='flex space-x-2'>
                        <div class="border border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>

                    </div>
                    <span>G+</span>
                </div>
                <p className='text-wrap text-base text-font-primary-color font-medium mb-4 leading-7 '>
                    I've been using Prism Healthcure's knee brace for a month, and the relief is incredible! It's comfortable, provides excellent support, and I can finally move without the constant discomfort. Grateful for a product that truly delivers.

                </p>
                <p className='text-base text-font-primary-color font-medium tracking-wider'>GRACE M</p>

            </div>
            <div className='p-10 bg-white flex flex-col max-w-[364px] rounded-tr-xl rounded-tl-xl rounded-br-xl' >
                <div className='flex justify-between items-center w-full mb-8'>
                    <div className='flex space-x-2'>
                        <div class="border border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>

                    </div>
                    <span>G+</span>
                </div>
                <p className='text-wrap text-base text-font-primary-color font-medium mb-4 leading-7 '>
                    The back brace from Prism Healthcure has been a game-changer for my chronic back pain. The quality is outstanding, and I can feel the difference in my posture and comfort throughout the day. Highly recommend!


                </p>
                <p className='text-base text-font-primary-color font-medium tracking-wider'>Alex H
                </p>

            </div>
            <div className='p-10 bg-white flex flex-col justify-between max-w-[364px] rounded-tr-xl rounded-tl-xl rounded-br-xl' >
                <div className='flex justify-between items-center w-full mb-8'>
                    <div className='flex space-x-2'>
                        <div class="border border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>
                        <div class="border  border-primary h-[10px] w-[10px] "></div>

                    </div>
                    <span>G+</span>
                </div>
                <p className='text-wrap text-base text-font-primary-color font-medium mb-4 leading-7 '>
                    Prism Healthcure's wrist brace saved my daily routine. It's sleek, fits perfectly, and the support is just what I needed. No more wrist pain during long hours at the computer. Thank you for creating such a fantastic product!


                </p>
                <p className='text-base text-font-primary-color font-medium tracking-wider'>Emily R

                </p>

            </div>
        </div>
    )
}

export default Testimonial
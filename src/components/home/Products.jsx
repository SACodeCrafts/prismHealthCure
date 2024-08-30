import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <div className=' flex-col space-y-10 2xl:px-[370px] bg-[#ecf9ff] pt-[100px] pb-[30px] flex justify-center items-center'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-font-primary-color text-5xl font-bold text-center'>OUR PRODUCT RANGE
                </h1>
                <p className='text-font-secandary-color text-base text-center max-w-[540px]'>Explore our range of medical products designed to bring relief to those suffering from Pain in Back, Knee, Elbow, Wrist, Shoulder, & Ankle.
                </p>
            </div>

            <div className='flex flex-wrap gap-10 justify-between px-10 '>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>

        </div>
    )
}

export default Products
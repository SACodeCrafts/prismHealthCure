import React from 'react'
import Product from '../../assets/images/product.jpg'

const ProductCard = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-white p-4 max-w-[296px] rounded-[20px] overflow-hidden' >
                <img src={Product} alt="Product" className='w-[290px]' />
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-2xl text-font-primary-color text-center font-semibold'>Back brace
                </span >
                <p className='text-base  text-center text-font-primary-color ' >Model - L0651
                </p>
            </div>
        </div>
    )
}

export default ProductCard
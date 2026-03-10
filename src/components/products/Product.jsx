import { Check, Plus, Star } from 'lucide-react';
import React from 'react';

const Product = ({ product, productsInCart, inCartCheck }) => {

    const isAlreadyInCart = productsInCart.some(singleProduct => singleProduct.id === product.id);

    const { category, title, rating, price, images } = product;
    return (
        <div className='border border-transparent hover:border-gray-700 rounded-xl flex flex-col justify-between hover:-translate-y-0.5 transition ease-in-out duration-300 bg-gray-800'>

            {/* image */}
            <div className='bg-[#1E1E23] flex justify-center items-center p-10'>
                <img className='h-40' src={images[0]} alt="" />
            </div>

            {/* information */}
            <div className='p-5 space-y-5'>
                <div className=''>
                    <p className='text-gray-400'>{category}</p>
                    <h2 className='text-white font-bold text-xl'>{title}</h2>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-white font-bold text-xl'>$ {price}</p>
                    <div className='flex items-center gap-2'>
                        <Star width={12} fill='gold' />
                        <span>{rating}</span>
                    </div>
                </div>

            </div>

            {/* button */}
            <button onClick={() => inCartCheck(product)} className={`btn font-bold mt-auto w-full border-none ${isAlreadyInCart ? 'bg-gray-500 hover:bg-gray-400' : 'bg-[#E8FF47] hover:bg-[#d7e95e]'}`}>
                {
                    isAlreadyInCart ?
                        <><Check width={12} /> <span>Added to Cart</span></>
                        :
                        <><Plus width={12} /> <span>Add to Cart</span></>

                }
            </button>
        </div>
    );
};

export default Product;
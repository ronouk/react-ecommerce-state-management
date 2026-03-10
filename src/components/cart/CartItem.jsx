import React from 'react';

const CartItem = ({ singleProduct }) => {

    const { thumbnail, title, price, category } = singleProduct;
    return (
        <div className='flex justify-between border p-3 rounded-xl border-gray-800 hover:border-gray-700 transition text-gray-400'>
            <div className='flex gap-5 items-center'>
                <div className='w-16 p-2 bg-gray-900 flex justify-center items-center rounded-xl'>
                    <img width={50} src={thumbnail} alt={title} />
                </div>
                <div>
                    <h2 className='font-semibold text-white text-lg'>{title}</h2>
                    <span>{category}</span> . <span>${price}</span>
                </div>
            </div>
            <div className='flex gap-10 items-center'>
                <div>1</div>
                <div className='text-center'>
                    <p className='font-semibold text-white text-lg'>${price}</p>
                    <button className='border border-transparent hover:border-red-400 px-2 rounded-md hover:text-red-400 transition'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
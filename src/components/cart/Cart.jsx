import React, { useState } from 'react';
import CartItem from './CartItem';
import { BaggageClaim, MoveRight } from 'lucide-react';


const Cart = ({ productsInCart, removeFromCart }) => {
    // console.log(productsInCart)

    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleTypedCoupon = (typedCoupon) => {
        typedCoupon === "A123" ? setDiscount(10) : setDiscount(0);

        const newCouponCode = typedCoupon;
        setCouponCode(newCouponCode);
        console.log(newCouponCode);
    }

    // total price

    const totalCartPrice = productsInCart.reduce((total, product) => {
        return total + product.price;
    }, 0);
    const shippingPrice = 4.99;
    const totalFinalPrice = totalCartPrice + shippingPrice - discount;


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

            <div>
                {
                    productsInCart.length ?
                        <div className='space-y-5'>
                            <div className='flex justify-between py-5 border-b border-gray-800 uppercase text-gray-400 text-lg'>
                                <p>Item</p>
                                <p>Price</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                {productsInCart.map(singleProduct => <CartItem
                                    singleProduct={singleProduct}
                                    key={singleProduct.id}
                                    removeFromCart={removeFromCart}
                                ></CartItem>)}
                            </div>
                        </div>

                        :

                        <div className='flex flex-col items-center gap-2 text-xl'>
                            <BaggageClaim size={116} color="#545454" />
                            <p className='text-white'>Your cart is empty</p>
                            <p className='text-gray-400'>Head over to Products and add something!</p>
                        </div>

                }

            </div>

            <div className='text-gray-400 border p-5 rounded-2xl border-gray-800 space-y-6'>
                <h2 className='text-2xl text-white border-b pb-3 border-gray-800'>Order Summary</h2>
                <div className='border-b border-gray-800 pb-3 space-y-2'>
                    <div className='flex justify-between text-lg'>
                        <p>Subtotal ({productsInCart.length} items)</p>
                        <p>$ {totalCartPrice.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <p>Shipping</p>
                        <p>{productsInCart.length ? `$ ${shippingPrice}` : "-"}</p>
                    </div>

                    {/* discount section */}
                    <div>
                        {
                            couponCode === "A123" ?
                                <div className='flex justify-between text-lg text-[#E8FF47]'>
                                    <p>Discount</p>
                                    <p>-$ {discount}</p>
                                </div>
                                :
                                <div className='flex justify-between text-lg text-right'>
                                    <p>Coupon</p>
                                    <div className=''>
                                        <input
                                            onKeyUp={(e) => {
                                                if (e.key === "Enter") {
                                                    const typedCoupon = e.target.value;
                                                    handleTypedCoupon(typedCoupon)
                                                }
                                            }}
                                            id='discount-input-box' className='text-right px-2 rounded-md outline '
                                            type="text"
                                            placeholder='demo: A123' name="" />
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='flex justify-between text-2xl'>
                    <p className='text-white'>Total</p>
                    <p className='text-[#E8FF47]'>$ {totalCartPrice === 0 ? 0 : totalFinalPrice.toFixed(2)}</p>
                </div>
                <button className='btn w-full bg-[#E8FF47] hover:bg-[#d7e95e] border border-transparent text-xl'>Checkout <MoveRight strokeWidth={1} /></button>
            </div>
        </div>
    );
};

export default Cart;
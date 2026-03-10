import React from 'react';
import "./common-items.css"

const CommonItems = ({ PAGES, page, productsInCart }) => {
    return (
        <>
            {
                page === PAGES.PRODUCTS ?
                    <div className='common-item'>
                        <h1 className=''>Browse Products</h1>
                        <p className=''>Fetched from DummyJSON API — add items to your cart</p>
                    </div>
                    :
                    <div className='common-item'>
                        <h1>Your Cart</h1>
                        {
                            productsInCart.length ?
                                <p>{productsInCart.length} items - looking good</p>
                                :
                                <p>Start adding items from the shop</p>
                        }

                    </div>
            }


        </>

    );
};

export default CommonItems;
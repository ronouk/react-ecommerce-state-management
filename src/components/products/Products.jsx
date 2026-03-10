import { Plus, Star } from 'lucide-react';
import React from 'react';
import Product from './Product';

const Products = ({ products, productsInCart, inCartCheck }) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product =>

                    <Product
                        product={product}
                        key={product.id}
                        inCartCheck = {inCartCheck}
                        productsInCart = {productsInCart}
                    ></Product>)
            }
        </div>
    );
};

export default Products;
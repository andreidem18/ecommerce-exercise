import React from 'react';
import { ProductItem } from '.';

import 'styles/products-list.css';

const ProductsList = ({ products }) => {
    return (
        <div className="products-list">

            {products.map(product => <ProductItem key={product.id} product={product} />)}
            
        </div>
    );
};

export default ProductsList;

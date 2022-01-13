import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartThunk, getProductDetailThunk, getProductsThunk } from 'redux/actions';
import { InputQuantity, ProductsList } from 'components';

import 'styles/product-detail.css';

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.productDetail);
    const productsList = useSelector(state => state.products.productsList);
    const [ imagePosition, setImagePosition ] = useState(1);
    const [ quantity, setQuantity ] = useState(1);

    useEffect(() => dispatch(getProductsThunk(product.category?.id)), [ dispatch, product ]);

    useEffect(() => dispatch(getProductDetailThunk(id)), [ dispatch, id ]);

    const imagesLength = product.images?.length

    const sliderStyles = {
        width: imagesLength * 100 + '%',
        transform: `translateX(-${(imagePosition-1)*100/imagesLength}%)`
    }

    const addToCart = () => {
        dispatch(addToCartThunk({ product: product.id, quantity }));
    }

    return (
        <section className='product-detail'>
            <div className="container">
                <div className="product-flex">
                    <div className="col">
                        <div className="slider">
                            <span className="counter">{imagePosition} / {imagesLength}</span>
                            <button className='arrow-button' style={{left: '0'}} onClick={() => setImagePosition(imagePosition-1)} disabled={imagePosition===1}>
                                <i className="material-icons-sharp">
                                    arrow_back_ios
                                </i>
                            </button>
                            <button className='arrow-button' style={{right: '0'}} onClick={() => setImagePosition(imagePosition+1)} disabled={imagePosition===imagesLength}>
                                <i className="material-icons-sharp">
                                    arrow_forward_ios
                                </i>
                            </button>
                            <div className="product-images" style={sliderStyles}>
                                {
                                    product.images?.map(image => (
                                        <div className="image" key={image.id}>
                                            <img src={image.url} key={image.id} alt=""></img>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h1 className="product-name">{product.name}</h1>
                        <span className="price">${product.price}</span>

                        <div className="product-options">
                            <div>
                                <InputQuantity quantity={quantity} setQuantity={setQuantity} />
                                <button className='link-squared' onClick={addToCart}>Add to cart</button>
                            </div>
                            <div>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <span className='asterisk'>*</span>
                <ProductsList products={productsList} />

            </div>
        </section>
    );
};

export default ProductDetail;

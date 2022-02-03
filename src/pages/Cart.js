import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { buyCart, deleteCartItem, getCartThunk } from 'redux/actions';
import 'styles/cart.css';

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [ price, setPrice ] = useState(0);

    useEffect(() => dispatch(getCartThunk()), [ dispatch ]);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => total += +item.product.price * item.quantity);
        setPrice(total);
    }, [ cart ])

    return (
        <section className='cart'>
            <div className="container">
                <h1>SHOPPING CART</h1>
                {
                    cart.length ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>item</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(cartItem => {
                                            return (
                                            <tr key={cartItem.id} className='cart-item'>
                                                <td className='item'>
                                                    <button onClick={() => dispatch(deleteCartItem(cartItem.id))}>
                                                        <i className="material-icons-sharp"> close </i>
                                                    </button>
                                                    <div className="product-image">
                                                        <img src={cartItem.product.images[0].url} alt="" />
                                                    </div>
                                                    <Link to={`/shop/${cartItem.product.id}`} className='product-name'>
                                                        {cartItem.product.name}
                                                    </Link>
                                                </td>
                                                <td className='quantity'>
                                                    <span>{cartItem.quantity}</span>
                                                </td>
                                                <td className='price'>
                                                    ${cartItem.product.price}
                                                </td>
                                            </tr>
                                        )})
                                    }
                                </tbody>
                            </table>
                            <div className='subtotal'>Subtotal <span className="price">${price}</span></div>
                            <button className="link-squared checkout-button" onClick={() => dispatch(buyCart())}>
                                Checkout
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="empty-message">You have nothing in your shopping cart.</p>
                            <Link to='/shop' className='link-squared'>Continue Shopping</Link>
                        </>
                    )
                }
            </div>
        </section>
    );
};

export default Cart;

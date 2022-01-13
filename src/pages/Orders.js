import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrdersThunk } from 'redux/actions';

import 'styles/orders.css';
import { convertDateFormat } from 'utils';

const Orders = () => {
    
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();

    useEffect(() => dispatch(getOrdersThunk()), [ dispatch ]);


    return (
        <section className='orders'>
            <div className="container">
                <h1>MY ORDERS</h1>
                {
                    orders.length ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>item</th>
                                        <th className='date'>date</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(order => {
                                            return (
                                            <tr key={order.id} className='order'>
                                                <td className='item'>
                                                    <div className="product-image">
                                                        <img src={order.product.images[0].url} alt="" />
                                                    </div>
                                                    <Link to={`/shop/${order.product.id}`} className='product-name'>
                                                        {order.product.name}
                                                    </Link>
                                                </td>
                                                <td className="date">{convertDateFormat(order.purchase_date)}</td>
                                                <td className='quantity'>
                                                    <span>{order.quantity}</span>
                                                </td>
                                                <td className='price'>
                                                    ${order.product.price}
                                                </td>
                                            </tr>
                                        )})
                                    }
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <>
                            <p className="empty-message">You haven't shop nothing</p>
                            <Link to='/shop' className='link-squared'>Go to shop</Link>
                        </>
                    )
                }
            </div>
        </section>
    );
};

export default Orders;

import React, {useState, useEffect} from 'react';
import {isAuthenticated, readAllOrders, readOrderStatusValues, updateOrderStatus} from '../api';
import moment from 'moment';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [statusValues, setStatusValues] = useState([]);

    const {user, token} = isAuthenticated();

    const initOrders = () => {
        readAllOrders(user._id, token).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
            }
        });
    };

    const initStatusValues = () => {
        readOrderStatusValues(user._id, token).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                setStatusValues(data);
            }
        });
    };

    useEffect(() => {
        initOrders();
        initStatusValues();
    }, []);

    const showNumberOfOrders = () => (
        <div>
            <h2>Current Number of Orders: {orders.length}</h2>
        </div>
    );

    const onChange = orderId => event => {
        updateOrderStatus(user._id, token, orderId, event.target.value).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                initOrders();
            }
        });
    };

    const showStatus = order => (
        <div>
            Status: {order.status}
            <select className='form-control' onChange={onChange(order._id)}>
                <option>Update Status</option>
                {statusValues.map((status, i) => (
                    <option key={i} value={status}>{status}</option>
                ))}
            </select>
        </div>
    );

    return (
        <div className='container'>
            {showNumberOfOrders()}
            {orders.map((order, i) => (
                <div key={i}>
                    <div className='form-control-plaintext'>Order #{order._id}</div>
                    <ul>
                        <li>{showStatus(order)}</li>
                        <li>Created {moment(order.createdAt).fromNow()}</li>
                        <li>Last updated {moment(order.updatedAt).fromNow()}</li>
                        <li>Address: {order.address}</li>
                        <li>User: {order.user ? (
                            <ul>
                                <li>ID: {order.user._id}</li>
                                <li>Name: {order.user.first_name} {order.user.last_name}</li>
                                <li>Email: {order.user.email}</li>
                            </ul>
                        ) : 'Unregistered User'}</li>
                        <li>Products: 
                            <ul>
                                {order.products.map((product, i) => (
                                    <li key={i}>
                                        <ul>
                                            <li>ID: {product._id}</li>
                                            <li>Name: {product.name}</li>
                                            <li>Quantity: {product.count}</li>
                                            <li>Price: ${product.price} per unit</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>Total Charged: ${order.total_price}</li>
                    </ul>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ManageOrders;
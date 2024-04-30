import { useState, useEffect } from 'react';
import MarkDone from './MarkDone'
export default function Fetch({ orders, setOrders }) {
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Checking for new orders...');
            fetchOrders();
        }, 100); // Adjust the interval time as needed (e.g., 5000 milliseconds = 5 seconds)

        return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
    }, [setOrders]);

    const fetchOrders = () => {
        fetch('http://127.0.0.1:5000/orders')
            .then(response => response.json())
            .then(data => setOrders(data.orders))
            .catch(error => console.error('Error fetching orders:', error));
    };

    if (!orders) {
        return <p>No Orders.</p>;
    } else {
        const orderKeys = Object.keys(orders);
        const drinks = orderKeys.map(orderId => {
            const { name, base, baseType, toppings, notes } = orders[orderId];
            return (
                <div className='order-item' key={orderId}>
                    <p className='order-name'>Name: {name}</p>
                    <p className='order-base'>Base: {base}</p>
                    <p className='order-baseType'>Base Type: {baseType}</p>
                    <div className='order-toppings'>
                        Toppings:
                        <ul>
                            {toppings.map((topping, index) => (
                                <li key={index}>{topping}</li>
                            ))}
                        </ul>
                    </div>
                    <p className='order-notes'>Notes: {notes}</p>
                </div>
            );
        });

        return <div className='order-list'>{drinks}</div>;
    }
}

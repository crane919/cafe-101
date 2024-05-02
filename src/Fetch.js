import { useState, useEffect } from 'react';
import MarkDone from './MarkDone'
export default function Fetch({ orders, setOrders }) {
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Checking for new orders...');
            fetchOrders();
        }, 500); // Adjust the interval time as needed (e.g., 5000 milliseconds = 5 seconds)

        return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
    }, [setOrders]);

    const fetchOrders = () => {
        fetch('http://127.0.0.1:5000/orders')
            .then(response => response.json())
            .then(data => setOrders(data.orders))
            .catch(error => console.error('Error fetching orders:', error));
    };

    if (!orders || Object.keys(orders) == 0) {
        return <p>No Orders.</p>;
    } else {
        const orderKeys = Object.keys(orders);
        const drinks = orderKeys.map(orderId => {
            const { name, base, baseType, stirIns, toppings, notes } = orders[orderId];
            return (
                <div className={`order-item${base === "Tea Latte" ? ' tea' : ' hot-chocolate'}`} key={orderId}>
                    <div className='order-body'>
                        <div className='order-name'><strong>{name}'s Order</strong></div>
                        <div className='two-columns'>
                            <div className='order-drink'>
                                <strong>Drink:</strong><br></br>
                                {baseType}
                            </div>
                            <div className='order-stir-ins'>
                                <strong>Stir-Ins:</strong>
                                <ul style={{padding:'0px', margin:'0', listStyleType: 'none'}}>
                                    {stirIns.map((stirIn, index) => (
                                        <li key={index}>{stirIn}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='order-toppings'>
                                <strong>Toppings:</strong>
                                <ul style={{padding:'0px', margin:'0', listStyleType: 'none'}}>
                                    {toppings.map((topping, index) => (
                                        <li key={index}>{topping}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    <p className='order-notes' style={{marginBottom: 0}}><strong>Notes:</strong><br></br>{notes}</p>
                    </div>
                    <MarkDone orderID={orderId}/>
                </div>
            );
        });

        return <div className='order-list'>{drinks}</div>;
    }
}

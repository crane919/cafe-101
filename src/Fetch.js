import { useState } from 'react'

export default function Fetch ({orders, setOrders}) {
    if (orders == null) {
        console.log('Getting Orders...')
        fetch('http://127.0.0.1:5000/orders').then(response=>response.json().then (j => setOrders(j.orders)))
        return <p>No Orders.</p>
    } else {
        fetch('http://127.0.0.1:5000/orders').then(response=>response.json().then (j => setOrders(j.orders)))
        // console.log(orders)
        const drinks = orders.map(({name, order})=> (
            <div className='order-item'>
                <p className='order-name'>Name: {name}</p>
                <p className='order-base'>Base: {order.base}</p>      
                <div className='order-toppings'>
                Toppings:
                    <ul>
                        {
                        order.toppings.map((topping) => (
                            <li>{topping}</li>
                        ))
                        }
                    </ul>
                
                </div>
            </div>
        ))
        return (
        <div className='order-list'>
            {drinks}
        </div>
    )}
    //let orders = JSON.parse()
    //console.log(orders)
}

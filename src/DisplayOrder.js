import { useState } from 'react'

export default function DisplayOrder ({order}){
    // Function to format the toppings/strir-ins
    function formatIngredients(stirIns, toppings) {
        const combinedList = [...order["stirIns"], ...order["toppings"]];
        return formatList(combinedList);
    }

    function formatList(list) { 
        return list.map((item, index) => {
        if (index === list.length - 1 && list.length > 1) {
            return `and ${item}`;
        } else {
            return item;
        }
        }).join(', ');
    }
    
    return (
        <div className='curr-drink'>
              {order.baseType && (order.stirIns.length > 0 || order.toppings.length > 0) && order.notes ? (
                <p>Your current order: {order.baseType} with {formatIngredients(order.stirIns, order.toppings)}. Notes: {order.notes}</p>
              ) : order.baseType && (order.stirIns.length > 0 || order.toppings.length > 0) ? (
                <p>Your current order: {order.baseType} with {formatIngredients(order.stirIns, order.toppings)}.</p>
              ) : order.baseType && order.notes ? (
                <p>Your current order: {order.baseType}. Notes: {order.notes}</p>
              ) : order.baseType ? (
                <p>Your current order: {order.baseType}.</p>
              ) : (
                <p>It's time to create your custom drink!</p>
              )}
            </div>
      
    )
}
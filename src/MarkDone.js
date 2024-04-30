import { useState } from 'react'

export default function MarkDone ({orderID}){
    const handleClickDelete = (evt) => {
        console.log('Marking order ', orderID, ' as done')
        if (orderID) {
        fetch('http://127.0.0.1:5000/delete-order', {
            method: 'POST',
            headers: {
            "Content-Type": 'application/json'
            },
            body: JSON.stringify(orderID)
            })  
        }
    }
    return (
        <button onClick={handleClickDelete}>
            Mark Order As Done
        </button>
      
    )
}

import { clear } from '@testing-library/user-event/dist/clear'
import { useState } from 'react'

export default function Submit ({ order, clearOrder}){
    console.log('Adding order to json')
    const handleClickAdd = (evt) => {
        if (order) {
        const bodyValue = {
            name: "OrderName",
            order: order
        }
        fetch('http://127.0.0.1:5000/add-order', {
            method: 'POST',
            headers: {
            "Content-Type": 'application/json'
            },
            body: JSON.stringify(bodyValue)
        })
        }
        clearOrder()
    }
    //clearOrder
    // const handleClickDelete = () => {
    //     deleteCurrentPic()
    // }
    // const handleChangeName = (evt) => {
    //     setName(evt.target.value)

    // }
    // const handleChangeUrl = (evt) => {
    //     setUrl(evt.target.value)
    // }
    return (
        <button onClick={handleClickAdd}>
            Submit this order!
        </button>
      
    )
}
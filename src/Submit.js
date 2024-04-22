import { useState } from 'react'

export default function Submit ({addOrder, order}){
    console.log('Adding order to json')
    const handleClickAdd = (evt) => {
        if (order) {
        //addOrder("OrderName", order)
        const bodyValue = {
            name: "OrderName",
            order: order
        }
        fetch('/add-order', {
            method: 'POST',
            headers: {
            "Content-Type": 'application/json'
            },
            body: JSON.stringify(bodyValue)
        })
        console.log("Testttt")
        }
    }
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
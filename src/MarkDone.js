import { useState } from 'react'

export default function MarkDone ({orderID}){
    // const deleteCurrentPic = () => {
    //     const newPics = []
    //     for (let i = 0; i < pics.length; i++) {
    //       if (i !== current) {
    //         newPics.push(pics[i])
    //       }
    //     }
    //     setPics(newPics)
    //     setCurrent(0)
    //     fetch('/delete-picture', {
    //         method: 'POST',
    //         headers: {
    //           "Content-Type": 'application/json'
    //         },
    //         body: JSON.stringify({picture: current})
    //       })
    //   }
    const handleClickDelete = (evt) => {
        console.log('Marking order as done')
        console.log(orderID)
    //     if (orderBody.name) {
    //     const bodyValue = {
    //         name: "OrderName",
    //         order: order
    //     }
    //     fetch('http://127.0.0.1:5000/delete-order', {
    //         method: 'POST',
    //         headers: {
    //         "Content-Type": 'application/json'
    //         },
    //         body: JSON.stringify(bodyValue)
    //     })
    //     }
    }
    return (
        <button onClick={handleClickDelete}>
            Mark Order As Done
        </button>
      
    )
}

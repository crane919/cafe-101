import { useState } from 'react'

export default function Selector ({onClick, text}){
    // const handleClickAdd = (evt) => {
    //     console.log("clickeeddd")
    // }
    return (
        <button onClick={onClick}>
            {text}
        </button>
      
    )
}
    

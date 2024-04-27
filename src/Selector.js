import { useState } from 'react'

export default function Selector ({onClick, text, isSelected}){
    // const handleClickAdd = (evt) => {
    //     console.log("clickeeddd")
    // }
    return (
        <button className={isSelected ? 'selected' : 'not-selected'} onClick={onClick}>
            {text}
        </button>
      
    )
}
    

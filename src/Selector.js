import { useState } from 'react'

export default function Selector ({onClick, text, isSelected}){
    return (
        <button className={isSelected ? 'selected' : 'not-selected'} onClick={onClick}>
            {text}
        </button>
      
    )
}
    

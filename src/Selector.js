import { useState } from 'react'

export default function Selector ({onClick, text}){
    return (
        <button onClick={onClick}>
            {text}
        </button>
      
    )
}
    

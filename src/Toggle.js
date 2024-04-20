import { useState } from 'react'

export default function Toggle ({onClick, text}){
    return (
        <button onClick={onClick}>
            {text}
        </button>
      
    )
}
    
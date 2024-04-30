import { useState } from 'react';

export default function Submit({ order, clearOrder }) {
  const handleClickAdd = () => {
    if (order) {
      const bodyValue = {
        [Date.now()]: order  // Dynamically setting the key as current timestamp
      };
      fetch('http://127.0.0.1:5000/add-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyValue)
      });
    }
    clearOrder();
  };

  return (
    <button onClick={handleClickAdd}>
      Submit this order!
    </button>
  );
}

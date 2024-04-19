import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import Selector from './Selector'

    
// App component
function App() {

  // Define drink orders
  const drink_order = {
    "Base": "Hot Choccy",
    "Toppings": ["Whipped Cream"],
    "Notes": "NA"
  };
  const [order, updateOrder] = useState(drink_order)
  
  // Define drink names
  const drink1 = "Chocolate";
  const drink2 = "Tea Latte";

  return (
    <div className="App">
      <header className="App-header">
        <p>Cafe 101</p>
      </header>
      <div>
        <p>
          Welcome to the Cafe 101 website: Your current drink order is {drink_order["Base"]} with {drink_order["Toppings"]}. Special notes include: {drink_order["Notes"]}.
        </p>
        <Selector onClick={updateBase} text={drink1} />
        <Selector onClick={updateBase} text={drink2} />
      </div>
    </div>
  );
}

export default App;

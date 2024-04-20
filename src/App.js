import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import Selector from './Selector'
import Toggle from './Toggle'

// App component
function App() {

  // Define drink orders
  const drink_order = {
    "base": "Hot Choccy",
    "toppings": [],
    "notes": "NA"
  };
  const [order, updateOrder] = useState(drink_order)
  
  // Define drink names
  const drink1 = "Hot Chocolate";
  const drink2 = "Tea Latte";

  // Function to update the base
  function updateBase(newBase){
    updateOrder({ ...order, base: newBase });
  };

  // Function to update the toppings
  function updateToppings(topping) {
    // If the topping is already in the list, remove it
    if (order["toppings"].includes(topping)) {
      updateOrder({ ...order, toppings: order["toppings"].filter(item => item !== topping) });
    } else {
      // If the topping is not in the list, add it
      updateOrder({ ...order, toppings: [...order["toppings"], topping] });
    }
  }
  
    
  return (
    <div className="App">
      <header className="App-header">
        <p>Cafe 101</p>
      </header>
      <div>
        <p>
          Welcome to the Cafe 101 website: Your current drink order is {order["base"]} with {order["toppings"]}. Special notes include: {order["notes"]}.
        </p>
        {/* Pass a function reference to onClick */}
        {console.log("setting up buttons")}
        <Selector onClick={() => updateBase(drink1)} text={drink1} />
        <Selector onClick={() => updateBase(drink2)} text={drink2} />
        <Toggle onClick={() => updateToppings("Raspberry, ")} text={"Raspberry"} />
        <Toggle onClick={() => updateToppings("Whipped Cream, ")} text={"Whipped Cream"} />
        <Toggle onClick={() => updateToppings("Chocolate Sauce, ")} text={"Chocolate Sauce"} />
        <button> Submit </button>

      </div>
    </div>
  );
}

export default App;

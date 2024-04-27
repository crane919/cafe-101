import logo from './logo.svg';
import './App.css';

import { useState } from 'react'
import Selector from './Selector'
import Toggle from './Toggle'
import Submit from './Submit';

// App component
function App() {

  // Define drink orders
  const drink_order = {
    "base": "Hot Choccy",
    "toppings": ["Sprinkles, "],
    "notes": "NA"
  };
  const [order, updateOrder] = useState(drink_order)
  const [orderList, setOrderList] = useState(null)

  const drink_type = {
    "hotChoccy": [" ", "Heavy Hot Chocccy", "Hot Choccy"],
    "teaLatte": ["Matcha Latte", "Chai Latte", "Londonfog", "Thai Latte", "Black Raspberry Latte"]
  }
  
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
  
  // const drink_type () => if statment
  // function typeSelect(drinkType){
  // if drink type is hot chocolate{}
  // return hot choccy
  // else return tea
  // }
  


  // Some flask code
  const addOrder = (drink1, order) => {
    const newOrds = [...orderList, {name: drink1, order:order}]
    setOrderList(newOrds)
  }    
  return (
    <div className="App">
      <header className="App-header">
        <p>Cafe 101</p>
      </header>
      <div>
        
        <div className="layout">
          <div className='left-panel'>
            <p>
            Welcome to the Cafe 101 website: Your current drink order is {order["base"]} with {order["toppings"]}. Special notes include: {order["notes"]}.
            </p>
            <label>
              Name: <input name="name"/>
            </label>
            <div className='row'>
              <Selector onClick={() => updateBase("Hot Chocolate")} text={"Hot Chocolate"} />
              <Selector onClick={() => updateBase("Tea Latte")} text={"Tea Latte"} />
            </div>

            <select name="drink">
              <option value="NA"> </option>
              <option value="heavy-hot-choccy">Heavy Hot Choccy</option>
              <option value="hot-choccy">Hot Choccy</option>
            </select>
            <div className='row'>
              <Toggle onClick={() => updateToppings("Raspberry, ")} text={"Raspberry"} />
              <Toggle onClick={() => updateToppings("Whipped Cream, ")} text={"Whipped Cream"} />
              <Toggle onClick={() => updateToppings("Chocolate Sauce, ")} text={"Chocolate Sauce"} />
            </div>
            <label>
              Special Notes: <textarea />
            </label>      
           
            <Submit addOrder={addOrder} order={order}/>
          </div>
          <div className='right-panel'>

          </div>


        </div>
        

      </div>
    </div>
  );
}

export default App;

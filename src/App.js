import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react'
import Selector from './Selector'
import Toggle from './Toggle'
import Submit from './Submit';

// App component
function App() {

  // Define drink orders
  const drink_order = {
    "name": "",
    "base": "",
    "toppings": [],
    "notes": ""
  };

  const drinkList = {
    "": [],
    "Hot Chocolate": ["Heavy Hot Chocccy", "Hot Choccy"],
    "Tea Latte": ["Matcha Latte", "Chai Latte", "Londonfog", "Thai Latte", "Black Raspberry Latte"]
  }
  const toppingList = ["Strawberry Puree", "Raspberry Extract", "Peppermint Extract",
    "Caramel Syrup", "Brown Sugar Syrup", "Lavender Syrup", "Rose Syrup",
    "Chocolate Sauce", "Caramel Sauce", "Whipped Cream", "Marshmallows", "Rose Petals",
    "Vanilla Cold Foam"]

  // States
  const [order, updateOrder] = useState(drink_order)
  const [dropDown, setDropDown] = useState([]);
  
  //Helper functions to updates states

  // Function to update name
  function updateName(newName){
    updateOrder({ ...order, name: newName });
  };

  // Functions to update the base
  function updateBase(newBase){
    updateOrder({ ...order, base: newBase });
  };

  useEffect(() => {
    setDropDown(drinkList[order["base"]].map((l) => (
      <option key={l} value={l}>{l}</option>
    )));
  }, [order["base"]]);

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
  
  const toppings = toppingList.map((name) => (
    <Selector onClick={() => updateToppings(name)} text={name} />
  ));

  // Function to update name
  function updateNotes(newNotes){
    updateOrder({ ...order, notes: newNotes });
  };


  // Clear Everything
  function clearOrder(){
    updateOrder({
      "name": "",
      "base": "Hot Chocolate",
      "toppings": [],
      "notes": ""
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Cafe 101</p>
      </header>
      <div>
        
        <div className="layout">
          <div className='left-panel'>

            <p> Welcome to the Cafe 101 website: Your current drink order is {order["base"]} with {order["toppings"]}. Special notes include: {order["notes"]}.</p>
            <label>
              Name: <input name="name" value={order.name} onChange={(e) => updateName(e.target.value)} />
            </label>
            <p> Pick you drink type!</p>
            <div className='row'>
              <Selector onClick={() => updateBase("Hot Chocolate")} text={"Hot Chocolate"} isSelected={drink_order['base'] === 'Hot Chocolate'}/>
              <Selector onClick={() => updateBase("Tea Latte")} text={"Tea Latte"} isSelected={drink_order['base'] === 'Tea Latte'} />
            </div>

            {order.base && (
              <>
                <p>Select your drink in the dropdown:</p>
                <select name="drink">
                  {dropDown} 
                </select>
                <div className='row'>
                  {toppings}
                </div>
                <label>
                  Special Notes: <textarea notes="notes" value={order.notes} onChange={(e) => updateNotes(e.target.value)}/>
                </label>   
                <Submit order={order} clearOrder={clearOrder}/>
              </>
            )}
            
          </div>
          <div className='right-panel'>

          </div>


        </div>
        

      </div>
    </div>
  );
}

export default App;

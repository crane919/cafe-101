import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react'
import Selector from './Selector'
import Toggle from './Toggle'
import Submit from './Submit';
import Fetch from './Fetch';

// App component
function App() {

  // Define drink orders
  const drinkOrder = {
    "name": "",
    "base": "",
    "baseType": "",
    "milk": "",
    "stirIns": [],
    "toppings": [],
    "notes": ""
  };

  const drinkList = {
    "": [],
    "Hot Chocolate": ["","Heavy Hot Chocccy", "Hot Choccy"],
    "Tea Latte": ["","Matcha Latte", "Chai Latte", "London Fog", "Thai Latte", "Black Raspberry Latte"]
  }
  const stirInList = ["Strawberry Puree", "Raspberry Extract", "Peppermint Extract",
    "Caramel Syrup", "Brown Sugar Syrup", "Lavender Syrup", "Rose Syrup"]
  
  const toppingList = ["Chocolate Sauce", "Caramel Sauce", "Whipped Cream", 
  "Marshmallows", "Rose Petals", "Lavender Petals", "Vanilla Cold Foam"]

  // States
  const [order, updateOrder] = useState(drinkOrder)
  const [dropDown, setDropDown] = useState([]);
  const [orders, setOrders] = useState(null);
     
  //Helper functions to updates states

  // Function to update name
  function updateName(newName){
    updateOrder({ ...order, name: newName });
  };

  // Functions to update the base
  function updateBase(newBase){
    updateOrder({ ...order, base: newBase });
  };

  // Functions to update milk type
  function updateMilk(newMilk){
    updateOrder({ ...order, milk: newMilk });
  };

  // Function to update the order
  function updateBaseType(newBaseType){
    updateOrder({ ...order, baseType: newBaseType });
  };

  useEffect(() => {
    setDropDown(drinkList[order["base"]].map((baseType) => (
      <option key={baseType} onClick={() => updateBaseType(baseType)} value={baseType}>{baseType}</option>
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

  // Function to update the stirIns
  function updateStirIns(stirIns) {
    // If the stir-in is already in the list, remove it
    if (order["stirIns"].includes(stirIns)) {
      updateOrder({ ...order, stirIns: order["stirIns"].filter(item => item !== stirIns) });
    } else {
      // If the stir-in is not in the list, add it
      updateOrder({ ...order, stirIns: [...order["stirIns"], stirIns] });
    }
  }

  // // Function to format the toppings/strir-ins
  function formatIngredients(stirIns, toppings) {
    const combinedList = [...order["stirIns"], ...order["toppings"]];
    return formatList(combinedList);
  }

  function formatList(list) { 
    return list.map((item, index) => {
      if (index === list.length - 1 && list.length > 1) {
        return `and ${item}`;
      } else {
        return item;
      }
    }).join(', ');
  }
  
  const toppings = toppingList.map((name) => (
    <Selector onClick={() => updateToppings(name)} text={name} isSelected={order["toppings"].includes(name)}/>
  ));

  const stirIns = stirInList.map((name) => (
    <Selector onClick={() => updateStirIns(name)} text={name} isSelected={order["stirIns"].includes(name)}/>
  ));

  // Function to update name
  function updateNotes(newNotes){
    updateOrder({ ...order, notes: newNotes });
  };


  // Clear Everything
  function clearOrder(){
    updateOrder(drinkOrder)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Cafe 101</p>
      </header>
      <div>
        
        <div className="layout">
          <div className='left-panel'>
            {order.name ? (
              <h3>Hello, {order.name}!</h3>
            ) : (
                <h3>Welcome to the Cafe 101 website! Please enter your name:</h3>
            )}

            <div className='curr-drink'>
              {order.baseType && (order.stirIns.length > 0 || order.toppings.length > 0) && order.notes ? (
                <p>Your current order: {order.baseType} with {formatIngredients(order.stirIns, order.toppings)}. Notes: {order.notes}</p>
              ) : order.baseType && (order.stirIns.length > 0 || order.toppings.length > 0) ? (
                <p>Your current order: {order.baseType} with {formatIngredients(order.stirIns, order.toppings)}.</p>
              ) : order.baseType && order.notes ? (
                <p>Your current order: {order.baseType}. Notes: {order.notes}</p>
              ) : order.baseType ? (
                <p>Your current order: {order.baseType}.</p>
              ) : (
                <p>It's time to create your custom drink!</p>
              )}
            </div>

            <label>
              Name: <input name="name" value={order.name} onChange={(e) => updateName(e.target.value)} />
            </label>

            {order.name && (
              <>
                {/* <p> Choose your milk!</p>
                <div className='row'>
                  <Selector onClick={() => updateMilk("Cow")} text={"Cow"} isSelected={order['milk'] === 'Cow'}/>
                  <Selector onClick={() => updateMilk("Oat")} text={"Oat"} isSelected={order['milk'] === 'Oat'} />
                </div>        */}
                <p> Pick your drink type!</p>
                <div className='row'>
                  <Selector onClick={() => updateBase("Hot Chocolate")} text={"Hot Chocolate"} isSelected={order['base'] === 'Hot Chocolate'}/>
                  <Selector onClick={() => updateBase("Tea Latte")} text={"Tea Latte"} isSelected={order['base'] === 'Tea Latte'} />
                </div>
                       
              </>
            )}
           
            {order.base && (
              <>
                <p>Select your drink in the dropdown:</p>
                <select name="drink">
                  {dropDown} 
                </select> 
              </>)}

            {order.baseType && (
              <>
                <p>Stir-ins:</p>
                <div className='row'>
                  {stirIns}
                </div>
                <p>Toppings:</p>
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
            <h3>Current Orders:</h3>
            <div className='orders'>
              <Fetch orders={orders} setOrders={setOrders}/>
            </div>
          </div>


        </div>
        

      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css'

function App() {

  // Assignment to constant variable in react is not possible , so we use let

  let [counter,setCounter] = useState(15)

  // ye hook state ko change krne ke liye responsible hai(iska matlab yeh nhi hai ki value update krdi) , change ko propogate kiya jata hai UI ke andar(DOM ke andar)

  // useState se humein do cheezein  return mein milti hai array ke format mein 

  // let counter = 5

  const addValue = () => {
    if(counter<20){
      counter = counter + 1
    } 
    setCounter(counter)
    console.log("clicked",counter);
  }

  const removeValue = () => {
    if(counter>0){
      counter = counter - 1
    }
    setCounter(counter)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <br/>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <button
    onClick = {removeValue}>remove Value {counter}</button>
    <p>footer : {counter}</p>
    </>
  )
}


export default App

/* difficulty aa rhi UI updation
 ek button pe click krne se 5 jagah update honi chahiye wo kaam krta hai react */

 /* UI ke andar kab kya cheez update hogi ye hum decide nhi ye react decide krega */

 /* fun fact : React react krti hai variables ke updation pe */

 /*react ki core library mein
 facebook -> react -> src -> Reacthooks.js*/


/* jaise hi set counter mein value aati hai react andar se trigger krta hai , automatically DOM analyse hota hai ki kaha kaha pr value hai jo mujhe update krni hai*/
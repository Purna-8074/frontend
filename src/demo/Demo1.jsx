import React, { useState } from 'react'


export default function Demo1()
 {
    //count is a state variable and setCount is a method to modify the count value 
    const [count,setCount] = useState(0)

     function increment(){

        //alert("increment")
        setCount(count+1);
     }

     function decrement(){

        //alert("decremnet")
        setCount(count-1);
     }


  return (
    <div>
        
        <h1>COUNTER APP</h1>

        count = {count}   <br/>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    
  )
}

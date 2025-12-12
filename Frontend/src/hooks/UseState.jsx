import React,{useState}from 'react'

const UseState = () => {
    const[count, setCount] = useState(0); //for number
    const[value, setValue] = useState(""); //for string

    const handledecrement = () => {     //way 1
        setCount(count - 1);
    }

    const handleincrement = () => {    
        setCount(count + 1);
    }
  return (
    <div>
       <h1>String Value:{value}</h1> 
       <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='Enter the value:'/> {/*String*/}
         <br/><br/>
         <br/><br/>
      <h1>Count Value:{count}</h1>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>           {/*way 2 */}
        <button onClick={handleincrement}>Increment</button>
    </div>
  )
}

export default UseState

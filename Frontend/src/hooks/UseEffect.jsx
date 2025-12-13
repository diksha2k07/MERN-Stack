import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    const [count,setCount]= useState(0);
    const [value,setValue]= useState(0);

  useEffect(() => {
    console.log("UseEffect component mounted")  //way 1
  },[count])
 // [] is considered as dependencies where if we pass empty array it will run only once when component is mounted 
 // if we pass any value it will run every time the value changes

  return (
    <>
    <div>UseEffect</div>
    <h2>Count: {count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment </button>
    <h2>Value: {value}</h2>
    <button onClick={()=>setValue(value+1)}>Increment</button>
    </>
  )
}

export default UseEffect

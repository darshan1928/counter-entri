import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const handleIncrement=()=>{
    setCount(count+1)
  }
  const handleDecrement=()=>{
    setCount(count-1)
  }
  const handleClear=()=>{
    setCount(0)
  }
  return (
    <div style={{width:'100%',height:'100vh',backgroundColor:'black',color:'white',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
     <h1 >{count}</h1>
     <div>
      <button style={{margin:'10px',padding:'10px',borderRadius:'8px'}} onClick={handleIncrement}>Increment</button>
      <button style={{margin:'10px',padding:'10px',borderRadius:'8px'}} onClick={handleDecrement}>Decrement</button>
      <button  style={{margin:'10px',padding:'10px',borderRadius:'8px'}} onClick={handleClear}>Reset</button>
      </div>
      
      </div>
  )
}

import React, { useState } from 'react'

const App = () => {
  let[count,setcount]=useState(0)
  return (
    <div>
      <h1>App</h1>
      <h2>count is - {count}</h2>
      <button onClick={()=>{setcount(count + 1)}}>INCREMENT</button>
      <button onClick={()=>{setcount(count - 1 )}}>DECREMENT</button>
      <button onClick={()=>{setcount(count + 5 )}}>JUMP BY 5</button>
    </div>
  )
}

export default App



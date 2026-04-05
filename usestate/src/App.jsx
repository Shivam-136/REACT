import React, { useState } from 'react'

const App = () => {
  let[count,setcount]=useState(0)
  return (
    <div>
      <h1>App</h1>
      <h1>count is - {count}</h1>
      <button onClick={()=>{setcount
        (count + 1)
      }}>INCREMENT</button>
    </div>
  )
}

export default App



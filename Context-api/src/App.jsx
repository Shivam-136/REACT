import React from 'react'
import { useState } from 'react'
const [Value, setValue] = useState(Value)

const App = () => {

  return (
    <div>
      <h1 onClick={()=>{
    Value+1
      }} >count is{} </h1>
    </div>
  )
}

export default App

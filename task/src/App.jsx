import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

const App = () => {

  let val1 = 10;
  let val2 = 20;
  let val3 = 30;

  return (
    <div style={{background:'color'}}>
      <h1>Hello</h1>
      <Comp1 val1={val1} />
      <Comp2 val2={val2} />
      <Comp3 val3={val3} />
    </div>
  )
}

export default App

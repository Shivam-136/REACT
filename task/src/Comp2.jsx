import React from 'react'
import Chid2 from './Chid2'

const Comp2 = ({val2}) => {
  return (
    <div style={{display:'flex'}}>
      <h1>Component1,value-{val2}</h1>
      <Chid2/>
    </div>
  )
}

export default Comp2

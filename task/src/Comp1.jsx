import React from 'react'
import Chid1 from './Chid1'

const Comp1 = ({val1}) => {
  return (
    <div style={{display:'flex'}}>
      <h1>Component1,value-{val1}</h1>
      <Chid1/>
    </div>
  )
}

export default Comp1

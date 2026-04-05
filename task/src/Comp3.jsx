import React from 'react'
import Chid3 from './Chid3'

const Comp3 = ({val3}) => {
  return (
    <div style={{display:'flex'}}>
      <h1>Component1,value-{val3}</h1>
      <Chid3/>
    </div>
  )
}

export default Comp3

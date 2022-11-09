import React from 'react'
import logo from './usain.png';

 function Usain() {
  return (
    <div>
     <h1> Fastest Runner </h1>
     <img src={logo} height="250" width="auto"/>
     <h3>At the record-winning event,<br></br> Usain Bolt's average ground speed was 37.58km/h,<br></br> whilst reaching a top speed of 44.72km/h in the 60-80m stretch – numbers fitting for the world's fastest man.</h3>
    </div>
  )
}
export default Usain;
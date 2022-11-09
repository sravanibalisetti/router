import React from 'react'
import { Router } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

 function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <h1>WELCOME</h1>

      <button onClick={()=>navigate("/Jhansi")}>click</button>
 
    </div>
  )
}
export default Home;

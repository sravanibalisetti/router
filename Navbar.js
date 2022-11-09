import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';
 function Navbar() {
  return (
    <div>
            
        <center>
            
      <li>
        <Link to="/" > Home</Link> 
      </li>
       <li>
       <Link to="/Jhansi">Jhansi</Link>
       </li>
       <li>
       <Link to="/Sindhu">  Sindhu</Link>
       </li>
       <li>
        <Link to="/Usain"> Usain</Link>
       </li>
       </center>
      
    </div>
  )
}                          
export default Navbar;
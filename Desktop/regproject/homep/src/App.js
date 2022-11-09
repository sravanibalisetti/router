import './App.css';
import Login from './Login'
import Register  from './Register';
import {useState} from "react"

function App()
  const [currentForm,setCurrentForm]=useState("Login");
  return (
   <>
     <div>

{
  currentForm==="Login"?<div><Login/><center><button onClick={()=>(setCurrentForm("Register"))}>Register</button></center></div>:<Register/>
}
<div><button onClick={()=>(setCurrentForm("Login"))}>Login</button></div>
</div>
   </>
  );


export default App;

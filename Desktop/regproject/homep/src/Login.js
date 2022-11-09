import React from "react";
import './Form.css'
import  { useState} from "react";
export const Login = ()=>{
    //usestate syntax
    const [data, setData] = useState({
        gmail:'',
        password:'',
       });
    const {gmail,password} =data;
 
    const changeHandler =(e)=>{
        e.preventDefault();
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
        localStorage.setItem('userdeatils',JSON.stringify(data));
        var obj=localStorage.getItem('userdeatils')
        var log=JSON.parse(obj)
    }
    // if( gmail.length<=10){
    //     alert("gmail must be atleast 10 characters");
    // }
    // else if
    //     ( pass!== confirmpassword){
    
    //     alert("password should be match");
    // }
    // else {
    //     console.log( data)
    // }
    
    return(
    <>
    <center>
        <div>
        <form id="lform" onSubmit = {submitHandler}>
            <br></br> 
        <label >gmail</label>

        <input value={gmail} onChange ={ changeHandler} type="email" id="gmail" name="gmail"/>
        <br></br>
        <label >password</label>
        <input value={password} onChange ={changeHandler} type="password"  id="password" name="password"/>
        <br></br>
       <input type="submit" value="submit"/>
      
        
        </form>
      
        </div>
        </center>
        </>
        
    )
    };
    export default Login;
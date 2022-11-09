import React from "react";
import  { useState} from "react";
export const Register = ()=>{
    //usestate syntax
    const [firstname, setFirstname] = useState(' ');
    const [lastname, setLastname] = useState(' ');
    const [empid, setEmpid] = useState(' ');
    const [gmail, setGmail] = useState(' ');
    const [pass, setPass] = useState(' ');
   const handleSubmit =(e)=>{
      e.preventDefault();

      const  obj=[{name:firstname,
        lname:lastname,
            id:empid, 
            mail:gmail,
            pass:pass
        }]
        console.log(obj);
        localStorage.setItem('userdeatils',JSON.stringify(obj));
        var log=localStorage.getItem('userdeatils')
        var res=JSON.parse(log)
        console.log(res,'result')
        if(res)
{
res.push({firstname:firstname,lastname:lastname,empid:empid,gmail:gmail});
localStorage.setItem("userdetails",JSON.stringify(res));

}
else{
var a = [];
a.push({firstname:firstname,lastname:lastname,empid:empid,gmail:gmail});
localStorage.setItem("userdetails",JSON.stringify(a));
}
    }
    return(
    <>
    <center>
        <form id="Rform" onSubmit = {handleSubmit}>
            <br></br>
        
       <label >firstname</label>
        <input value={firstname} onChange ={(e)=>setFirstname(e.target.value)}type="firstname" id="firstname" name="firstname"  />
        
        <br></br>
       <label>lastname</label>
        <input value={lastname} onChange ={(e)=>setLastname(e.target.value)}type="lastname" id="lastname" name="lastname"/>
        <br></br>
       <label>empid</label>
        <input value={empid} onChange ={(e)=>setEmpid(e.target.value)}type="empid"/>
        <br></br>
       <label>gmail</label>
        <input value={gmail} onChange ={(e)=>setGmail(e.target.value)}type="email" id="gmail" name="gmail"/>
        <br></br>
       <label>password</label>
        <input value={pass} onChange ={(e)=>setPass(e.target.value)}type="password"  id="password" name="password"/>
        <br></br>
        <input type="submit" value=" SUBMIT"/>
        </form>
        </center>
        </>
 )
    };
export default Register;

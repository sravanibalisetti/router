import React from "react";
function onc(){
    const [name,setName]=react.useState(' ');
    const handiler =e=>{
        setName (e.target.value)
        console.log(name)
    }
    return(
        <>
    <form>
        <input value="name" onChange={(e)=>setName(e.target.value)} type="text" id="gmail"/> 
    </form>

    </>
    )
}
export default onc;

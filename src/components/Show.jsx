import { useState } from "react";

const Show=()=>{
    const[show,setshow]=useState(false )
    return(
        <>
        <button onClick={()=>setshow(!show)}>{show?"hide":"show"}</button>
        {show && (<h1>user password</h1>)}
        </>
    )
}
export default Show;
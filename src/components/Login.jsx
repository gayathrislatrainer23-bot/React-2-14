import { useEffect, useState } from "react";
import  axios from 'axios'
const Login =()=>{
const [name, SetName] = useState('')
const [password, SetPassword] = useState('')
const handleLogin = ()=>{
let userData ={
name : name,
password: password
}
// https://jsonplaceholder.typicode.com/posts
// useEffect(()=>{
// GET
    axios.post('https://jsonplaceholder.typicode.com/posts', userData)
         .then((res)=>{
       console.log(res.data)
         })
   .catch((err)=>{
           console.log(err)
   })
// },[])

}

    return(
        <>
        <input type="name" value={name} onChange={(e)=>SetName(e.target.value)}/>
        <input type="password"  value={password} onChange={(e)=>SetPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}
export default Login;
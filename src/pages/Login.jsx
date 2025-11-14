import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () =>{
     const [email,setEmail]=useState('')
     const [username,setUsername]=useState('')
  
     const navigate = useNavigate()
    const handleSubmit = (e)=>{
     e.preventDefault()

     if(email === "admin@gmail.com"){

         navigate(`/profile/${username}`)
     }else{
        navigate("/home")
     }

    }
    return(
        <div className="login">
            <h1>Login</h1>
<form  onSubmit={handleSubmit}>
    <input type="text" value={username}  placeholder="enter your name" onChange={(e)=>{setUsername(e.target.value)}} />
    <input type="email" value={email}  placeholder="enter your email" onChange={(e)=>{setEmail(e.target.value)}} />
    <input type="password" placeholder="enter your password"  />
      <button type="submit">Submit</button>
      <button type="reset">reset</button>
</form>
        </div>
    )
}
export default Login
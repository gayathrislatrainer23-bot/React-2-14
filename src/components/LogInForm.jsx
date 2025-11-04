import { useState } from "react";

const LogInForm =()=>{

// let isLogIn = true;
const [isLogIn, SetIsLogIn] = useState(false)

    return(
        <>
        <button onClick={()=>SetIsLogIn(!isLogIn)}>{isLogIn ? "Logout" : "LogIN" }</button>
        {/* <button>LogIn</button>
        <button>LogOut</button> */}
        {isLogIn ? "welcome to website" : "Your not Login"}
        </>
    )
}
export default LogInForm;
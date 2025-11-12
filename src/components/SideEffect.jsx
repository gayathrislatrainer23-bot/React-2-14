import { useEffect, useState } from "react";

const SideEffect =() =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

useEffect(()=>{
    console.log(" I run every render")
})

useEffect(()=>{
    console.log(" I run only inital render")
},[])

useEffect(()=>{
    console.log(" I run when state/props change and  inital render")
    if(name === "admin"){
        alert("you are an admin , welcome")
    }else{
        alert(`welcome ${name}`)
    }
},[name])
    return(
        <div>
            {name}
<button onClick={()=>setName("admin")}>change name</button>
<button onClick={()=>setName("Renu")}>change name to user</button>
<button onClick={()=>setEmail(`${name}@gmail.com`)}>change email</button>
            {email}
        </div>
    )
}

export default SideEffect;
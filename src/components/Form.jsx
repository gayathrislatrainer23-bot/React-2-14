import { useState } from "react";

const Form =() =>{
    const [name,setName] =useState('')
    const handleSubmit =(e) =>{
       e.preventDefault()
       // preventing refresh/ reload
       alert(`Name ${name}`)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="Enter yoor name" value ={name}
             onChange={(e)=>{setName(e.target.value)}} />
            <button type="submit">Submit</button>
        </form>

        </>
    )

}
export default Form;

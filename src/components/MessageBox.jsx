import { useReducer } from "react"
let initialvalue ={msg: ''}
const reducer =(state,actions) =>{
    switch(actions.type){
        case "greetings":
            return { msg : "welcome"}
    
        case "stop":
            return { msg : "pls wait"}
    
    }
}



const MessageBox = ()=>{
    const [state , dispatch]=useReducer(reducer, initialvalue)

    return(
        <div className="message">
<p>{state.msg}</p>
<button onClick={()=> dispatch({type : 'stop'})}>stop</button>
<button onClick={()=> dispatch({type : 'greetings'})}>greetings</button>
<button onClick={()=> dispatch({type : 'stop'})}>stop</button>
        </div>
    )
}
export default MessageBox
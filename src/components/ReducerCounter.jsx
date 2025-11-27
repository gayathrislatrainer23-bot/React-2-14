import { useReducer } from "react";
    let initalState ={count:0}

const reducer =(state,action) =>{
switch(action.type){
    case 'increment':
        return {count: state.count +1}
        
    case 'decrement':
         return {count: state.count -1}
        default:
            return state

}


}

const ReducerCounter = ()=>{
    const [state, dispatch]  = useReducer(reducer , initalState)

    return(
        <>
{state.count}
   <button onClick={()=>dispatch({type:"increment"})}>+</button>
   <button>-</button>
        </>
    )
}
export default ReducerCounter;
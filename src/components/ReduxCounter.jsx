import { useDispatch, useSelector } from "react-redux"
import { increment } from "../redux/counterSlice"

const ReduxCounter = ()=>{
const count = useSelector((state)=> state.counter.value)
    const dispatch  = useDispatch()
const handleIncrement =()=>{

    dispatch(increment())
}
    return(
        <div className="ReduxCounter">
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}
export default ReduxCounter
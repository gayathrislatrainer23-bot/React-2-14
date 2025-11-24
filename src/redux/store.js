import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

const store = configureStore(
{
    reducer:{
        counter: counterReducer,
        // todo: todoReducer,
        // msg : messageRouter,

    }
}
)
export default store;
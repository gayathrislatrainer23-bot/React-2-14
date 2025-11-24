import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value : 0
    },
    reducers:{
    increment: (state,actions)=>{
        //  state.value = state.value+1
         state.value +=1
    }
    }
})

export default counterSlice.reducer
export const {increment}   = counterSlice.actions
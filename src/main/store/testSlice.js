import { createSlice } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import {clear} from './actions'


export const testSlice = createSlice({
    name: "test",
    initialState: {},
    reducers: {},
    // extraReducers(builder){
    //     builder.addCase(clear, (state) => {
    //        return { ...state, todos: []}
    //     });
    // }
})


export default testSlice.reducer

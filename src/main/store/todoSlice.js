import { createSlice, nanoid } from "@reduxjs/toolkit";
import {clear} from '../store/actions'

const initialObj  = {
    todos: [{id: 1, text: 'ONE'}]
}
export const todoSlice = createSlice({
    name: "todo",
    initialState: initialObj,
    reducers: {
        add: (state,action) => {
            state.todos.push({id: nanoid(), text: action.payload});
        },
        remove: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    },
    
})


export const {add,remove} = todoSlice.actions
export default todoSlice.reducer

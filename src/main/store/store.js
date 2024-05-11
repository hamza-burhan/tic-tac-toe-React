import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import testSlice from "./testSlice";



  

export const store = configureStore({
    reducer: {
        posts: todoSlice,
        users: testSlice,
      },
})
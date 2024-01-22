import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import blogReducer from "../features/blogSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})

export default store;
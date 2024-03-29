import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "",
    loading: false,
    error: false,
    token: "",
    image:"",
    _id:"",
    bio:"",
    email:"",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false
            state.user = payload.user.username
            state.token = payload.token
            state.image = payload.user.image
            state._id = payload.user._id
            state.bio = payload.user.bio
            state.email = payload.user.email
        },
        registerSuccess: (state, { payload }) => {
            state.loading = false
            state.user = payload.data.username
            state.token = payload.token
            state.image = payload.data.image
            state._id = payload.data._id
            state.bio = payload.data.bio
            state.email = payload.data.email
        },
        logoutSuccess: (state) => {
            state.user = ""
            state.loading = false
            state.token = ""
            state.image = ""
            state._id = ""
        },
        fetchFail: (state) => {
            state.loading = false
            state.error = true
        },
    }
});

export const { fetchStart, loginSuccess, registerSuccess, logoutSuccess, fetchFail } = authSlice.actions

export default authSlice.reducer
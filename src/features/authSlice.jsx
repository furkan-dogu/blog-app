import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "",
    loading: false,
    error: false,
    token: "",
    image:"",
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
        },
        registerSuccess: (state, { payload }) => {
            state.loading = false
            state.user = payload.data.username
            state.token = payload.token
            state.image = payload.data.image
        },
        logoutSuccess: (state) => {
            state.user = ""
            state.loading = false
            state.token = ""
            state.image = ""
        },
        fetchFail: (state) => {
            state.loading = false
            state.error = true
        },
    }
});

export const { fetchStart, loginSuccess, registerSuccess, logoutSuccess, fetchFail } = authSlice.actions

export default authSlice.reducer
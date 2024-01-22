import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs: [],
    loading: false,
    error: false,
    detail: [],
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
        state.error = false;
        state.loading = true;
    },
    fetchFail: (state) => {
        state.loading = false;
        state.error = true;
    },
    getBlogsSuccess: (state, {payload}) => {
        state.blogs = payload.data
        state.loading = false;
        state.error = false;
    },
    getDetailBlogsSuccess: (state, {payload}) => {
        state.detail = payload.data
        state.loading = false;
        state.error = false;
    },
  }
});

export const {fetchStart, fetchFail, getBlogsSuccess, getDetailBlogsSuccess} = blogSlice.actions

export default blogSlice.reducer
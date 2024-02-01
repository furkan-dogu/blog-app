import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  loading: false,
  error: false,
  detail: [],
  categories: [],
  myBlogs: [],
  totalPages: [],
};

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
    getBlogsSuccess: (state, { payload }) => {
      state.blogs = payload.data;
      state.loading = false;
      state.error = false;
      state.totalPages = payload.details
    },
    getDetailBlogsSuccess: (state, { payload }) => {
      state.detail = payload.data;
      state.loading = false;
      state.error = false;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload.data;
      state.loading = false;
      state.error = false;
    },
    getMyBlogsSuccess: (state, { payload }) => {
      state.myBlogs = payload.data;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  getBlogsSuccess,
  getDetailBlogsSuccess,
  getCategoriesSuccess,
  getMyBlogsSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;

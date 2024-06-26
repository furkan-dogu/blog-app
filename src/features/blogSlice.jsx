import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  loading: false,
  error: false,
  detail: [],
  categories: [],
  myBlogs: [],
  totalPages: [],
  blogsAll:[],
  current: ""
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
      state.current = payload.details.pages.current
    },
    getBlogsAllSuccess: (state, { payload }) => {
      state.blogsAll = payload.data;
      state.loading = false;
      state.error = false;
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
  getBlogsAllSuccess
} = blogSlice.actions;

export default blogSlice.reducer;

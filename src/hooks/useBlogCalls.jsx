import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getDetailBlogsSuccess,
  getCategoriesSuccess,
  getMyBlogsSuccess,
  getBlogsAllSuccess
} from "../features/blogSlice";

const useBlogCalls = () => {
  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getBlogs = async (page) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/blogs/?page=${page}&limit=4`);
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getBlogsAll = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/blogs/`);
      dispatch(getBlogsAllSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getDetailBlogs = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs/${id}`);
      dispatch(getDetailBlogsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postComment = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/comments/", info);
      getDetailBlogs(info.blogId);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const deleteComment = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/comments/${info._id}`);
      getDetailBlogs(info.blogId);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const editComment = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/comments/${info._id}`, info);
      toastSuccessNotify("Your comment has been successfully updated")
      getDetailBlogs(info.blogId);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Error updating your comment")
      console.log(error);
    }
  };

  const postLike = async (info, page) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${info._id}/postLike`);
      getBlogs(page); 
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getCategories = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("/categories/");
      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const postBlog = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/blogs/", info);
      toastSuccessNotify("New blog successfully installed")
      getBlogs();
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Failed to load new blog")
      console.log(error);
    }
  };

  const getMyBlogs = async (id) => {
    dispatch(fetchStart());
    try {
      const {data} = await axiosWithToken(`/blogs?author=${id}`);
      dispatch(getMyBlogsSuccess(data))
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const updateMyBlog = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/blogs/${info.id}`, info);
      toastSuccessNotify("Blog update completed successfully")
      getDetailBlogs(info.id)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Failed to update blog")
      console.log(error);
    }
  };

  const deleteMyBlog = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/blogs/${id}`);
      getBlogs()
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return {
    getBlogs,
    getDetailBlogs,
    postComment,
    deleteComment,
    editComment,
    postLike,
    getCategories,
    postBlog,
    getMyBlogs,
    updateMyBlog,
    deleteMyBlog,
    getBlogsAll
  };
};

export default useBlogCalls;

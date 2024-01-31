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
} from "../features/blogSlice";

const useBlogCalls = () => {
  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic("/blogs/");
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("başarısız");
      console.log(error);
    }
  };

  const getDetailBlogs = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs/${id}`);
      dispatch(getDetailBlogsSuccess(data));
      toastSuccessNotify("detail başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("detail başarısız");
      console.log(error);
    }
  };

  const postComment = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/comments/", info);
      getDetailBlogs(info.blogId);
      toastSuccessNotify("post başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("post başarısız");
      console.log(error);
    }
  };

  const deleteComment = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/comments/${info._id}`);
      getDetailBlogs(info.blogId);
      toastSuccessNotify("silme başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("silme başarısız");
      console.log(error);
    }
  };

  const editComment = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/comments/${info._id}`, info);
      getDetailBlogs(info.blogId);
      toastSuccessNotify("edit başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("edit başarısız");
      console.log(error);
    }
  };

  const postLike = async (info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${info._id}/postLike`);
      getBlogs();
      toastSuccessNotify("postlike başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("postlike başarısız");
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
      getBlogs();
      toastSuccessNotify("postblog başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("postblog başarısız");
      console.log(error);
    }
  };

  const getMyBlogs = async (id) => {
    dispatch(fetchStart());
    try {
      const {data} = await axiosWithToken(`/blogs?author=${id}`);
      dispatch(getMyBlogsSuccess(data))
      toastSuccessNotify("myblog başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("myblog başarısız");
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
  };
};

export default useBlogCalls;

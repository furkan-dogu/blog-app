import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getDetailBlogsSuccess,
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
      getDetailBlogs(info.blogId)
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
      getDetailBlogs(info.blogId)
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
      getDetailBlogs(info.blogId)
      toastSuccessNotify("edit başarılı");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("edit başarısız");
      console.log(error);
    }
  };

  return { getBlogs, getDetailBlogs, postComment, deleteComment, editComment };
};

export default useBlogCalls;

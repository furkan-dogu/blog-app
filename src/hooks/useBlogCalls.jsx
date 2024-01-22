import { useDispatch } from 'react-redux';
import useAxios from './useAxios';
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
    fetchFail,
    fetchStart,
    getBlogsSuccess,
    getDetailBlogsSuccess
  } from "../features/blogSlice";

const useBlogCalls = () => {
    const { axiosPublic, axiosWithToken} = useAxios();
    const dispatch = useDispatch();

    const getBlogs = async () => {
        dispatch(fetchStart());
        try {
            const {data} = await axiosPublic("/blogs/")
            dispatch(getBlogsSuccess(data))
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("başarısız")
        }
    }
    const getDetailBlogs = async (id) => {
        dispatch(fetchStart());
        try {
            const {data} = await axiosWithToken(`/blogs/${id}`)
            dispatch(getDetailBlogsSuccess(data))
            toastSuccessNotify("detail başarılı")
        } catch (error) {
            dispatch(fetchFail());
            toastErrorNotify("detail başarısız")
        }
    }
  return {getBlogs,getDetailBlogs}
}

export default useBlogCalls
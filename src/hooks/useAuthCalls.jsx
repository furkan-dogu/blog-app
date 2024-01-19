import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const navigate = useNavigate("/")

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login başaralı")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login başarısız")
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register başaralı")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register başarısız")
      console.log(error);
    }
  };
  return { login, register };
};

export default useAuthCalls;

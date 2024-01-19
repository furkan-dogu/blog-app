import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();
  const navigate = useNavigate("/")

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("The login process is successful.")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("The login process failed")
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("The register process is successful.")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("The register process failed.")
      console.log(error);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get("/auth/logout");
      dispatch(logoutSuccess());
      toastSuccessNotify("The logout process is successful.")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("The logout process failed.")
      console.log(error);
    }
  };
  return { login, register, logout };
};

export default useAuthCalls;

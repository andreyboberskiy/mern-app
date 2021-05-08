import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";

const prefix = "api/auth/";
const authServices = {
  signIn(formData) {
    return BaseAxiosInstance.post(`${prefix}sign-in`, formData);
  },
  signUp(formData) {
    return BaseAxiosInstance.post(`${prefix}sign-up`, formData);
  },
};

export default authServices;

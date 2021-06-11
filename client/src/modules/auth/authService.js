import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";
import { localStorageKeys } from "localStorage/localStorageKeys";
import getterLocalStorage from "localStorage/getterLocalStorage";

const prefix = "api/auth/";

const { setItem, getItem } = getterLocalStorage();

const authService = {
  signIn(formData) {
    return BaseAxiosInstance.post(`${prefix}sign-in`, formData);
  },
  signUp(formData) {
    return BaseAxiosInstance.post(`${prefix}sign-up`, formData);
  },
  getToken() {
    return getItem(localStorageKeys.token);
  },
  setToken(token) {
    setItem(localStorageKeys.token, token);
  },
};

export default authService;

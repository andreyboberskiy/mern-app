import authService from "modules/auth/authService";
import { SET_USER } from "modules/auth/store/constants";
import { toastr } from "react-redux-toastr";
import getterLocalStorage from "localStorage/getterLocalStorage";
import pushSuccess from "libs/toastr/pushSuccess";
import pushError from "libs/toastr/pushError";

export const signIn = (formData) => async (dispatch) => {
  const { setItem } = getterLocalStorage();
  try {
    const { token, user } = await authService.signIn(formData);

    if (token) {
      authService.setToken(token);
    }
    dispatch({ type: SET_USER, payload: user });
  } catch (e) {
    pushError(e.message);
    return e.validationErrors;
  }
};

export const signUp = (formData) => async (dispatch) => {
  try {
    const { message } = await authService.signUp(formData);

    pushSuccess(message);
  } catch (e) {
    console.dir(e.errorMessage);
    pushError(e.errorMessage);
    return { ...e.validationErrors };
  }
};

export const initAuth = () => async (dispatch) => {};

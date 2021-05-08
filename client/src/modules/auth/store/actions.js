import authServices from "modules/auth/authServices";
import { localStorageKeys } from "localStorage/localStorageKeys";
import { SET_USER } from "modules/auth/store/constants";
import useLocalStorage from "localStorage/useLocalStorage";

export const signIn = (formData) => async (dispatch) => {
  const { getItem, setItem } = useLocalStorage();
  try {
    const { token, user } = await authServices.signIn(formData);

    if (token) {
      setItem(localStorageKeys.token, token);
    }
    dispatch({ type: SET_USER, payload: user });
  } catch (e) {
    console.error(e);
  }
};

export const signUp = (formData) => async (dispatch) => {
  try {
    const data = await authServices.signUp(formData);

    if (data.statusCode === 201) {
      console.log("Registered");
    }
  } catch (e) {
    console.error(e);
  }
};

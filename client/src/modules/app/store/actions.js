import useLocalStorage from "localStorage/getterLocalStorage";
import { localStorageKeys } from "localStorage/localStorageKeys";
import { initAuth } from "modules/auth/store/actions";

export const initApp = () => async (dispatch) => {
  const { getItem } = useLocalStorage();

  dispatch(initAuth());
};

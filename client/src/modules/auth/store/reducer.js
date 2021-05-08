import { SET_USER } from "modules/auth/store/constants";

const initialState = {
  user: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER: {
      return { ...state, payload };
    }
    default: {
      return state;
    }
  }
};

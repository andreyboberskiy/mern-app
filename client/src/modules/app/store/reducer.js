import { SET_INITED } from "modules/app/store/constants";

const initialState = {
  inited: false,
};
const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INITED: {
      return { ...state, inited: payload };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;

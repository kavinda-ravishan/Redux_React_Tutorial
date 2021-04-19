import * as actionTypes from "./actionTypes";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return true;
    case actionTypes.SIGN_OUT:
      state = false;
      return false;
    default:
      return state;
  }
};

export default loggedReducer;

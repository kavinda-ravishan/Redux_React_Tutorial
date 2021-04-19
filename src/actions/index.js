import * as actionTypes from "../reducers/actionTypes";

export const increment = (num) => {
  return {
    type: actionTypes.INCREMENT,
    payload: {
      num,
    },
  };
};

export const decrement = (num) => {
  return {
    type: actionTypes.DECREMENT,
    payload: {
      num,
    },
  };
};

export const signIn = () => {
  return {
    type: actionTypes.SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};

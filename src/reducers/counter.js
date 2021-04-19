import * as actionTypes from "./actionTypes";

//REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.payload.num;
    case actionTypes.DECREMENT:
      return state - action.payload.num;
    default:
      return state;
  }
};

export default counterReducer;

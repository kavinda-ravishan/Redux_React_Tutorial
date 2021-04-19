import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducers from "./reducers";

/*
import { createStore } from "redux";

//ACTION TYPES
const VALUE_INCREMENTED = "valueIncremented";
const VALUE_DECREMENTED = "valueDecremented";

//ACTION
const valueIncremented = () => {
  return {
    type: VALUE_INCREMENTED,
  };
};

const valueDecremented = () => {
  return {
    type: VALUE_DECREMENTED,
  };
};

//REDUCER
const reducer = (state = 0, action) => {
  switch (action.type) {
    case VALUE_INCREMENTED:
      return state + 1;
    case VALUE_DECREMENTED:
      return state - 1;
    default:
      return state;
  }
};

//STORE
const store = createStore(reducer);

//Display state
store.subscribe(() => {
  console.log(store.getState());
});

//DISPATCH
store.dispatch(valueIncremented());
store.dispatch(valueIncremented());
store.dispatch(valueIncremented());
store.dispatch(valueDecremented());
*/

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return <h1>Hello</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));

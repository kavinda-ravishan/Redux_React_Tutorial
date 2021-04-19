import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          dispatch(actions.increment(5));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(actions.decrement(2));
        }}
      >
        -
      </button>
      {isLogged === true ? (
        <h3>User logged in</h3>
      ) : (
        <h3>User not logged in</h3>
      )}
      <button
        onClick={() => {
          dispatch(actions.signIn());
        }}
      >
        Sign in
      </button>
      <button
        onClick={() => {
          dispatch(actions.signOut());
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default App;

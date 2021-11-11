import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
const store = createStore(
  allReducers,
  window.REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
// //Store
// //Action
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };
// //Reducer
// const counter =
//   () =>
//   (state = 0, action) => {
//     // eslint-disable-next-line default-case
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//     }
//   };
// let store = createStore(counter);
// //Display it in the console
// store.subcribe(() => console.log(store.getState()));
// //dispatch
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

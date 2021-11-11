//https://www.youtube.com/watch?v=CVpUuw9XSjY&t=1678s&ab_channel=DevEd

const counterReducer = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      //   return state + 1;
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;

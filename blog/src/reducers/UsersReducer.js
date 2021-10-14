export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      [...state, action.type];
    default:
      return state;
  }
};

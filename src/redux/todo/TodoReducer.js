let initialState = [];

const todoReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload.todoData];
    default:
      return state;
  }
};

export default todoReducer;

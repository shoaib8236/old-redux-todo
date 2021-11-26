let initialState = [];

const todoReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload.todoData];
    case "DELETE_TODO":
      return state.filter((v) => v.id != payload.id);
    case "COMPLETE_TODO":
      return state.map((v) => {
        if (v.id === payload.id) {
          return {
            ...v,
            isComplete: true,
          };
        } else {
          return v;
        }
      });
    default:
      return state;
  }
};

export default todoReducer;

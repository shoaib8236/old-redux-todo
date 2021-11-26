let initialState = [];

const todoReducer = (state = initialState, action) => {

  let { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload.todoData];
    case "DELETE_TODO":
      return state.filter(val => val.id != payload.id );
    case "SET_INITIALDATA":
      return payload.data;
    default:
      return state;
  }
};

export default todoReducer;

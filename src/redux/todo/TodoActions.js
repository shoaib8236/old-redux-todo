export let addTodo = (todoData) => ({
  type: "ADD_TODO",
  payload: { todoData },
});

export let deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
}

);



export let setInitialData = (data) => ({
  type: "SET_INITIALDATA",
  payload: { data },
}
);


export let completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: { id },
});

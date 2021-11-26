export let addTodo = (todoData) => ({
  type: "ADD_TODO",
  payload: { todoData },
});

export let deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: { id },
});

export let completeTodo = (id) => ({
  type: "COMPLETE_TODO",
  payload: { id },
});

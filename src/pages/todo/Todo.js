import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/todo/TodoActions";

const Todo = (props) => {
  const { todos, addTodo } = props;
  console.log(todos);
  const [inputValue, setInputValue] = useState("");
  const wrapper = useRef(null);

  let handleSubmit = (e) => {
    if (inputValue.length > 0) {
      e.preventDefault();
      let payload = {
        desc: inputValue,
        isComplete: false,
        id: uuidv4(),
      };
      addTodo(payload);
      wrapper.current.value = null;
      setInputValue("");
    } else {
      alert("please add some text in type box");
    }
  };

  return (
    <div className="todo-body">
      <div className="todo-wrapper">
        <div id="myDIV" className="header">
          <h2 style={{ margin: "5px" }}>My To Do List</h2>
          <form onSubmit={handleSubmit}>
            <input
              ref={wrapper}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              id="myInput"
              placeholder="Title..."
            />
            <button type={"submit"} className="addBtn">
              Add
            </button>
          </form>
        </div>
        <ul id="myUL">
          <li>Hit the gym</li>
          <li className="checked">Pay bills</li>
          {todos.map((res) => {
            return <li key={res.id}>{res.desc}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

let mapState = (state) => ({
  todos: state.todo,
});

let Actions = {
  addTodo,
};

export default connect(mapState, Actions)(Todo);

import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  setInitialData,
  activeTodo,
} from "../../redux/todo/TodoActions";

const Todo = (props) => {
  const {
    todos,
    addTodo,
    deleteTodo,
    completeTodo,
    setInitialData,
    activeTodo,
  } = props;
  console.log(todos);
  const [inputValue, setInputValue] = useState("");
  const wrapper = useRef(null);

  useEffect(() => {
    let data = localStorage.getItem("@data");
    if (data) {
      setInitialData(JSON.parse(data));
    } else {
      localStorage.setItem("@data", JSON.stringify(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@data", JSON.stringify(todos));
  }, [todos]);

  let onFinish = (e) => {
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
          <h2 className="m-4">TODO LIST <i className="fa fa-list-alt "></i></h2>
          <form className="d-flex" onSubmit={onFinish}>
            <input
              className="w-100"
              ref={wrapper}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              id="myInput"
              placeholder="Title..."
            />
            <button style={{ width: 250 }} type={"submit"} className="btn btn-dark fa fa-paper-plane-o text-white" />
          </form>
        </div>
        <ul id="myUL">
          <li>I Am Default Todo List... <i className="fa fa-smile-o"></i> </li>
          {todos.map((res) => {
            return (
              <li
                className={`added-todo ${res.isComplete ? "active checked" : ""
                  }`}
                key={res.id}
              >
                <p
                  className={`${res.isComplete ? "line-through" : ""
                    }`}
                >{res.desc}</p>{" "}
                <div className="btns-group">
                  <button
                    onClick={() => deleteTodo(res.id)}
                    className="btn btn-dark fa fa-trash mx-2"
                  ></button>
                  {(res.isComplete && (
                    <button
                      onClick={() => activeTodo(res.id)}
                      className="btn btn-dark fa fa-undo mx-2"
                    ></button>
                  )) || (
                      <button
                        onClick={() => completeTodo(res.id)}
                        className="btn btn-dark fa fa-check mx-2"
                      ></button>
                    )}
                </div>
              </li>
            );
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
  deleteTodo,
  setInitialData,
  completeTodo,
  activeTodo,
};

export default connect(mapState, Actions)(Todo);

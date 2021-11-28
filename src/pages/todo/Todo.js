import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import BtnGroup from "../../components/btn-group/btn-grooup";
import TodoForm from "../../components/todo-form/todo-form";
import { addTodo, setInitialData } from "../../redux/todo/TodoActions";

const Todo = (props) => {
  const { todos, setInitialData } = props;
  console.log(todos);

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

  let filtered = (e) => {
    let tod = todos.filter((val) => e !== val.desc);
    console.log(tod);
  };

  return (
    <div className="todo-body">
      <div className="todo-wrapper">
        <div id="myDIV" className="header">
          <h2 className="m-4">
            TODO LIST <i className="fa fa-list-alt "></i>
          </h2>
          <TodoForm />
          <input type="text" onChange={(e) => filtered(e)}></input>
        </div>
        <ul id="myUL">
          <li>
            I Am Default Todo List... <i className="fa fa-smile-o"></i>{" "}
          </li>
          {todos.map((res) => {
            return (
              <li
                className={`added-todo ${
                  res.isComplete ? "active checked" : ""
                }`}
                key={res.id}
              >
                <p className={`${res.isComplete ? "line-through" : ""}`}>
                  {res.desc}
                </p>{" "}
                <BtnGroup data={res} />
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
  setInitialData,
};

export default connect(mapState, Actions)(Todo);

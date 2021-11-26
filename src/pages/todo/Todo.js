import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo, setInitialData } from "../../redux/todo/TodoActions";

const Todo = (props) => {
  const { todos, addTodo, deleteTodo, setInitialData } = props;
  console.log(todos);
  const [inputValue, setInputValue] = useState("");
  const wrapper = useRef(null);

  useEffect(()=>{
    let data = localStorage.getItem("@data")
    if(data){
      setInitialData(JSON.parse(data))
    }
    else{
      localStorage.setItem("@data", JSON.stringify(todos))
    }
  },[])

  
  useEffect(()=>{
    localStorage.setItem("@data", JSON.stringify(todos))
  },[todos])

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
          <h2 style={{ margin: "5px" }}>My To Do List</h2>
          <form onSubmit={onFinish}>
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
            return <li className="" key={res.id}> <p>{res.desc}</p> <button className="btn btn-dark ml-auto" onClick={() => deleteTodo(res.id)}>DEL</button></li>;
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
  setInitialData
};

export default connect(mapState, Actions)(Todo);

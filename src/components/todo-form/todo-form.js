import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/todo/TodoActions";
const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const wrapper = useRef(null);

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
    <form className="d-flex" onSubmit={onFinish}>
      <input
        className="w-100"
        ref={wrapper}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        id="myInput"
        placeholder="Title..."
      />
      <button
        style={{ width: 250 }}
        type={"submit"}
        className="btn btn-dark fa fa-paper-plane-o text-white"
      />
    </form>
  );
};

const action = {
  addTodo,
};

export default connect(null, action)(TodoForm);

import React from 'react';
import { connect } from 'react-redux';
import {
    deleteTodo,
    completeTodo,
    activeTodo,
  } from "../../redux/todo/TodoActions";


const BtnGroup = (props) => {

    const {
        data,
        deleteTodo,
        completeTodo,
        activeTodo,
    } = props

  return (
    <div className="btns-group">
      <button
        onClick={() => deleteTodo(data.id)}
        className="btn btn-dark fa fa-trash mx-2"
      ></button>
      {(data.isComplete && (
        <button
          onClick={() => activeTodo(data.id)}
          className="btn btn-dark fa fa-undo mx-2"
        ></button>
      )) || (
        <button
          onClick={() => completeTodo(data.id)}
          className="btn btn-dark fa fa-check mx-2"
        ></button>
      )}
    </div>
  );
};

const action = {
    deleteTodo,
    completeTodo,
    activeTodo,
}

export default connect(null, action)(BtnGroup);

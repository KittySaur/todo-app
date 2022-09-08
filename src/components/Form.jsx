import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/creators/creators";
import Select from "./Select";

function Form() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const inputValueHandler = (event) => {
    setValue(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (value !== "") {
      dispatch(addTodo(value));
    }
    setValue("");
  };

  return (
    <form className="form">
      <input value={value} onChange={inputValueHandler} className="input" />
      <button onClick={submitTodoHandler} className="button submit-button">
        add item
      </button>

      <Select />
    </form>
  );
}

export default Form;

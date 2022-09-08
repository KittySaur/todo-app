import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FILTER_STATUS,
} from "../types/types";

let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
    id: ++nextTodoId,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const filterTodo = (filter) => ({
  type: FILTER_STATUS,
  payload: filter,
});

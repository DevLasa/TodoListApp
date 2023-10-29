import { ADD_TODO, APP_AUTHANTICATE, DELETE_TODO, UPDATE_TODO } from "./Types";
// app authanticate
export const appAuthanticateAction = (payload) => {
  return {
    type: APP_AUTHANTICATE,
    payload,
  };
};

// add todo action
export const addTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
// delete todo action
export const deleteTodoAction = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
// update todo action
export const updateTodoAction = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

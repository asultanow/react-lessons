import {CHANGE_PROPERTY, CREATE_TODO, SELECT_TODO_TO_UPDATE, UPDATE_TODO, DELETE_TODO, DELETE_ALL} from "./ActionTypes";

const changeProperty = property => ({type: CHANGE_PROPERTY, payload: property});

const createTodo = () => ({type: CREATE_TODO});

const selectTodoToUpdate = todo => ({type: SELECT_TODO_TO_UPDATE, payload: todo});

const updateTodo = () => ({type: UPDATE_TODO});

const deleteTodo = todoId => ({type: DELETE_TODO, payload: todoId});

const deleteAll = () => ({type: DELETE_ALL})

export {changeProperty, createTodo, selectTodoToUpdate, updateTodo, deleteTodo, deleteAll};

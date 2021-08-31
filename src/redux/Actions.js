import {CHANGE_PROPERTY, CREATE_TODO, SELECT_TODO_TO_UPDATE, UPDATE_TODO, DELETE_TODO, DELETE_ALL} from "./ActionTypes";

const changeProperty = payload => ({type: CHANGE_PROPERTY, payload});

const createTodo = () => ({type: CREATE_TODO});

const selectTodoToUpdate = payload => ({type: SELECT_TODO_TO_UPDATE, payload});

const updateTodo = () => ({type: UPDATE_TODO});

const deleteTodo = payload => ({type: DELETE_TODO, payload});

const deleteAll = () => ({type: DELETE_ALL})

export {changeProperty, createTodo, selectTodoToUpdate, updateTodo, deleteTodo, deleteAll};

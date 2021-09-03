import {CHANGE_PROPERTY, CREATE_TODO, SELECT_TODO_TO_UPDATE, DELETE_TODO, DELETE_ALL, UPDATE_TODO, CLEAR_FORM} from "./actionTypes";

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const initialTodo = {id: 0, title: '', description: ''};
const initialState = {todos, todo: initialTodo, isTodoSelectedToUpdate: false, isFormEmpty: true};

export const todoReducer = (state = initialState, action) => {

    const {type, payload} = action;
    let {todos, todo, isTodoSelectedToUpdate, isFormEmpty} = state;

    let updatedTodos;

    switch (type) {

        case CHANGE_PROPERTY:
            todo = {...todo, ...payload};

            isFormEmpty = Object.keys(todo).filter(key => key !== 'id').filter(key => todo[key]).length === 0;

            console.log(Object.keys(todo));
            console.log(Object.keys(todo).filter(key => key !== 'id'));
            console.log(Object.keys(todo).filter(key => key !== 'id').filter(key => todo[key]));

            return {...state, todo, isFormEmpty};

        case CREATE_TODO:
            const id = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1;

            updatedTodos = [...todos, {...todo, id}];

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, todo: {...initialTodo}, isFormEmpty: true};

        case SELECT_TODO_TO_UPDATE:
            return {...state, todo: {...payload}, isTodoSelectedToUpdate: true, isFormEmpty: false};

        case UPDATE_TODO:
            updatedTodos = [...todos.map(item => item.id === todo.id ? {...todo} : item)];

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, todo: {...initialTodo}, isTodoSelectedToUpdate: false, isFormEmpty: true};

        case DELETE_TODO:
            updatedTodos = [...todos.filter(item => item.id !== payload)];

            if (todo.id === payload) isTodoSelectedToUpdate = false;

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, isTodoSelectedToUpdate: isTodoSelectedToUpdate};

        case DELETE_ALL:
            localStorage.removeItem('todos');

            return {...state, todos: [], isTodoSelectedToUpdate: false};

        case CLEAR_FORM:
            return {...state, todo: {...initialTodo}, isTodoSelectedToUpdate: false, isFormEmpty: true};

        default:
            return state;
    }
};

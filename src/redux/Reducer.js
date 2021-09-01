import {CHANGE_PROPERTY, CREATE_TODO, SELECT_TODO_TO_UPDATE, DELETE_TODO, DELETE_ALL, UPDATE_TODO} from "./ActionTypes";

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const initialTodo = {id: 0, title: '', description: ''};
const initialState = {todos, todo: initialTodo, isTodoToUpdate: false};

export const reducer = (state = initialState, action) => {

    const {type, payload} = action;
    let {todos, todo, isTodoToUpdate} = state;

    let updatedTodos;

    switch (type) {

        case CHANGE_PROPERTY:
            return {...state, todo: {...todo, ...payload}};

        case CREATE_TODO:
            const id = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1;
            updatedTodos = [...todos, {...todo, id}];

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, todo: {...initialTodo}};

        case SELECT_TODO_TO_UPDATE:
            return {...state, todo: {...payload}, isTodoToUpdate: true};

        case UPDATE_TODO:
            updatedTodos = [...todos.map(item => item.id === todo.id ? {...todo} : item)];

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, todo: {...initialTodo}, isTodoToUpdate: false};

        case DELETE_TODO:
            updatedTodos = [...todos.filter(item => item.id !== payload)];
            isTodoToUpdate = todo.id === payload ? false : isTodoToUpdate;

            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, isTodoToUpdate: isTodoToUpdate};

        case DELETE_ALL:
            localStorage.removeItem('todos');

            return {...state, todos: [], isTodoToUpdate: false};

        default:
            return state;
    }
};

import {CHANGE_PROPERTY, CREATE_TODO, SELECT_TODO_TO_UPDATE, DELETE_TODO, DELETE_ALL, UPDATE_TODO} from "./ActionTypes";

const todos = JSON.parse(localStorage.getItem('todos')) || [];

console.log(todos);

const initialTodo = {id: 0, title: '', description: ''};
const initialState = {todos, todo: initialTodo, isTodoToCreate: true};
export const reducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);

    let updatedTodos;
    switch (action.type) {
        case CHANGE_PROPERTY:
            return {...state, todo: {...state.todo, ...action.payload}};

        case CREATE_TODO:
            const id = state.todos.length !== 0 ? state.todos[state.todos.length - 1].id + 1 : 1;
            updatedTodos = [...state.todos, {...state.todo, id}];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, todo: {...initialTodo}};

        case SELECT_TODO_TO_UPDATE:
            return {...state, todo: {...action.payload}, isTodoToCreate: false};

        case UPDATE_TODO:
            updatedTodos = [...state.todos.map(todo => todo.id === state.todo.id ? {...state.todo} : todo)];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos, todo: {...initialTodo}, isTodoToCreate: true};

        case DELETE_TODO:
            updatedTodos = [...state.todos.filter(todo => todo.id !== action.payload)];
            localStorage.setItem('todos', JSON.stringify(updatedTodos));

            return {...state, todos: updatedTodos};

        case DELETE_ALL:
            localStorage.removeItem('todos');

            return {...state, todos: []};

        default:
            return state;
    }
};

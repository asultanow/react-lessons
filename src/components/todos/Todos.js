import './Todos.css';
import {useSelector} from "react-redux";
import Todo from "../todo/Todo";

export default function Todos() {
    const state = useSelector(state => state);

    const {todos} = state;

    return (
        <div className={'todos'}>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
}

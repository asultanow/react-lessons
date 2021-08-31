import './Todos.css';
import {useSelector} from "react-redux";
import Todo from "../todo/Todo";

export default function Todos() {
    const state = useSelector(state => state);
    const {todos} = state;

    return (
        <div className={'todos'}>
            {
                todos.map(value => <Todo key={value.id} item={value}/>)
            }
        </div>
    );
}

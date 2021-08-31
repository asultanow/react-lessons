import './Todo.css';
import {deleteTodo, selectTodoToUpdate} from "../../redux/Actions";
import {useDispatch} from "react-redux";

export default function Todo({item}) {
    const dispatch = useDispatch();
    const {id, title, description} = item;

    const onSelectTodo = () => dispatch(selectTodoToUpdate(item));

    const onDeleteTodo = () => dispatch(deleteTodo(id));

    return (
        <div className={'todo'}>
            <p>{id}. {title}</p>
            <p>{description}</p>
            <button onClick={onSelectTodo}>Edit</button>
            <button onClick={onDeleteTodo}>Delete</button>
        </div>
    );
}

import './Todo.css';
import {deleteTodo, selectTodoToUpdate} from "../../redux/Actions";
import {useDispatch} from "react-redux";

export default function Todo({todo}) {
    const dispatch = useDispatch();

    const {id, title, description} = todo;

    const onSelectTodo = () => dispatch(selectTodoToUpdate(todo));

    const onDeleteTodo = () => dispatch(deleteTodo(id));

    return (
        <div className={'todo'}>
            <div>
                <p>{id}. {title}</p>
                <p>{description}</p>
            </div>
            <div>
                <button className={'edit-btn'} onClick={onSelectTodo}>Edit</button>
                <button className={'delete-btn'} onClick={onDeleteTodo}>Delete</button>
            </div>
        </div>
    );
}

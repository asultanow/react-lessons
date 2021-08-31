import './Form.css';
import {createRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeProperty, createTodo, updateTodo, deleteAll} from "../../redux/Actions";

export default function Form() {
    const refObject = createRef();
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {todo, isTodoToCreate} = state;

    const onChangeTodo = (ev) => {
        dispatch(changeProperty({ [ev.target.name]: ev.target.value }));
    };

    const onCreateTodo = (ev) => {
        ev.preventDefault();
        console.log('onCreateTodo: state:', state);
        dispatch(createTodo());
    };

    const onUpdateTodo = (ev) => {
        ev.preventDefault();
        console.log('onUpdateTodo: state:', state);
        dispatch(updateTodo());
    };

    const onDeleteAll = () => dispatch(deleteAll());

    console.log(state);

    return (
        <div className={'todo-form'}>
            <form ref={refObject} onSubmit={isTodoToCreate ? onCreateTodo : onUpdateTodo}>
                <div className={'form-wrapper'}>
                    <div>
                        <label>Title:
                            <input type="text" className={'title'} name={'title'}
                                   value={todo.title} onChange={onChangeTodo}/>
                        </label>
                    </div>
                    <div>
                        <label>Description:
                            <input type="text" className={'description'} name={'description'}
                                   value={todo.description} onChange={onChangeTodo}/>
                        </label>
                    </div>
                    <div>
                        <button type={'submit'} className={'submit-btn'}>Save</button>
                        <button type={'button'} className={'delete-all-btn'} onClick={onDeleteAll}>Delete All</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

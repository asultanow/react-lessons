import './Form.css';
import {createRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeProperty, createTodo, updateTodo, deleteAll} from "../../redux/Actions";

export default function Form() {

    const refObject = createRef();
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const {todo, isTodoToUpdate} = state;
    const submitButtonText = isTodoToUpdate ? 'Update' : 'Create';
    const submitButtonBgColor = isTodoToUpdate ? 'bg-yellow' : 'bg-green';

    console.log(isTodoToUpdate);

    const onChangeTodo = ev => dispatch(changeProperty({[ev.target.name]: ev.target.value}));

    const onCreateTodo = ev => {
        ev.preventDefault();
        dispatch(createTodo());
    };

    const onUpdateTodo = ev => {
        ev.preventDefault();
        dispatch(updateTodo());
    };

    const onDeleteAll = () => dispatch(deleteAll());

    return (
        <div className={'todo-form'}>
            <form ref={refObject} onSubmit={isTodoToUpdate ? onUpdateTodo : onCreateTodo}>
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
                        <button type={'submit'} className={`submit-btn ${submitButtonBgColor}`}>{submitButtonText}</button>
                        <button type={'button'} className={'delete-all-btn'} onClick={onDeleteAll}>Delete All</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

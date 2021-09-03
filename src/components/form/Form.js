import "./Form.css";
import {createRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../services/user.api.service";
import {userPropChanged} from "../../redux/actions";

export default function Form() {

    const refObject = createRef();
    const state = useSelector(({userReducer}) => userReducer);
    const dispatch = useDispatch();

    const {users, user} = state;

    const onChangeUserProp = ev => dispatch(userPropChanged({[ev.target.name]: ev.target.value}));

    const onAddUser = ev => {
        ev.preventDefault();
        const userId = users.length + 1;

        dispatch(addUser(user, userId));
    };

    return (
        <div className={'user-form'}>
            <form ref={refObject} onSubmit={onAddUser}>
                <div className={'wrapper'}>
                    <label>Name:
                        <input type="text" name={'name'} value={user.name} onChange={onChangeUserProp}/>
                    </label>
                    <label>Email:
                        <input type="text" name={'email'} value={user.email} onChange={onChangeUserProp}/>
                    </label>
                    <button type={'submit'}>Save</button>
                </div>
            </form>
        </div>
    );
}

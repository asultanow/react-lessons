import "./Users.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../../services/user.api.service";

export default function Users() {

    const state = useSelector(({userReducer}) => userReducer);
    const dispatch = useDispatch();

    const {users} = state;

    console.log(state);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className={'users'}>
            {
                users.map(user => (
                    <div key={user.id} className={'user'}>
                        <h3>{user.id}. {user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
            ))
            }
        </div>
    );
}

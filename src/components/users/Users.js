import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/data.fetch.service";
import {getUsersAxios} from '../../services/data.axios.service';
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [usersAxios, setUsersAxios] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
        getUsersAxios().then(value => setUsersAxios([...value]));
    }, []);

    console.log(usersAxios);

    return (
        <div className={'users'}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}

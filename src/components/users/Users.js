import './Users.css';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import {Route} from "react-router";
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";

export default function Users(props) {
    const {match: {url}} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={'users'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User key={value.id} item={value} {...props}/>)
                }
            </div>
            <Route path={`${url}/:id`} component={UserDetails}/>
        </div>
    );
}

import {userAdded, usersLoaded} from "../redux/actions";

const baseUrl = 'https://jsonplaceholder.typicode.com';

const fetchUsers = () => async dispatch => {
    const users = await (await fetch(`${baseUrl}/users`)).json();

    dispatch(usersLoaded(users));
};

const addUser = (user, userId) => async dispatch => {

    const addedUser = await (await fetch(`${baseUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })).json();

    addedUser.id = userId;
    dispatch(userAdded(addedUser));
};

export {fetchUsers, addUser};

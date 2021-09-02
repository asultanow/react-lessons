import {userAdded, usersLoaded} from "../redux/actions";

const baseUrl = 'https://jsonplaceholder.typicode.com';

const fetchUsers = () => async dispatch => {
    const users = await (await fetch(`${baseUrl}/users`)).json();
    console.log(users);
    dispatch(usersLoaded(users));
};

const addUser = (user, userId) => async dispatch => {
    const response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });

    const addedUser = await response.json();
    addedUser.id = userId;

    console.log(addedUser);

    dispatch(userAdded(addedUser));

};

export {fetchUsers, addUser};

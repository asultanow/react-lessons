import './User.css';
import {useEffect, useState} from "react";
import {getPosts} from "../../services/data.fetch.service";

export default function User({ user, getUser }) {
    const { id, name, username, email } = user;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(user.id).then(value => setPosts([...value]));
    }, []);

    const onGetUser = () => {
        getUser(user);
    };

    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <button onClick={onGetUser}>Posts</button>
        </div>
    );
}

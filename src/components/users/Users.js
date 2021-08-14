import './Users.css';
import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../services/data.fetch.service";
import User from "../user/User";
import Post from "../post/Post";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    const getUser = (user) => {
        setUser({...user});
        getPosts(user.id).then(value => setPosts([...value]));
    };

    return (
        <div className={'wrapper'}>
            <div className={'users'}>
                {
                    users.map(user => <User key={user.id} user={user} getUser={getUser}/>)
                }
            </div>
            <div className={'user-posts'}>
                <h3>
                    {
                        user && (<div>{user.name}'s posts</div>)
                    }
                </h3>
                <div>
                    {
                        posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
            </div>
        </div>
    );
}

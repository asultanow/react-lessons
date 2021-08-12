import './Posts.css';
import {getPosts} from '../../service';
import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts({ userId }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(userId).then(value => setPosts([...value]));
    }, []);

    console.log(posts);

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

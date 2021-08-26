import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

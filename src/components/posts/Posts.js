import './Posts.css';
import {useEffect, useState} from "react";
import {getPosts} from '../../services/data.fetch.service';
import {getPostsAxios} from "../../services/data.axios.service";
import Post from "../post/Post";

export default function Posts({ userId }) {
    const [posts, setPosts] = useState([]);
    const [postsAxios, setPostsAxios] = useState([]);

    useEffect(() => {
        getPosts(userId).then(value => setPosts([...value]));
        getPostsAxios(userId).then(value => setPostsAxios([...value]));
    }, [userId]);

    console.log(postsAxios, userId);

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

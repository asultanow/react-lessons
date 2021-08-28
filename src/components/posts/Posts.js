import './Posts.css';
import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import {Route} from "react-router";
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";

export default function Posts({match: {url}}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'posts'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post key={value.id} item={value} url={url}/>)
                }
            </div>
            <Route path={`${url}/:id`} component={PostDetails}/>
        </div>
    );
}

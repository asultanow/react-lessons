import './Comments.css';
import {useEffect, useState} from "react";
import {getComments} from '../../services/data.fetch.service';
import {getCommentsAxios} from "../../services/data.axios.service";
import Comment from "../comment/Comment";

export default function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [commentsAxios, setCommentsAxios] = useState([]);

    useEffect(() => {
        getComments(postId).then(value => setComments([...value]));
        getCommentsAxios(postId).then(value => setCommentsAxios([...value]));
    }, [postId]);

    console.log(commentsAxios, postId);

    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

import './Comments.css';
import Comment from "../comment/Comment";
import {getComments} from '../../service';
import {useEffect, useState} from "react";

export default function Comments({postId}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(postId).then(value => setComments([...value]));
    }, []);

    console.log(comments);

    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

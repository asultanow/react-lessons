import './Comment.css';

export default function Comment({comment}) {
    const {
        id,
        postId,
        name,
        email,
        body
    } = comment;

    return (
        <div className={'comment'}>
            <h3>{id}.{postId}. {name}</h3>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
}

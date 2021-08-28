import './PostDetails.css';

export default function PostDetails({location: {state: {id, userId, title, body}}}) {
    return (
        <div className={'post-details'}>
            <h2>{id}.{userId}. {title}</h2>
            <p>{body}</p>
        </div>
    );
}

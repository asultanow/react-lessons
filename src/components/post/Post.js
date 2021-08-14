import './Post.css';

export default function Post({ post }) {
    const { id, userId, title, body } = post;

    return (
        <div className={'post'}>
            <h3>{id}.{userId}. {title}</h3>
            <p>{body}</p>
        </div>
    );
}

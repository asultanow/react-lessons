import './User.css';
import Posts from "../posts/Posts";

export default function User({ user }) {
    const { id, name, username, email } = user;

    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <p>@{username}</p>
            <p>{email}</p>
            <Posts userId={id}/>
        </div>
    );
}

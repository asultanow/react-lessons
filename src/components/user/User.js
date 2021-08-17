import './User.css';

export default function User({ user, getUser }) {
    const { id, name, username, email } = user;

    const onGetUser = () => {
        getUser(user);
    };

    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <button onClick={onGetUser}>Posts</button>
        </div>
    );
}

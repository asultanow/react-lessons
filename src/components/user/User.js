export default function User({user}) {
    const {id, name, username, email, phone} = user;

    return (
        <div className={'user'}>
            <h3>{id}. {name}</h3>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}

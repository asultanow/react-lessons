import './User.css';

export default function User({item: {id, name}, history, match: {url}}) {

    const onGetUserDetails = () => history.push(`${url}/${id}`);

    return (
        <div className={'user'}>
            <h3>{id}. {name}</h3>
            <button className={'user-details-btn'} onClick={onGetUserDetails}>Details</button>
        </div>
    );
}

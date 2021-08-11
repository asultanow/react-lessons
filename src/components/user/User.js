import Address from '../address/Address';

export default function User(props) {
    const {
        user: {
            id,
            name,
            username,
            email,
            address,
            phone,
            website,
            company: {
                name: companyName,
                catchPhrase,
                bs
            }
        }
    } = props;

    return (
        <div className={'user'}>
            <div>{id}. {name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <div>{companyName}</div>
            <div>{catchPhrase}</div>
            <div>{bs}</div>
            <Address address={address}/>
        </div>
    );
}

import './User.css';

export default function User({ user }) {
    const {
        id,
        name,
        username,
        email,
        address: {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        },
        phone,
        website,
        company: {
            name: companyName,
            catchPhrase,
            bs
        }
    } = user;

    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <div className={'user_company'}>
                <h3>Company</h3>
                <p>{companyName}</p>
                <p>{catchPhrase}</p>
                <p>{bs}</p>
            </div>
            <div className={'user_address'}>
                <h3>Address</h3>
                <p>{street}</p>
                <p>{suite}</p>
                <p>{city}</p>
                <p>{zipcode}</p>
                <div className={'user_address_geo'}>
                    <h4>Geo</h4>
                    <p>{lat}</p>
                    <p>{lng}</p>
                </div>
            </div>
        </div>
    );
}

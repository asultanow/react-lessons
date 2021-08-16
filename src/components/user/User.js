import './User.css';
import Address from '../address/Address';

export default function User({ user }) {
    const {
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
    } = user;

    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <p>
                {username}<br/>
                {email}<br/>
                {phone}<br/>
                {website}
            </p>
            <div className={'user_company'}>
                <h3>Company</h3>
                <p>
                    {companyName}<br/>
                    {catchPhrase}<br/>
                    {bs}
                </p>
            </div>
            <Address address={address}/>
        </div>
    );
}

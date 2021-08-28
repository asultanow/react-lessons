import './UserDetails.css';
import {useEffect, useState} from "react";
import {getUserById} from "../../services/api.service";

export default function UserDetails({match: {params: {id}}}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserById(id).then(value => setUser({...value}));
    }, [id]);

    return user && (
        <div className={'user-details'}>
            <h2>{user.id}. {user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <div className={'user_address'}>
                <h3>Address</h3>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <div className={'user_address_geo'}>
                    <h3>Geo</h3>
                    <p>{user.address.geo.lat}</p>
                    <p>{user.address.geo.lng}</p>
                </div>
            </div>
            <div className={'user_company'}>
                <h3>Company</h3>
                <p>{user.company.name}</p>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
    );
}

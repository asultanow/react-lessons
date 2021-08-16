import './Address.css';
import Geo from '../geo/Geo';

export default function Address({ address }) {
    const {
        street,
        suite,
        city,
        zipcode,
        geo
    } = address;

    return (
        <div className={'user_address'}>
            <h3>Address</h3>
            <p>
                {street}<br/>
                {suite}<br/>
                {city}<br/>
                {zipcode}
            </p>
            <Geo geo={geo}/>
        </div>
    );
}

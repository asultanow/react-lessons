import './Geo.css';

export default function Geo({ geo }) {
    const { lat, lng } = geo;

    return (
        <div className={'user_address_geo'}>
            <h3>Geo</h3>
            <p>
                {lat}<br/>
                {lng}
            </p>
        </div>
    );
}

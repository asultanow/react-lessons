import Geo from '../geo/Geo';

export default function Address(props) {
    const {
        address: {
            street,
            suite,
            city,
            zipcode,
            geo
        }
    } = props;

    return (
        <div className={'user_address'}>
            <div>{street}</div>
            <div>{suite}</div>
            <div>{city}</div>
            <div>{zipcode}</div>
            <Geo geo={geo}/>
        </div>
    );
}

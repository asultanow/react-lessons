export default function Geo(props) {
    const { lat, lng } = props;

    return (
        <div className={'user_address_geo'}>
            <div>{lat}</div>
            <div>{lng}</div>
        </div>
    );
}

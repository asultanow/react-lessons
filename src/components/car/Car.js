import './Car.css';

export default function Car({car}) {
    const {id, model, price, year} = car;

    return (
        <div className={'car'}>
            <ul>
                <li>id: {id}</li>
                <li>model: {model}</li>
                <li>price: {price}</li>
                <li>year: {year}</li>
            </ul>
        </div>
    );
}

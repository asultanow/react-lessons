import './Car.css';

export default function Car({car: {id, model, price, year}}) {

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

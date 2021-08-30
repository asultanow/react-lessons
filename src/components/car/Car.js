import './Car.css';

export default function Car({car: {id, model, price, year}}) {

    return (
        <div className={'car'}>
            <ul>
                <li>Id: {id}</li>
                <li>Model: {model}</li>
                <li>Price: {price}</li>
                <li>Year: {year}</li>
            </ul>
        </div>
    );
}

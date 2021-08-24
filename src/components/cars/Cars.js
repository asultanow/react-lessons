import './Cars.css';
import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => {
            console.log(value);
            setCars([...value]);
            console.log(cars);
        });
    }, []);

    cars.sort((a, b) => b.id - a.id);
    console.log('cars: ', cars);

    return (
        <div className={'cars'}>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

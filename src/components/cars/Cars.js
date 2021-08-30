import './Cars.css';
import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars({liftData}) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);

    const getUpdatedCars = () => {
        getCars().then(value => {
            console.log(value);
            setCars([...value]);
        });
    };

    useEffect(() => {
        liftData(getUpdatedCars);
    }, []);

    return (
        <div className={'cars'}>
            {
                cars.sort((a, b) => b.id - a.id).map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

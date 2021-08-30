import './Form.css';
import {useState, createRef} from "react";
import {createCar} from "../../services/car.service";


export default function Form({getUpdatedCars}) {
    const refObject = createRef();
    const initCar = {model: '', price: '', year: ''};
    const [car, setCar] = useState(initCar);
    const [modelWarning, setModelWarning] = useState('');
    const [priceWarning, setPriceWarning] = useState('');
    const [yearWarning, setYearWarning] = useState('');

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        const carIsValid = validateCar();

        if (carIsValid) {
            createCar(car).then(value => {
                console.log(value);

                if (value.id) {
                    getUpdatedCars();
                }
            });

            setCar(initCar);
        }
    };

    const onChangeTextInputValue = (ev) => {
        setCar({...car, [ev.target.name]: ev.target.value});
    };

    const onChangeNumberInputValue = (ev) => {
        let value = ev.target.value;

        if (value !== '') {
            value = +value;
        }

        setCar({...car, [ev.target.name]: value});
    };

    const validateCar = () => {
        const {model, price, year} = car;

        setModelWarning('');
        setPriceWarning('');
        setYearWarning('');

        const modelIsValid = /^[a-zA-Z]{1,20}$/.test(model);

        if (model === '') {
            setModelWarning('This field is required');
        } else if (!modelIsValid) {
            setModelWarning('Model must contain from 1 to 20 alphabetic characters');
        }

        const priceIsValid = price >= 0;

        if (price === '') {
            setPriceWarning('This field is required');
        } else if (!priceIsValid) {
            setPriceWarning('Price cannot be less than 0');
        }

        const currentYear = new Date().getFullYear();
        const yearIsValid = year >= 1990 && year <= currentYear;

        if (year === '') {
            setYearWarning('This field is required');
        } else if (!yearIsValid) {
            setYearWarning('Year cannot be less than 1990 or greater than current year');
        }

        return (
            model !== '' && modelIsValid &&
            price !== '' && priceIsValid &&
            year !== '' && yearIsValid
        );
    }

    return (
        <form onSubmit={onSubmitForm} ref={refObject}>
            <div className={'wrapper'}>
                <div className={'label-box'}>
                    <label htmlFor={'model'}>Model:</label>
                </div>
                <div className={'input-box'}>
                    <input type={'text'} id={'model'} name={'model'} value={car.model}
                           onChange={onChangeTextInputValue}/>
                    {modelWarning && <p className={'warning'}>{modelWarning}</p>}
                </div>
                <div className={'label-box'}>
                    <label htmlFor={'price'}>Price:</label>
                </div>
                <div className={'input-box'}>
                    <input type={'number'} id={'price'} name={'price'} value={car.price}
                           onChange={onChangeNumberInputValue}/>
                    {priceWarning && <p className={'warning'}>{priceWarning}</p>}
                </div>
                <div className={'label-box'}>
                    <label htmlFor={'year'}>Year:</label>
                </div>
                <div className={'input-box'}>
                    <input type={'number'} id={'year'} name={'year'} value={car.year}
                           onChange={onChangeNumberInputValue}/>
                    {yearWarning && <p className={'warning'}>{yearWarning}</p>}
                </div>
                <div className={'submit-input-box'}>
                    <input className={'submit-btn'} type={'submit'} value={'Save Car'}/>
                </div>
            </div>
        </form>
    );
}

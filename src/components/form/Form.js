import './Form.css';
import {useState, createRef} from "react";
import {createCar} from "../../services/car.service";

export default function Form() {
    const [car, setCar] = useState({model: '', price: '', year: ''});
    const [btnIsDisabled, setBtnIsDisabled] = useState(true);
    const refObject = createRef();

    console.log(car);

    const [modelWarning, setModelWarning] = useState('');
    const [priceWarning, setPriceWarning] = useState('');
    const [yearWarning, setYearWarning] = useState('');

    function validateCar() {
        const {model, price, year} = car;

        console.log(model);
        console.log(price);
        console.log(year);

        setModelWarning('');
        setPriceWarning('');
        setYearWarning('');

        const modelIsValid = /^[a-zA-Z]{1,20}$/.test(model);

        if (model === '') {
            setModelWarning('this field is required');
        } else if (!modelIsValid) {
            setModelWarning('incorrect model');
        }

        const priceIsValid = price >= 0;

        if (price === '') {
            setPriceWarning('this field is required');
        } else if (!priceIsValid) {
            setPriceWarning('incorrect price');
        }

        const yearIsValid = year >= 1990 && year <= 2021;

        if (year === '') {
            setYearWarning('this field is required');
        } else if (!yearIsValid) {
            setYearWarning('incorrect year');
        }
    }

    const onChangeTextInputValue = (ev) => {
        setCar({...car, [ev.target.name]: ev.target.value});

        console.log(car);
    };

    const onChangeNumberInputValue = (ev) => {
        let value = ev.target.value;

        if (value !== '') {
            value = +value;
        }

        setCar({...car, [ev.target.name]: value});

        console.log(car);
    };

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        validateCar();

        console.log(car);

        // createCar(car).then(value => {
        //     console.log(value);
        // });
    };

    return (
        <form onSubmit={onSubmitForm} ref={refObject}>
            <div className={'wrapper'}>
                <div className={'label'}>
                    <label htmlFor={'model'}>Model:</label>
                </div>
                <div className={'input-box'}>
                    <div className={'input'}>
                        <input type={'text'} id={'model'} name={'model'} value={car.model}
                               onChange={onChangeTextInputValue} onBlur={null}/>
                    </div>
                    <div className={'warning'}>
                        {modelWarning}
                    </div>
                </div>
                <div className={'label'}>
                    <label htmlFor={'price'}>Price:</label>
                </div>
                <div className={'input-box'}>
                    <div className={'input'}>
                        <input type={'number'} id={'price'} name={'price'} value={car.price}
                               onChange={onChangeNumberInputValue} onBlur={null}/>
                    </div>
                    <div className={'warning'}>
                        {priceWarning}
                    </div>
                </div>
                <div className={'label'}>
                    <label htmlFor={'year'}>Year:</label>
                </div>
                <div className={'input-box'}>
                    <div className={'input'}>
                        <input type={'number'} id={'year'} name={'year'} value={car.year}
                               onChange={onChangeNumberInputValue} onBlur={null}/>
                    </div>
                    <div className={'warning'}>
                        {yearWarning}
                    </div>
                </div>
                <div className={'save-btn-box'}>
                    <input type={'submit'} value={'Save'} disabled={false}/>
                </div>
            </div>
        </form>
    );
}

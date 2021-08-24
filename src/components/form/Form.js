import './Form.css';
import {useState, createRef} from "react";
import {createCar} from "../../services/car.service";

export default function Form() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const [isDisabled, setIsDisabled] = useState(true);
    const refObject = createRef();

    const onChangeTextInputValue = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value});
        console.log(formState);
    };

    const onChangeNumberInputValue = (ev) => {
        let value = ev.target.value;

        if (value !== '') {
            value = +ev.target.value;
        }

        setFormState({...formState, [ev.target.name]: value});
        console.log(formState);
    };

    const onSubmitForm = (ev) => {
        ev.preventDefault();
        console.log(formState);
        createCar(formState).then(value => {
            console.log(value);
            console.log(value.id);
        });
    };

    const validateModel = (ev) => {
        const model = ev.target.value;
        const isValid = /^[A-Za-z]{1,20}$/.test(model);

        if (!isValid) {
            setFormState({...formState, model: 'invalid value'});
            return;
        }

        validateAllFieldsAreFilled();
    };

    const validatePrice = (ev) => {
        const price = +ev.target.value;
        console.log(typeof price);
        console.log(isNaN(price));
        console.log(+'');

        if (price < 0) {
            setFormState({...formState, price: 'invalid value'});
            return;
        }

        validateAllFieldsAreFilled();
    };

    const validateYear = (ev) => {
        const year = +ev.target.value;

        if (year < 1990 || year > 2021) {
            setFormState({...formState, year: 'invalid value'});
            return;
        }

        validateAllFieldsAreFilled();
    };

    const validateAllFieldsAreFilled = () => {
        let isValid = true;

        for (const key in formState) {
            if (formState[key] === '') {
                isValid = false;
            }
        }

        if (isValid) {
            setIsDisabled(false);
            console.log(formState);
        }
    };

    return (
        <form onSubmit={onSubmitForm} ref={refObject}>
            <label>model:
                <input type={'text'} name={'model'} value={formState.model} onChange={onChangeTextInputValue}
                       onBlur={validateModel}/>
            </label>
            <label>price:
                <input type={'number'} name={'price'} value={formState.price} onChange={onChangeNumberInputValue}
                       onBlur={validatePrice}/>
            </label>
            <label>year:
                <input type={'number'} name={'year'} value={formState.year} onChange={onChangeNumberInputValue}
                       onBlur={validateYear}/>
            </label>
            <input type={'submit'} disabled={isDisabled}/>
        </form>
    );
}

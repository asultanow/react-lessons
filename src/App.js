import './App.css';
import Form from "./components/form/Form";
import Cars from "./components/cars/Cars";
import {useState} from "react";

export default function App() {
    const [data, setData] = useState(() => () => {});

    const liftData = (value) => {
        setData(() => value);
    };

    return (
        <div className="App">
            <Form getUpdatedCars={data}/>
            <Cars liftData={liftData}/>
        </div>
    );
}

import './App.css';
import {useReducer} from "react";
import {reducer} from "./reducers/reducer";

export default function App() {
    const [{a, b}, dispatch] = useReducer(reducer, {a: 0, b: 0});

    return (
        <div className="App">
            <h2>a: {a}</h2>
            <button onClick={() => dispatch('INC_A')}>Increase by 10</button>
            <button onClick={() => dispatch('DEC_A')}>Decrease by 2</button>
            <h2>b: {b}</h2>
            <button onClick={() => dispatch('INC_B')}>Increase by 10</button>
            <button onClick={() => dispatch('DEC_B')}>Decrease by 2</button>
        </div>
    );
}

import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";

export default function App() {
    return (
        <Router>
            <div className="App">
                <div id={'header'} className={'header'}>
                    <h1>React Homework 6</h1>
                </div>
                <div className={'wrapper'}>
                    <Menu/>
                    <Content/>
                </div>
            </div>
        </Router>
    );
}

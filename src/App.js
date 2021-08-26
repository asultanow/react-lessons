import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Menu/>
                <Content/>
            </div>
        </Router>
    );
}

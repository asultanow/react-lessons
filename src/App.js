import './App.css';
import Todos from "./components/todos/Todos";
import Form from "./components/form/Form";

export default function App() {
    return (
        <div className="App">
            <Form/>
            <Todos/>
        </div>
    );
}

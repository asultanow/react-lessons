import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <div className="App">
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}

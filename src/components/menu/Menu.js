import './Menu.css';
import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <div className={'menu'}>
            <div>
                <Link to={'/users'}>Users</Link>
            </div>
            <div>
                <Link to={'/posts'}>Posts</Link>
            </div>
            <div>
                <Link to={'/comments'}>Comments</Link>
            </div>
        </div>
    );
}

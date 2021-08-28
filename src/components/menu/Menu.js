import './Menu.css';
import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <div className={'menu'}>
            <Link className={'users-link menu_item'} to={'/users'}>Users</Link>
            <Link className={'posts-link menu_item'} to={'/posts'}>Posts</Link>
        </div>
    );
}

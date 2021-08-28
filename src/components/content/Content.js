import {Route} from "react-router";
import Users from "../users/Users";
import Posts from "../posts/Posts";

export default function Content() {
    return (
        <div className={'content'}>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
        </div>
    );
}

import {Route} from "react-router-dom";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function Content() {
    return (
        <div className={'content'}>
            <Route path={'/users'}>
                <Users/>
            </Route>
            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/comments'} component={Comments}/>
        </div>
    );
}

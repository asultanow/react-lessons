import './Post.css';
import {HashLink as Link} from "react-router-hash-link";

export default function Post({item, item: {id, title}, url}) {
    return (
        <div className={'post'}>
            <h3>{id}. {title}</h3>
            <Link className={'post-details-link'} to={{
                pathname: `${url}/${id}`,
                hash: '#header',
                state: item
            }}>Details</Link>
        </div>
    );
}

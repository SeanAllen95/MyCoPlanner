import { Link } from 'react-router-dom';
import MyCollection from '../components/MyCollection';

const MyCollectionContainer = () => {


    return(
        <>
        <MyCollection/>
        <p> Go to <Link to="/MyCollection/TDD">TDD Page</Link></p>        </>
    )
}

export default MyCollectionContainer;
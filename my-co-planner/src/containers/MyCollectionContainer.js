import { Link } from 'react-router-dom';
import MyCollection from '../components/MyCollection';

const MyCollectionContainer = () => {


    return(
        <>
        <MyCollection/>
        <p> Go to <Link to="/MyCollection/TDDInformation">TDD Page</Link></p>
        <p> Go to <Link to="/MyCollection/ProjectInformation">Project Information Page</Link></p>
        </>
    )
}

export default MyCollectionContainer;
import { Link } from 'react-router-dom';
import MyCollection from '../components/MyCollection';

const MyCollectionContainer = () => {


    return(
        <>
        <MyCollection/>
        <p> Go to <Link to="/MyCollection/TDDInformation">TDD Page</Link></p>
        <p> Go to <Link to="/MyCollection/ProjectInformation">Project Information Page</Link></p>
        <p> Go to <Link to="/MyCollection/Diagrams">Project Diagrams Page</Link></p>
        <p> Go to <Link to="/MyCollection/PotentialChallenges">Potential Challenges Page</Link></p>
        <p> Go to <Link to="/MyCollection/ToolsAndLanguages">Tools and Languages Page</Link></p>
        <p> Go to <Link to="/MyCollection/SchedulePage">Schedule Page</Link></p>
        <p> Go to <Link to="/MyCollection/FolderStructure">Folder and File Structure Page</Link></p>
        </>
    )
}

export default MyCollectionContainer;
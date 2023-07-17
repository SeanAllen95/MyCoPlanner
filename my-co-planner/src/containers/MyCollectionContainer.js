import { Link } from 'react-router-dom';
import MyCollection from '../components/MyCollection';

const MyCollectionContainer = () => {


    return(
        <>
        <MyCollection/>
        <div className='mushroom-container'>
        <p className='mushroom-item'><Link to="/MyCollection/TDDInformation">TDD Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/ProjectInformation">Project Information Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/Diagrams">Project Diagrams Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/PotentialChallenges">Potential Challenges Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/ToolsAndLanguages">Tools and Languages Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/ScheduleInformation">Schedule Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/FolderAndFileStructure">Folder and File Structure Page</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/ExtensionInformation">Extension Page</Link></p>
        </div>
        </>
    )
}

export default MyCollectionContainer;
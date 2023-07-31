import { Link, useLocation } from 'react-router-dom';
import MyCollection from '../components/MyCollection';

const MyCollectionContainer = () => {


    return(
        <>
        <MyCollection/>
        <div className='mushroom-container'>
        <p className='mushroom-item'><Link to="/MyCollection/ProjectInformation"><img width='300px' height='300px' src='/Mushroom1.png'></img>Project Information</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/TDDInformation"><img width='300px' height='300px' src='/Mushroom2.png'></img>TDD</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/PotentialChallenges"><img width='300px' height='300px' src='/Mushroom3.png'></img>Potential Challenges</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/TechStack"><img width='300px' height='300px' src='/Mushroom8.png'></img>Tech Stack</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/ScheduleInformation"><img width='300px' height='300px' src='/Mushroom5.png'></img>Schedule</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/FolderAndFileStructure"><img width='300px' height='300px' src='/Mushroom6.png'></img>Folder and File Structure</Link></p>
        <p className='mushroom-item'><Link to="/MyCollection/ExtensionInformation"><img width='300px' height='300px' src='/Mushroom7.png'></img>Extension</Link></p>
        {/* <p className='mushroom-item'><Link to="/MyCollection/HiddenMushroom"></Link></p> */}
        <p className='mushroom-item'><Link to="/MyCollection/Ideas"><img width='300px' height='300px' src='/Mushroom9.png'></img>Ideas</Link></p>
        </div>
        </>
    )
}

export default MyCollectionContainer;
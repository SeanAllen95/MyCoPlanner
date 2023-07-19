import { Link } from "react-router-dom";

const PotentialChallengesInformation = ({potentialChallengesInformation, allTDDInformation}) => {



    return (
        <>
        <h2>Potential Challenges</h2>
        <ul className="grid-for-information">

        {potentialChallengesInformation}
        </ul>
    
        </>
    )


}

export default PotentialChallengesInformation;
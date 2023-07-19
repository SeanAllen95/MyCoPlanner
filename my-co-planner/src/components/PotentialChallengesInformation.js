import { Link } from "react-router-dom";

const PotentialChallengesInformation = ({potentialChallengesInformation, allTDDInformation}) => {



    return (
        <>
        <h1>Potential Challenges</h1>
        <ul className="grid-for-information">

        {potentialChallengesInformation}
        </ul>
    
        </>
    )


}

export default PotentialChallengesInformation;